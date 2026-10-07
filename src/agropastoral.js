import Chart from 'chart.js/auto';
import L from 'leaflet';
import { 
  AGRO_INDICATORS, 
  getUnifiedAgroCommunes, 
  getUnifiedAgroDairas 
} from './data/agropastoralData';
import { communeData } from './data/communeData';

// Normalized string helper for fuzzy matching commune/daïra names
const norm = (s) => (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '');

// ─────────────────────────────────────────────────────────────────────────────
// MODULE STATE
// ─────────────────────────────────────────────────────────────────────────────
let activeScale = 'commune'; // 'commune' | 'daira'
let activeCategory = 'foncier'; // 'foncier' | 'cheptel' | 'prod_animale' | 'prod_vegetale'
let activeIndicatorId = 'sau';
let activeSelectedId = null; // selected commune or daira name for map highlight

let agroMapInstance = null;
let communePolygonsLayer = null;
let wilayaBoundaryLayer = null;

let geojsonPolygonsData = null;
let geojsonWilayaData = null;

let topBarChartInstance = null;
let pieChartInstance = null;

// Map of geoName -> L.geoJSON layer reference for selection highlighting
let featureLayerMap = {};

// Palette definitions by category
const COLOR_PALETTES = {
  foncier:      ['#f0fdf4', '#bbf7d0', '#4ade80', '#16a34a', '#14532d'],
  cheptel:      ['#fffbeb', '#fde68a', '#f59e0b', '#d97706', '#78350f'],
  prod_animale: ['#f0f9ff', '#bae6fd', '#38bdf8', '#0284c7', '#0c4a6e'],
  prod_vegetale:['#ecfdf5', '#99f6e4', '#2dd4bf', '#0d9488', '#115e59']
};

// ─────────────────────────────────────────────────────────────────────────────
// HTML TEMPLATE
// ─────────────────────────────────────────────────────────────────────────────
export const renderAgropastoralSection = (t) => {
  return `
    <section id="agropastoral" style="background: #f8fafc; padding: 80px 0; border-top: 1px solid #e2e8f0; font-family: 'Inter', sans-serif;">
      <div class="container" style="max-width: 1280px; margin: 0 auto; padding: 0 20px;">
        
        <!-- Header Section -->
        <div style="text-align: center; margin-bottom: 35px;">
          <div style="display: inline-flex; align-items: center; gap: 8px; background: #e0f2fe; color: #0284c7; padding: 6px 16px; border-radius: 20px; font-weight: 700; font-size: 0.85rem; margin-bottom: 12px;">
            <i class="fas fa-tractor"></i> Colloque National &amp; Observatoire Territorial DSA 2014/2015
          </div>
          <h2 class="section-title" style="font-size: 2.2rem; color: #0f172a; margin: 0 0 10px; font-weight: 800;">
            Économie Agropastorale &amp; Rurale — Wilaya de Béjaïa
          </h2>
          <p class="section-subtitle" style="font-size: 1rem; color: #64748b; max-width: 800px; margin: 0 auto;">
            Analyse cartographique multidimensionnelle des ressources foncières, de l'élevage et de la production agricole par commune et daïra.
          </p>
        </div>

        <!-- Controls Bar -->
        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 16px; padding: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.04); margin-bottom: 30px;">
          <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 20px;">
            
            <!-- Scale Selector -->
            <div>
              <label style="display: block; font-size: 0.75rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">
                <i class="fas fa-layer-group"></i> Échelle d'Analyse :
              </label>
              <div style="display: inline-flex; background: #f1f5f9; padding: 4px; border-radius: 10px; border: 1px solid #e2e8f0;">
                <button id="btn-scale-commune" class="scale-btn active" style="padding: 8px 18px; border-radius: 8px; font-size: 0.85rem; font-weight: 700; border: none; cursor: pointer; transition: all 0.2s;">
                  <i class="fas fa-city"></i> Par Communes (52)
                </button>
                <button id="btn-scale-daira" class="scale-btn" style="padding: 8px 18px; border-radius: 8px; font-size: 0.85rem; font-weight: 700; border: none; cursor: pointer; transition: all 0.2s;">
                  <i class="fas fa-map-marked"></i> Par Daïras (19)
                </button>
              </div>
            </div>

            <!-- Category Tabs -->
            <div style="flex: 1; min-width: 300px;">
              <label style="display: block; font-size: 0.75rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">
                <i class="fas fa-th-list"></i> Domaine Agropastoral :
              </label>
              <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <button class="cat-tab active" data-cat="foncier" style="padding: 8px 14px; border-radius: 8px; font-size: 0.82rem; font-weight: 600; border: 1px solid #cbd5e1; background: #fff; cursor: pointer;">
                  <i class="fas fa-vector-square" style="color: #16a34a;"></i> Foncier &amp; SAU
                </button>
                <button class="cat-tab" data-cat="cheptel" style="padding: 8px 14px; border-radius: 8px; font-size: 0.82rem; font-weight: 600; border: 1px solid #cbd5e1; background: #fff; cursor: pointer;">
                  <i class="fas fa-hippo" style="color: #d97706;"></i> Cheptels &amp; Élevage
                </button>
                <button class="cat-tab" data-cat="prod_animale" style="padding: 8px 14px; border-radius: 8px; font-size: 0.82rem; font-weight: 600; border: 1px solid #cbd5e1; background: #fff; cursor: pointer;">
                  <i class="fas fa-glass-whiskey" style="color: #0284c7;"></i> Prod. Animales
                </button>
                <button class="cat-tab" data-cat="prod_vegetale" style="padding: 8px 14px; border-radius: 8px; font-size: 0.82rem; font-weight: 600; border: 1px solid #cbd5e1; background: #fff; cursor: pointer;">
                  <i class="fas fa-seedling" style="color: #0d9488;"></i> Prod. Végétales
                </button>
              </div>
            </div>

            <!-- Indicator Selector -->
            <div style="min-width: 240px;">
              <label style="display: block; font-size: 0.75rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">
                <i class="fas fa-chart-line"></i> Indicateur Cartographié :
              </label>
              <select id="select-indicator" style="width: 100%; padding: 9px 14px; border-radius: 8px; border: 1px solid #cbd5e1; background: #fff; font-size: 0.88rem; font-weight: 600; color: #0f172a; outline: none; cursor: pointer;">
              </select>
            </div>

          </div>
        </div>

        <!-- KPIs Grid -->
        <div id="agro-kpis-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 30px;">
        </div>

        <!-- Main Workspace (Map + Charts) -->
        <div style="display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 24px; margin-bottom: 40px;">
          
          <!-- Map Panel -->
          <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 16px; padding: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.03); display: flex; flex-direction: column; min-height: 580px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; flex-shrink: 0;">
              <h4 id="map-panel-title" style="margin: 0; font-size: 1.05rem; font-weight: 700; color: #0f172a;">
                <i class="fas fa-map-marked-alt" style="color: #0284c7; margin-right: 6px;"></i> Cartographie Spatiale — Wilaya de Béjaïa
              </h4>
              <span id="map-scale-badge" style="font-size: 0.75rem; background: #f1f5f9; padding: 4px 10px; border-radius: 6px; font-weight: 700; color: #475569;">Échelle : Communes</span>
            </div>
            
            <!-- Agro Map container: explicit height so Leaflet can measure it -->
            <div id="agro-map" style="flex: 1; min-height: 480px; width: 100%; border-radius: 12px; border: 1px solid #e2e8f0; position: relative; overflow: hidden;"></div>
            
            <div id="agro-map-legend" style="flex-shrink: 0; margin-top: 14px; background: #f8fafc; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 0.8rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
            </div>
          </div>

          <!-- Charts Panel -->
          <div style="display: flex; flex-direction: column; gap: 24px;">
            
            <!-- Top 10 Bar Chart -->
            <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 16px; padding: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.03); flex: 1; display: flex; flex-direction: column;">
              <h4 id="bar-chart-title" style="margin: 0 0 14px; font-size: 1rem; font-weight: 700; color: #0f172a;">
                <i class="fas fa-chart-bar" style="color: #16a34a; margin-right: 6px;"></i> Classement des Territoires Leaders
              </h4>
              <div style="position: relative; flex: 1; min-height: 220px;">
                <canvas id="agroBarChart"></canvas>
              </div>
            </div>

            <!-- Structure Breakdown Chart -->
            <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 16px; padding: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.03); flex: 1; display: flex; flex-direction: column;">
              <h4 id="pie-chart-title" style="margin: 0 0 14px; font-size: 1rem; font-weight: 700; color: #0f172a;">
                <i class="fas fa-chart-pie" style="color: #d97706; margin-right: 6px;"></i> Répartition &amp; Structure Globale
              </h4>
              <div style="position: relative; flex: 1; min-height: 220px;">
                <canvas id="agroPieChart"></canvas>
              </div>
            </div>

          </div>
        </div>

        <!-- Full Interactive Datatable -->
        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 16px; padding: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
          <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 15px; margin-bottom: 20px;">
            <div>
              <h3 style="margin: 0 0 4px; font-size: 1.15rem; font-weight: 800; color: #0f172a;">
                <i class="fas fa-table" style="color: #0284c7; margin-right: 8px;"></i> Tableau Récapitulatif Agropastoral
              </h3>
              <p style="margin: 0; font-size: 0.85rem; color: #64748b;">Consultez et recherchez parmi l'ensemble des indicateurs par commune ou daïra.</p>
            </div>
            
            <div style="position: relative; min-width: 260px;">
              <i class="fas fa-search" style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #94a3b8; font-size: 0.85rem;"></i>
              <input id="agro-table-search" type="text" placeholder="Rechercher une commune ou daïra..." style="width: 100%; padding: 8px 12px 8px 34px; border-radius: 8px; border: 1px solid #cbd5e1; font-size: 0.85rem; outline: none;">
            </div>
          </div>

          <div style="overflow-x: auto; max-height: 480px; overflow-y: auto; border: 1px solid #e2e8f0; border-radius: 10px;">
            <table id="agro-datatable" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.85rem;">
              <thead style="background: #f1f5f9; position: sticky; top: 0; z-index: 2; color: #334155; font-weight: 700;">
              </thead>
              <tbody style="color: #334155;">
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  `;
};

// ─────────────────────────────────────────────────────────────────────────────
// INITIALIZATION
// ─────────────────────────────────────────────────────────────────────────────

export const initAgropastoral = () => {

  // ── UI helpers ─────────────────────────────────────────────────────────────
  const updateScaleButtons = () => {
    const btnCommune = document.getElementById('btn-scale-commune');
    const btnDaira   = document.getElementById('btn-scale-daira');
    if (!btnCommune || !btnDaira) return;
    if (activeScale === 'commune') {
      btnCommune.style.background = '#0284c7'; btnCommune.style.color = '#ffffff';
      btnDaira.style.background   = 'transparent'; btnDaira.style.color = '#64748b';
    } else {
      btnDaira.style.background   = '#0284c7'; btnDaira.style.color = '#ffffff';
      btnCommune.style.background = 'transparent'; btnCommune.style.color = '#64748b';
    }
  };

  const updateCatTabs = () => {
    document.querySelectorAll('.cat-tab').forEach(tab => {
      const isActive = tab.dataset.cat === activeCategory;
      tab.style.background   = isActive ? '#0f172a' : '#ffffff';
      tab.style.color        = isActive ? '#ffffff' : '#475569';
      tab.style.borderColor  = isActive ? '#0f172a' : '#cbd5e1';
    });
  };

  const populateIndicatorSelect = () => {
    const select = document.getElementById('select-indicator');
    if (!select) return;
    const filtered = AGRO_INDICATORS.filter(ind => ind.category === activeCategory);
    select.innerHTML = filtered.map(ind =>
      `<option value="${ind.id}" ${ind.id === activeIndicatorId ? 'selected' : ''}>${ind.name} (${ind.unit})</option>`
    ).join('');
    if (!filtered.some(ind => ind.id === activeIndicatorId)) {
      activeIndicatorId = filtered[0]?.id || activeIndicatorId;
      select.value = activeIndicatorId;
    }
  };

  // ── KPIs ───────────────────────────────────────────────────────────────────
  const updateKPIs = () => {
    const container = document.getElementById('agro-kpis-container');
    if (!container) return;
    const indicatorObj = AGRO_INDICATORS.find(i => i.id === activeIndicatorId) || AGRO_INDICATORS[0];
    const dataset      = activeScale === 'commune' ? getUnifiedAgroCommunes() : getUnifiedAgroDairas();
    const entityKey    = activeScale === 'commune' ? 'commune' : 'daira';
    const values       = dataset.map(d => d[activeIndicatorId] || 0);
    const total        = values.reduce((a, b) => a + b, 0);
    const avg          = values.length > 0 ? total / values.length : 0;
    const sorted       = [...dataset].sort((a, b) => (b[activeIndicatorId] || 0) - (a[activeIndicatorId] || 0));
    const leader       = sorted[0] || { [entityKey]: 'N/A', [activeIndicatorId]: 0 };
    const top3Sum      = sorted.slice(0, 3).reduce((acc, d) => acc + (d[activeIndicatorId] || 0), 0);
    const top3Share    = total > 0 ? (top3Sum / total) * 100 : 0;

    container.innerHTML = `
      <div style="background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.02);">
        <span style="font-size:0.75rem;font-weight:700;color:#64748b;text-transform:uppercase;">Total Wilaya</span>
        <h3 style="margin:6px 0 0;font-size:1.6rem;font-weight:800;color:#0284c7;">${indicatorObj.format(total)}</h3>
        <p style="margin:4px 0 0;font-size:0.8rem;color:#94a3b8;">${indicatorObj.name}</p>
      </div>
      <div style="background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.02);">
        <span style="font-size:0.75rem;font-weight:700;color:#64748b;text-transform:uppercase;">Leader Territorial</span>
        <h3 style="margin:6px 0 0;font-size:1.4rem;font-weight:800;color:#16a34a;">${leader[entityKey]}</h3>
        <p style="margin:4px 0 0;font-size:0.8rem;color:#64748b;">${indicatorObj.format(leader[activeIndicatorId] || 0)}</p>
      </div>
      <div style="background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.02);">
        <span style="font-size:0.75rem;font-weight:700;color:#64748b;text-transform:uppercase;">Moyenne par ${activeScale === 'commune' ? 'Commune' : 'Daïra'}</span>
        <h3 style="margin:6px 0 0;font-size:1.6rem;font-weight:800;color:#0f172a;">${indicatorObj.format(avg)}</h3>
        <p style="margin:4px 0 0;font-size:0.8rem;color:#94a3b8;">Sur ${dataset.length} entités</p>
      </div>
      <div style="background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.02);">
        <span style="font-size:0.75rem;font-weight:700;color:#64748b;text-transform:uppercase;">Concentration Top 3</span>
        <h3 style="margin:6px 0 0;font-size:1.6rem;font-weight:800;color:#d97706;">${top3Share.toFixed(1)}%</h3>
        <p style="margin:4px 0 0;font-size:0.8rem;color:#94a3b8;">Part du Top 3 dans la Wilaya</p>
      </div>
    `;
  };

  // ── MAP ────────────────────────────────────────────────────────────────────

  /**
   * Create and return the color value for a given raw value.
   */
  const makeGetColor = () => {
    const palette  = COLOR_PALETTES[activeCategory] || COLOR_PALETTES.foncier;
    const dataset  = activeScale === 'commune' ? getUnifiedAgroCommunes() : getUnifiedAgroDairas();
    const values   = dataset.map(d => d[activeIndicatorId] || 0).filter(v => v > 0);
    const maxVal   = values.length > 0 ? Math.max(...values) : 1;
    const minVal   = values.length > 0 ? Math.min(...values) : 0;
    return { palette, maxVal, minVal, dataset };
  };

  const getColor = (val, minVal, maxVal, palette) => {
    if (val <= 0) return palette[0];
    const ratio = (val - minVal) / (maxVal - minVal || 1);
    if (ratio > 0.8) return palette[4];
    if (ratio > 0.6) return palette[3];
    if (ratio > 0.4) return palette[2];
    if (ratio > 0.2) return palette[1];
    return palette[0];
  };

  /**
   * Initialize the Leaflet map. Safe to call multiple times — does nothing if already initialized.
   */
  const initMap = () => {
    const mapEl = document.getElementById('agro-map');
    if (!mapEl || agroMapInstance) return;

    // Create map instance
    agroMapInstance = L.map('agro-map', {
      center: [36.65, 5.05],
      zoom: 10,
      zoomControl: true,
    });

    // Tile layers
    const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 18,
    });
    const satelliteLayer = L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      { attribution: '© Esri', maxZoom: 18 }
    );
    const topoLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenTopoMap', maxZoom: 17,
    });

    osmLayer.addTo(agroMapInstance);

    communePolygonsLayer = L.layerGroup().addTo(agroMapInstance);
    wilayaBoundaryLayer  = L.layerGroup().addTo(agroMapInstance);

    const baseMaps = {
      '🗺️ OpenStreetMap': osmLayer,
      '🛰️ Satellite': satelliteLayer,
      '🏔️ Topographique': topoLayer,
    };
    const overlays = {
      '📐 Polygones Communes': communePolygonsLayer,
      '🔷 Limite Wilaya': wilayaBoundaryLayer,
    };
    L.control.layers(baseMaps, overlays, { position: 'topright' }).addTo(agroMapInstance);

    // Force correct sizing after layout paint
    setTimeout(() => {
      if (agroMapInstance) {
        agroMapInstance.invalidateSize(true);
      }
    }, 150);

    // Load GeoJSON data
    loadAndDrawMap();
  };

  /**
   * Fetch GeoJSON files (cached) then draw everything.
   */
  const loadAndDrawMap = () => {
    if (!agroMapInstance) return;

    const base = (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) ? import.meta.env.BASE_URL : '/';
    const fetchPolygons = geojsonPolygonsData
      ? Promise.resolve(geojsonPolygonsData)
      : fetch(`${base}bejaia_communes_polygons.json`).then(r => { if (!r.ok) throw new Error(r.statusText); return r.json(); });
    const fetchWilaya   = geojsonWilayaData
      ? Promise.resolve(geojsonWilayaData)
      : fetch(`${base}bejaia_wilaya.json`).then(r => { if (!r.ok) throw new Error(r.statusText); return r.json(); });

    Promise.all([fetchPolygons, fetchWilaya])
      .then(([polygonsData, wilayaData]) => {
        geojsonPolygonsData = polygonsData;
        geojsonWilayaData   = wilayaData;
        drawWilayaBoundary();
        drawChoroplethMap();
        // Final size correction after all layers are painted
        setTimeout(() => agroMapInstance && agroMapInstance.invalidateSize(true), 300);
      })
      .catch(err => {
        console.error('[Agropastoral] Erreur chargement GeoJSON :', err);
      });
  };

  /**
   * Draw the wilaya outer boundary line only.
   */
  const drawWilayaBoundary = () => {
    if (!wilayaBoundaryLayer || !geojsonWilayaData) return;
    wilayaBoundaryLayer.clearLayers();
    L.geoJSON(geojsonWilayaData, {
      style: {
        color: '#0f172a',
        weight: 3.5,
        opacity: 1,
        fill: false,   // no fill for boundary-only layer
      }
    }).addTo(wilayaBoundaryLayer);
  };

  /**
   * Redraw all commune/daira polygons with current indicator choropleth.
   * Also rebuilds featureLayerMap for highlight-on-selection.
   */
  const drawChoroplethMap = () => {
    if (!agroMapInstance || !communePolygonsLayer || !geojsonPolygonsData) return;

    communePolygonsLayer.clearLayers();
    featureLayerMap = {};

    const { palette, maxVal, minVal, dataset } = makeGetColor();
    const unifiedCommunes = getUnifiedAgroCommunes();
    const fillOpacityBase = activeScale === 'daira' ? 0.85 : 0.75;
    const borderColor     = activeScale === 'daira' ? '#1e293b' : '#1a3a5f';
    const borderWeight    = activeScale === 'daira' ? 2 : 1.5;
    const indicatorObj    = AGRO_INDICATORS.find(i => i.id === activeIndicatorId) || AGRO_INDICATORS[0];

    geojsonPolygonsData.features.forEach(feature => {
      const geoName = feature.properties?.name || '';
      const geoNorm = norm(geoName);

      // Find commune metadata
      const communeMeta = communeData.find(c => {
        const cN = norm(c.name);
        return cN === geoNorm || cN.includes(geoNorm) || geoNorm.includes(cN);
      });
      const communeName = communeMeta?.name || geoName;
      const dairaName   = communeMeta?.daira || '';

      // Find agro dataset entry
      let entityData = null;
      if (activeScale === 'commune') {
        entityData = dataset.find(d =>
          norm(d.commune) === geoNorm ||
          norm(d.commune).includes(geoNorm) ||
          geoNorm.includes(norm(d.commune))
        );
      } else {
        const dN = norm(dairaName);
        if (dN) {
          entityData = dataset.find(d =>
            norm(d.daira) === dN ||
            norm(d.daira).includes(dN) ||
            dN.includes(norm(d.daira))
          );
        }
      }

      const val       = entityData ? (entityData[activeIndicatorId] || 0) : 0;
      const fillColor = getColor(val, minVal, maxVal, palette);

      // Determine if this feature matches the current selection
      const selectedEntityNorm = activeSelectedId ? norm(activeSelectedId) : null;
      const featureEntityNorm  = activeScale === 'commune' ? geoNorm : norm(dairaName);
      const isSelected = selectedEntityNorm && featureEntityNorm === selectedEntityNorm;

      const normalStyle = {
        color:       isSelected ? '#f59e0b' : borderColor,
        weight:      isSelected ? 3.5 : borderWeight,
        opacity:     1,
        fillColor:   fillColor,
        fillOpacity: isSelected ? 0.92 : fillOpacityBase,
        dashArray:   isSelected ? '0' : null,
      };

      const polygon = L.geoJSON(feature, { style: normalStyle });

      // Permanent label
      polygon.bindTooltip(communeName, {
        permanent: true,
        direction: 'center',
        className: 'commune-label',
        offset: [0, 0],
      });

      // Hover
      polygon.on('mouseover', function () {
        const s = selectedEntityNorm && featureEntityNorm === selectedEntityNorm;
        this.setStyle({ weight: 3.5, color: s ? '#f59e0b' : '#ffffff', fillOpacity: 0.95 });
      });
      polygon.on('mouseout', function () {
        const s = selectedEntityNorm && featureEntityNorm === selectedEntityNorm;
        this.setStyle({
          weight:      s ? 3.5 : borderWeight,
          color:       s ? '#f59e0b' : borderColor,
          fillOpacity: s ? 0.92 : fillOpacityBase,
        });
      });

      // Click: select & highlight
      polygon.on('click', () => {
        const newId = activeScale === 'commune' ? communeName : dairaName;
        activeSelectedId = (activeSelectedId === newId) ? null : newId; // toggle
        drawChoroplethMap(); // redraw with new highlight
      });

      // Popup
      const commAgro = unifiedCommunes.find(c => norm(c.commune) === geoNorm || norm(c.commune).includes(geoNorm)) || {};
      const d = entityData || commAgro;
      const popupTitle = activeScale === 'commune' ? communeName : `Daïra de ${dairaName}`;
      const popupHTML = `
        <div style="font-family:'Inter',sans-serif;padding:4px;min-width:230px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
            <h4 style="margin:0;font-size:0.98rem;font-weight:800;color:#0f172a;">${popupTitle}</h4>
            <span style="font-size:0.7rem;background:#e0f2fe;color:#0284c7;padding:2px 8px;border-radius:4px;font-weight:700;">${dairaName}</span>
          </div>
          <div style="background:#f8fafc;border-left:3px solid #0284c7;padding:8px 10px;border-radius:4px;margin-bottom:10px;">
            <span style="font-size:0.72rem;color:#64748b;font-weight:700;text-transform:uppercase;">${indicatorObj.name}</span>
            <div style="font-size:1.15rem;font-weight:800;color:#0f172a;margin-top:2px;">${indicatorObj.format(val)}</div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:0.75rem;color:#334155;">
            <div><b>SAU :</b> ${(d.sau || 0).toLocaleString('fr-FR')} ha</div>
            <div><b>Taux SAU :</b> ${(d.tauxMiseEnValeur || 0).toFixed(1)}%</div>
            <div><b>Bovins :</b> ${(d.bovines || 0).toLocaleString('fr-FR')}</div>
            <div><b>Ovins :</b> ${(d.ovines || 0).toLocaleString('fr-FR')}</div>
            <div><b>Lait :</b> ${(d.lait || 0).toLocaleString('fr-FR')} kL</div>
            <div><b>Olivier :</b> ${(d.olivier || 0).toLocaleString('fr-FR')} Qx</div>
          </div>
        </div>
      `;
      polygon.bindPopup(popupHTML, { maxWidth: 280 });
      communePolygonsLayer.addLayer(polygon);

      // Register in feature map for programmatic selection
      const key = activeScale === 'commune' ? geoNorm : norm(dairaName);
      featureLayerMap[key] = polygon;
    });

    // Legend
    updateMapLegend(minVal, maxVal, palette, indicatorObj);

    // Badge
    const badge = document.getElementById('map-scale-badge');
    if (badge) badge.textContent = `Échelle : ${activeScale === 'commune' ? 'Communes (52)' : 'Daïras (19)'}`;
  };

  const updateMapLegend = (minVal, maxVal, palette, indicatorObj) => {
    const legendEl = document.getElementById('agro-map-legend');
    if (!legendEl) return;
    const step   = (maxVal - minVal) / 5;
    const breaks = [0, 1, 2, 3, 4].map(i => minVal + i * step);
    breaks.push(maxVal);
    let html = `<span style="font-weight:700;color:#475569;">Légende (${indicatorObj.unit}) :</span>`;
    html += `<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">`;
    for (let i = 0; i < 5; i++) {
      html += `
        <div style="display:flex;align-items:center;gap:4px;font-size:0.75rem;color:#475569;">
          <span style="display:inline-block;width:14px;height:14px;background:${palette[i]};border-radius:3px;border:1px solid rgba(0,0,0,0.1);"></span>
          ${Math.round(breaks[i])} – ${Math.round(breaks[i + 1])}
        </div>`;
    }
    // Selected highlight indicator
    html += `
      <div style="display:flex;align-items:center;gap:4px;font-size:0.75rem;color:#d97706;font-weight:700;">
        <span style="display:inline-block;width:14px;height:14px;background:#fef3c7;border:2px solid #f59e0b;border-radius:3px;"></span>
        Sélection active
      </div>`;
    html += `</div>`;
    legendEl.innerHTML = html;
  };

  /**
   * Programmatically highlight a commune or daira by name (called from table/dropdown).
   */
  const selectEntityOnMap = (name) => {
    activeSelectedId = name || null;
    if (geojsonPolygonsData && agroMapInstance) {
      drawChoroplethMap();
      // Pan to selected feature if possible
      if (name) {
        const key   = norm(name);
        const layer = featureLayerMap[key];
        if (layer) {
          try { agroMapInstance.fitBounds(layer.getBounds(), { padding: [40, 40], maxZoom: 13 }); } catch (_) {}
        }
      }
    }
  };

  // ── CHARTS ────────────────────────────────────────────────────────────────
  const updateCharts = () => {
    const indicatorObj = AGRO_INDICATORS.find(i => i.id === activeIndicatorId) || AGRO_INDICATORS[0];
    const dataset      = activeScale === 'commune' ? getUnifiedAgroCommunes() : getUnifiedAgroDairas();
    const entityKey    = activeScale === 'commune' ? 'commune' : 'daira';
    const palette      = COLOR_PALETTES[activeCategory] || COLOR_PALETTES.foncier;

    // Top 10 Bar Chart
    const barCtx = document.getElementById('agroBarChart');
    if (barCtx) {
      if (topBarChartInstance) topBarChartInstance.destroy();
      const sortedTop = [...dataset].sort((a, b) => (b[activeIndicatorId] || 0) - (a[activeIndicatorId] || 0)).slice(0, 10);
      topBarChartInstance = new Chart(barCtx, {
        type: 'bar',
        data: {
          labels: sortedTop.map(d => d[entityKey]),
          datasets: [{
            label: `${indicatorObj.name} (${indicatorObj.unit})`,
            data: sortedTop.map(d => d[activeIndicatorId] || 0),
            backgroundColor: sortedTop.map(d =>
              activeSelectedId && norm(d[entityKey]) === norm(activeSelectedId) ? '#f59e0b' : palette[3]
            ),
            borderRadius: 6,
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: ctx => `${indicatorObj.name} : ${indicatorObj.format(ctx.raw)}` } }
          },
          scales: {
            y: { beginAtZero: true, ticks: { font: { size: 10 } } },
            x: { ticks: { font: { size: 10, weight: 'bold' } } }
          },
          onClick: (evt, elements) => {
            if (elements.length > 0) {
              const idx  = elements[0].index;
              const name = sortedTop[idx][entityKey];
              selectEntityOnMap(name);
              updateCharts();
              updateDatatable();
            }
          }
        }
      });
    }

    // Doughnut pie by Daïra
    const pieCtx = document.getElementById('agroPieChart');
    if (pieCtx) {
      if (pieChartInstance) pieChartInstance.destroy();
      const dairaData    = getUnifiedAgroDairas();
      const sortedDairas = [...dairaData].sort((a, b) => (b[activeIndicatorId] || 0) - (a[activeIndicatorId] || 0));
      const top5         = sortedDairas.slice(0, 5);
      const othersVal    = sortedDairas.slice(5).reduce((acc, d) => acc + (d[activeIndicatorId] || 0), 0);
      const labels       = [...top5.map(d => d.daira), 'Autres Daïras'];
      const dataValues   = [...top5.map(d => d[activeIndicatorId] || 0), othersVal];
      pieChartInstance = new Chart(pieCtx, {
        type: 'doughnut',
        data: {
          labels,
          datasets: [{ data: dataValues, backgroundColor: ['#0284c7','#16a34a','#f59e0b','#8b5cf6','#ec4899','#94a3b8'], borderWidth: 2, borderColor: '#ffffff' }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { position: 'right', labels: { font: { size: 10, family: 'Inter' }, boxWidth: 12 } } },
          onClick: (evt, elements) => {
            if (elements.length > 0 && elements[0].index < 5) {
              const name = top5[elements[0].index].daira;
              selectEntityOnMap(name);
              updateCharts();
              updateDatatable();
            }
          }
        }
      });
    }

    const barTitle = document.getElementById('bar-chart-title');
    if (barTitle) barTitle.innerHTML = `<i class="fas fa-chart-bar" style="color:#16a34a;margin-right:6px;"></i> Top 10 ${activeScale === 'commune' ? 'Communes' : 'Daïras'} — ${indicatorObj.name}`;
  };

  // ── DATATABLE ─────────────────────────────────────────────────────────────
  const updateDatatable = () => {
    const tableEl = document.getElementById('agro-datatable');
    if (!tableEl) return;
    const dataset     = activeScale === 'commune' ? getUnifiedAgroCommunes() : getUnifiedAgroDairas();
    const entityKey   = activeScale === 'commune' ? 'commune' : 'daira';
    const searchValue = (document.getElementById('agro-table-search')?.value || '').toLowerCase();
    const filtered    = dataset.filter(d =>
      (d[entityKey] || '').toLowerCase().includes(searchValue) ||
      (d.daira || '').toLowerCase().includes(searchValue)
    );
    const indicatorObj = AGRO_INDICATORS.find(i => i.id === activeIndicatorId) || AGRO_INDICATORS[0];

    const thead = tableEl.querySelector('thead');
    thead.innerHTML = `
      <tr>
        <th style="padding:12px 14px;">${activeScale === 'commune' ? 'Commune' : 'Daïra'}</th>
        ${activeScale === 'commune' ? '<th style="padding:12px 14px;">Daïra</th>' : '<th style="padding:12px 14px;">Communes</th>'}
        <th style="padding:12px 14px;">SAU (ha)</th>
        <th style="padding:12px 14px;">Taux SAU</th>
        <th style="padding:12px 14px;">Bovins (têtes)</th>
        <th style="padding:12px 14px;">Ovins (têtes)</th>
        <th style="padding:12px 14px;">Lait (kL)</th>
        <th style="padding:12px 14px;">Olivier (Qx)</th>
        <th style="padding:12px 14px;background:#e0f2fe;color:#0284c7;">${indicatorObj.name}</th>
      </tr>
    `;

    const tbody = tableEl.querySelector('tbody');
    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="9" style="text-align:center;padding:20px;color:#94a3b8;">Aucun résultat trouvé</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map((d, idx) => {
      const isSelected = activeSelectedId && norm(d[entityKey]) === norm(activeSelectedId);
      const rowBg = isSelected ? '#fef3c7' : (idx % 2 === 0 ? '#ffffff' : '#f8fafc');
      const rowBorder = isSelected ? '2px solid #f59e0b' : '1px solid #f1f5f9';
      return `
        <tr style="border-bottom:${rowBorder};background:${rowBg};cursor:pointer;" onclick="(function(){window._agroSelect && window._agroSelect('${(d[entityKey] || '').replace(/'/g, "\\'")}')})()">
          <td style="padding:10px 14px;font-weight:700;color:#0f172a;">${d[entityKey]}</td>
          <td style="padding:10px 14px;color:#64748b;">${activeScale === 'commune' ? d.daira : `${d.communesCount} communes`}</td>
          <td style="padding:10px 14px;">${(d.sau || 0).toLocaleString('fr-FR')}</td>
          <td style="padding:10px 14px;">${(d.tauxMiseEnValeur || 0).toFixed(1)}%</td>
          <td style="padding:10px 14px;">${(d.bovines || 0).toLocaleString('fr-FR')}</td>
          <td style="padding:10px 14px;">${(d.ovines || 0).toLocaleString('fr-FR')}</td>
          <td style="padding:10px 14px;">${(d.lait || 0).toLocaleString('fr-FR')}</td>
          <td style="padding:10px 14px;">${(d.olivier || 0).toLocaleString('fr-FR')}</td>
          <td style="padding:10px 14px;font-weight:800;color:#0284c7;background:#f0f9ff;">${indicatorObj.format(d[activeIndicatorId] || 0)}</td>
        </tr>
      `;
    }).join('');
  };

  // Expose select callback for table row clicks
  window._agroSelect = (name) => {
    selectEntityOnMap(name);
    updateCharts();
    updateDatatable();
  };

  // ── FULL REFRESH ──────────────────────────────────────────────────────────
  const refreshAll = () => {
    updateScaleButtons();
    updateCatTabs();
    populateIndicatorSelect();
    updateKPIs();
    updateCharts();
    updateDatatable();
    // Only redraw choropleth if map is already initialized
    if (agroMapInstance && geojsonPolygonsData) {
      drawChoroplethMap();
    }
  };

  // ── EVENT LISTENERS ───────────────────────────────────────────────────────
  document.getElementById('btn-scale-commune')?.addEventListener('click', () => {
    activeScale = 'commune'; activeSelectedId = null; refreshAll();
  });
  document.getElementById('btn-scale-daira')?.addEventListener('click', () => {
    activeScale = 'daira'; activeSelectedId = null; refreshAll();
  });

  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      activeCategory = tab.dataset.cat;
      const firstInd = AGRO_INDICATORS.find(i => i.category === activeCategory);
      if (firstInd) activeIndicatorId = firstInd.id;
      activeSelectedId = null;
      refreshAll();
    });
  });

  document.getElementById('select-indicator')?.addEventListener('change', (e) => {
    activeIndicatorId = e.target.value;
    refreshAll();
  });

  document.getElementById('agro-table-search')?.addEventListener('input', () => {
    updateDatatable();
  });

  // ── INITIAL RENDER (non-map) ───────────────────────────────────────────────
  // Charts and tables first — they don't depend on the map being visible
  updateScaleButtons();
  updateCatTabs();
  populateIndicatorSelect();
  updateKPIs();
  updateCharts();
  updateDatatable();

  // ── MAP: use IntersectionObserver so Leaflet gets the real container size ──
  const mapContainer = document.getElementById('agro-map');
  if (mapContainer) {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            observer.disconnect();
            initMap();
          }
        });
      }, { threshold: 0.1 });
      observer.observe(mapContainer);
    } else {
      // Fallback: init after a short delay
      setTimeout(initMap, 500);
    }
  }
};
