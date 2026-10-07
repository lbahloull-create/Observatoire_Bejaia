import Chart from 'chart.js/auto';
import L from 'leaflet';
import { 
  AGRO_INDICATORS, 
  getUnifiedAgroCommunes, 
  getUnifiedAgroDairas, 
  agropastoralWilaya 
} from './data/agropastoralData';
import { communeData } from './data/communeData';

// Normalized string helper for fuzzy matching commune/daïra names
const norm = (s) => (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '');

// State
let activeScale = 'commune'; // 'commune' | 'daira'
let activeCategory = 'foncier'; // 'foncier' | 'cheptel' | 'prod_animale' | 'prod_vegetale'
let activeIndicatorId = 'sau';

let agroMapInstance = null;
let geoLayer = null;
let topBarChartInstance = null;
let pieChartInstance = null;

// Palette definitions by category
const COLOR_PALETTES = {
  foncier: ['#f0fdf4', '#bbf7d0', '#4ade80', '#16a34a', '#14532d'],
  cheptel: ['#fffbeb', '#fde68a', '#f59e0b', '#d97706', '#78350f'],
  prod_animale: ['#f0f9ff', '#bae6fd', '#38bdf8', '#0284c7', '#0c4a6e'],
  prod_vegetale: ['#ecfdf5', '#99f6e4', '#2dd4bf', '#0d9488', '#115e59']
};

export const renderAgropastoralSection = (t) => {
  return `
    <section id="agropastoral" style="background: #f8fafc; padding: 80px 0; border-top: 1px solid #e2e8f0; font-family: 'Inter', sans-serif;">
      <div class="container" style="max-width: 1280px; margin: 0 auto; padding: 0 20px;">
        
        <!-- Header Section -->
        <div style="text-align: center; margin-bottom: 35px;">
          <div style="display: inline-flex; align-items: center; gap: 8px; background: #e0f2fe; color: #0284c7; padding: 6px 16px; border-radius: 20px; font-weight: 700; font-size: 0.85rem; margin-bottom: 12px;">
            <i class="fas fa-tractor"></i> Colloque National & Observatoire Territorial DSA 2014/2015
          </div>
          <h2 class="section-title" style="font-size: 2.2rem; color: #0f172a; margin: 0 0 10px; font-weight: 800;">
            Économie Agropastorale & Rurale — Wilaya de Béjaïa
          </h2>
          <p class="section-subtitle" style="font-size: 1rem; color: #64748b; max-width: 800px; margin: 0 auto;">
            Analyse cartographique multidimensionnelle des ressources foncières, de l'élevage et de la production agricole par commune et daïra.
          </p>
        </div>

        <!-- Controls Bar (Scale & Category & Indicator Selection) -->
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

            <!-- Category Selector Tabs -->
            <div style="flex: 1; min-width: 300px;">
              <label style="display: block; font-size: 0.75rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">
                <i class="fas fa-th-list"></i> Domaine :
              </label>
              <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <button class="cat-tab active" data-cat="foncier" style="padding: 8px 14px; border-radius: 8px; font-size: 0.82rem; font-weight: 600; border: 1px solid #cbd5e1; background: #fff; cursor: pointer;">
                  <i class="fas fa-vector-square" style="color: #16a34a;"></i> Foncier & SAU
                </button>
                <button class="cat-tab" data-cat="cheptel" style="padding: 8px 14px; border-radius: 8px; font-size: 0.82rem; font-weight: 600; border: 1px solid #cbd5e1; background: #fff; cursor: pointer;">
                  <i class="fas fa-hippo" style="color: #d97706;"></i> Cheptels & Élevage
                </button>
                <button class="cat-tab" data-cat="prod_animale" style="padding: 8px 14px; border-radius: 8px; font-size: 0.82rem; font-weight: 600; border: 1px solid #cbd5e1; background: #fff; cursor: pointer;">
                  <i class="fas fa-glass-whiskey" style="color: #0284c7;"></i> Prod. Animales
                </button>
                <button class="cat-tab" data-cat="prod_vegetale" style="padding: 8px 14px; border-radius: 8px; font-size: 0.82rem; font-weight: 600; border: 1px solid #cbd5e1; background: #fff; cursor: pointer;">
                  <i class="fas fa-seedling" style="color: #0d9488;"></i> Prod. Végétales
                </button>
              </div>
            </div>

            <!-- Specific Indicator Selector -->
            <div style="min-width: 240px;">
              <label style="display: block; font-size: 0.75rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">
                <i class="fas fa-chart-line"></i> Indicateur Cartographié :
              </label>
              <select id="select-indicator" style="width: 100%; padding: 9px 14px; border-radius: 8px; border: 1px solid #cbd5e1; background: #fff; font-size: 0.88rem; font-weight: 600; color: #0f172a; outline: none; cursor: pointer;">
                <!-- Populated dynamically -->
              </select>
            </div>

          </div>
        </div>

        <!-- KPIs Grid -->
        <div id="agro-kpis-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 30px;">
          <!-- Populated dynamically -->
        </div>

        <!-- Main Workspace (Map + Charts) -->
        <div style="display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 24px; margin-bottom: 40px;">
          
          <!-- Map Panel -->
          <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 16px; padding: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.03); display: flex; flex-direction: column;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px;">
              <h4 id="map-panel-title" style="margin: 0; font-size: 1.05rem; font-weight: 700; color: #0f172a;">
                <i class="fas fa-map-marked-alt" style="color: #0284c7; margin-right: 6px;"></i> Cartographie
              </h4>
              <span id="map-scale-badge" style="font-size: 0.75rem; background: #f1f5f9; padding: 4px 10px; border-radius: 6px; font-weight: 700; color: #475569;">Échelle : Communes</span>
            </div>
            
            <div id="agro-map" style="height: 520px; width: 100%; border-radius: 12px; border: 1px solid #e2e8f0; z-index: 1;"></div>
            
            <div id="agro-map-legend" style="margin-top: 14px; background: #f8fafc; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 0.8rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
              <!-- Dynamic Legend -->
            </div>
          </div>

          <!-- Charts Panel -->
          <div style="display: flex; flex-direction: column; gap: 24px;">
            
            <!-- Top 10 Ranking Chart -->
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
                <i class="fas fa-chart-pie" style="color: #d97706; margin-right: 6px;"></i> Répartition & Structure Globale
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
                <!-- Populated dynamically -->
              </thead>
              <tbody style="color: #334155;">
                <!-- Populated dynamically -->
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  `;
};

// ─────────────────────────────────────────────────────────────────────────────
// INITIALIZATION AND REACTION CONTROLLER
// ─────────────────────────────────────────────────────────────────────────────

export const initAgropastoral = () => {
  // Update scale button styles
  const updateScaleButtons = () => {
    const btnCommune = document.getElementById('btn-scale-commune');
    const btnDaira = document.getElementById('btn-scale-daira');
    if (!btnCommune || !btnDaira) return;

    if (activeScale === 'commune') {
      btnCommune.style.background = '#0284c7';
      btnCommune.style.color = '#ffffff';
      btnDaira.style.background = 'transparent';
      btnDaira.style.color = '#64748b';
    } else {
      btnDaira.style.background = '#0284c7';
      btnDaira.style.color = '#ffffff';
      btnCommune.style.background = 'transparent';
      btnCommune.style.color = '#64748b';
    }
  };

  // Update category tab styles
  const updateCatTabs = () => {
    document.querySelectorAll('.cat-tab').forEach(tab => {
      const cat = tab.dataset.cat;
      if (cat === activeCategory) {
        tab.style.background = '#0f172a';
        tab.style.color = '#ffffff';
        tab.style.borderColor = '#0f172a';
      } else {
        tab.style.background = '#ffffff';
        tab.style.color = '#475569';
        tab.style.borderColor = '#cbd5e1';
      }
    });
  };

  // Populate indicator dropdown based on selected category
  const populateIndicatorSelect = () => {
    const select = document.getElementById('select-indicator');
    if (!select) return;

    const filtered = AGRO_INDICATORS.filter(ind => ind.category === activeCategory);
    select.innerHTML = filtered.map(ind => `
      <option value="${ind.id}" ${ind.id === activeIndicatorId ? 'selected' : ''}>
        ${ind.name} (${ind.unit})
      </option>
    `).join('');

    // If activeIndicatorId is not in the filtered category, reset to first in category
    if (!filtered.some(ind => ind.id === activeIndicatorId)) {
      activeIndicatorId = filtered[0].id;
      select.value = activeIndicatorId;
    }
  };

  // Build KPIs
  const updateKPIs = () => {
    const container = document.getElementById('agro-kpis-container');
    if (!container) return;

    const indicatorObj = AGRO_INDICATORS.find(i => i.id === activeIndicatorId) || AGRO_INDICATORS[0];
    const dataset = activeScale === 'commune' ? getUnifiedAgroCommunes() : getUnifiedAgroDairas();
    const entityKey = activeScale === 'commune' ? 'commune' : 'daira';

    const values = dataset.map(d => d[activeIndicatorId] || 0);
    const total = values.reduce((a, b) => a + b, 0);
    const avg = values.length > 0 ? total / values.length : 0;

    // Leader entity
    const sorted = [...dataset].sort((a, b) => (b[activeIndicatorId] || 0) - (a[activeIndicatorId] || 0));
    const leader = sorted[0] || { [entityKey]: 'N/A', [activeIndicatorId]: 0 };

    // Share of Top 3
    const top3Sum = sorted.slice(0, 3).reduce((acc, d) => acc + (d[activeIndicatorId] || 0), 0);
    const top3Share = total > 0 ? (top3Sum / total) * 100 : 0;

    container.innerHTML = `
      <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
        <span style="font-size: 0.75rem; font-weight: 700; color: #64748b; text-transform: uppercase;">Total Wilaya</span>
        <h3 style="margin: 6px 0 0; font-size: 1.6rem; font-weight: 800; color: #0284c7;">
          ${indicatorObj.format(total)}
        </h3>
        <p style="margin: 4px 0 0; font-size: 0.8rem; color: #94a3b8;">${indicatorObj.name}</p>
      </div>

      <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
        <span style="font-size: 0.75rem; font-weight: 700; color: #64748b; text-transform: uppercase;">Leader Territorial</span>
        <h3 style="margin: 6px 0 0; font-size: 1.4rem; font-weight: 800; color: #16a34a;">
          ${leader[entityKey]}
        </h3>
        <p style="margin: 4px 0 0; font-size: 0.8rem; color: #64748b;">${indicatorObj.format(leader[activeIndicatorId] || 0)}</p>
      </div>

      <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
        <span style="font-size: 0.75rem; font-weight: 700; color: #64748b; text-transform: uppercase;">Moyenne par ${activeScale === 'commune' ? 'Commune' : 'Daïra'}</span>
        <h3 style="margin: 6px 0 0; font-size: 1.6rem; font-weight: 800; color: #0f172a;">
          ${indicatorObj.format(avg)}
        </h3>
        <p style="margin: 4px 0 0; font-size: 0.8rem; color: #94a3b8;">Sur ${dataset.length} entités</p>
      </div>

      <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
        <span style="font-size: 0.75rem; font-weight: 700; color: #64748b; text-transform: uppercase;">Concentration Top 3</span>
        <h3 style="margin: 6px 0 0; font-size: 1.6rem; font-weight: 800; color: #d97706;">
          ${top3Share.toFixed(1)}%
        </h3>
        <p style="margin: 4px 0 0; font-size: 0.8rem; color: #94a3b8;">Part du Top 3 dans la Wilaya</p>
      </div>
    `;
  };

  // Choropleth Map Render
  const updateMap = () => {
    const mapEl = document.getElementById('agro-map');
    if (!mapEl) return;

    if (!agroMapInstance) {
      agroMapInstance = L.map('agro-map').setView([36.6, 4.8], 9);
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap contributors © CARTO'
      }).addTo(agroMapInstance);
    }

    if (geoLayer) {
      agroMapInstance.removeLayer(geoLayer);
    }

    const indicatorObj = AGRO_INDICATORS.find(i => i.id === activeIndicatorId) || AGRO_INDICATORS[0];
    const palette = COLOR_PALETTES[activeCategory] || COLOR_PALETTES.foncier;

    const dataset = activeScale === 'commune' ? getUnifiedAgroCommunes() : getUnifiedAgroDairas();
    const values = dataset.map(d => d[activeIndicatorId] || 0).filter(v => v > 0);
    
    const maxVal = values.length > 0 ? Math.max(...values) : 1;
    const minVal = values.length > 0 ? Math.min(...values) : 0;

    // Helper color chooser
    const getColor = (val) => {
      if (val <= 0) return palette[0];
      const ratio = (val - minVal) / (maxVal - minVal || 1);
      if (ratio > 0.8) return palette[4];
      if (ratio > 0.6) return palette[3];
      if (ratio > 0.4) return palette[2];
      if (ratio > 0.2) return palette[1];
      return palette[0];
    };

    // Build map polygons
    const features = communeData.map(commune => {
      // Find data based on active scale
      const cNorm = norm(commune.name);
      const dNorm = norm(commune.daira);

      let entityData = null;
      if (activeScale === 'commune') {
        entityData = dataset.find(d => norm(d.commune) === cNorm || norm(d.commune).includes(cNorm));
      } else {
        entityData = dataset.find(d => norm(d.daira) === dNorm || norm(d.daira).includes(dNorm));
      }

      const val = entityData ? (entityData[activeIndicatorId] || 0) : 0;

      return {
        communeObj: commune,
        entityData: entityData,
        val: val,
        color: getColor(val)
      };
    });

    const polygons = [];
    features.forEach(f => {
      if (f.communeObj.polygon && f.communeObj.polygon.length > 0) {
        const poly = L.polygon(f.communeObj.polygon, {
          color: activeScale === 'daira' ? '#334155' : '#ffffff',
          weight: activeScale === 'daira' ? 1.5 : 1,
          fillColor: f.color,
          fillOpacity: 0.8
        });

        // Popup content
        const entityName = activeScale === 'commune' ? f.communeObj.name : `Daïra de ${f.communeObj.daira}`;
        const d = f.entityData || {};

        const popupContent = `
          <div style="font-family: 'Inter', sans-serif; padding: 4px; min-width: 220px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <h4 style="margin: 0; font-size: 0.95rem; font-weight: 800; color: #0f172a;">${entityName}</h4>
              <span style="font-size: 0.7rem; background: #e0f2fe; color: #0284c7; padding: 2px 6px; border-radius: 4px; font-weight: 700;">
                ${f.communeObj.daira}
              </span>
            </div>
            
            <div style="background: #f8fafc; border-left: 3px solid #0284c7; padding: 8px 10px; border-radius: 4px; margin-bottom: 10px;">
              <span style="font-size: 0.72rem; color: #64748b; font-weight: 700; text-transform: uppercase;">${indicatorObj.name}</span>
              <div style="font-size: 1.1rem; font-weight: 800; color: #0f172a; margin-top: 2px;">
                ${indicatorObj.format(f.val)}
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; font-size: 0.75rem; color: #334155;">
              <div><b>SAU :</b> ${(d.sau || 0).toLocaleString('fr-FR')} ha</div>
              <div><b>Taux SAU :</b> ${(d.tauxMiseEnValeur || 0).toFixed(1)}%</div>
              <div><b>Bovins :</b> ${(d.bovines || 0).toLocaleString('fr-FR')}</div>
              <div><b>Ovins :</b> ${(d.ovines || 0).toLocaleString('fr-FR')}</div>
              <div><b>Lait :</b> ${(d.lait || 0).toLocaleString('fr-FR')} kL</div>
              <div><b>Olivier :</b> ${(d.olivier || 0).toLocaleString('fr-FR')} Qx</div>
            </div>
          </div>
        `;

        poly.bindPopup(popupContent);
        polygons.push(poly);
      }
    });

    geoLayer = L.featureGroup(polygons).addTo(agroMapInstance);

    // Update legend
    const legendEl = document.getElementById('agro-map-legend');
    if (legendEl) {
      const step = (maxVal - minVal) / 5;
      const breaks = [minVal, minVal + step, minVal + 2*step, minVal + 3*step, minVal + 4*step, maxVal];

      let legendHTML = `<span style="font-weight: 700; color: #475569;">Légende (${indicatorObj.unit}) :</span>`;
      legendHTML += `<div style="display: flex; align-items: center; gap: 4px;">`;
      for (let i = 0; i < 5; i++) {
        const from = Math.round(breaks[i]);
        const to = Math.round(breaks[i + 1]);
        legendHTML += `
          <div style="display: flex; align-items: center; gap: 4px; font-size: 0.75rem; color: #475569;">
            <span style="display: inline-block; width: 14px; height: 14px; background: ${palette[i]}; border-radius: 3px;"></span>
            ${from} - ${to}
          </div>
        `;
      }
      legendHTML += `</div>`;
      legendEl.innerHTML = legendHTML;
    }

    // Update map scale badge
    const badge = document.getElementById('map-scale-badge');
    if (badge) {
      badge.textContent = `Échelle : ${activeScale === 'commune' ? 'Communes (52)' : 'Daïras (19)'}`;
    }
  };

  // Update Charts
  const updateCharts = () => {
    const indicatorObj = AGRO_INDICATORS.find(i => i.id === activeIndicatorId) || AGRO_INDICATORS[0];
    const dataset = activeScale === 'commune' ? getUnifiedAgroCommunes() : getUnifiedAgroDairas();
    const entityKey = activeScale === 'commune' ? 'commune' : 'daira';

    // Top 10 Bar Chart
    const barCtx = document.getElementById('agroBarChart');
    if (barCtx) {
      if (topBarChartInstance) topBarChartInstance.destroy();

      const sortedTop = [...dataset].sort((a, b) => (b[activeIndicatorId] || 0) - (a[activeIndicatorId] || 0)).slice(0, 10);
      const palette = COLOR_PALETTES[activeCategory] || COLOR_PALETTES.foncier;

      topBarChartInstance = new Chart(barCtx, {
        type: 'bar',
        data: {
          labels: sortedTop.map(d => d[entityKey]),
          datasets: [{
            label: `${indicatorObj.name} (${indicatorObj.unit})`,
            data: sortedTop.map(d => d[activeIndicatorId] || 0),
            backgroundColor: palette[3],
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (ctx) => `${indicatorObj.name} : ${indicatorObj.format(ctx.raw)}`
              }
            }
          },
          scales: {
            y: { beginAtZero: true, ticks: { font: { size: 10 } } },
            x: { ticks: { font: { size: 10, weight: 'bold' } } }
          }
        }
      });
    }

    // Structure Pie Chart (By Daïra)
    const pieCtx = document.getElementById('agroPieChart');
    if (pieCtx) {
      if (pieChartInstance) pieChartInstance.destroy();

      const dairaData = getUnifiedAgroDairas();
      const sortedDairas = [...dairaData].sort((a, b) => (b[activeIndicatorId] || 0) - (a[activeIndicatorId] || 0));
      const top5Dairas = sortedDairas.slice(0, 5);
      const othersVal = sortedDairas.slice(5).reduce((acc, d) => acc + (d[activeIndicatorId] || 0), 0);

      const labels = [...top5Dairas.map(d => d.daira), 'Autres Daïras'];
      const dataValues = [...top5Dairas.map(d => d[activeIndicatorId] || 0), othersVal];

      pieChartInstance = new Chart(pieCtx, {
        type: 'doughnut',
        data: {
          labels: labels,
          datasets: [{
            data: dataValues,
            backgroundColor: ['#0284c7', '#16a34a', '#f59e0b', '#8b5cf6', '#ec4899', '#94a3b8'],
            borderWidth: 2,
            borderColor: '#ffffff'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'right',
              labels: { font: { size: 10, family: 'Inter' }, boxWidth: 12 }
            }
          }
        }
      });
    }

    // Update Chart titles
    const barTitle = document.getElementById('bar-chart-title');
    if (barTitle) {
      barTitle.innerHTML = `<i class="fas fa-chart-bar" style="color: #16a34a; margin-right: 6px;"></i> Top 10 ${activeScale === 'commune' ? 'Communes' : 'Daïras'} — ${indicatorObj.name}`;
    }
  };

  // Render Table
  const updateDatatable = () => {
    const tableEl = document.getElementById('agro-datatable');
    if (!tableEl) return;

    const dataset = activeScale === 'commune' ? getUnifiedAgroCommunes() : getUnifiedAgroDairas();
    const entityKey = activeScale === 'commune' ? 'commune' : 'daira';
    const searchValue = (document.getElementById('agro-table-search')?.value || '').toLowerCase();

    const filtered = dataset.filter(d => {
      const name = (d[entityKey] || '').toLowerCase();
      const dairaName = (d.daira || '').toLowerCase();
      return name.includes(searchValue) || dairaName.includes(searchValue);
    });

    const indicatorObj = AGRO_INDICATORS.find(i => i.id === activeIndicatorId) || AGRO_INDICATORS[0];

    // Thead
    const thead = tableEl.querySelector('thead');
    thead.innerHTML = `
      <tr>
        <th style="padding: 12px 14px;">${activeScale === 'commune' ? 'Commune' : 'Daïra'}</th>
        ${activeScale === 'commune' ? '<th style="padding: 12px 14px;">Daïra</th>' : '<th style="padding: 12px 14px;">Communes</th>'}
        <th style="padding: 12px 14px;">SAU (ha)</th>
        <th style="padding: 12px 14px;">Taux SAU</th>
        <th style="padding: 12px 14px;">Bovins (têtes)</th>
        <th style="padding: 12px 14px;">Ovins (têtes)</th>
        <th style="padding: 12px 14px;">Lait (kL)</th>
        <th style="padding: 12px 14px;">Olivier (Qx)</th>
        <th style="padding: 12px 14px; background: #e0f2fe; color: #0284c7;">${indicatorObj.name}</th>
      </tr>
    `;

    // Tbody
    const tbody = tableEl.querySelector('tbody');
    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="9" style="text-align: center; padding: 20px; color: #94a3b8;">Aucun résultat trouvé</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map((d, idx) => `
      <tr style="border-bottom: 1px solid #f1f5f9; background: ${idx % 2 === 0 ? '#ffffff' : '#f8fafc'};">
        <td style="padding: 10px 14px; font-weight: 700; color: #0f172a;">${d[entityKey]}</td>
        <td style="padding: 10px 14px; color: #64748b;">${activeScale === 'commune' ? d.daira : `${d.communesCount} communes`}</td>
        <td style="padding: 10px 14px;">${d.sau.toLocaleString('fr-FR')}</td>
        <td style="padding: 10px 14px;">${d.tauxMiseEnValeur.toFixed(1)}%</td>
        <td style="padding: 10px 14px;">${d.bovines.toLocaleString('fr-FR')}</td>
        <td style="padding: 10px 14px;">${d.ovines.toLocaleString('fr-FR')}</td>
        <td style="padding: 10px 14px;">${d.lait.toLocaleString('fr-FR')}</td>
        <td style="padding: 10px 14px;">${d.olivier.toLocaleString('fr-FR')}</td>
        <td style="padding: 10px 14px; font-weight: 800; color: #0284c7; background: #f0f9ff;">
          ${indicatorObj.format(d[activeIndicatorId] || 0)}
        </td>
      </tr>
    `).join('');
  };

  // Full Refresh Trigger
  const refreshAll = () => {
    updateScaleButtons();
    updateCatTabs();
    populateIndicatorSelect();
    updateKPIs();
    updateMap();
    updateCharts();
    updateDatatable();
  };

  // Event Listeners
  const btnCommune = document.getElementById('btn-scale-commune');
  const btnDaira = document.getElementById('btn-scale-daira');

  if (btnCommune) {
    btnCommune.onclick = () => {
      activeScale = 'commune';
      refreshAll();
    };
  }

  if (btnDaira) {
    btnDaira.onclick = () => {
      activeScale = 'daira';
      refreshAll();
    };
  }

  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.onclick = () => {
      activeCategory = tab.dataset.cat;
      // Auto-select first indicator of this category
      const firstInd = AGRO_INDICATORS.find(i => i.category === activeCategory);
      if (firstInd) activeIndicatorId = firstInd.id;
      refreshAll();
    };
  });

  const selectInd = document.getElementById('select-indicator');
  if (selectInd) {
    selectInd.onchange = (e) => {
      activeIndicatorId = e.target.value;
      refreshAll();
    };
  }

  const tableSearch = document.getElementById('agro-table-search');
  if (tableSearch) {
    tableSearch.oninput = () => {
      updateDatatable();
    };
  }

  // Initial Run
  refreshAll();
};
