import Chart from 'chart.js/auto';
import L from 'leaflet';
import { 
  agropastoralWilayaIndicators, 
  agropastoralWilaya, 
  agropastoralCommunes, 
  agropastoralDairas, 
  agropastoralCheptelsWilaya, 
  agropastoralProdAnimalesWilaya 
} from './data/agropastoralData';
import { communeData } from './data/communeData';

export const renderAgropastoralSection = (t) => {
  return `
    <section id="agropastoral" style="background: white; padding: 100px 0; border-top: 1px solid #e2e8f0;">
      <div class="container">
        <h2 class="section-title">Économie Agropastorale et Rurale</h2>
        <p class="section-subtitle">Analyse multidimensionnelle et cartographie des disparités socio-économiques en milieu rural et agropastoral (Campagne 2014/2015)</p>
        
        <!-- KPIs -->
        <div class="kpis" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; margin: 30px 0;">
          <div class="kpi-item" style="background: #f8fafc; border: 1px solid #e2e8f0; color: #1a3a5f; padding: 20px; border-radius: 12px; min-width: 200px;">
            <h3 style="color: #38bdf8; font-size: 2rem; font-weight: 800;">${agropastoralWilayaIndicators.tauxMiseEnValeur}%</h3>
            <p style="font-size: 0.9rem; font-weight: 600; color: #64748b; margin-top: 5px;">Mise en valeur (SAU)</p>
          </div>
          <div class="kpi-item" style="background: #f8fafc; border: 1px solid #e2e8f0; color: #1a3a5f; padding: 20px; border-radius: 12px; min-width: 200px;">
            <h3 style="color: #38bdf8; font-size: 2rem; font-weight: 800;">${agropastoralWilayaIndicators.couvertureForestiere}%</h3>
            <p style="font-size: 0.9rem; font-weight: 600; color: #64748b; margin-top: 5px;">Couverture Forestière</p>
          </div>
          <div class="kpi-item" style="background: #f8fafc; border: 1px solid #e2e8f0; color: #1a3a5f; padding: 20px; border-radius: 12px; min-width: 200px;">
            <h3 style="color: #38bdf8; font-size: 2rem; font-weight: 800;">${agropastoralCheptelsWilaya.bovines.toLocaleString('fr-FR')}</h3>
            <p style="font-size: 0.9rem; font-weight: 600; color: #64748b; margin-top: 5px;">Têtes Bovines</p>
          </div>
          <div class="kpi-item" style="background: #f8fafc; border: 1px solid #e2e8f0; color: #1a3a5f; padding: 20px; border-radius: 12px; min-width: 200px;">
            <h3 style="color: #38bdf8; font-size: 2rem; font-weight: 800;">${agropastoralCheptelsWilaya.ovines.toLocaleString('fr-FR')}</h3>
            <p style="font-size: 0.9rem; font-weight: 600; color: #64748b; margin-top: 5px;">Têtes Ovines</p>
          </div>
        </div>

        <div class="dashboard-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-top: 40px;">
          <!-- Map -->
          <div class="chart-panel" style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 12px;">
            <h4 style="margin: 0 0 15px; font-size: 1.1rem; color: #1a3a5f;"><i class="fas fa-map-marked-alt"></i> Cartographie de la SAU par Commune</h4>
            <div id="agro-map" style="height: 450px; width: 100%; border-radius: 8px; border: 1px solid #cbd5e1; z-index: 1;"></div>
          </div>
          
          <!-- Charts -->
          <div style="display: flex; flex-direction: column; gap: 30px;">
            <div class="chart-panel" style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 12px; flex: 1;">
              <h4 style="margin: 0 0 15px; font-size: 1.1rem; color: #1a3a5f;"><i class="fas fa-chart-pie"></i> Répartition Foncière Globale (Wilaya)</h4>
              <div style="position: relative; height: 200px;">
                <canvas id="agroPieChart"></canvas>
              </div>
            </div>
            
            <div class="chart-panel" style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 12px; flex: 1;">
              <h4 style="margin: 0 0 15px; font-size: 1.1rem; color: #1a3a5f;"><i class="fas fa-chart-bar"></i> SAU par Daïra (Top 5)</h4>
              <div style="position: relative; height: 200px;">
                <canvas id="agroBarChart"></canvas>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
};

export const initAgropastoral = () => {
  // Pie chart
  const pieCtx = document.getElementById('agroPieChart');
  if (pieCtx) {
    new Chart(pieCtx, {
      type: 'doughnut',
      data: {
        labels: ['SAU', 'Forêts', 'Pacages & Parcours', 'Terres Improductives'],
        datasets: [{
          data: [
            agropastoralWilaya.sau, 
            agropastoralWilaya.superfForest, 
            agropastoralWilaya.pacages, 
            agropastoralWilaya.terresImproductivesNonAffect + agropastoralWilaya.terresImproductivesExploit
          ],
          backgroundColor: ['#38bdf8', '#22c55e', '#f59e0b', '#94a3b8'],
          borderWidth: 1,
          borderColor: '#ffffff'
        }]
      },
      options: { 
        responsive: true, 
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: { color: '#1a3a5f', font: { family: 'Inter', size: 11 } }
          }
        }
      }
    });
  }

  // Top 5 Dairas Bar chart
  const barCtx = document.getElementById('agroBarChart');
  if (barCtx) {
    // Sort dairas by SAU to pick top 5
    const topDairas = [...agropastoralDairas].sort((a,b) => b.sau - a.sau).slice(0, 5);
    new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: topDairas.map(d => d.daira),
        datasets: [{
          label: 'SAU (ha)',
          data: topDairas.map(d => d.sau),
          backgroundColor: '#38bdf8',
          borderRadius: 4
        }]
      },
      options: { 
        responsive: true, 
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { color: '#64748b' },
            grid: { color: 'rgba(0,0,0,0.05)' }
          },
          x: {
            ticks: { color: '#1a3a5f', font: { weight: 'bold' } },
            grid: { display: false }
          }
        }
      }
    });
  }

  // Init Map (Requires communeData polygons)
  const mapEl = document.getElementById('agro-map');
  if (mapEl && !mapEl._leaflet_id) {
    const agroMap = L.map('agro-map').setView([36.6, 4.8], 9);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '© OpenStreetMap contributors © CARTO'
    }).addTo(agroMap);

    // Draw polygons
    communeData.forEach(commune => {
      if (commune.polygon && commune.polygon.length > 0) {
        // Find agro data for this commune
        // Need to normalize names for comparison
        const normName = (name) => name.toLowerCase().replace(/[' -]/g, '');
        const searchName = normName(commune.name);
        
        const agroCommune = agropastoralCommunes.find(c => normName(c.commune) === searchName || normName(c.commune).includes(searchName));
        
        let fillColor = '#e2e8f0';
        let popupContent = `<b>${commune.name}</b><br>Données agropastorales non disponibles`;
        let fillOpacity = 0.5;
        
        if (agroCommune) {
          const sauRatio = agroCommune.sau / agroCommune.totalSuperficie;
          // Choropleth color based on SAU Ratio (Taux de mise en valeur)
          fillColor = sauRatio > 0.6 ? '#14532d' : 
                      sauRatio > 0.4 ? '#16a34a' : 
                      sauRatio > 0.2 ? '#4ade80' : 
                      sauRatio > 0.05 ? '#bbf7d0' : '#f0fdf4';
          fillOpacity = 0.8;
          
          popupContent = `
            <div style="font-family: 'Inter', sans-serif;">
              <h4 style="margin: 0 0 5px; color: #1a3a5f;">${commune.name}</h4>
              <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 5px 0;">
              <div style="font-size: 0.85rem; line-height: 1.5; color: #334155;">
                <b>SAU:</b> ${agroCommune.sau.toLocaleString('fr-FR')} ha<br>
                <b>Forêts:</b> ${agroCommune.superfForest.toLocaleString('fr-FR')} ha<br>
                <b>Pacages:</b> ${agroCommune.pacages.toLocaleString('fr-FR')} ha<br>
                <b>Taux de mise en valeur:</b> ${((sauRatio)*100).toFixed(1)}%
              </div>
            </div>
          `;
        }

        const polygon = L.polygon(commune.polygon, {
          color: '#ffffff',
          weight: 1.5,
          fillColor: fillColor,
          fillOpacity: fillOpacity
        }).addTo(agroMap);
        
        polygon.bindPopup(popupContent);
      }
    });
  }
};
