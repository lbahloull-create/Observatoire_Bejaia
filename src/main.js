import Chart from 'chart.js/auto';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { communeData, regionalAverage, regionalAverageHistory, dimensions, regionalStats, clusters } from './data/communeData';

// Fix Leaflet marker icon path issue with Vite
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  // Cluster color palette
  const clusterColors = {
    1: '#1a3a5f', // Dark Blue - Urban/Industrial
    2: '#2e7d32', // Green - Services
    3: '#6a994e', // Olive Green - Mountain
    4: '#e65100', // Orange - Rural
    5: '#7b1fa2', // Purple - Spatial Mutation
    6: '#c62828', // Red - Risk/Potential
  };

  const renderHome = () => {
    app.innerHTML = `
      <section id="home" class="hero">
        <div class="container">
          <h1>Observatoire Territorial de la Wilaya de Béjaïa</h1>
          <p>Transformer la donnée territoriale en levier de développement inclusif.</p>
          <div class="kpis">
            <div class="kpi-item"><h3>${regionalStats.communes}</h3><p>Communes</p></div>
            <div class="kpi-item"><h3>${regionalStats.dairas}</h3><p>Daïras</p></div>
            <div class="kpi-item"><h3>${(regionalStats.population / 1000).toFixed(0)}k</h3><p>Habitants</p></div>
            <div class="kpi-item"><h3>${regionalStats.area}</h3><p>km²</p></div>
          </div>
          <div style="margin-top: 40px;">
            <a href="#dashboard" class="btn btn-primary">Consulter le diagnostic de ma commune</a>
          </div>
        </div>
      </section>

      <section id="diagnostic">
        <div class="container">
          <h2 class="section-title">Diagnostic des Disparités</h2>
          <p class="section-subtitle">Les inégalités territoriales sont structurellement influencées par le contexte spatial et les dynamiques socio-économiques.</p>
          <div class="dashboard-grid">
            <div class="card">
              <h3>Facteurs de Disparités</h3>
              <p>Analyse multicritère basée sur le Revenu, l'Éducation, l'Emploi et les Politiques Publiques.</p>
              <div style="margin-top: 20px; text-align: left;">
                <p><i class="fas fa-check-circle" style="color: var(--primary-green); margin-right: 8px;"></i> <strong>Hypothèse I:</strong> L'accessibilité spatiale est le moteur principal de la résilience territoriale des zones rurales de Béjaïa.</p>
                <p><i class="fas fa-check-circle" style="color: var(--primary-green); margin-right: 8px;"></i> <strong>Hypothèse II:</strong> Le raccordement aux réseaux (AEP/Énergie) agit comme un catalyseur structurel de la réduction de la pauvreté multidimensionnelle.</p>
                <p><i class="fas fa-check-circle" style="color: var(--primary-green); margin-right: 8px;"></i> <strong>Hypothèse III:</strong> La performance fiscale des communes (recettes propres) est inversement proportionnelle à la distance aux pôles urbains majeurs (Bejaia/Akbou).</p>
                <p><i class="fas fa-check-circle" style="color: var(--primary-green); margin-right: 8px;"></i> <strong>Hypothèse IV:</strong> Le développement du capital humain est freiné par l'enclavement topographique, malgré les politiques de rattrapage.</p>
              </div>
            </div>
            <div class="card" id="cluster-card">
              <h3>Typologie des Communes</h3>
              <p>6 clusters identifiés par des techniques de clustering avancées. <em>Cliquez pour plus de détails.</em></p>
              <div class="cluster-list" style="margin-top: 15px; text-align: left;">
                ${clusters.map(c => `
                  <div class="cluster-item clickable" data-cluster-id="${c.id}" style="margin-bottom: 8px; display: flex; align-items: center; gap: 10px; font-size: 0.9rem; padding: 8px; border-radius: 6px; cursor: pointer; transition: background 0.2s;">
                    <span style="width: 14px; height: 14px; border-radius: 50%; background: ${clusterColors[c.id]}; flex-shrink: 0; border: 1px solid rgba(0,0,0,0.1);"></span>
                    <strong>${c.name}</strong>
                  </div>`).join('')}
              </div>
              <div id="cluster-detail" style="margin-top: 20px; padding: 15px; background: var(--light-blue); border-radius: 8px; display: none; text-align: left; border-left: 4px solid var(--primary-blue);">
                <h4 id="cluster-detail-title" style="margin: 0 0 5px; color: var(--primary-blue);"></h4>
                <p id="cluster-detail-text" style="font-size: 0.85rem; margin: 0;"></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="dimensions" style="background: white;">
        <div class="container">
          <h2 class="section-title">Les 8 Dimensions du Cadre de Vie</h2>
          <p class="section-subtitle">Chaque dimension représente un pilier essentiel pour mesurer la qualité de vie des bejaouis.</p>
          <div class="card-grid" id="dimension-grid">
            ${dimensions.map(d => `
              <div class="card dimension-card" data-dim-id="${d.id}" style="cursor: pointer; transition: all 0.3s; position: relative; overflow: hidden;">
                <div class="card-icon"><i class="fas fa-${d.icon}"></i></div>
                <h3>${d.name}</h3>
                <p style="font-size: 0.85rem; color: var(--text-light);"><em>Cliquez pour le diagnostic scientifique.</em></p>
                <div class="dim-desc" style="display: none; margin-top: 15px; padding-top: 15px; border-top: 1px solid #eee; text-align: left; font-size: 0.82rem; color: var(--text-dark); animation: fadeIn 0.3s;">
                  ${d.description}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <section id="dashboard">
        <div class="container">
          <h2 class="section-title">Tableau de Bord des Élus</h2>
          <p class="section-subtitle">Comparez la performance de votre commune par rapport à la moyenne de la Wilaya.</p>
          
          <div class="dashboard">
            <div class="dashboard-tabs">
              <button class="tab-btn active" data-year="Global">Vue Globale</button>
              <button class="tab-btn" data-year="2016">2016</button>
              <button class="tab-btn" data-year="2017">2017</button>
              <button class="tab-btn" data-year="2018">2018</button>
              <button class="tab-btn" data-year="2019">2019</button>
              <button class="tab-btn" data-year="2020">2020</button>
            </div>

            <div class="dashboard-controls" style="display: flex; align-items: center; gap: 15px; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; margin-bottom: 25px; border: 1px solid rgba(255,255,255,0.1);">
              <label for="commune-select" style="font-weight: 600; color: var(--primary-blue);">📍 Sélectionner une commune :</label>
              <select id="commune-select" style="padding: 10px 15px; border-radius: 8px; border: 1px solid #d4af37; background: white; font-weight: 600; color: #1a3a5f; cursor: pointer; flex: 1;">
                ${[...communeData].sort((a, b) => a.name.localeCompare(b.name)).map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
              </select>
            </div>

            <div class="dashboard-grid">
              <div class="stats-panel" id="commune-details">
                <!-- Details injected here -->
              </div>
              <div class="chart-panel">
                <canvas id="radarChart"></canvas>
              </div>
            </div>

            <h3 class="section-subtitle" style="margin-top: 40px; text-align: left; color: var(--primary-blue);">Finances Locales (Millions DA)</h3>
            <div class="dashboard-grid">
              <div class="chart-panel">
                <canvas id="financeChart"></canvas>
              </div>
              <div class="stats-panel" id="finance-details">
                <!-- Finance details injected here -->
              </div>
            </div>

            <!-- Cartes SIG — Espace Élus uniquement -->
            <div id="elus-sig-maps" style="display: none; margin-top: 50px; border-top: 2px solid #e8edf2; padding-top: 40px;">
              <h3 style="font-size: 1.3rem; color: var(--primary-blue); margin-bottom: 8px;">
                <i class="fas fa-map" style="margin-right: 10px; color: #d4af37;"></i>Cartes SIG de Référence (Mapinfo 8.0)
              </h3>
              <p style="color: var(--text-light); font-size: 0.9rem; margin-bottom: 25px;">Cartes thématiques extraites de la thèse de doctorat — analyses spatiales multicritères établies par l'auteur.</p>

              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 25px;">

                <div class="card" style="padding: 0; overflow: hidden;">
                  <div style="padding: 16px 20px; border-bottom: 3px solid var(--primary-blue); background: var(--light-blue);">
                    <p style="font-size: 0.7rem; font-weight: 700; text-transform: uppercase; color: var(--primary-blue); margin-bottom: 3px;">Dimension Transport</p>
                    <h4 style="font-size: 1rem; color: var(--primary-blue); font-weight: 700;">Accessibilité Ferroviaire</h4>
                    <p style="font-size: 0.8rem; color: var(--text-light); margin-top: 2px;">Distance moyenne à une gare par commune</p>
                  </div>
                  <img src="./sig_mapinfo_transport.png" alt="Carte accessibilité ferroviaire - Mapinfo" style="width: 100%; display: block; cursor: zoom-in;" onclick="window.open(this.src)">
                  <div style="padding: 10px 15px; background: #f8f9fa;">
                    <p style="font-size: 0.75rem; color: var(--text-light); font-style: italic;">Source : Établi par l'auteur à l'aide du logiciel Mapinfo. Thèse de doctorat, Université de Béjaïa.</p>
                  </div>
                </div>

                <div class="card" style="padding: 0; overflow: hidden;">
                  <div style="padding: 16px 20px; border-bottom: 3px solid #e65100; background: #fff3e0;">
                    <p style="font-size: 0.7rem; font-weight: 700; text-transform: uppercase; color: #e65100; margin-bottom: 3px;">Dimension Économique</p>
                    <h4 style="font-size: 1rem; color: #e65100; font-weight: 700;">Emploi &amp; Tissu Économique</h4>
                    <p style="font-size: 0.8rem; color: var(--text-light); margin-top: 2px;">Emploi généré &amp; nombre de PME par commune</p>
                  </div>
                  <img src="./sig_mapinfo_emploi.png" alt="Carte emploi et PME - Mapinfo" style="width: 100%; display: block; cursor: zoom-in;" onclick="window.open(this.src)">
                  <div style="padding: 10px 15px; background: #f8f9fa;">
                    <p style="font-size: 0.75rem; color: var(--text-light); font-style: italic;">Source : Établi par l'auteur à l'aide du logiciel Mapinfo. Thèse de doctorat, Université de Béjaïa.</p>
                  </div>
                </div>

                <div class="card" style="padding: 0; overflow: hidden;">
                  <div style="padding: 16px 20px; border-bottom: 3px solid var(--primary-green); background: #f0fff4;">
                    <p style="font-size: 0.7rem; font-weight: 700; text-transform: uppercase; color: var(--primary-green); margin-bottom: 3px;">Dimension Éducation (Chapitre V)</p>
                    <h4 style="font-size: 1rem; color: var(--primary-green); font-weight: 700;">Scolarisation des 6-10 ans</h4>
                    <p style="font-size: 0.8rem; color: var(--text-light); margin-top: 2px;">Taux de scolarisation des enfants de 6 à 10 ans</p>
                  </div>
                  <img src="./sig_mapinfo_enfants.png" alt="Carte scolarisation 6-10 ans - Mapinfo" style="width: 100%; display: block; cursor: zoom-in;" onclick="window.open(this.src)">
                  <div style="padding: 10px 15px; background: #f8f9fa;">
                    <p style="font-size: 0.75rem; color: var(--text-light); font-style: italic;">Source : Établi par l'auteur à l'aide du logiciel Mapinfo. Thèse de doctorat, Université de Béjaïa, p. 152-153.</p>
                  </div>
                </div>

                <div class="card" style="padding: 0; overflow: hidden;">
                  <div style="padding: 16px 20px; border-bottom: 3px solid #7b1fa2; background: #f3e5f5;">
                    <p style="font-size: 0.7rem; font-weight: 700; text-transform: uppercase; color: #7b1fa2; margin-bottom: 3px;">Dimension Éducation</p>
                    <h4 style="font-size: 1rem; color: #7b1fa2; font-weight: 700;">Occupation des Classes Primaires</h4>
                    <p style="font-size: 0.8rem; color: var(--text-light); margin-top: 2px;">Taux d'occupation des classes de l'enseignement primaire</p>
                  </div>
                  <img src="./sig_mapinfo_scolarisation.png" alt="Carte occupation classes primaires - Mapinfo" style="width: 100%; display: block; cursor: zoom-in;" onclick="window.open(this.src)">
                  <div style="padding: 10px 15px; background: #f8f9fa;">
                    <p style="font-size: 0.75rem; color: var(--text-light); font-style: italic;">Source : Établi par l'auteur à l'aide du logiciel Mapinfo. Thèse de doctorat, Université de Béjaïa.</p>
                  </div>
                </div>

                <div class="card" style="padding: 0; overflow: hidden;">
                  <div style="padding: 16px 20px; border-bottom: 3px solid #0288d1; background: #e1f5fe;">
                    <p style="font-size: 0.7rem; font-weight: 700; text-transform: uppercase; color: #0288d1; margin-bottom: 3px;">Dimension Eau &amp; Assainissement</p>
                    <h4 style="font-size: 1rem; color: #0288d1; font-weight: 700;">Taux d'Accès à l'Eau Potable</h4>
                    <p style="font-size: 0.8rem; color: var(--text-light); margin-top: 2px;">Taux de raccordement au réseau d'alimentation en eau</p>
                  </div>
                  <img src="./sig_map_water.png" alt="Carte Eau Potable" style="width: 100%; display: block; cursor: zoom-in;" onclick="window.open(this.src)">
                  <div style="padding: 10px 15px; background: #f8f9fa;">
                    <p style="font-size: 0.75rem; color: var(--text-light); font-style: italic;">Source : Données ADE/Direction Hydraulique de la Wilaya de Béjaïa. Analyse spatiale, Thèse de doctorat, p. 220.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cartography" style="background: #f0f4f8;">
        <div class="container">
          <h2 class="section-title">Espace Cartographique Interactif</h2>
          <p class="section-subtitle">Carte interactive des 52 communes de la Wilaya de Béjaïa — cliquez sur une commune pour consulter son diagnostic détaillé.</p>

          <!-- Sélecteur Espace Élus (affiché uniquement si connecté) -->
          <div id="elus-map-selector-bar" style="display: none; align-items: center; gap: 12px; margin-bottom: 12px; background: white; padding: 12px 18px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); border-left: 4px solid #d4af37;">
            <i class="fas fa-shield-alt" style="color: #d4af37; font-size: 1rem;"></i>
            <label for="elus-map-metric-select" style="font-weight: 600; color: #1a3a5f; white-space: nowrap;">Afficher par :</label>
            <select id="elus-map-metric-select" style="padding: 8px 14px; border-radius: 8px; border: 1px solid #d4af37; background: white; font-weight: 600; color: #1a3a5f; cursor: pointer; flex: 1;">
              <optgroup label="Typologie">
                <option value="cluster">Cluster Typologique</option>
              </optgroup>
              <optgroup label="8 Dimensions (Scores 0-100)">
                ${dimensions.map(d => `<option value="score_${d.id}">${d.name}</option>`).join('')}
              </optgroup>
              <optgroup label="Services & Éducation">
                <option value="waterAccess">Accès Eau Potable (%)</option>
                <option value="bacSuccess">Réussite BAC (%)</option>
                <option value="hospitalBeds">Nombre de Lits Hôpital</option>
                <option value="taxis">Disponibilité Taxis</option>
              </optgroup>
              <optgroup label="Finances Locales (Millions DA)">
                <option value="budget">Budget Total</option>
                <option value="fiscalite">Recettes Fiscales</option>
                <option value="recouvrement">Taux de Recouvrement (%)</option>
              </optgroup>
            </select>
          </div>

          <!-- Légende cluster (toujours visible) -->
          <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 15px; align-items: center;">
            <span style="font-weight: 600; color: #1a3a5f; margin-right: 5px;"><i class="fas fa-layer-group" style="margin-right: 6px;"></i>Clusters Typologiques :</span>
            ${clusters.map(c => `
              <span style="display: flex; align-items: center; gap: 5px; font-size: 0.85rem; background: white; padding: 5px 10px; border-radius: 20px; box-shadow: 0 1px 4px rgba(0,0,0,0.08);">
                <span style="width: 12px; height: 12px; border-radius: 50%; background: ${clusterColors[c.id]}; display: inline-block; flex-shrink: 0;"></span>
                ${c.name}
              </span>
            `).join('')}
            <span id="map-elus-hint" style="margin-left: auto; font-size: 0.78rem; color: #888; font-style: italic; display: flex; align-items: center; gap: 5px;">
              <i class="fas fa-lock" style="color: #d4af37;"></i>
              Autres indicateurs disponibles dans l'<strong style="color: #1a3a5f;">Espace Élus</strong>
            </span>
          </div>

          <div id="bejaia-map" style="height: 500px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.12); z-index: 0;"></div>

          
        </div>
      </section>


      <section id="recommendations">
        <div class="container">
          <h2 class="section-title">Recommandations & Gouvernance</h2>
          <p class="section-subtitle">Actions prioritaires pour un développement territorial équilibré.</p>
          <div class="card-grid" id="recommendations-grid">
            <div class="card recommendation-card" data-rec="decentral" style="cursor: pointer; transition: all 0.3s;">
              <div class="card-icon"><i class="fas fa-sitemap"></i></div>
              <h3>Décentralisation</h3>
              <p style="font-size: 0.85rem; color: var(--text-light);">Renforcer l'autonomie locale pour une meilleure réactivité aux besoins spécifiques.</p>
              <div class="rec-detail" style="display: none; margin-top: 15px; padding-top: 10px; border-top: 1px solid rgba(0,0,0,0.05); text-align: left; font-size: 0.82rem; color: var(--text-dark); animation: fadeIn 0.3s;">
                <strong>Approche Scientifique :</strong> Vers une gouvernance territoriale multiniveaux — Autonomie financière et administrative pour optimiser les arbitrages au plus proche des réalités locales.
              </div>
            </div>
            <div class="card recommendation-card" data-rec="rural" style="cursor: pointer; transition: all 0.3s;">
              <div class="card-icon"><i class="fas fa-seedling"></i></div>
              <h3>Zones Rurales</h3>
              <p style="font-size: 0.85rem; color: var(--text-light);">Investissements ciblés dans les infrastructures de base (Eau, Routes, Santé).</p>
              <div class="rec-detail" style="display: none; margin-top: 15px; padding-top: 10px; border-top: 1px solid rgba(0,0,0,0.05); text-align: left; font-size: 0.82rem; color: var(--text-dark); animation: fadeIn 0.3s;">
                <strong>Approche Scientifique :</strong> Aménagement compensatoire et équité spatiale — Consolidation systématique des pôles de services secondaires pour freiner l'exode rural.
              </div>
            </div>
            <div class="card recommendation-card" data-rec="data" style="cursor: pointer; transition: all 0.3s; border: 2px solid var(--primary-green);">
              <div class="card-icon"><i class="fas fa-laptop-code"></i></div>
              <h3>Innovation Data</h3>
              <p style="font-size: 0.85rem; color: var(--text-light);">Mise en place d'une plateforme de données intégrée pour un suivi continu.</p>
              <div class="rec-detail" style="display: none; margin-top: 15px; padding-top: 10px; border-top: 1px solid rgba(0,0,0,0.05); text-align: left; font-size: 0.82rem; color: var(--text-dark); animation: fadeIn 0.3s;">
                <strong>Approche Scientifique :</strong> Plateforme 'Open-Wilaya' — Intégration en temps réel des flux de données SIG pour une supervision continue des indicateurs de développement humain.
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    initializeDashboard();
    initializeMap();
  };

  let radarChart = null;
  let financeChart = null;
  let leafletMap = null;
  let markersLayer = null;
  let activeMarker = null;

  const getMetricValue = (commune, metric) => {
    if (metric === 'cluster') return commune.cluster;
    if (metric.startsWith('score_')) {
      const dimId = metric.replace('score_', '');
      return commune.scores[dimId];
    }
    if (metric === 'waterAccess') return commune.details.waterAccess;
    if (metric === 'bacSuccess') return commune.details.bacSuccess;
    if (metric === 'hospitalBeds') return commune.details.hospitalBeds;
    if (metric === 'taxis') return commune.details.taxis;
    if (metric === 'budget') return commune.finances.budgetTotal;
    if (metric === 'fiscalite') return commune.finances.recettesFiscales;
    if (metric === 'recouvrement') return commune.finances.tauxRecouvrement;
    return null;
  };

  const getMetricColor = (metric, value) => {
    if (!value && value !== 0) return '#aaa';

    // Special case for Cluster (not a scale)
    if (metric === 'cluster') return clusterColors[value] || '#999';

    // Handle absolute values by normalizing for colors
    let normalizedValue = value;

    if (metric === 'hospitalBeds') {
      normalizedValue = (value / 500) * 100; // 500 beds as 100% reference
    } else if (metric === 'taxis') {
      normalizedValue = (value / 150) * 100; // 150 taxis as 100% reference
    } else if (metric === 'budget') {
      normalizedValue = (value / 1500) * 100; // 1.5B DA as 100% reference
    } else if (metric === 'fiscalite') {
      normalizedValue = (value / 1000) * 100; // 1B DA as 100% reference
    }

    // Gradient red -> yellow -> green
    const pct = Math.min(100, Math.max(0, parseFloat(normalizedValue))) / 100;
    if (pct >= 0.85) return `#1b5e20`; // very dark green
    if (pct >= 0.70) return `#2e7d32`; // dark green
    if (pct >= 0.55) return `#81c784`; // light green
    if (pct >= 0.40) return `#fdd835`; // yellow
    if (pct >= 0.25) return `#fb8c00`; // orange
    return `#c62828`;                   // dark red
  };

  const initializeMap = () => {
    // Multiple basemap tile layers
    const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    });

    const topoLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenTopoMap',
      maxZoom: 17,
    });

    const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: '© Esri — Source: Esri, DigitalGlobe',
      maxZoom: 18,
    });

    // Init map
    leafletMap = L.map('bejaia-map', {
      center: [36.65, 4.85],
      zoom: 9,
      zoomControl: true,
      layers: [osmLayer],
    });

    // Layer groups
    const communePolygonsLayer = L.layerGroup();
    const wilayaBoundaryLayer = L.layerGroup();
    markersLayer = L.layerGroup();

    communePolygonsLayer.addTo(leafletMap);
    wilayaBoundaryLayer.addTo(leafletMap);
    markersLayer.addTo(leafletMap);

    // Build popup content for a commune
    const buildPopup = (commune) => {
      const clusterInfo = clusters.find(cl => cl.id === commune.cluster);
      const isRisk = commune.details.riskAlert;
      return `
        <div style="font-family: 'Inter', sans-serif; min-width: 220px; max-width: 260px;">
          <div style="background: ${clusterColors[commune.cluster]}; color: white; padding: 8px 12px; margin: -8px -8px 10px; border-radius: 4px 4px 0 0;">
            <h4 style="margin: 0; font-size: 1rem;">${commune.name}</h4>
            <p style="margin: 2px 0 0; font-size: 0.75rem; opacity: 0.9;">${clusterInfo.name}</p>
          </div>
          ${isRisk ? `<div style="background: #fff3f3; border-left: 3px solid #d32f2f; padding: 4px 8px; margin-bottom: 8px; border-radius: 3px; font-size: 0.78rem; color: #d32f2f;"><strong>⚠ Zone d'attention prioritaire</strong></div>` : ''}
          <table style="font-size: 0.82rem; width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #eee;"><td style="color: #888; padding: 3px 0;">💧 Eau Potable</td><td style="font-weight: 600; text-align:right; color: ${commune.details.waterAccess >= 80 ? '#2e7d32' : '#e65100'};">${commune.details.waterAccess}%</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="color: #888; padding: 3px 0;">📚 Réussite BAC</td><td style="font-weight: 600; text-align:right;">${commune.details.bacSuccess}%</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="color: #888; padding: 3px 0;">🏥 Lits Hôpital</td><td style="font-weight: 600; text-align:right;">${commune.details.hospitalBeds}</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="color: #888; padding: 3px 0;">💰 Budget</td><td style="font-weight: 600; text-align:right;">${commune.finances.budgetTotal} M DA</td></tr>
            <tr><td style="color: #888; padding: 3px 0;">📈 Recouvrement</td><td style="font-weight: 600; text-align:right;">${commune.finances.tauxRecouvrement}%</td></tr>
          </table>
          <button onclick="
            document.getElementById('commune-select').value='${commune.id}';
            document.getElementById('commune-select').dispatchEvent(new Event('change'));
            document.getElementById('dashboard').scrollIntoView({behavior:'smooth'});
          " style="margin-top: 10px; width: 100%; padding: 7px 10px; background: #1a3a5f; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 0.82rem; font-weight: 600;">
            📊 Voir le diagnostic complet
          </button>
        </div>`;
    };

    // Draw commune polygons (choropleth + permanent borders)
    const drawPolygons = (metric = 'cluster') => {
      communePolygonsLayer.clearLayers();

      if (!communePolygonData) return;

      communePolygonData.features.forEach(feature => {
        const name = feature.properties.name;

        // Match to communeData by normalized name
        const commune = communeData.find(c => {
          const osmName = name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[- ']/g, '');
          const cdName = c.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[- ']/g, '');
          return osmName === cdName ||
            osmName.includes(cdName.split(' ')[0]) ||
            cdName.includes(osmName.split(' ')[0]);
        });

        let fillColor = '#bdbdbd';
        let fillOpacity = 0.5;

        if (commune) {
          if (metric === 'cluster') {
            fillColor = clusterColors[commune.cluster] || '#999';
            fillOpacity = 0.45;
          } else {
            const val = getMetricValue(commune, metric);
            fillColor = getMetricColor(metric, val);
            fillOpacity = 0.55;
          }
        }

        const polygon = L.geoJSON(feature, {
          style: {
            color: '#1a3a5f',
            weight: 1.5,
            opacity: 0.8,
            fillColor,
            fillOpacity,
          },
        });

        if (commune) {
          polygon.bindPopup(buildPopup(commune), { maxWidth: 270 });
          
          // Add permanent bold labels
          polygon.bindTooltip(commune.name, {
            permanent: true,
            direction: 'center',
            className: 'commune-label',
            offset: [0, 0]
          });

          polygon.on('click', () => {
            document.getElementById('commune-select').value = commune.id;
            document.getElementById('commune-select').dispatchEvent(new Event('change'));
            reDrawMarkers(metric);
          });
          polygon.on('mouseover', function (e) {
            this.setStyle({ weight: 3, color: '#fff', fillOpacity: fillOpacity + 0.2 });
          });
          polygon.on('mouseout', function (e) {
            this.setStyle({ weight: 1.5, color: '#1a3a5f', fillOpacity });
          });
        }

        communePolygonsLayer.addLayer(polygon);
      });
    };

    // Wilaya outer boundary (bold outline)
    const drawWilayaBoundary = () => {
      wilayaBoundaryLayer.clearLayers();
      if (!wilayaBoundaryData) return;
      L.geoJSON(wilayaBoundaryData, {
        style: {
          color: '#0d1b2a',
          weight: 3.5,
          opacity: 1,
          fillColor: 'transparent',
          fill: false,
          dashArray: null,
        },
      }).addTo(wilayaBoundaryLayer);
    };

    // Draw centroid markers
    const reDrawMarkers = (metric = 'cluster') => {
      markersLayer.clearLayers();
      if (!bejaiaGeoData) return;

      const select = document.getElementById('commune-select');
      communeData.forEach(commune => {
        const geoCommune = bejaiaGeoData.features.find(f =>
          f.properties.name.toLowerCase().replace(/[- ']/g, '') ===
          commune.name.toLowerCase().replace(/[- ']/g, '') ||
          f.properties.name.toLowerCase().includes(commune.name.toLowerCase().split(' ')[0])
        );
        if (!geoCommune) return;

        const [lng, lat] = geoCommune.geometry.coordinates;
        const isSelected = select && parseInt(select.value) === commune.id;
        const isRisk = commune.details.riskAlert;

        if (!isSelected && !isRisk) return; // Only show selected + risk markers to avoid clutter

        let dotColor = clusterColors[commune.cluster] || '#999';
        const size = isSelected ? 16 : 10;

        const html = `<div style="
          background: ${isSelected ? '#fff' : dotColor};
          border: ${isSelected ? `3px solid ${dotColor}` : '2px solid rgba(255,47,47,0.8)'};
          border-radius: 50%;
          width: ${size}px; height: ${size}px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.5);
          ${isRisk ? 'animation: pulse 1.5s infinite;' : ''}
        "></div>`;

        const icon = L.divIcon({ html, className: '', iconSize: [size, size], iconAnchor: [size / 2, size / 2] });
        L.marker([lat, lng], { icon })
          .bindPopup(buildPopup(commune), { maxWidth: 270 })
          .addTo(markersLayer);
      });
    };

    // Legend control
    const LegendControl = L.Control.extend({
      options: { position: 'bottomright' },
      onAdd: function () {
        const div = L.DomUtil.create('div');
        div.id = 'map-legend';
        div.style.cssText = 'background: white; padding: 12px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.2); font-family: Inter, sans-serif; font-size: 0.78rem; min-width: 170px;';
        div.innerHTML = '<strong style="display:block; margin-bottom: 8px; color:#1a3a5f;">Légende</strong>';
        return div;
      }
    });
    const legend = new LegendControl().addTo(leafletMap);

    // Add interactivity for dimensions
    setTimeout(() => {
      const dimCards = document.querySelectorAll('.dimension-card');
      dimCards.forEach(card => {
        card.addEventListener('click', () => {
          const desc = card.querySelector('.dim-desc');
          const isVisible = desc.style.display === 'block';
          
          // Reset others
          document.querySelectorAll('.dim-desc').forEach(d => d.style.display = 'none');
          document.querySelectorAll('.dimension-card').forEach(c => {
            c.style.transform = 'scale(1)';
            c.style.boxShadow = 'var(--shadow)';
            c.style.borderColor = '#e0e0e0';
          });

          if (!isVisible) {
            desc.style.display = 'block';
            card.style.transform = 'translateY(-5px) scale(1.02)';
            card.style.boxShadow = 'var(--shadow-lg)';
            card.style.borderColor = 'var(--primary-blue)';
          }
        });
      });

      // Add interactivity for recommendations
      const recCards = document.querySelectorAll('.recommendation-card');
      recCards.forEach(card => {
        card.addEventListener('click', () => {
          const detail = card.querySelector('.rec-detail');
          const isVisible = detail.style.display === 'block';

          // Reset others
          document.querySelectorAll('.rec-detail').forEach(d => d.style.display = 'none');
          document.querySelectorAll('.recommendation-card').forEach(c => {
            c.style.transform = 'scale(1)';
            c.style.boxShadow = 'var(--shadow)';
          });

          if (!isVisible) {
            detail.style.display = 'block';
            card.style.transform = 'translateY(-5px) scale(1.02)';
            card.style.boxShadow = 'var(--shadow-lg)';
          }
        });
      });

      const items = document.querySelectorAll('.cluster-item.clickable');
    }, 500); // Delay to ensure elements are rendered

    const updateLegend = (metric) => {
      const el = document.getElementById('map-legend');
      if (!el) return;
      if (metric === 'cluster') {
        el.innerHTML = '<strong style="display:block; margin-bottom:8px; color:#1a3a5f;">Clusters Typologiques</strong>' +
          clusters.map(c => `<div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;"><span style="width:14px;height:14px;border-radius:3px;background:${clusterColors[c.id]};flex-shrink:0;"></span><span style="font-size:0.7rem;">${c.name}</span></div>`).join('');
      } else {
        let label = "Performance";
        let sub = "Score (0-100)";

        if (metric.startsWith('score_')) {
          const d = dimensions.find(dim => dim.id === metric.replace('score_', ''));
          label = d.name;
        } else {
          const labels = {
            waterAccess: ["Eau Potable", "% de raccordement"],
            bacSuccess: ["Réussite BAC", "% de succès"],
            hospitalBeds: ["Santé", "Nb de lits (réf: 500)"],
            taxis: ["Transport", "Nb de taxis (réf: 150)"],
            budget: ["Finances", "Budget (réf: 1500M DA)"],
            fiscalite: ["Économie", "Fiscalité (réf: 1000M DA)"],
            recouvrement: ["Performance", "Recouvrement fiscal (%)"]
          };
          [label, sub] = labels[metric] || ["Indicateur", "Valeur"];
        }

        el.innerHTML = `<strong style="display:block;margin-bottom:2px;color:#1a3a5f;">${label}</strong>` +
          `<p style="font-size:0.65rem; color:#666; margin-bottom:8px;">${sub}</p>` +
          [['#1b5e20', 'Très Élevé (>85)'], ['#2e7d32', 'Élevé (70-85)'], ['#81c784', 'Satisfaisant (55-70)'], ['#fdd835', 'Moyen (40-55)'], ['#fb8c00', 'Faible (25-40)'], ['#c62828', 'Déficitaire (<25)']].map(([c, l]) =>
            `<div style="display:flex;align-items:center;gap:6px;margin-bottom:3px;"><span style="width:14px;height:14px;border-radius:3px;background:${c};flex-shrink:0;"></span>${l}</div>`).join('') +
          '<div style="display:flex;align-items:center;gap:6px;margin-top:4px;"><span style="width:14px;height:14px;border-radius:3px;background:#aaa;flex-shrink:0;"></span>Donnée manquante</div>';
      }
    };

    // Basemap + overlay layer control (Leaflet native)
    const baseMaps = { "🗺️ OpenStreetMap": osmLayer, "🛰️ Satellite": satelliteLayer, "🏔️ Topographique": topoLayer };
    const overlays = {
      "📐 Limites communes": communePolygonsLayer,
      "🔷 Limite wilaya": wilayaBoundaryLayer,
      "📍 Marqueurs": markersLayer,
    };
    L.control.layers(baseMaps, overlays, { position: 'topright', collapsed: false }).addTo(leafletMap);

    // Load all data
    Promise.all([
      fetch('bejaia_communes.json').then(r => r.json()),
      fetch('bejaia_communes_polygons.json').then(r => r.json()),
      fetch('bejaia_wilaya.json').then(r => r.json()),
    ]).then(([points, polygons, wilaya]) => {
      bejaiaGeoData = points;
      communePolygonData = polygons;
      wilayaBoundaryData = wilaya;

      // Draw everything
      drawPolygons('cluster');
      drawWilayaBoundary();
      reDrawMarkers('cluster');
      updateLegend('cluster');

      // Set initial view to match the preferred coastal focus (Chapter VII Analysis)
      leafletMap.setView([36.72, 5.08], 10);

      // Public map always stays on cluster — no selector to sync here.

      // Sync Espace Élus metric selector => update map
      const elusMetricSelect = document.getElementById('elus-map-metric-select');
      if (elusMetricSelect) {
        elusMetricSelect.addEventListener('change', () => {
          const m = elusMetricSelect.value;
          drawPolygons(m);
          drawWilayaBoundary();
          reDrawMarkers(m);
          updateLegend(m);
          // Scroll map into view
          document.getElementById('bejaia-map')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
      }

      // Sync dashboard commune selector to redraw markers
      const communeSelect = document.getElementById('commune-select');
      if (communeSelect) {
        communeSelect.addEventListener('change', () => {
          const m = document.getElementById('elus-map-metric-select')?.value || 'cluster';
          reDrawMarkers(m);
        });
      }

    }).catch(err => console.warn('Map data load error:', err));
  };

  let bejaiaGeoData = null;
  let communePolygonData = null;
  let wilayaBoundaryData = null;



  const initializeDashboard = () => {
    const select = document.getElementById('commune-select');
    const detailsDiv = document.getElementById('commune-details');
    const financeDetailsDiv = document.getElementById('finance-details');
    const radarCtx = document.getElementById('radarChart').getContext('2d');
    const financeCtx = document.getElementById('financeChart').getContext('2d');
    let currentYear = 'Global';

    const updateUI = (communeId, year = 'Global') => {
      const commune = communeData.find(c => c.id == communeId);
      const clusterInfo = clusters.find(cl => cl.id === commune.cluster);
      
      const data = (year === 'Global') ? commune : commune.history[year];
      
      // Handle missing regionalAverageHistory gracefully
      const avg = (year === 'Global' || !regionalAverageHistory) ? regionalAverage : {
        scores: regionalAverageHistory[year] ? regionalAverageHistory[year].scores : regionalAverage.scores,
        finances: regionalAverageHistory[year] ? {
          budgetTotal: Math.round(regionalAverageHistory[year].total * 1000 / 52),
          recettesFiscales: Math.round(regionalAverageHistory[year].total * 1000 / 52 * 0.65),
          depensesFonctionnement: Math.round(regionalAverageHistory[year].total * 1000 / 52 * 0.70),
          depensesEquipement: Math.round(regionalAverageHistory[year].total * 1000 / 52 * (regionalAverageHistory[year].investment || 0.2))
        } : regionalAverage.finances
      };

      // Build focus HTML
      let focusHtml = '';
      
      if (year !== 'Global') {
        focusHtml += `<div style="margin-bottom: 15px;"><span class="year-badge">Données Exercice ${year}</span></div>`;
        if (data.finances.details && data.finances.details.deficit) {
          focusHtml += `
            <div class="risk-alert" style="background: rgba(255, 77, 77, 0.1); border-left: 4px solid #ff4d4d; color: #ff4d4d;">
              <h4><i class="fas fa-exclamation-circle"></i> Alerte : Excédent de Dépenses</h4>
              <p>Commune identifiée en situation de déficit pour l'exercice ${year} (Tableau 7.1 de la thèse).</p>
            </div>`;
        }
      }

      // Risk Focus (Chapitre VI)
      if (commune.details.riskAlert) {
        focusHtml += `
          <div class="risk-alert">
            <h4><i class="fas fa-exclamation-triangle"></i> Zone d'Attention Prioritaire</h4>
            <p>Taux élevés d'accidents et d'urgences identifiés (Doctorat, p. 245).</p>
            <p style="margin-top: 5px; font-size: 0.85rem;">
              <strong>Accidents:</strong> ${commune.details.accidentRate} &nbsp;|&nbsp;
              <strong>Urgences:</strong> ${commune.details.emergencyCalls} appels/an
            </p>
          </div>`;
      }

      // Education Focus (Chapitre V)
      const bemRate = commune.details.bemSuccess || 62.0;
      const pedResources = commune.details.pedagogicalResources || 'Lacunes identifiées (Zone Orange)';
      const edColor = parseFloat(bemRate) >= 65 ? '#2e7d32' : '#e65100';
      focusHtml += `
        <div class="edu-focus">
          <h4><i class="fas fa-graduation-cap"></i> Focus Éducation (p. 152-153)</h4>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 10px 0;">
            <div>
              <p style="font-size: 0.75rem; color: #666; margin-bottom: 2px;">Réussite BAC</p>
              <p style="font-weight: 700; font-size: 1.1rem; color: var(--primary-blue);">${commune.details.bacSuccess}%</p>
            </div>
            <div>
              <p style="font-size: 0.75rem; color: #666; margin-bottom: 2px;">Réussite BEM</p>
              <p style="font-weight: 700; font-size: 1.1rem; color: ${edColor};">${bemRate}%</p>
            </div>
          </div>
          <p style="font-size: 0.82rem; font-style: italic; border-top: 1px solid #d0e1f9; padding-top: 8px;">
            <strong>Moyens pédagogiques :</strong> ${pedResources}
          </p>
        </div>`;

      detailsDiv.innerHTML = `
        <h3 style="color: var(--primary-blue); margin-bottom: 15px;">📍 ${commune.name}</h3>
        ${focusHtml}
        <div style="font-size: 0.95rem; margin-top: 10px;">
          <p><strong>Accessibilité:</strong> <span style="color: var(--primary-green); float: right;">${commune.details.taxis} Taxis</span></p>
          <p><strong>Santé:</strong> <span style="color: var(--primary-green); float: right;">${commune.details.hospitalBeds} Lits</span></p>
          <p><strong>Eau Potable:</strong> <span style="color: var(--primary-green); float: right;">${commune.details.waterAccess}%</span></p>
          <p><strong>Routes:</strong> <span style="color: var(--primary-green); float: right;">${commune.details.roadStatus}</span></p>
        </div>
        <div class="cluster-badge" style="border-left-color: ${clusterColors[commune.cluster]};">
          <p style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: #856404; margin-bottom: 3px;">Cluster Typologique</p>
          <p style="font-weight: 700; color: ${clusterColors[commune.cluster]}; margin-bottom: 3px;">${clusterInfo.name}</p>
          <p style="font-size: 0.82rem; color: #666; font-style: italic;">${clusterInfo.description}</p>
        </div>
      `;

      const financeDetails = data.finances.details || {};
      financeDetailsDiv.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 20px;">
          <h3 style="color: var(--primary-blue); margin: 0;">💰 Indicateurs Financiers</h3>
          ${year !== 'Global' ? `<span style="font-size: 0.8rem; background: #e3f2fd; color: #1565c0; padding: 4px 10px; border-radius: 4px; font-weight: 600;">${year}</span>` : ''}
        </div>
        <div style="font-size: 0.95rem;">
          <p><strong>Budget Total:</strong> <span style="color: var(--primary-blue); float: right;">${data.finances.budgetTotal} M DA</span></p>
          <p><strong>Recettes Fiscales:</strong> <span style="color: var(--primary-blue); float: right;">${data.finances.recettesFiscales} M DA</span></p>
          <p><strong>Fonctionnement:</strong> <span style="color: var(--primary-blue); float: right;">${data.finances.depensesFonctionnement} M DA</span></p>
          <p><strong>Équipement:</strong> <span style="color: var(--primary-blue); float: right;">${data.finances.depensesEquipement} M DA</span></p>
          
          ${year !== 'Global' ? `
          <div style="margin-top: 15px; padding: 12px; background: rgba(212, 175, 55, 0.05); border-radius: 8px; border: 1px dashed #d4af37;">
            <p style="font-size: 0.85rem; margin-bottom: 5px;"><strong>Rigidité budgétaire:</strong> <span style="float: right;">${financeDetails.rigidité}%</span></p>
            <p style="font-size: 0.85rem; margin-bottom: 5px;"><strong>Autonomie financière:</strong> <span style="float: right;">${financeDetails.autonomie}%</span></p>
            <p style="font-size: 0.85rem;"><strong>Effort investissement:</strong> <span style="float: right;">${financeDetails.effortInvestissement}%</span></p>
          </div>
          ` : `
          <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #ddd;">
            <p><strong>Taux de Recouvrement:</strong></p>
            <div style="width: 100%; background: #eee; border-radius: 20px; height: 10px; margin-top: 5px;">
              <div style="width: ${commune.finances.tauxRecouvrement}%; background: var(--primary-green); height: 100%; border-radius: 20px; transition: width 0.5s ease;"></div>
            </div>
            <p style="text-align: right; font-size: 0.9rem; font-weight: bold; color: var(--primary-green);">${commune.finances.tauxRecouvrement}%</p>
          </div>
          `}
        </div>
      `;

      // Update Radar Chart
      const labels = dimensions.map(d => d.name);
      const communeScores = dimensions.map(d => data.scores[d.id] || 0);
      const avgScores = dimensions.map(d => avg.scores[d.id] || avg.scores.env || 60);

      if (radarChart) radarChart.destroy();
      radarChart = new Chart(radarCtx, {
        type: 'radar',
        data: {
          labels,
          datasets: [
            {
              label: commune.name,
              data: communeScores,
              backgroundColor: 'rgba(46, 125, 50, 0.2)',
              borderColor: '#2e7d32',
              pointBackgroundColor: '#2e7d32',
            },
            {
              label: 'Moyenne Wilaya',
              data: avgScores,
              backgroundColor: 'rgba(26, 58, 95, 0.1)',
              borderColor: '#1a3a5f',
              pointBackgroundColor: '#1a3a5f',
            }
          ]
        },
        options: {
          scales: { r: { beginAtZero: true, max: 100 } },
          plugins: { legend: { position: 'bottom' } }
        }
      });

      // Update Finance Chart
      if (financeChart) financeChart.destroy();
      const financeLabels = ['Budget Total', 'Fiscalité', 'Fonctionnement', 'Équipement'];
      financeChart = new Chart(financeCtx, {
        type: 'bar',
        data: {
          labels: financeLabels,
          datasets: [
            {
              label: commune.name,
              data: [data.finances.budgetTotal, data.finances.recettesFiscales, data.finances.depensesFonctionnement, data.finances.depensesEquipement],
              backgroundColor: '#2e7d32',
            },
            {
              label: 'Moyenne Wilaya',
              data: [avg.finances.budgetTotal, avg.finances.recettesFiscales, avg.finances.depensesFonctionnement, avg.finances.depensesEquipement],
              backgroundColor: '#1a3a5f',
            }
          ]
        },
        options: {
          responsive: true,
          scales: { y: { beginAtZero: true, title: { display: true, text: 'Millions de Dinars (DA)' } } },
          plugins: { legend: { position: 'bottom' } }
        }
      });
    };

    select.addEventListener('change', (e) => updateUI(e.target.value, currentYear));

    // Tab Logic
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentYear = btn.dataset.year;
        updateUI(select.value, currentYear);
      });
    });

    updateUI(select.value, 'Global');
  };

  // ============================================================
  // AUTHENTICATION — Espace Réservé aux Élus
  // ============================================================

  // Credentials & Password Persistence Strategy
  const DEFAULT_COMMUNE_PWD = 'Bejaia06';
  const SPECIAL_ACCOUNTS = [
    { username: 'lotfi bahloul', password: 'admin123', role: 'super-admin' },
    { username: 'wilaya de bejaia', password: 'Bejaia06', role: 'admin' },
    { username: 'test', password: 'test', role: 'test' }
  ];

  const getStoredPassword = (username) => {
    return localStorage.getItem(`auth_pwd_${username.toLowerCase()}`);
  };

  const setStoredPassword = (username, newPassword) => {
    localStorage.setItem(`auth_pwd_${username.toLowerCase()}`, newPassword);
  };

  const verifyCredentials = (username, password) => {
    const lowerUser = username.toLowerCase();
    
    // Check special accounts
    const special = SPECIAL_ACCOUNTS.find(a => a.username === lowerUser);
    if (special) {
      const stored = getStoredPassword(lowerUser) || special.password;
      return password === stored ? { ...special, username: lowerUser } : null;
    }

    // Check communes
    const commune = communeData.find(c => c.name.toLowerCase() === lowerUser);
    if (commune) {
      const stored = getStoredPassword(lowerUser) || DEFAULT_COMMUNE_PWD;
      return password === stored ? { username: lowerUser, role: 'commune', communeId: commune.id, name: commune.name } : null;
    }

    return null;
  };

  const SESSION_KEY = 'elus_authenticated';
  const USER_DATA_KEY = 'elus_user_data';

  const isAuthenticated = () => sessionStorage.getItem(SESSION_KEY) === 'true';
  const getLoggedInUser = () => JSON.parse(sessionStorage.getItem(USER_DATA_KEY) || '{}');

  const updateNavForAuth = () => {
    const nav = document.querySelector('nav');
    if (!nav) return;

    // Remove existing auth-related elements
    nav.querySelectorAll('.nav-elus-btn, .nav-logout-btn, .user-badge, #nav-elus-access').forEach(el => el.remove());

    const container = nav.querySelector('.container') || nav;

    if (isAuthenticated()) {
      const user = getLoggedInUser();
      const displayName = user.role === 'commune' ? `Maire de ${user.name}` : 
                          user.role === 'super-admin' ? 'Lotfi Bahloul' : 'Admin Wilaya';

      const badge = document.createElement('span');
      badge.className = 'user-badge';
      badge.innerHTML = `<i class="fas fa-user-shield"></i> ${displayName}`;
      container.appendChild(badge);

      const logoutBtn = document.createElement('a');
      logoutBtn.href = '#';
      logoutBtn.className = 'nav-logout-btn';
      logoutBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i>';
      logoutBtn.title = 'Déconnexion';
      logoutBtn.onclick = (e) => {
        e.preventDefault();
        sessionStorage.removeItem(SESSION_KEY);
        sessionStorage.removeItem(USER_DATA_KEY);
        location.reload();
      };
      container.appendChild(logoutBtn);
    } else {
      const loginBtn = document.createElement('a');
      loginBtn.href = '#';
      loginBtn.className = 'nav-elus-btn';
      loginBtn.id = 'nav-elus-access';
      loginBtn.innerHTML = '<i class="fas fa-lock"></i> Espace Élus';
      loginBtn.onclick = (e) => {
        e.preventDefault();
        showLoginOverlay();
      };
      container.appendChild(loginBtn);
    }
  };

  const showPasswordChangeModal = (user) => {
    const overlay = document.createElement('div');
    overlay.className = 'login-overlay password-change-overlay';
    overlay.innerHTML = `
      <div class="login-card" style="max-width: 400px;">
        <h3><i class="fas fa-key"></i> Sécurité Compte</h3>
        <p style="font-size: 0.9rem; color: var(--text-light); margin-bottom: 20px;">
          C'est votre première connexion. Veuillez modifier votre mot de passe pour sécuriser l'accès de <strong>${user.name || user.username}</strong>.
        </p>
        <form id="pwd-change-form">
          <div class="form-group">
            <label>Nouveau mot de passe</label>
            <input type="password" id="new-password" required minlength="6" placeholder="Min. 6 caractères">
          </div>
          <div class="form-group">
            <label>Confirmer le mot de passe</label>
            <input type="password" id="confirm-password" required minlength="6">
          </div>
          <div id="pwd-error" class="login-error" style="display:none; margin-bottom:15px;">Les mots de passe ne correspondent pas.</div>
          <button type="submit" class="btn btn-primary" style="width: 100%;">Enregistrer et Continuer</button>
        </form>
      </div>
    `;
    document.body.appendChild(overlay);

    document.getElementById('pwd-change-form').onsubmit = (e) => {
      e.preventDefault();
      const newPwd = document.getElementById('new-password').value;
      const confirmPwd = document.getElementById('confirm-password').value;
      const errorEl = document.getElementById('pwd-error');

      if (newPwd !== confirmPwd) {
        errorEl.style.display = 'block';
        return;
      }

      setStoredPassword(user.username, newPwd);
      overlay.remove();
      // Scroll to dashboard
      document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' });
    };
  };

  const updateDashboardAccess = () => {
    const dashboardSection = document.getElementById('dashboard');
    if (!dashboardSection) return;

    // Remove any existing lock notice
    const existingNotice = dashboardSection.querySelector('.dashboard-lock-notice');
    if (existingNotice) existingNotice.remove();
    dashboardSection.classList.remove('dashboard-lock-overlay');

    if (!isAuthenticated()) {
      dashboardSection.classList.add('dashboard-lock-overlay');
      dashboardSection.style.position = 'relative';

      const lockNotice = document.createElement('div');
      lockNotice.className = 'dashboard-lock-notice';
      lockNotice.innerHTML = `
        <div style="font-size: 2.5rem; margin-bottom: 12px;">🔒</div>
        <h4>Accès Réservé aux Élus</h4>
        <p>Ce tableau de bord contient des données financières et analytiques confidentielles réservées aux élus et responsables de la Wilaya.</p>
        <button onclick="document.getElementById('nav-elus-access').click()" 
          style="background: linear-gradient(135deg, #d4af37, #b8960c); color: #1a1a1a; border: none; padding: 12px 28px; border-radius: 25px; font-weight: 700; font-size: 0.95rem; cursor: pointer; box-shadow: 0 4px 20px rgba(212,175,55,0.35); transition: all 0.3s;"
          onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(212,175,55,0.5)'"
          onmouseout="this.style.transform=''; this.style.boxShadow='0 4px 20px rgba(212,175,55,0.35)'">
          <i class="fas fa-shield-alt" style="margin-right: 8px;"></i>Se connecter
        </button>
      `;
      dashboardSection.appendChild(lockNotice);
    }

    // Show/hide the élus map metric selector bar (above the map) and the thesis SIG maps
    const selectorBar = document.getElementById('elus-map-selector-bar');
    const lockHint    = document.getElementById('map-elus-hint');
    const sigMaps     = document.getElementById('elus-sig-maps');
    
    if (isAuthenticated()) {
      if (selectorBar) selectorBar.style.display = 'flex';
      if (lockHint)    lockHint.style.display = 'none';
      if (sigMaps)     sigMaps.style.display = 'block';
    } else {
      if (selectorBar) selectorBar.style.display = 'none';
      if (lockHint)    lockHint.style.display = 'flex';
      if (sigMaps)     sigMaps.style.display = 'none';
    }
  };

  const showLoginOverlay = () => {
    // Remove existing overlay if any
    const existingOverlay = document.getElementById('login-overlay');
    if (existingOverlay) existingOverlay.remove();

    const overlay = document.createElement('div');
    overlay.id = 'login-overlay';
    overlay.innerHTML = `
      <div class="login-card">
        <div class="login-header">
          <div class="login-shield">🛡️</div>
          <h2>Espace Réservé aux Élus</h2>
          <p>Observatoire Territorial — Wilaya de Béjaïa<br>Accès aux données confidentielles</p>
          <div class="login-divider"></div>
        </div>

        <div id="login-error">
          <i class="fas fa-exclamation-circle" style="margin-right: 6px;"></i>
          Identifiant ou mot de passe incorrect.
        </div>

        <form id="login-form" autocomplete="off" novalidate>
          <div class="login-form-group">
            <label for="login-username">Identifiant</label>
            <div class="login-input-wrapper">
              <input
                id="login-username"
                type="text"
                placeholder="Votre identifiant"
                autocomplete="username"
                required
              />
              <i class="fas fa-user login-input-icon"></i>
            </div>
          </div>

          <div class="login-form-group">
            <label for="login-password">Mot de passe</label>
            <div class="login-input-wrapper">
              <input
                id="login-password"
                type="password"
                placeholder="••••••••"
                autocomplete="current-password"
                required
              />
              <i class="fas fa-lock login-input-icon"></i>
              <button type="button" class="pwd-toggle" id="pwd-toggle-btn" aria-label="Afficher/Masquer le mot de passe">
                <i class="fas fa-eye"></i>
              </button>
            </div>
          </div>

          <button type="submit" class="login-submit-btn">
            <i class="fas fa-sign-in-alt"></i>
            Accéder à l'Espace Élus
          </button>
        </form>

        <div class="login-footer-hint">
          Accès sécurisé — données réservées aux élus et responsables officiels
          <span>Observatoire des Disparités · Wilaya de Béjaïa · 2026</span>
        </div>

        <button id="login-close-btn" style="
          position: absolute;
          top: 18px; right: 22px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          color: rgba(255,255,255,0.6);
          width: 32px; height: 32px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 0.9rem;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s;
        " aria-label="Fermer">✕</button>
      </div>
    `;

    // Make card position relative for the close button
    overlay.querySelector('.login-card').style.position = 'relative';
    document.body.appendChild(overlay);

    // Focus username field
    setTimeout(() => document.getElementById('login-username')?.focus(), 80);

    // Password visibility toggle
    const pwdToggle = document.getElementById('pwd-toggle-btn');
    const pwdInput = document.getElementById('login-password');
    pwdToggle?.addEventListener('click', () => {
      const isHidden = pwdInput.type === 'password';
      pwdInput.type = isHidden ? 'text' : 'password';
      pwdToggle.innerHTML = `<i class="fas fa-${isHidden ? 'eye-slash' : 'eye'}"></i>`;
    });

    // Close on clicking the X button
    document.getElementById('login-close-btn')?.addEventListener('click', () => {
      overlay.style.animation = 'overlayFadeIn 0.3s ease-out reverse';
      setTimeout(() => overlay.remove(), 280);
    });

    // Close on clicking outside the card
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.style.animation = 'overlayFadeIn 0.3s ease-out reverse';
        setTimeout(() => overlay.remove(), 280);
      }
    });

    // Keyboard close
    const onEsc = (e) => {
      if (e.key === 'Escape') {
        overlay.remove();
        document.removeEventListener('keydown', onEsc);
      }
    };
    document.addEventListener('keydown', onEsc);

    // Form submission
    document.getElementById('login-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('login-username')?.value.trim();
      const password = document.getElementById('login-password')?.value;
      const errorEl = document.getElementById('login-error');

      const user = verifyCredentials(username, password);

      if (user) {
        sessionStorage.setItem(SESSION_KEY, 'true');
        sessionStorage.setItem(USER_DATA_KEY, JSON.stringify(user));
        
        // Animate out
        overlay.style.transition = 'opacity 0.35s ease';
        overlay.style.opacity = '0';
        setTimeout(() => {
          overlay.remove();
          updateNavForAuth();
          updateDashboardAccess();
          
          // Check for default password to prompt change
          const isDefault = (user.role === 'commune' && password === DEFAULT_COMMUNE_PWD) || 
                          (user.role === 'super-admin' && password === 'admin123');
          
          if (isDefault) {
            showPasswordChangeModal(user);
          } else {
            // Scroll to dashboard
            document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' });
          }
        }, 350);
      } else {
        // Show error with re-trigger animation
        errorEl.style.display = 'none';
        void errorEl.offsetWidth; // reflow trick to re-trigger animation
        errorEl.style.display = 'block';
        // Shake the card
        const card = overlay.querySelector('.login-card');
        card.style.animation = 'none';
        void card.offsetWidth;
        card.style.animation = 'shake 0.4s ease-in-out';
        setTimeout(() => card.style.animation = '', 400);
        // Clear password
        if (pwdInput) pwdInput.value = '';
        pwdInput?.focus();
      }
    });
  };

  // Initialize app
  renderHome();

  // Set up nav and dashboard access state after rendering
  setTimeout(() => {
    updateNavForAuth();
    updateDashboardAccess();
  }, 100);

  // Also set up nav access for the Dashboard Élus nav link
  document.addEventListener('click', (e) => {
    if (e.target.closest('a[href="#dashboard"]')) {
      if (!isAuthenticated()) {
        e.preventDefault();
        showLoginOverlay();
      }
    }
  });
});

