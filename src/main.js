import Chart from 'chart.js/auto';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { communeData, regionalAverage, regionalAverageHistory, dimensions, regionalStats, clusters, dairaData, recommendations, methodology } from './data/communeData';
import { translations } from './data/translations';

// Fix Leaflet marker icon path issue with Vite
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});



document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  // ============================================================
  // GLOBAL PLATFORM ACCESS LOCK
  // ============================================================
  const checkGlobalAccess = () => {
    if (localStorage.getItem('global_access_granted') === 'true') return;
    
    // Hide main UI elements
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';
    app.style.display = 'none';
    document.body.style.overflow = 'hidden';
    
    const lockOverlay = document.createElement('div');
    lockOverlay.id = 'global-lock-overlay';
    lockOverlay.style.cssText = `
      position: fixed; inset: 0; z-index: 999999;
      background: #0f172a; /* Deep dark background */
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      font-family: 'Inter', sans-serif;
    `;
    
    lockOverlay.innerHTML = `
      <div style="background: rgba(255,255,255,0.03); backdrop-filter: blur(10px); padding: 40px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.05); max-width: 450px; width: 90%; text-align: center; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);">
        <div style="margin-bottom: 30px;">
          <i class="fas fa-shield-alt" style="font-size: 3.5rem; color: #38bdf8; margin-bottom: 20px;"></i>
          <h2 style="margin: 0 0 10px; font-size: 1.8rem; color: white;">Accès Restreint</h2>
          <p style="color: #94a3b8; font-size: 0.95rem; margin: 0; line-height: 1.5;">La plateforme de l'Observatoire Territorial est strictement privée. Veuillez entrer votre code d'accès pour continuer.</p>
        </div>
        
        <div style="margin-bottom: 25px; text-align: left;">
          <label style="display: block; font-size: 0.8rem; color: #94a3b8; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">Code d'accès</label>
          <input type="password" id="global-access-code" style="width: 100%; padding: 15px; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: white; font-size: 1.2rem; text-align: center; letter-spacing: 3px; box-sizing: border-box;" placeholder="••••••••" autocomplete="off">
          <p id="global-error-msg" style="color: #ef4444; font-size: 0.85rem; margin-top: 10px; display: none; text-align: center;"><i class="fas fa-exclamation-circle"></i> Code d'accès invalide</p>
        </div>
        
        <button id="global-submit-btn" style="width: 100%; padding: 16px; background: #38bdf8; color: #0f172a; border: none; border-radius: 8px; font-weight: 700; font-size: 1.05rem; cursor: pointer; transition: all 0.3s; margin-bottom: 20px;">
          Déverrouiller
        </button>
        
        <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 25px; margin-top: 15px;">
          <p style="color: #94a3b8; font-size: 0.85rem; margin-bottom: 15px;">Vous n'avez pas de code ?</p>
          <a href="mailto:lotfi@bahloul-rd.com?subject=Demande d'accès - Observatoire Béjaïa&body=Bonjour Dr. Bahloul,%0D%0A%0D%0AJe souhaite obtenir un code d'accès pour consulter la plateforme de l'Observatoire Territorial.%0D%0A%0D%0ANom : %0D%0AInstitution/Entreprise : %0D%0AEmail : %0D%0ATéléphone : %0D%0AMotif : " style="display: inline-block; padding: 10px 20px; background: rgba(255,255,255,0.05); color: white; text-decoration: none; font-size: 0.9rem; font-weight: 600; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1); transition: all 0.2s;"><i class="fas fa-envelope" style="margin-right: 8px; color: #38bdf8;"></i> Demander l'accès</a>
        </div>
      </div>
    `;
    
    document.body.appendChild(lockOverlay);
    setTimeout(() => document.getElementById('global-access-code').focus(), 100);
    
    const verifyGlobalCode = () => {
      const code = document.getElementById('global-access-code').value.trim().toUpperCase();
      // Valid access codes that you can give to your users
      const validCodes = ['BEJAIA2026', 'ADMIN', 'LOTFI26']; 
      
      if (validCodes.includes(code)) {
        localStorage.setItem('global_access_granted', 'true');
        lockOverlay.style.opacity = '0';
        lockOverlay.style.transition = 'opacity 0.4s ease';
        setTimeout(() => {
          lockOverlay.remove();
          if (header) header.style.display = '';
          if (footer) footer.style.display = '';
          app.style.display = '';
          document.body.style.overflow = '';
        }, 400);
      } else {
        document.getElementById('global-error-msg').style.display = 'block';
        document.getElementById('global-access-code').style.borderColor = '#ef4444';
        document.getElementById('global-access-code').value = '';
      }
    };
    
    document.getElementById('global-submit-btn').addEventListener('click', verifyGlobalCode);
    document.getElementById('global-access-code').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') verifyGlobalCode();
    });
  };

  checkGlobalAccess();

  // ============================================================
  // I18N & LANGUAGE STATE
  // ============================================================
  let currentLang = localStorage.getItem('obs_lang') || 'fr';

  const t = (key) => {
    return translations[currentLang][key] || key;
  };

  const updateLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('obs_lang', lang);
    document.documentElement.lang = lang;
    
    if (lang === 'ar') {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
    
    renderNav();
    renderHome();
  };

  const renderNav = () => {
    const nav = document.querySelector('nav');
    if (!nav) return;
    
    const isElus = localStorage.getItem('isElus') === 'true';
    const userName = localStorage.getItem('userName');

    nav.innerHTML = `
      <a href="#home">${t('nav_home')}</a>
      <a href="#dashboard">${t('nav_dashboard')}</a>
      <a href="#recherche">${t('nav_research')}</a>
      <a href="#solutions">${t('nav_solutions')}</a>
      ${isElus ? `
        <div class="user-badge"><i class="fas fa-user-shield"></i> ${userName}</div>
        <a href="#" class="nav-logout-btn" id="logout-btn"><i class="fas fa-sign-out-alt"></i></a>
      ` : `
        <a href="#" class="nav-elus-btn" id="login-trigger"><i class="fas fa-lock"></i> ${t('nav_elus')}</a>
      `}
      <div class="lang-switcher">
        <button class="lang-btn ${currentLang === 'fr' ? 'active' : ''}" data-lang="fr">FR</button>
        <button class="lang-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
        <button class="lang-btn ${currentLang === 'ar' ? 'active' : ''}" data-lang="ar">AR</button>
      </div>
    `;

    // Re-attach listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => updateLanguage(btn.dataset.lang));
    });
    
    const loginTrigger = document.getElementById('login-trigger');
    if (loginTrigger) {
      loginTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        showLoginOverlay();
      });
    }
    
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        handleLogout();
      });
    }
  };

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
    const base = import.meta.env.BASE_URL;
    app.innerHTML = `
      <section id="home" class="hero">
        <div class="container">
          <div class="hero-content">
            <span class="badge" style="background: rgba(56, 189, 248, 0.2); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); padding: 5px 15px; border-radius: 20px; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px; display: inline-block;">${t('hero_tagline')}</span>
            <h1>${t('app_title')}</h1>
            <p>${t('hero_desc')}</p>
            
            <div class="kpis" style="display: flex; justify-content: center; gap: 30px; margin: 30px 0;">
              <div class="kpi-item"><h3>${regionalStats.communes}</h3><p>${t('nav_dashboard')}</p></div>
              <div class="kpi-item"><h3>${regionalStats.dairas}</h3><p>Daïras</p></div>
              <div class="kpi-item"><h3>${(regionalStats.population / 1000000).toFixed(1)}M</h3><p>Habitants</p></div>
              <div class="kpi-item"><h3>${Math.round(regionalStats.area)}</h3><p>km²</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="portal" style="background: #f8fafc; padding: 60px 0;">
        <div class="container">
          <div class="pillar-grid">
            <a href="#dashboard" class="pillar-card">
              <div class="pillar-icon"><i class="fas fa-chart-pie"></i></div>
              <h3>${t('pillar_obs_title')}</h3>
              <p>${t('pillar_obs_desc')}</p>
            </a>
            <a href="#recherche" class="pillar-card">
              <div class="pillar-icon"><i class="fas fa-microscope"></i></div>
              <h3>${t('pillar_res_title')}</h3>
              <p>${t('pillar_res_desc')}</p>
            </a>
            <a href="#solutions" class="pillar-card">
              <div class="pillar-icon"><i class="fas fa-lightbulb"></i></div>
              <h3>${t('pillar_sol_title')}</h3>
              <p>${t('pillar_sol_desc')}</p>
            </a>
          </div>
        </div>
      </section>

      <section id="diagnostic" style="background: #f8fafc; padding: 100px 0;">
        <div class="container">
          <h2 class="section-title">${t('diag_title')}</h2>
          <p class="section-subtitle">${t('diag_subtitle')}</p>
          
          <div class="diagnostic-container">
            <!-- Left: Hypotheses Roadmap -->
            <div class="hypothesis-panel">
              <h3 style="color: var(--primary-blue); display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-microscope"></i> ${t('hyp_title')}
              </h3>
              <div class="hypothesis-list">
                <div class="hypothesis-item">
                  <div class="hyp-icon">I</div>
                  <div class="hyp-content">
                    <h4>L'accessibilité spatiale</h4>
                    <p>Moteur principal de la résilience territoriale des zones rurales de Béjaïa.</p>
                  </div>
                </div>
                <div class="hypothesis-item">
                  <div class="hyp-icon">II</div>
                  <div class="hyp-content">
                    <h4>Raccordement aux réseaux</h4>
                    <p>Catalyseur structurel de la réduction de la pauvreté multidimensionnelle (AEP/Énergie).</p>
                  </div>
                </div>
                <div class="hypothesis-item">
                  <div class="hyp-icon">III</div>
                  <div class="hyp-content">
                    <h4>Performance fiscale</h4>
                    <p>Inversement proportionnelle à la distance aux pôles urbains majeurs (Bejaia/Akbou).</p>
                  </div>
                </div>
                <div class="hypothesis-item">
                  <div class="hyp-icon">IV</div>
                  <div class="hyp-content">
                    <h4>Capital humain</h4>
                    <p>Freiné par l'enclavement topographique malgré les politiques de rattrapage.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right: Typology Clusters -->
            <div class="typology-panel">
              <h3 style="color: white; display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
                <i class="fas fa-layer-group"></i> ${t('cluster_title')}
              </h3>
              <p style="font-size: 0.85rem; color: #94a3b8;">${t('cluster_subtitle')}</p>
              
              <div class="cluster-grid-mini">
                ${clusters.map(c => `
                  <div class="cluster-mini-card clickable" data-cluster-id="${c.id}">
                    <div class="cluster-dot" style="background: ${clusterColors[c.id]}"></div>
                    <h5>${t('cluster_'+c.id)}</h5>
                  </div>
                `).join('')}
              </div>

              <div id="cluster-detail" style="margin-top: 30px; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 12px; display: none; border-left: 4px solid var(--accent-neon-blue); animation: fadeIn 0.4s;">
                <h4 id="cluster-detail-title" style="margin: 0 0 8px; color: var(--accent-neon-blue); font-size: 1rem;"></h4>
                <p id="cluster-detail-text" style="font-size: 0.82rem; color: #cbd5e1; line-height: 1.6;"></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="dimensions" style="background: white; padding: 100px 0;">
        <div class="container">
          <h2 class="section-title">Les 8 Dimensions & ODD</h2>
          <p class="section-subtitle">Chaque dimension territorialise les Objectifs de Développement Durable pour la région de Béjaïa.</p>
          <div class="card-grid" id="dimension-grid">
            ${dimensions.map(d => `
              <div class="card dimension-card" data-dim-id="${d.id}" style="cursor: pointer; transition: all 0.3s; position: relative; overflow: hidden; padding: 30px; border-radius: 16px;">
                <div class="card-icon" style="background: #f8fafc; color: var(--primary-blue);"><i class="fas fa-${d.icon}"></i></div>
                <h3 style="margin: 15px 0;">${d.name}</h3>
                <div class="odd-container" style="display: flex; gap: 5px; flex-wrap: wrap; justify-content: center;">
                  ${(d.odd || []).map(oddId => `<span class="odd-badge odd-${oddId}" style="font-size: 0.65rem; padding: 3px 8px; border-radius: 10px;">ODD ${oddId}</span>`).join('')}
                </div>
                <p style="font-size: 0.8rem; color: var(--text-light); margin-top: 15px;"><em>En savoir plus...</em></p>
                <div class="dim-desc" style="display: none; margin-top: 15px; padding-top: 15px; border-top: 1px solid #f1f5f9; text-align: left; font-size: 0.82rem; color: var(--text-dark); line-height: 1.5; animation: fadeIn 0.3s;">
                  ${d.description}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <section id="dashboard">
        <div class="container">
          <h2 class="section-title">${t('dashboard_title')}</h2>
          <p class="section-subtitle">${t('dashboard_subtitle')}</p>
          
          <div class="dashboard">
            <div class="dashboard-tabs">
              <button class="tab-btn active" data-year="Global">Vue Globale</button>
              <button class="tab-btn" data-year="2016">2016</button>
              <button class="tab-btn" data-year="2017">2017</button>
              <button class="tab-btn" data-year="2018">2018</button>
              <button class="tab-btn" data-year="2019">2019</button>
              <button class="tab-btn" data-year="2020">2020</button>
            </div>

            <div class="dashboard-controls" style="display: flex; flex-wrap: wrap; align-items: center; gap: 15px; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; margin-bottom: 25px; border: 1px solid rgba(255,255,255,0.1);">
              <div style="display: flex; align-items: center; gap: 10px; flex: 1; min-width: 250px;">
                <label for="daira-select" style="font-weight: 600; color: var(--primary-blue); white-space: nowrap;">📂 Daïra :</label>
                <select id="daira-select" style="padding: 10px 15px; border-radius: 8px; border: 1px solid #d4af37; background: white; font-weight: 600; color: #1a3a5f; cursor: pointer; width: 100%;">
                  <option value="Toutes">Toutes les Daïras</option>
                  ${[...new Set(communeData.map(c => c.daira))].sort().map(d => `<option value="${d}">${d}</option>`).join('')}
                </select>
              </div>
              <div style="display: flex; align-items: center; gap: 10px; flex: 1; min-width: 250px;">
                <label for="commune-select" style="font-weight: 600; color: var(--primary-blue); white-space: nowrap;">📍 Commune :</label>
                <select id="commune-select" style="padding: 10px 15px; border-radius: 8px; border: 1px solid #d4af37; background: white; font-weight: 600; color: #1a3a5f; cursor: pointer; width: 100%;">
                  ${[...communeData].sort((a, b) => a.name.localeCompare(b.name)).map(c => `<option value="${c.id}" data-daira="${c.daira}">${c.name}</option>`).join('')}
                </select>
              </div>
              <button id="export-csv" class="export-btn"><i class="fas fa-file-csv"></i> ${t('export_csv')}</button>
            </div>

            <div class="dashboard-grid">
              <div class="dashboard-main-content">
                <div class="stats-panel" id="commune-details" style="background: var(--card-dark); color: white; border: 1px solid rgba(255,255,255,0.1);">
                  <!-- Details injected here -->
                </div>
                <div class="chart-panel" style="background: var(--card-dark); border: 1px solid rgba(255,255,255,0.1);">
                  <canvas id="radarChart"></canvas>
                  <div id="radar-ipt-container" style="text-align: center; margin-top: 15px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
                    <span style="color: var(--text-dim); font-size: 0.9rem; font-weight: 600;">${t('ipt_label')} = </span>
                    <span id="radar-ipt-value" style="color: var(--accent-neon-blue); font-size: 1.4rem; font-weight: 800;">--</span>
                  </div>
                </div>
              </div>
              <div class="kpi-sidebar" id="kpi-sidebar">
                <!-- KPIs injected here -->
              </div>
            </div>

            <div id="finances-section" style="position: relative; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e8edf2;">
              <h3 class="section-subtitle" style="text-align: left; color: var(--primary-blue); margin-top: 0; display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-coins"></i> Finances Locales & Performance Budgétaire
              </h3>
              
              <div class="dashboard-grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
                <!-- Main Chart (Bar) -->
                <div class="chart-panel" style="background: white; border: 1px solid #e2e8f0;">
                  <h4 style="margin: 0 0 15px; font-size: 0.9rem; color: var(--text-dark);">Structure Budgétaire (M DA)</h4>
                  <canvas id="financeChart"></canvas>
                </div>
                
                <!-- Distribution Chart (Pie) -->
                <div class="chart-panel" style="background: white; border: 1px solid #e2e8f0;">
                  <h4 style="margin: 0 0 15px; font-size: 0.9rem; color: var(--text-dark);">Répartition Fonctionnement / Équipement</h4>
                  <canvas id="pieChart"></canvas>
                </div>

                <!-- Ratios & Dependency Panel -->
                <div class="stats-panel" id="finance-details" style="background: #f8fafc; border: 1px solid #e2e8f0; color: var(--text-dark);">
                  <!-- Dynamic content injected here -->
                </div>
              </div>

              <!-- New: Financial Performance Ratios -->
              <div id="finance-ratios" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 20px;">
                <!-- Ratio cards injected here -->
              </div>
            </div>

            <div id="simulator-section" class="simulator-container">
              <h3 style="color: var(--accent-neon-blue); margin-bottom: 10px;"><i class="fas fa-microchip"></i> ${t('simulator_title')} (v1.0)</h3>
              <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 20px;">
                <p style="color: var(--text-dim); font-size: 0.85rem; margin-bottom: 25px;">${t('simulator_desc')}</p>
                <div style="background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.2); padding: 12px; border-radius: 8px; max-width: 300px;">
                  <h4 style="color: #38bdf8; font-size: 0.8rem; margin: 0 0 5px;"><i class="fas fa-info-circle"></i> ${t('sim_help_title')}</h4>
                  <p style="color: #cbd5e1; font-size: 0.72rem; line-height: 1.4; margin: 0;">${t('sim_help_text')}</p>
                </div>
              </div>
              
              <div class="weight-slider-group">
                ${dimensions.map(d => `
                  <div class="weight-slider">
                    <label>${d.name}</label>
                    <input type="range" class="weight-input" data-dim="${d.id}" min="0" max="10" value="5">
                  </div>
                `).join('')}
              </div>

              <div class="simulator-result">
                <p style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-dim);">${t('ipt_label')}</p>
                <div id="ipt-value" style="font-size: 3rem; font-weight: 800; color: var(--accent-neon-blue);">--</div>
                <p id="ipt-comment" style="font-size: 0.85rem; font-style: italic; color: var(--text-dim); margin-top: 10px;"></p>
              </div>
            </div>

            <!-- 
            <div id="dairas-section" style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e8edf2;">
              <h3 class="section-subtitle" style="text-align: left; color: var(--primary-blue); margin-top: 0;">Répartition par Daïra</h3>
              <p style="text-align: left; margin-bottom: 20px; font-size: 0.9rem; color: var(--text-light);">Aperçu démographique et géographique des 19 Daïras de la Wilaya de Béjaïa.</p>
              <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); text-align: left;">
                  <thead>
                    <tr style="background: var(--primary-blue); color: white;">
                      <th style="padding: 12px;">Daïra</th>
                      <th style="padding: 12px; text-align: center;">Nombre de communes</th>
                      <th style="padding: 12px;">Communes</th>
                      <th style="padding: 12px; text-align: right;">Superficie (km²)</th>
                      <th style="padding: 12px; text-align: right;">Population (hab.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${dairaData.map(d => `
                      <tr style="border-bottom: 1px solid #eee; transition: background 0.2s;" onmouseover="this.style.background='#f8f9fa'" onmouseout="this.style.background='white'">
                        <td style="padding: 12px; font-weight: bold; color: var(--primary-blue);">${d.daira}</td>
                        <td style="padding: 12px; text-align: center;">${d.communes.length}</td>
                        <td style="padding: 12px; color: var(--text-light); font-size: 0.9rem;">${d.communes.join(', ')}</td>
                        <td style="padding: 12px; text-align: right; color: var(--primary-green); font-weight: 500;">${d.superficie.toLocaleString('fr-FR')}</td>
                        <td style="padding: 12px; text-align: right; font-weight: 600;">${d.population.toLocaleString('fr-FR')}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
            -->

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
                  <img src="${base}sig_mapinfo_transport.png" alt="Carte accessibilité ferroviaire - Mapinfo" style="width: 100%; display: block; cursor: zoom-in;" onclick="window.open(this.src)">
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
                  <img src="${base}sig_mapinfo_emploi.png" alt="Carte emploi et PME - Mapinfo" style="width: 100%; display: block; cursor: zoom-in;" onclick="window.open(this.src)">
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
                  <img src="${base}sig_mapinfo_enfants.png" alt="Carte scolarisation 6-10 ans - Mapinfo" style="width: 100%; display: block; cursor: zoom-in;" onclick="window.open(this.src)">
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
                  <img src="${base}sig_mapinfo_scolarisation.png" alt="Carte occupation classes primaires - Mapinfo" style="width: 100%; display: block; cursor: zoom-in;" onclick="window.open(this.src)">
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
                  <img src="${base}sig_map_water.png" alt="Carte Eau Potable" style="width: 100%; display: block; cursor: zoom-in;" onclick="window.open(this.src)">
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


      <section id="recherche" style="background: var(--bg-color); padding: 80px 0;">
        <div class="container">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px; border-bottom: 2px solid var(--primary-blue); padding-bottom: 20px;">
            <div>
              <h2 style="color: var(--primary-blue); font-size: 2.2rem; margin: 0;">Volet Académique Ouvert</h2>
              <p style="color: var(--text-light); font-size: 1.1rem; margin-top: 5px;">Working Papers & Pré-publications pour le débat scientifique.</p>
            </div>
            <a href="#working-papers" class="btn btn-primary">Accéder au dépôt</a>
          </div>

          <div class="card-grid">
            <div class="card" style="text-align: left; transition: transform 0.3s, box-shadow 0.3s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 25px rgba(0,0,0,0.1)';" onmouseout="this.style.transform='none'; this.style.boxShadow='...';">
              <div style="color: var(--primary-blue); font-size: 2rem; margin-bottom: 15px;"><i class="fas fa-book-open"></i></div>
              <h3 style="font-size: 1.1rem; margin-bottom: 10px; color: var(--primary-blue);">Thèse de Doctorat</h3>
              <p style="font-size: 0.85rem; color: var(--text-light); margin-bottom: 15px; line-height: 1.5;">Analyse spatiale des disparités socio-économiques et du cadre de vie dans la Wilaya de Béjaïa. Proposition d'un SIG décisionnel.</p>
              <span style="font-size: 0.75rem; background: #e1f5fe; color: #0288d1; padding: 5px 10px; border-radius: 12px; font-weight: bold;">Université Abderrahmane Mira (2023)</span>
            </div>
            <div class="card" style="text-align: left; transition: transform 0.3s, box-shadow 0.3s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 25px rgba(0,0,0,0.1)';" onmouseout="this.style.transform='none'; this.style.boxShadow='...';">
              <div style="color: var(--primary-green); font-size: 2rem; margin-bottom: 15px;"><i class="fas fa-file-alt"></i></div>
              <h3 style="font-size: 1.1rem; margin-bottom: 10px; color: var(--primary-green);">Article : Disparités Territoriales</h3>
              <p style="font-size: 0.85rem; color: var(--text-light); margin-bottom: 15px; line-height: 1.5;">Étude analytique sur les déséquilibres de développement entre les zones urbaines et rurales de la région par approche multicritère.</p>
              <span style="font-size: 0.75rem; background: #e8f5e9; color: #388e3c; padding: 5px 10px; border-radius: 12px; font-weight: bold;">Revue Scientifique LED</span>
            </div>
            <div class="card" style="text-align: left; transition: transform 0.3s, box-shadow 0.3s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 25px rgba(0,0,0,0.1)';" onmouseout="this.style.transform='none'; this.style.boxShadow='...';">
              <div style="color: #6a994e; font-size: 2rem; margin-bottom: 15px;"><i class="fas fa-project-diagram"></i></div>
              <h3 style="font-size: 1.1rem; margin-bottom: 10px; color: #6a994e;">Schémas & Figures</h3>
              <p style="font-size: 0.85rem; color: var(--text-light); margin-bottom: 15px; line-height: 1.5;">Architecture logicielle, diagrammes fonctionnels et cartographies de référence du système d'information.</p>
              <a href="./research/figures.html" class="btn btn-outline" style="font-size: 0.75rem; padding: 5px 12px;">Consulter les figures</a>
            </div>
          </div>

          <div id="imrad-section" style="margin-top: 60px;">
            <h3 style="color: var(--primary-blue); border-left: 5px solid var(--primary-blue); padding-left: 15px; margin-bottom: 25px;">Protocole Scientifique (Structure IMRAD)</h3>
            <div class="imrad-container">
              <div class="imrad-card">
                <h4>Introduction</h4>
                <p>${methodology.imrad.introduction}</p>
              </div>
              <div class="imrad-card">
                <h4>Méthodologie</h4>
                <p>${methodology.imrad.methods}</p>
              </div>
              <div class="imrad-card">
                <h4>Résultats</h4>
                <p>${methodology.imrad.results}</p>
              </div>
              <div class="imrad-card">
                <h4>Discussion</h4>
                <p>${methodology.imrad.discussion}</p>
              </div>
            </div>
          </div>

          <div id="citation-section" style="margin-top: 60px;">
            <h3 style="color: var(--primary-blue); margin-bottom: 15px;"><i class="fas fa-quote-right" style="margin-right: 10px;"></i>Citer ce travail</h3>
            <p style="font-size: 0.9rem; color: var(--text-light);">Utilisez le format suivant pour vos références académiques :</p>
            <div class="citation-box">
              <button class="copy-citation" onclick="navigator.clipboard.writeText(this.nextElementSibling.innerText); alert('Citation copiée !')">Copier</button>
              <div class="citation-text">
                ${methodology.citation.author} (${methodology.citation.year}). ${methodology.citation.title}. ${methodology.citation.journal}. DOI: ${methodology.citation.doi}
              </div>
            </div>
          </div>

          <div id="working-papers" style="margin-top: 60px;">
            <h3 style="color: var(--primary-blue); margin-bottom: 25px;"><i class="fas fa-cloud-download-alt" style="margin-right: 10px;"></i>Dépôt Scientifique : Working Papers</h3>
            <div class="paper-item">
              <div class="paper-info">
                <h4>WP-2024-01 : Modélisation de la résilience urbaine à Béjaïa</h4>
                <p>Auteur: Dr. Lotfi Bahloul | Date: Janvier 2024 | Format: PDF</p>
              </div>
              <a href="#" class="download-btn"><i class="fas fa-file-pdf"></i> Télécharger</a>
            </div>
            <div class="paper-item">
              <div class="paper-info">
                <h4>WP-2023-04 : L'accès à l'eau potable comme marqueur des disparités</h4>
                <p>Auteur: Dr. Lotfi Bahloul | Date: Octobre 2023 | Format: PDF</p>
              </div>
              <a href="#" class="download-btn"><i class="fas fa-file-pdf"></i> Télécharger</a>
            </div>
          </div>
        </div>
      </section>

      <section id="collaborative" class="collaborative-section">
        <div class="container">
          <div style="text-align: center; margin-bottom: 50px;">
            <h2 style="color: var(--accent-neon-blue); font-size: 2.5rem; margin-bottom: 15px;">Dimension Collaborative</h2>
            <p style="color: var(--text-dim); font-size: 1.1rem; max-width: 700px; margin: 0 auto;">Citizen Crowdsourcing : Permettre aux citoyens de contribuer à la connaissance environnementale de la Wilaya.</p>
          </div>

          <div class="form-card">
            <form class="collaborative-form" id="crowd-form">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                <div class="form-group">
                  <label for="crowd-commune">Votre Commune</label>
                  <select id="crowd-commune" required>
                    <option value="">Sélectionner une commune</option>
                    ${communeData.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
                  </select>
                </div>
                <div class="form-group">
                  <label for="crowd-type">Type de signalement</label>
                  <select id="crowd-type" required>
                    <option value="eau">Accès à l'eau potable</option>
                    <option value="dechets">Gestion des déchets</option>
                    <option value="pollution">Pollution atmosphérique / sonore</option>
                    <option value="risques">Risques naturels (inondation, incendie)</option>
                    <option value="autre">Autre impact environnemental</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="crowd-desc">Description de l'observation</label>
                <textarea id="crowd-desc" rows="4" placeholder="Décrivez l'impact observé ou la donnée environnementale à partager..." required></textarea>
              </div>
              <div class="form-group">
                <label for="crowd-file">Ajouter une photo (optionnel)</label>
                <input type="file" id="crowd-file" accept="image/*" style="padding: 10px;">
              </div>
              <button type="submit" class="btn btn-primary" style="width: 100%; padding: 15px; background: var(--accent-neon-blue); color: #0f172a; font-weight: 800; border: none; margin-top: 10px;">Envoyer mon observation</button>
            </form>
          </div>
        </div>
      </section>

      <section id="solutions">
        <div class="container">
          <h2 class="section-title">${t('nav_solutions')}</h2>
          <p class="section-subtitle">${t('pillar_sol_desc')}</p>
          <div class="card-grid" id="recommendations-grid">
            <div class="card recommendation-card" data-rec="decentral" style="cursor: pointer; transition: all 0.3s;">
              <div class="card-icon"><i class="fas fa-sitemap"></i></div>
              <h3>Audit Territorial</h3>
              <p style="font-size: 0.85rem; color: var(--text-light);">Analyse approfondie des forces et faiblesses de votre territoire via nos algorithmes ASMC.</p>
            </div>
            <div class="card recommendation-card" data-rec="rural" style="cursor: pointer; transition: all 0.3s;">
              <div class="card-icon"><i class="fas fa-seedling"></i></div>
              <h3>Schémas Directeurs</h3>
              <p style="font-size: 0.85rem; color: var(--text-light);">Accompagnement dans l'élaboration de plans d'aménagement résilients et durables.</p>
            </div>
            <div class="card recommendation-card" data-rec="data" style="cursor: pointer; transition: all 0.3s; border: 2px solid var(--primary-green);">
              <div class="card-icon"><i class="fas fa-laptop-code"></i></div>
              <h3>Plateforme Dédiée</h3>
              <p style="font-size: 0.85rem; color: var(--text-light);">Développement de tableaux de bord personnalisés pour votre collectivité ou entreprise.</p>
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
  let pieChart = null;
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

      // Add interactivity for clusters
      const clusterCards = document.querySelectorAll('.cluster-mini-card.clickable');
      const clusterDetail = document.getElementById('cluster-detail');
      const clusterDetailTitle = document.getElementById('cluster-detail-title');
      const clusterDetailText = document.getElementById('cluster-detail-text');

      clusterCards.forEach(card => {
        card.addEventListener('click', () => {
          const clusterId = parseInt(card.dataset.clusterId);
          const cluster = clusters.find(c => c.id === clusterId);
          
          if (cluster) {
            clusterDetailTitle.innerText = t('cluster_' + clusterId);
            clusterDetailText.innerText = cluster.description;
            clusterDetail.style.display = 'block';
            
            // Highlight selected
            clusterCards.forEach(c => c.style.borderColor = 'rgba(255,255,255,0.1)');
            card.style.borderColor = 'var(--accent-neon-blue)';
          }
        });
      });
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
    const base = import.meta.env.BASE_URL;
    Promise.all([
      fetch(`${base}bejaia_communes.json`).then(r => r.json()),
      fetch(`${base}bejaia_communes_polygons.json`).then(r => r.json()),
      fetch(`${base}bejaia_wilaya.json`).then(r => r.json()),
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
    const financeRatiosDiv = document.getElementById('finance-ratios');
    const radarCtx = document.getElementById('radarChart').getContext('2d');
    const financeCtx = document.getElementById('financeChart').getContext('2d');
    const pieCtx = document.getElementById('pieChart').getContext('2d');
    let currentYear = 'Global';

    const updateKPIs = (commune, year) => {
      const kpiSidebar = document.getElementById('kpi-sidebar');
      if (!kpiSidebar) return;

      const stats = [
        { label: 'Population', value: (commune.population || 0).toLocaleString('fr-FR'), trend: '+1.2%', icon: 'users' },
        { label: 'Budget (M DA)', value: (commune.finances.budgetTotal || 0).toLocaleString('fr-FR'), trend: '+5.3%', icon: 'wallet' },
        { label: 'Eau Potable', value: `${commune.details.waterAccess || 0}%`, trend: '+0.7%', icon: 'tint' },
        { label: 'Taux Chômage', value: '11.6%', trend: '-0.4%', icon: 'briefcase', down: true }
      ];

      kpiSidebar.innerHTML = stats.map(s => `
        <div class="kpi-card">
          <div class="label"><i class="fas fa-${s.icon}" style="margin-right: 8px; color: var(--accent-neon-blue);"></i>${s.label}</div>
          <div class="value">${s.value}</div>
          <div class="trend ${s.down ? 'trend-down' : 'trend-up'}">
            <i class="fas fa-caret-${s.down ? 'down' : 'up'}"></i> ${s.trend} <span style="opacity: 0.5; font-size: 0.7rem;">vs n-1</span>
          </div>
        </div>
      `).join('');
    };

    const updateUI = (communeId, year = 'Global') => {
      const commune = communeData.find(c => c.id == communeId);
      if (!commune) return;

      const clusterInfo = clusters.find(cl => cl.id === commune.cluster) || { name: 'N/A', description: '' };
      
      const data = (year === 'Global') ? commune : (commune.history ? commune.history[year] : commune);
      if (!data || !data.finances) return;

      const avg = (year === 'Global' || !regionalAverageHistory) ? regionalAverage : {
        scores: (regionalAverageHistory[year] && regionalAverageHistory[year].scores) ? regionalAverageHistory[year].scores : regionalAverage.scores,
        finances: (regionalAverageHistory[year]) ? {
          budgetTotal: Math.round(regionalAverageHistory[year].total * 1000 / 52),
          recettesFiscales: Math.round(regionalAverageHistory[year].total * 1000 / 52 * 0.65),
          depensesFonctionnement: Math.round(regionalAverageHistory[year].total * 1000 / 52 * 0.70),
          depensesEquipement: Math.round(regionalAverageHistory[year].total * 1000 / 52 * (regionalAverageHistory[year].investment || 0.2))
        } : regionalAverage.finances
      };

      updateKPIs(commune, year);

      let focusHtml = '';
      if (year !== 'Global') {
        focusHtml += `<div style="margin-bottom: 15px;"><span class="year-badge" style="background: var(--accent-neon-blue); color: #0f172a;">Données Exercice ${year}</span></div>`;
        if (data.finances.details && data.finances.details.deficit) {
          focusHtml += `
            <div class="risk-alert" style="background: rgba(255, 77, 77, 0.1); border-left: 4px solid #ff4d4d; color: #ff4d4d;">
              <h4><i class="fas fa-exclamation-circle"></i> Alerte : Excédent de Dépenses</h4>
              <p>Commune identifiée en situation de déficit pour l'exercice ${year}.</p>
            </div>`;
        }
      }

      if (commune.details.riskAlert) {
        focusHtml += `
          <div class="risk-alert" style="background: rgba(255,165,0,0.1); border-left: 4px solid #ffa500; color: #ffa500;">
            <h4><i class="fas fa-exclamation-triangle"></i> Zone d'Attention Prioritaire</h4>
            <p>Facteurs de risques identifiés dans la thèse (p. 245).</p>
          </div>`;
      }

      detailsDiv.innerHTML = `
        <h3 style="color: var(--accent-neon-blue); margin-bottom: 15px;">📍 ${commune.name}</h3>
        ${focusHtml}
        <div style="font-size: 0.95rem; margin-top: 10px;">
          <p><strong>Santé:</strong> <span style="color: var(--accent-neon-blue); float: right;">${commune.details.hospitalBeds} Lits</span></p>
          <p><strong>Eau Potable:</strong> <span style="color: var(--accent-neon-blue); float: right;">${commune.details.waterAccess}%</span></p>
          <p><strong>Routes:</strong> <span style="color: var(--accent-neon-blue); float: right;">${commune.details.roadStatus}</span></p>
        </div>
        <div class="cluster-badge" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-left: 5px solid ${clusterColors[commune.cluster]}; margin-top: 20px;">
          <p style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--text-dim); margin-bottom: 3px;">Typologie du Territoire</p>
          <p style="font-weight: 700; color: white; margin-bottom: 3px;">${t('cluster_'+commune.cluster)}</p>
          <p style="font-size: 0.82rem; color: var(--text-dim); font-style: italic;">${clusterInfo.description}</p>
        </div>

        <div class="rec-card">
          <h4><i class="fas fa-lightbulb"></i> Recommandations Stratégiques</h4>
          <ul class="rec-list">
            ${(recommendations[commune.cluster] || ["Analyse en cours..."]).map(r => `<li>${r}</li>`).join('')}
          </ul>
        </div>
      `;

      const subventions = Math.max(0, data.finances.budgetTotal - data.finances.recettesFiscales);
      const dependanceRate = data.finances.budgetTotal > 0 ? (subventions / data.finances.budgetTotal * 100).toFixed(1) : 0;
      
      const budgetPerHab = ((data.finances.budgetTotal * 1000000) / commune.population).toFixed(0);
      const fiscalitePerHab = ((data.finances.recettesFiscales * 1000000) / commune.population).toFixed(0);

      financeDetailsDiv.innerHTML = `
        <h4 style="margin: 0 0 15px; color: var(--primary-blue); font-size: 0.95rem;"><i class="fas fa-chart-pie"></i> ${t('ipt_med')}</h4>
        <div style="font-size: 0.9rem; color: var(--text-dark);">
          <div style="margin-bottom: 12px; display: flex; justify-content: space-between;">
            <span>Dépendance Étatique:</span>
            <span style="font-weight: 700; color: ${dependanceRate > 50 ? '#ef4444' : '#10b981'};">${dependanceRate}%</span>
          </div>
          <div style="width: 100%; background: rgba(0,0,0,0.05); border-radius: 10px; height: 6px; margin-bottom: 20px;">
            <div style="width: ${dependanceRate}%; background: ${dependanceRate > 50 ? '#ef4444' : '#10b981'}; height: 100%; border-radius: 10px;"></div>
          </div>
          
          <p style="font-size: 0.8rem; color: var(--text-dim); line-height: 1.4; border-top: 1px solid #e2e8f0; pt-10; margin-top: 15px;">
            <i class="fas fa-info-circle"></i> Une dépendance > 50% indique une commune fortement tributaire des dotations de la FCCL.
          </p>
        </div>
      `;

      financeRatiosDiv.innerHTML = `
        <div class="kpi-card" style="background: white; border: 1px solid #e2e8f0; padding: 18px; border-radius: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
          <div style="font-size: 0.85rem; font-weight: 700; color: #334155; margin-bottom: 8px;">Budget par habitant :</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: var(--primary-blue);">${Number(budgetPerHab).toLocaleString('fr-FR')} DA</div>
          <div style="font-size: 0.72rem; color: #10b981; margin-top: 6px; font-weight: 600;"><i class="fas fa-arrow-up"></i> Performance locale</div>
        </div>
        <div class="kpi-card" style="background: white; border: 1px solid #e2e8f0; padding: 18px; border-radius: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
          <div style="font-size: 0.85rem; font-weight: 700; color: #334155; margin-bottom: 8px;">Fiscalité par habitant :</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: var(--primary-blue);">${Number(fiscalitePerHab).toLocaleString('fr-FR')} DA</div>
          <div style="font-size: 0.72rem; color: #64748b; margin-top: 6px; font-weight: 600;"><i class="fas fa-info-circle"></i> Richesse fiscale locale</div>
        </div>
        <div class="kpi-card" style="background: white; border: 1px solid #e2e8f0; padding: 18px; border-radius: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
          <div style="font-size: 0.85rem; font-weight: 700; color: #334155; margin-bottom: 8px;">Évolution sur 5 ans :</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: #10b981;">+14.2%</div>
          <div style="font-size: 0.72rem; color: #64748b; margin-top: 6px; font-weight: 600;"><i class="fas fa-chart-line"></i> Croissance des ressources</div>
        </div>
      `;

      if (radarChart) radarChart.destroy();
      radarChart = new Chart(radarCtx, {
        type: 'radar',
        data: {
          labels: dimensions.map(d => d.name),
          datasets: [
            {
              label: commune.name,
              data: dimensions.map(d => data.scores[d.id] || 0),
              backgroundColor: 'rgba(56, 189, 248, 0.2)',
              borderColor: '#38bdf8',
              pointBackgroundColor: '#38bdf8',
              borderWidth: 2,
            },
            {
              label: 'Moyenne Wilaya',
              data: dimensions.map(d => avg.scores[d.id] || 60),
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderColor: 'rgba(255, 255, 255, 0.3)',
              pointBackgroundColor: 'rgba(255, 255, 255, 0.3)',
              borderWidth: 1,
              borderDash: [5, 5],
            }
          ]
        },
        options: {
          scales: {
            r: {
              beginAtZero: true,
              max: 100,
              grid: { color: 'rgba(255, 255, 255, 0.1)' },
              angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
              pointLabels: { color: 'rgba(255, 255, 255, 0.7)', font: { size: 10 } },
              ticks: { display: false }
            }
          },
          plugins: {
            legend: { labels: { color: 'white', font: { size: 11 } }, position: 'bottom' }
          }
        }
      });

      if (financeChart) financeChart.destroy();
      financeChart = new Chart(financeCtx, {
        type: 'bar',
        data: {
          labels: ['Budget', 'Fiscalité', 'Fonct.', 'Équip.'],
          datasets: [
            {
              label: commune.name,
              data: [data.finances.budgetTotal, data.finances.recettesFiscales, data.finances.depensesFonctionnement, data.finances.depensesEquipement],
              backgroundColor: '#38bdf8',
              borderRadius: 4,
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { color: 'rgba(0,0,0,0.5)' } },
            x: { grid: { display: false }, ticks: { color: 'rgba(0,0,0,0.5)' } }
          },
          plugins: { legend: { display: false } }
        }
      });

      if (pieChart) pieChart.destroy();
      pieChart = new Chart(pieCtx, {
        type: 'doughnut',
        data: {
          labels: ['Fonctionnement', 'Équipement'],
          datasets: [{
            data: [data.finances.depensesFonctionnement, data.finances.depensesEquipement],
            backgroundColor: ['#64748b', '#fbbf24'],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          cutout: '70%',
          plugins: {
            legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 10 } } }
          }
        }
      });
    };

    select.addEventListener('change', (e) => {
      updateUI(e.target.value, currentYear);
      calculateIPT();
    });

    const dairaSelect = document.getElementById('daira-select');
    if (dairaSelect) {
      dairaSelect.addEventListener('change', (e) => {
        const dairaValue = e.target.value;
        const options = Array.from(select.options);
        
        // Filter commune options safely
        options.forEach(opt => {
          if (dairaValue === 'Toutes' || opt.dataset.daira === dairaValue) {
            opt.style.display = '';
            opt.disabled = false;
          } else {
            opt.style.display = 'none';
            opt.disabled = true;
          }
        });
        
        // Auto-select first visible and non-disabled option
        const firstVisible = options.find(opt => !opt.disabled);
        if (firstVisible) {
          select.value = firstVisible.value;
          select.dispatchEvent(new Event('change'));
        }
      });
    }

    // Tab Logic
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentYear = btn.dataset.year;
        updateUI(select.value, currentYear);
      });
    });

    // Decision Simulator Logic (Definition moved here to allow hoisting/early calls)
    const calculateIPT = () => {
      const select = document.getElementById('commune-select');
      if (!select) return;
      const commune = communeData.find(c => c.id == select.value);
      if (!commune) return;
      
      const inputs = document.querySelectorAll('.weight-input');
      let totalWeightedScore = 0;
      let totalWeights = 0;

      inputs.forEach(input => {
        const dimId = input.dataset.dim;
        const weight = parseFloat(input.value) || 0;
        const score = commune.scores[dimId] || 0;
        totalWeightedScore += (score * weight);
        totalWeights += weight;
      });

      const iptRaw = totalWeights > 0 ? (totalWeightedScore / totalWeights) : 0;
      const iptFormatted = iptRaw.toFixed(1);
      const iptDisplay = document.getElementById('ipt-value');
      
      if (iptDisplay) {
        iptDisplay.innerText = iptFormatted;
        const radarIptDisplay = document.getElementById('radar-ipt-value');
        if (radarIptDisplay) radarIptDisplay.innerText = iptFormatted;

        const comment = document.getElementById('ipt-comment');
        if (comment) {
          if (totalWeights === 0) {
            comment.innerText = "Veuillez définir des pondérations";
          } else {
            if (iptRaw > 75) comment.innerText = t('ipt_high');
            else if (iptRaw > 50) comment.innerText = t('ipt_med');
            else comment.innerText = t('ipt_low');
          }
        }
      }
    };

    updateUI(select.value, 'Global');
    calculateIPT();

    document.querySelectorAll('.weight-input').forEach(input => {
      input.addEventListener('input', calculateIPT);
    });

    // Data Export Logic
    const exportBtn = document.getElementById('export-csv');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        const commune = communeData.find(c => c.id == select.value);
        let csv = "Indicateur,Valeur\n";
        csv += `Commune,${commune.name}\n`;
        csv += `Daira,${commune.daira}\n`;
        csv += `Population,${commune.population}\n`;
        dimensions.forEach(d => {
          csv += `${d.name},${commune.scores[d.id] || 0}\n`;
        });
        
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('hidden', '');
        a.setAttribute('href', url);
        a.setAttribute('download', `data_${commune.name.replace(/ /g, '_')}.csv`);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      });
    }

    // Crowdsourcing Form Logic
    const crowdForm = document.getElementById('crowd-form');
    if (crowdForm) {
      crowdForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = crowdForm.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = "Envoi en cours...";
        btn.disabled = true;

        setTimeout(() => {
          alert("Merci pour votre contribution ! Votre observation a été transmise à l'Observatoire pour validation scientifique.");
          btn.innerText = originalText;
          btn.disabled = false;
          crowdForm.reset();
        }, 1500);
      });
    }
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

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem(USER_DATA_KEY);
    renderNav();
    updateDashboardAccess();
    renderHome();
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
    const financesSection = document.getElementById('finances-section');
    if (!financesSection) return;

    // Remove any existing lock notice
    const existingNotice = financesSection.querySelector('.dashboard-lock-notice');
    if (existingNotice) existingNotice.remove();
    financesSection.classList.remove('dashboard-lock-overlay');

    if (!isAuthenticated()) {
      financesSection.classList.add('dashboard-lock-overlay');
      financesSection.style.position = 'relative';

      const lockNotice = document.createElement('div');
      lockNotice.className = 'dashboard-lock-notice';
      lockNotice.innerHTML = `
        <div style="font-size: 2.5rem; margin-bottom: 12px;">🔒</div>
        <h4>Accès Réservé aux Élus</h4>
        <p>Ce volet contient des données financières confidentielles réservées aux élus et responsables territoriaux.</p>
        <button id="lock-login-btn"
          style="background: linear-gradient(135deg, #d4af37, #b8960c); color: #1a1a1a; border: none; padding: 12px 28px; border-radius: 25px; font-weight: 700; font-size: 0.95rem; cursor: pointer; box-shadow: 0 4px 20px rgba(212,175,55,0.35); transition: all 0.3s;"
          onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(212,175,55,0.5)'"
          onmouseout="this.style.transform=''; this.style.boxShadow='0 4px 20px rgba(212,175,55,0.35)'">
          <i class="fas fa-shield-alt" style="margin-right: 8px;"></i>Se connecter
        </button>
      `;
      financesSection.appendChild(lockNotice);
      
      document.getElementById('lock-login-btn').addEventListener('click', () => {
        const trigger = document.getElementById('login-trigger');
        if (trigger) trigger.click();
      });
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
          renderNav();
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

  // Initialize app with correct language and state
  updateLanguage(currentLang);
  
  // Set up nav and dashboard access state after rendering
  setTimeout(() => {
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

