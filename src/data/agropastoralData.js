/**
 * DONNÉES AGROPASTORALES — WILAYA DE BÉJAÏA
 * Campagne : 2014/2015 | Unité : Hectares (ha)
 * Source : Direction des Services Agricoles (DSA) — Wilaya de Béjaïa
 * Auteur de l'analyse : Dr. Lotfi Bahloul — Université de Béjaïa
 *
 * Structure :
 *   - agropastoralCommunes : répartition générale des terres par commune
 *   - agropastoralSAU       : détail de la SAU (terres labourables + cultures permanentes)
 *   - agropastoralDairas    : agrégats par daïra
 *   - agropastoralWilaya    : totaux wilaya
 *   - agropastoralIndicators: indicateurs calculés pour l'analyse
 */

// ─────────────────────────────────────────────────────────────────────────────
// TABLEAU 1 : Répartition générale des terres par commune
// Colonnes : sau, pacages, terresImproductivesExploit, superfForest,
//            terresImproductivesNonAffect, totalSuperficie
// ─────────────────────────────────────────────────────────────────────────────
export const agropastoralCommunes = [
  // ── DAÏRA DE BÉJAÏA ──────────────────────────────────────────────────────
  {
    commune: 'Béjaïa',         daira: 'Béjaïa',
    sau: 359, pacages: 387, terresImproductivesExploit: 20,
    superfForest: 10580, terresImproductivesNonAffect: 676, totalSuperficie: 12022
  },
  {
    commune: 'Oued Ghir',      daira: 'Béjaïa',
    sau: 1827, pacages: 383, terresImproductivesExploit: 285,
    superfForest: 1568, terresImproductivesNonAffect: 569, totalSuperficie: 4632
  },

  // ── DAÏRA D'AMIZOUR ──────────────────────────────────────────────────────
  {
    commune: 'Amizour',        daira: 'Amizour',
    sau: 8621, pacages: 329, terresImproductivesExploit: 164,
    superfForest: 760, terresImproductivesNonAffect: 1062, totalSuperficie: 10936
  },
  {
    commune: 'Feraoun',        daira: 'Amizour',
    sau: 2557, pacages: 807, terresImproductivesExploit: 15,
    superfForest: 308, terresImproductivesNonAffect: 504, totalSuperficie: 4191
  },
  {
    commune: 'Semaoune',       daira: 'Amizour',
    sau: 2544, pacages: 358, terresImproductivesExploit: 24,
    superfForest: 126, terresImproductivesNonAffect: 346, totalSuperficie: 3398
  },
  {
    commune: 'Beni Djellil',   daira: 'Amizour',
    sau: 2678, pacages: 20, terresImproductivesExploit: 0,
    superfForest: 50, terresImproductivesNonAffect: 45, totalSuperficie: 2793
  },

  // ── DAÏRA DE TICHY ───────────────────────────────────────────────────────
  {
    commune: 'Timezrit',       daira: 'Tichy',
    sau: 3065, pacages: 20, terresImproductivesExploit: 59,
    superfForest: 555, terresImproductivesNonAffect: 110, totalSuperficie: 3809
  },
  {
    commune: 'Si El Tenine',   daira: 'Tichy',
    sau: 1595, pacages: 41, terresImproductivesExploit: 5,
    superfForest: 890, terresImproductivesNonAffect: 97, totalSuperficie: 2628
  },
  {
    commune: 'Melbou',         daira: 'Tichy',
    sau: 656, pacages: 600, terresImproductivesExploit: 276,
    superfForest: 1340, terresImproductivesNonAffect: 1875, totalSuperficie: 4747
  },
  {
    commune: 'Tamridjet',      daira: 'Tichy',
    sau: 980, pacages: 543, terresImproductivesExploit: 249,
    superfForest: 2718, terresImproductivesNonAffect: 837, totalSuperficie: 5327
  },

  // ── DAÏRA DE TICHY (Tichy commune) ───────────────────────────────────────
  {
    commune: 'Tichy',          daira: 'Tichy',
    sau: 938, pacages: 486, terresImproductivesExploit: 10,
    superfForest: 2692, terresImproductivesNonAffect: 1540, totalSuperficie: 5666
  },
  {
    commune: 'Tala Hamza',     daira: 'Tichy',
    sau: 854, pacages: 938, terresImproductivesExploit: 50,
    superfForest: 1166, terresImproductivesNonAffect: 875, totalSuperficie: 3883
  },
  {
    commune: 'Boukhlifa',      daira: 'Tichy',
    sau: 1606, pacages: 1811, terresImproductivesExploit: 60,
    superfForest: 6808, terresImproductivesNonAffect: 1353, totalSuperficie: 11638
  },

  // ── DAÏRA D'IGHIL ALI ────────────────────────────────────────────────────
  {
    commune: 'Ighil Ali',      daira: 'Ighil Ali',
    sau: 4357, pacages: 2303, terresImproductivesExploit: 20,
    superfForest: 11265, terresImproductivesNonAffect: 1592, totalSuperficie: 19537
  },
  {
    commune: 'Aït R\'zine',    daira: 'Ighil Ali',
    sau: 5207, pacages: 524, terresImproductivesExploit: 15,
    superfForest: 1210, terresImproductivesNonAffect: 500, totalSuperficie: 7456
  },

  // ── DAÏRA DE DARGUINA ────────────────────────────────────────────────────
  {
    commune: 'Darguina',       daira: 'Darguina',
    sau: 1459, pacages: 800, terresImproductivesExploit: 20,
    superfForest: 3698, terresImproductivesNonAffect: 2276, totalSuperficie: 8253
  },
  {
    commune: 'Taskriout',      daira: 'Darguina',
    sau: 579, pacages: 210, terresImproductivesExploit: 110,
    superfForest: 1168, terresImproductivesNonAffect: 1039, totalSuperficie: 3106
  },
  {
    commune: 'Aït Smail',      daira: 'Darguina',
    sau: 1371, pacages: 50, terresImproductivesExploit: 70,
    superfForest: 864, terresImproductivesNonAffect: 353, totalSuperficie: 2708
  },

  // ── DAÏRA D'AOKAS ─────────────────────────────────────────────────────────
  {
    commune: 'Aokas',          daira: 'Aokas',
    sau: 1183, pacages: 35, terresImproductivesExploit: 10,
    superfForest: 1509, terresImproductivesNonAffect: 50, totalSuperficie: 2787
  },
  {
    commune: 'Tizi N\'Berber', daira: 'Aokas',
    sau: 1705, pacages: 125, terresImproductivesExploit: 59,
    superfForest: 2482, terresImproductivesNonAffect: 905, totalSuperficie: 5276
  },

  // ── DAÏRA D'ADEKAR ────────────────────────────────────────────────────────
  {
    commune: 'Adekar',         daira: 'Adekar',
    sau: 1100, pacages: 1610, terresImproductivesExploit: 10,
    superfForest: 7240, terresImproductivesNonAffect: 800, totalSuperficie: 10760
  },
  {
    commune: 'Tighilt',        daira: 'Adekar',
    sau: 617, pacages: 963, terresImproductivesExploit: 6,
    superfForest: 5398, terresImproductivesNonAffect: 150, totalSuperficie: 7134
  },
  {
    commune: 'Beni K\'Sila',   daira: 'Adekar',
    sau: 631, pacages: 923, terresImproductivesExploit: 10,
    superfForest: 15702, terresImproductivesNonAffect: 1150, totalSuperficie: 18416
  },

  // ── DAÏRA D'AKBOU ─────────────────────────────────────────────────────────
  {
    commune: 'Akbou',          daira: 'Akbou',
    sau: 3456, pacages: 526, terresImproductivesExploit: 50,
    superfForest: 416, terresImproductivesNonAffect: 770, totalSuperficie: 5218
  },
  {
    commune: 'Chellata',       daira: 'Akbou',
    sau: 2063, pacages: 911, terresImproductivesExploit: 100,
    superfForest: 906, terresImproductivesNonAffect: 180, totalSuperficie: 4160
  },
  {
    commune: 'Tamokra',        daira: 'Akbou',
    sau: 3658, pacages: 1160, terresImproductivesExploit: 350,
    superfForest: 1422, terresImproductivesNonAffect: 250, totalSuperficie: 6840
  },
  {
    commune: 'Ighram',         daira: 'Akbou',
    sau: 2349, pacages: 1614, terresImproductivesExploit: 150,
    superfForest: 280, terresImproductivesNonAffect: 618, totalSuperficie: 5011
  },

  // ── DAÏRA DE SEDDOUK ──────────────────────────────────────────────────────
  {
    commune: 'Seddouk',        daira: 'Seddouk',
    sau: 3633, pacages: 331, terresImproductivesExploit: 25,
    superfForest: 677, terresImproductivesNonAffect: 776, totalSuperficie: 5442
  },
  {
    commune: 'M\'Cisna',       daira: 'Seddouk',
    sau: 2839, pacages: 5, terresImproductivesExploit: 0,
    superfForest: 948, terresImproductivesNonAffect: 120, totalSuperficie: 3912
  },
  {
    commune: 'Amalou',         daira: 'Seddouk',
    sau: 5104, pacages: 17, terresImproductivesExploit: 0,
    superfForest: 566, terresImproductivesNonAffect: 27, totalSuperficie: 5714
  },
  {
    commune: 'Bouhamza',       daira: 'Seddouk',
    sau: 4432, pacages: 1391, terresImproductivesExploit: 20,
    superfForest: 762, terresImproductivesNonAffect: 1181, totalSuperficie: 7786
  },

  // ── DAÏRA DE TAZMALT ──────────────────────────────────────────────────────
  {
    commune: 'Tazmalt',        daira: 'Tazmalt',
    sau: 2736, pacages: 268, terresImproductivesExploit: 10,
    superfForest: 0, terresImproductivesNonAffect: 386, totalSuperficie: 3400
  },
  {
    commune: 'Beni Melikeche', daira: 'Tazmalt',
    sau: 2025, pacages: 740, terresImproductivesExploit: 10,
    superfForest: 629, terresImproductivesNonAffect: 876, totalSuperficie: 4280
  },
  {
    commune: 'Boudjellil',     daira: 'Tazmalt',
    sau: 5211, pacages: 210, terresImproductivesExploit: 10,
    superfForest: 4154, terresImproductivesNonAffect: 400, totalSuperficie: 9985
  },

  // ── DAÏRA DE CHEMINI ──────────────────────────────────────────────────────
  {
    commune: 'Chemini',        daira: 'Chemini',
    sau: 2132, pacages: 616, terresImproductivesExploit: 70,
    superfForest: 676, terresImproductivesNonAffect: 410, totalSuperficie: 3904
  },
  {
    commune: 'Souk Oufela',    daira: 'Chemini',
    sau: 1027, pacages: 185, terresImproductivesExploit: 10,
    superfForest: 0, terresImproductivesNonAffect: 160, totalSuperficie: 1382
  },
  {
    commune: 'Tibane',         daira: 'Chemini',
    sau: 500, pacages: 15, terresImproductivesExploit: 5,
    superfForest: 0, terresImproductivesNonAffect: 20, totalSuperficie: 540
  },
  {
    commune: 'Akfadou',        daira: 'Chemini',
    sau: 1221, pacages: 350, terresImproductivesExploit: 0,
    superfForest: 2137, terresImproductivesNonAffect: 493, totalSuperficie: 4201
  },

  // ── DAÏRA DE BARBACHA ─────────────────────────────────────────────────────
  {
    commune: 'Barbacha',       daira: 'Barbacha',
    sau: 3587, pacages: 860, terresImproductivesExploit: 20,
    superfForest: 2856, terresImproductivesNonAffect: 1054, totalSuperficie: 8377
  },
  {
    commune: 'Kendira',        daira: 'Barbacha',
    sau: 1839, pacages: 450, terresImproductivesExploit: 15,
    superfForest: 2040, terresImproductivesNonAffect: 212, totalSuperficie: 4556
  },

  // ── DAÏRA D'OUZELLAGUEN ───────────────────────────────────────────────────
  {
    commune: 'Ouzellaguen',    daira: 'Ouzellaguen',
    sau: 3465, pacages: 209, terresImproductivesExploit: 50,
    superfForest: 1786, terresImproductivesNonAffect: 630, totalSuperficie: 6140
  },

  // ── DAÏRA DE SIDI AICH ────────────────────────────────────────────────────
  {
    commune: 'Sidi Aich',      daira: 'Sidi Aich',
    sau: 361, pacages: 10, terresImproductivesExploit: 90,
    superfForest: 0, terresImproductivesNonAffect: 309, totalSuperficie: 770
  },
  {
    commune: 'Tinebdhar',      daira: 'Sidi Aich',
    sau: 1391, pacages: 190, terresImproductivesExploit: 0,
    superfForest: 0, terresImproductivesNonAffect: 80, totalSuperficie: 1661
  },
  {
    commune: 'Tifra',          daira: 'Sidi Aich',
    sau: 2629, pacages: 317, terresImproductivesExploit: 6,
    superfForest: 852, terresImproductivesNonAffect: 80, totalSuperficie: 3884
  },
  {
    commune: 'Sidi Ayad',      daira: 'Sidi Aich',
    sau: 830, pacages: 15, terresImproductivesExploit: 0,
    superfForest: 0, terresImproductivesNonAffect: 61, totalSuperficie: 906
  },
  {
    commune: 'Leflaye',        daira: 'Sidi Aich',
    sau: 803, pacages: 65, terresImproductivesExploit: 0,
    superfForest: 0, terresImproductivesNonAffect: 80, totalSuperficie: 948
  },

  // ── DAÏRA D'EL KSEUR ──────────────────────────────────────────────────────
  {
    commune: 'El Kseur',       daira: 'El Kseur',
    sau: 4497, pacages: 173, terresImproductivesExploit: 160,
    superfForest: 4048, terresImproductivesNonAffect: 528, totalSuperficie: 9406
  },
  {
    commune: 'Fenaia El Mathen',daira: 'El Kseur',
    sau: 2813, pacages: 265, terresImproductivesExploit: 200,
    superfForest: 1188, terresImproductivesNonAffect: 54, totalSuperficie: 4520
  },
  {
    commune: 'Toudja',         daira: 'El Kseur',
    sau: 4173, pacages: 337, terresImproductivesExploit: 100,
    superfForest: 11468, terresImproductivesNonAffect: 635, totalSuperficie: 16713
  },

  // ── DAÏRA DE KHERRATA ─────────────────────────────────────────────────────
  {
    commune: 'Kherrata',       daira: 'Kherrata',
    sau: 2900, pacages: 1183, terresImproductivesExploit: 362,
    superfForest: 3224, terresImproductivesNonAffect: 2100, totalSuperficie: 9769
  },
  {
    commune: 'Draa El Kaid',   daira: 'Kherrata',
    sau: 6875, pacages: 2858, terresImproductivesExploit: 217,
    superfForest: 324, terresImproductivesNonAffect: 2060, totalSuperficie: 12334
  },

  // ── DAÏRA DE BENI MAOUCHE ─────────────────────────────────────────────────
  {
    commune: 'Beni Maouche',   daira: 'Beni Maouche',
    sau: 5310, pacages: 1322, terresImproductivesExploit: 10,
    superfForest: 1044, terresImproductivesNonAffect: 1800, totalSuperficie: 9486
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// TABLEAU 2 : Répartition de la SAU par commune — Campagne 2014/2015
// Colonnes : sauTotal, sauIrrigué, terresLabourHerbacees, terresLabourRepos,
//            labourTotal, prairieNaturelle, vigneOrme, arboFruitier, culturesPermanentes
// ─────────────────────────────────────────────────────────────────────────────
export const agropastoralSAU = [
  // ── DAÏRA DE BÉJAÏA ──────────────────────────────────────────────────────
  {
    commune: 'Béjaïa',          daira: 'Béjaïa',
    sauTotal: 359, sauIrrigué: 81,
    herbacees: 130, repos: 100, labourTotal: 230,
    prairie: 0, vigne: 1, arboFruitier: 129, culturesPermanentes: 130
  },
  {
    commune: 'Oued Ghir',       daira: 'Béjaïa',
    sauTotal: 1827, sauIrrigué: 230,
    herbacees: 571, repos: 750, labourTotal: 1321,
    prairie: 0, vigne: 30, arboFruitier: 476, culturesPermanentes: 506
  },

  // ── DAÏRA D'AMIZOUR ──────────────────────────────────────────────────────
  {
    commune: 'Amizour',         daira: 'Amizour',
    sauTotal: 8621, sauIrrigué: 1309,
    herbacees: 3897, repos: 1309, labourTotal: 5206,
    prairie: 0, vigne: 231, arboFruitier: 3185, culturesPermanentes: 3416
  },
  {
    commune: 'Feraoun',         daira: 'Amizour',
    sauTotal: 2557, sauIrrigué: 21,
    herbacees: 590, repos: 1085, labourTotal: 1675,
    prairie: 0, vigne: 0, arboFruitier: 882, culturesPermanentes: 882
  },
  {
    commune: 'Semaoune',        daira: 'Amizour',
    sauTotal: 2544, sauIrrigué: 186,
    herbacees: 653, repos: 757, labourTotal: 1410,
    prairie: 0, vigne: 49, arboFruitier: 1085, culturesPermanentes: 1134
  },
  {
    commune: 'Beni Djellil',    daira: 'Amizour',
    sauTotal: 2678, sauIrrigué: 17,
    herbacees: 131, repos: 1106, labourTotal: 1237,
    prairie: 0, vigne: 3, arboFruitier: 1438, culturesPermanentes: 1441
  },

  // ── DAÏRA DE TICHY ───────────────────────────────────────────────────────
  {
    commune: 'Timezrit',        daira: 'Tichy',
    sauTotal: 3065, sauIrrigué: 387,
    herbacees: 300, repos: 1216, labourTotal: 1516,
    prairie: 0, vigne: 15, arboFruitier: 1534, culturesPermanentes: 1549
  },
  {
    commune: 'Si El Tenine',    daira: 'Tichy',
    sauTotal: 1595, sauIrrigué: 78,
    herbacees: 402, repos: 0, labourTotal: 402,
    prairie: 614, vigne: 1, arboFruitier: 578, culturesPermanentes: 1193
  },
  {
    commune: 'Melbou',          daira: 'Tichy',
    sauTotal: 656, sauIrrigué: 78,
    herbacees: 105, repos: 101, labourTotal: 206,
    prairie: 100, vigne: 3, arboFruitier: 347, culturesPermanentes: 450
  },
  {
    commune: 'Tamridjet',       daira: 'Tichy',
    sauTotal: 980, sauIrrigué: 59,
    herbacees: 89, repos: 571, labourTotal: 660,
    prairie: 0, vigne: 0, arboFruitier: 321, culturesPermanentes: 321
  },
  {
    commune: 'Tichy',           daira: 'Tichy',
    sauTotal: 938, sauIrrigué: 99,
    herbacees: 166, repos: 228, labourTotal: 394,
    prairie: 50, vigne: 3, arboFruitier: 491, culturesPermanentes: 544
  },
  {
    commune: 'Tala Hamza',      daira: 'Tichy',
    sauTotal: 854, sauIrrigué: 189,
    herbacees: 189, repos: 482, labourTotal: 671,
    prairie: 0, vigne: 9, arboFruitier: 174, culturesPermanentes: 183
  },
  {
    commune: 'Boukhlifa',       daira: 'Tichy',
    sauTotal: 1606, sauIrrigué: 153,
    herbacees: 209, repos: 924, labourTotal: 1133,
    prairie: 0, vigne: 6, arboFruitier: 467, culturesPermanentes: 473
  },

  // ── DAÏRA D'IGHIL ALI ────────────────────────────────────────────────────
  {
    commune: 'Ighil Ali',       daira: 'Ighil Ali',
    sauTotal: 4357, sauIrrigué: 32,
    herbacees: 62, repos: 746, labourTotal: 808,
    prairie: 0, vigne: 1, arboFruitier: 3548, culturesPermanentes: 3549
  },
  {
    commune: 'Aït R\'zine',     daira: 'Ighil Ali',
    sauTotal: 5207, sauIrrigué: 86,
    herbacees: 155, repos: 568, labourTotal: 723,
    prairie: 0, vigne: 1, arboFruitier: 4485, culturesPermanentes: 4485
  },

  // ── DAÏRA DE DARGUINA ────────────────────────────────────────────────────
  {
    commune: 'Darguina',        daira: 'Darguina',
    sauTotal: 1459, sauIrrigué: 88,
    herbacees: 81, repos: 828, labourTotal: 909,
    prairie: 0, vigne: 0, arboFruitier: 550, culturesPermanentes: 550
  },
  {
    commune: 'Taskriout',       daira: 'Darguina',
    sauTotal: 579, sauIrrigué: 127,
    herbacees: 111, repos: 230, labourTotal: 341,
    prairie: 0, vigne: 2, arboFruitier: 236, culturesPermanentes: 238
  },
  {
    commune: 'Aït Smail',       daira: 'Darguina',
    sauTotal: 1371, sauIrrigué: 95,
    herbacees: 157, repos: 763, labourTotal: 920,
    prairie: 0, vigne: 2, arboFruitier: 449, culturesPermanentes: 451
  },

  // ── DAÏRA D'AOKAS ─────────────────────────────────────────────────────────
  {
    commune: 'Aokas',           daira: 'Aokas',
    sauTotal: 1183, sauIrrigué: 204,
    herbacees: 119, repos: 298, labourTotal: 417,
    prairie: 161, vigne: 0, arboFruitier: 712, culturesPermanentes: 885
  },  // NOTE: total labourables ajusté (417+885 ≃ 1302 ≃ sauTotal via différence vacants)
  {
    commune: 'Tizi N\'Berber',  daira: 'Aokas',
    sauTotal: 1705, sauIrrigué: 40,
    herbacees: 52, repos: 190, labourTotal: 242,
    prairie: 50, vigne: 0, arboFruitier: 1413, culturesPermanentes: 1463
  },

  // ── DAÏRA D'ADEKAR ────────────────────────────────────────────────────────
  {
    commune: 'Adekar',          daira: 'Adekar',
    sauTotal: 1100, sauIrrigué: 38,
    herbacees: 29, repos: 324, labourTotal: 353,
    prairie: 85, vigne: 0, arboFruitier: 662, culturesPermanentes: 747
  },
  {
    commune: 'Tighilt',         daira: 'Adekar',
    sauTotal: 617, sauIrrigué: 36,
    herbacees: 32, repos: 194, labourTotal: 226,
    prairie: 10, vigne: 0, arboFruitier: 381, culturesPermanentes: 391
  },
  {
    commune: 'Beni K\'Sila',    daira: 'Adekar',
    sauTotal: 631, sauIrrigué: 81,
    herbacees: 127, repos: 290, labourTotal: 417,
    prairie: 7, vigne: 1, arboFruitier: 206, culturesPermanentes: 214
  },

  // ── DAÏRA D'AKBOU ─────────────────────────────────────────────────────────
  {
    commune: 'Akbou',           daira: 'Akbou',
    sauTotal: 3456, sauIrrigué: 373,
    herbacees: 499, repos: 1251, labourTotal: 1750,
    prairie: 0, vigne: 0, arboFruitier: 1706, culturesPermanentes: 1706
  },
  {
    commune: 'Chellata',        daira: 'Akbou',
    sauTotal: 2063, sauIrrigué: 21,
    herbacees: 57, repos: 600, labourTotal: 657,
    prairie: 0, vigne: 0, arboFruitier: 1406, culturesPermanentes: 1406
  },
  {
    commune: 'Tamokra',         daira: 'Akbou',
    sauTotal: 3658, sauIrrigué: 17,
    herbacees: 19, repos: 794, labourTotal: 813,
    prairie: 0, vigne: 0, arboFruitier: 2845, culturesPermanentes: 2845
  },
  {
    commune: 'Ighram',          daira: 'Akbou',
    sauTotal: 2349, sauIrrigué: 23,
    herbacees: 53, repos: 629, labourTotal: 682,
    prairie: 0, vigne: 0, arboFruitier: 1667, culturesPermanentes: 1667
  },

  // ── DAÏRA DE SEDDOUK ──────────────────────────────────────────────────────
  {
    commune: 'Seddouk',         daira: 'Seddouk',
    sauTotal: 3633, sauIrrigué: 174,
    herbacees: 266, repos: 550, labourTotal: 816,
    prairie: 0, vigne: 10, arboFruitier: 2807, culturesPermanentes: 2817
  },
  {
    commune: 'M\'Cisna',        daira: 'Seddouk',
    sauTotal: 2839, sauIrrigué: 114,
    herbacees: 185, repos: 963, labourTotal: 1148,
    prairie: 0, vigne: 1, arboFruitier: 1690, culturesPermanentes: 1691
  },
  {
    commune: 'Amalou',          daira: 'Seddouk',
    sauTotal: 5104, sauIrrigué: 27,
    herbacees: 30, repos: 2074, labourTotal: 2104,
    prairie: 0, vigne: 1, arboFruitier: 3000, culturesPermanentes: 3001
  },
  {
    commune: 'Bouhamza',        daira: 'Seddouk',
    sauTotal: 4432, sauIrrigué: 66,
    herbacees: 76, repos: 1181, labourTotal: 1257,
    prairie: 0, vigne: 1, arboFruitier: 3175, culturesPermanentes: 3176
  },

  // ── DAÏRA DE TAZMALT ──────────────────────────────────────────────────────
  {
    commune: 'Tazmalt',         daira: 'Tazmalt',
    sauTotal: 2736, sauIrrigué: 191,
    herbacees: 186, repos: 859, labourTotal: 1045,
    prairie: 0, vigne: 1, arboFruitier: 1690, culturesPermanentes: 1691
  },
  {
    commune: 'Beni Melikeche',  daira: 'Tazmalt',
    sauTotal: 2025, sauIrrigué: 51,
    herbacees: 77, repos: 511, labourTotal: 588,
    prairie: 0, vigne: 1, arboFruitier: 1436, culturesPermanentes: 1437
  },
  {
    commune: 'Boudjellil',      daira: 'Tazmalt',
    sauTotal: 5211, sauIrrigué: 91,
    herbacees: 87, repos: 1163, labourTotal: 1250,
    prairie: 0, vigne: 0, arboFruitier: 3961, culturesPermanentes: 3961
  },

  // ── DAÏRA DE CHEMINI ──────────────────────────────────────────────────────
  {
    commune: 'Chemini',         daira: 'Chemini',
    sauTotal: 2132, sauIrrigué: 12,
    herbacees: 18, repos: 378, labourTotal: 396,
    prairie: 10, vigne: 0, arboFruitier: 1726, culturesPermanentes: 1736
  },
  {
    commune: 'Souk Oufela',     daira: 'Chemini',
    sauTotal: 1027, sauIrrigué: 12,
    herbacees: 17, repos: 315, labourTotal: 332,
    prairie: 10, vigne: 0, arboFruitier: 686, culturesPermanentes: 696
  },
  {
    commune: 'Tibane',          daira: 'Chemini',
    sauTotal: 500, sauIrrigué: 6,
    herbacees: 7, repos: 105, labourTotal: 112,
    prairie: 0, vigne: 0, arboFruitier: 383, culturesPermanentes: 388
  },
  {
    commune: 'Akfadou',         daira: 'Chemini',
    sauTotal: 1221, sauIrrigué: 12,
    herbacees: 14, repos: 990, labourTotal: 1004,
    prairie: 10, vigne: 0, arboFruitier: 207, culturesPermanentes: 217
  },

  // ── DAÏRA DE BARBACHA ─────────────────────────────────────────────────────
  {
    commune: 'Barbacha',        daira: 'Barbacha',
    sauTotal: 3587, sauIrrigué: 22,
    herbacees: 104, repos: 2042, labourTotal: 2146,
    prairie: 0, vigne: 5, arboFruitier: 1436, culturesPermanentes: 1441
  },
  {
    commune: 'Kendira',         daira: 'Barbacha',
    sauTotal: 1839, sauIrrigué: 13,
    herbacees: 70, repos: 557, labourTotal: 627,
    prairie: 0, vigne: 5, arboFruitier: 1207, culturesPermanentes: 1212
  },

  // ── DAÏRA D'OUZELLAGUEN ───────────────────────────────────────────────────
  {
    commune: 'Ouzellaguen',     daira: 'Ouzellaguen',
    sauTotal: 3465, sauIrrigué: 350,
    herbacees: 498, repos: 1157, labourTotal: 1655,
    prairie: 0, vigne: 0, arboFruitier: 1810, culturesPermanentes: 1810
  },

  // ── DAÏRA DE SIDI AICH ────────────────────────────────────────────────────
  {
    commune: 'Sidi Aich',       daira: 'Sidi Aich',
    sauTotal: 361, sauIrrigué: 21,
    herbacees: 25, repos: 157, labourTotal: 182,
    prairie: 5, vigne: 0, arboFruitier: 175, culturesPermanentes: 180
  },
  {
    commune: 'Tinebdhar',       daira: 'Sidi Aich',
    sauTotal: 1391, sauIrrigué: 10,
    herbacees: 11, repos: 588, labourTotal: 599,
    prairie: 10, vigne: 0, arboFruitier: 782, culturesPermanentes: 792
  },
  {
    commune: 'Tifra',           daira: 'Sidi Aich',
    sauTotal: 2629, sauIrrigué: 14,
    herbacees: 17, repos: 2345, labourTotal: 2362,
    prairie: 15, vigne: 0, arboFruitier: 252, culturesPermanentes: 267
  },
  {
    commune: 'Sidi Ayad',       daira: 'Sidi Aich',
    sauTotal: 830, sauIrrigué: 24,
    herbacees: 20, repos: 164, labourTotal: 184,
    prairie: 5, vigne: 0, arboFruitier: 642, culturesPermanentes: 647
  },
  {
    commune: 'Leflaye',         daira: 'Sidi Aich',
    sauTotal: 803, sauIrrigué: 11,
    herbacees: 25, repos: 239, labourTotal: 264,
    prairie: 5, vigne: 0, arboFruitier: 534, culturesPermanentes: 539
  },

  // ── DAÏRA D'EL KSEUR ──────────────────────────────────────────────────────
  {
    commune: 'El Kseur',        daira: 'El Kseur',
    sauTotal: 4497, sauIrrigué: 493,
    herbacees: 1114, repos: 2031, labourTotal: 3145,
    prairie: 0, vigne: 24, arboFruitier: 1329, culturesPermanentes: 1353
  },
  {
    commune: 'Fenaia El Mathen', daira: 'El Kseur',
    sauTotal: 2813, sauIrrigué: 126,
    herbacees: 433, repos: 547, labourTotal: 980,
    prairie: 0, vigne: 1, arboFruitier: 1832, culturesPermanentes: 1833
  },
  {
    commune: 'Toudja',          daira: 'El Kseur',
    sauTotal: 4173, sauIrrigué: 72,
    herbacees: 103, repos: 3609, labourTotal: 3712,
    prairie: 0, vigne: 7, arboFruitier: 455, culturesPermanentes: 462
  },

  // ── DAÏRA DE KHERRATA ─────────────────────────────────────────────────────
  {
    commune: 'Kherrata',        daira: 'Kherrata',
    sauTotal: 2900, sauIrrigué: 191,
    herbacees: 792, repos: 1259, labourTotal: 2051,
    prairie: 0, vigne: 7, arboFruitier: 842, culturesPermanentes: 849
  },
  {
    commune: 'Draa El Kaid',    daira: 'Kherrata',
    sauTotal: 6875, sauIrrigué: 463,
    herbacees: 2562, repos: 2808, labourTotal: 5370,
    prairie: 0, vigne: 28, arboFruitier: 1477, culturesPermanentes: 1505
  },

  // ── DAÏRA DE BENI MAOUCHE ─────────────────────────────────────────────────
  {
    commune: 'Beni Maouche',    daira: 'Beni Maouche',
    sauTotal: 5310, sauIrrigué: 82,
    herbacees: 366, repos: 786, labourTotal: 1152,
    prairie: 0, vigne: 1, arboFruitier: 4157, culturesPermanentes: 4158
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// TOTAUX WILAYA (ligne T. WILAYA des tableaux)
// ─────────────────────────────────────────────────────────────────────────────
export const agropastoralWilaya = {
  sau: 130348,
  pacages: 30859,
  terresImproductivesExploit: 3587,
  superfForest: 122500,
  terresImproductivesNonAffect: 35054,
  totalSuperficie: 322348,
  // SAU detail
  sauIrrigué: 6003,
  labourTotal: 59681,
  herbacees: 13560,
  repos: 46121,
  prairie: 1152,
  vigne: 462,
  arboFruitier: 69064,
  culturesPermanentes: 70678,
};

// ─────────────────────────────────────────────────────────────────────────────
// AGRÉGATS PAR DAÏRA (calculés depuis les tableaux)
// ─────────────────────────────────────────────────────────────────────────────
export const agropastoralDairas = [
  {
    daira: 'Béjaïa',
    communes: ['Béjaïa', 'Oued Ghir'],
    sau: 2186, pacages: 770, terresImproductivesExploit: 305,
    superfForest: 12148, terresImproductivesNonAffect: 1245, totalSuperficie: 16654,
    sauIrrigué: 311, labourTotal: 1551, culturesPermanentes: 636
  },
  {
    daira: 'Amizour',
    communes: ['Amizour', 'Feraoun', 'Semaoune', 'Beni Djellil'],
    sau: 16400, pacages: 1514, terresImproductivesExploit: 203,
    superfForest: 1244, terresImproductivesNonAffect: 1957, totalSuperficie: 21318,
    sauIrrigué: 760, labourTotal: 9528, culturesPermanentes: 6873
  },
  {
    daira: 'Tichy',
    communes: ['Timezrit', 'Si El Tenine', 'Melbou', 'Tamridjet', 'Tichy', 'Tala Hamza', 'Boukhlifa'],
    sau: 3231, pacages: 1184, terresImproductivesExploit: 530,
    superfForest: 4948, terresImproductivesNonAffect: 2809, totalSuperficie: 12702,
    sauIrrigué: 215, labourTotal: 1268, culturesPermanentes: 1964
  },
  {
    daira: 'Ighil Ali',
    communes: ['Ighil Ali', 'Aït R\'zine'],
    sau: 9564, pacages: 2827, terresImproductivesExploit: 35,
    superfForest: 12475, terresImproductivesNonAffect: 2092, totalSuperficie: 26993,
    sauIrrigué: 118, labourTotal: 1531, culturesPermanentes: 8034
  },
  {
    daira: 'Darguina',
    communes: ['Darguina', 'Taskriout', 'Aït Smail'],
    sau: 3409, pacages: 1060, terresImproductivesExploit: 200,
    superfForest: 5730, terresImproductivesNonAffect: 3668, totalSuperficie: 14067,
    sauIrrigué: 310, labourTotal: 2170, culturesPermanentes: 1239
  },
  {
    daira: 'Aokas',
    communes: ['Aokas', 'Tizi N\'Berber'],
    sau: 2888, pacages: 160, terresImproductivesExploit: 69,
    superfForest: 3991, terresImproductivesNonAffect: 955, totalSuperficie: 8063,
    sauIrrigué: 244, labourTotal: 540, culturesPermanentes: 2348
  },
  {
    daira: 'Adekar',
    communes: ['Adekar', 'Tighilt', 'Beni K\'Sila'],
    sau: 2348, pacages: 3496, terresImproductivesExploit: 26,
    superfForest: 28340, terresImproductivesNonAffect: 2100, totalSuperficie: 36310,
    sauIrrigué: 188, labourTotal: 996, culturesPermanentes: 1352
  },
  {
    daira: 'Akbou',
    communes: ['Akbou', 'Chellata', 'Tamokra', 'Ighram'],
    sau: 11526, pacages: 4211, terresImproductivesExploit: 650,
    superfForest: 3024, terresImproductivesNonAffect: 1818, totalSuperficie: 21229,
    sauIrrigué: 434, labourTotal: 3902, culturesPermanentes: 7624
  },
  {
    daira: 'Seddouk',
    communes: ['Seddouk', 'M\'Cisna', 'Amalou', 'Bouhamza'],
    sau: 16008, pacages: 1744, terresImproductivesExploit: 45,
    superfForest: 2953, terresImproductivesNonAffect: 2104, totalSuperficie: 22854,
    sauIrrigué: 381, labourTotal: 5325, culturesPermanentes: 10685
  },
  {
    daira: 'Tazmalt',
    communes: ['Tazmalt', 'Beni Melikeche', 'Boudjellil'],
    sau: 9972, pacages: 1218, terresImproductivesExploit: 30,
    superfForest: 4783, terresImproductivesNonAffect: 1662, totalSuperficie: 17665,
    sauIrrigué: 333, labourTotal: 2883, culturesPermanentes: 7089
  },
  {
    daira: 'Chemini',
    communes: ['Chemini', 'Souk Oufela', 'Tibane', 'Akfadou'],
    sau: 4880, pacages: 1166, terresImproductivesExploit: 85,
    superfForest: 2813, terresImproductivesNonAffect: 1083, totalSuperficie: 10027,
    sauIrrigué: 42, labourTotal: 1844, culturesPermanentes: 3037
  },
  {
    daira: 'Barbacha',
    communes: ['Barbacha', 'Kendira'],
    sau: 5426, pacages: 1310, terresImproductivesExploit: 35,
    superfForest: 4896, terresImproductivesNonAffect: 1266, totalSuperficie: 12933,
    sauIrrigué: 35, labourTotal: 2773, culturesPermanentes: 2653
  },
  {
    daira: 'Ouzellaguen',
    communes: ['Ouzellaguen'],
    sau: 3465, pacages: 209, terresImproductivesExploit: 50,
    superfForest: 1786, terresImproductivesNonAffect: 630, totalSuperficie: 6140,
    sauIrrigué: 350, labourTotal: 1655, culturesPermanentes: 1810
  },
  {
    daira: 'Sidi Aich',
    communes: ['Sidi Aich', 'Tinebdhar', 'Tifra', 'Sidi Ayad', 'Leflaye'],
    sau: 6014, pacages: 597, terresImproductivesExploit: 96,
    superfForest: 852, terresImproductivesNonAffect: 610, totalSuperficie: 8169,
    sauIrrigué: 80, labourTotal: 3591, culturesPermanentes: 2425
  },
  {
    daira: 'El Kseur',
    communes: ['El Kseur', 'Fenaia El Mathen', 'Toudja'],
    sau: 11483, pacages: 775, terresImproductivesExploit: 460,
    superfForest: 16704, terresImproductivesNonAffect: 1217, totalSuperficie: 30639,
    sauIrrigué: 671, labourTotal: 7837, culturesPermanentes: 3648
  },
  {
    daira: 'Kherrata',
    communes: ['Kherrata', 'Draa El Kaid'],
    sau: 9775, pacages: 4041, terresImproductivesExploit: 579,
    superfForest: 3548, terresImproductivesNonAffect: 4160, totalSuperficie: 22103,
    sauIrrigué: 654, labourTotal: 7421, culturesPermanentes: 2354
  },
  {
    daira: 'Beni Maouche',
    communes: ['Beni Maouche'],
    sau: 5310, pacages: 1322, terresImproductivesExploit: 10,
    superfForest: 1044, terresImproductivesNonAffect: 1800, totalSuperficie: 9486,
    sauIrrigué: 82, labourTotal: 1152, culturesPermanentes: 4158
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// INDICATEURS CALCULÉS POUR L'ANALYSE (colloques / publication scientifique)
// ─────────────────────────────────────────────────────────────────────────────
/**
 * Calcule les indicateurs agropastoraux pour une commune donnée.
 * @param {object} c  - un objet de agropastoralCommunes
 * @param {object} s  - l'objet SAU correspondant de agropastoralSAU
 * @returns {object}  - indicateurs normalisés
 */
export const computeAgropastoralIndicators = (c, s) => {
  const total = c.totalSuperficie || 1;
  const sau   = c.sau || 0;
  const sauIrr = s ? (s.sauIrrigué || 0) : 0;
  const perm  = s ? (s.culturesPermanentes || 0) : 0;
  const lab   = s ? (s.labourTotal || 0) : 0;

  return {
    tauxMiseEnValeur:      parseFloat(((sau / total) * 100).toFixed(1)),
    tauxIrrigation:        sau > 0 ? parseFloat(((sauIrr / sau) * 100).toFixed(1)) : 0,
    ratioCulturesPermanentes: sau > 0 ? parseFloat(((perm / sau) * 100).toFixed(1)) : 0,
    intensitePastorale:    parseFloat(((c.pacages / total) * 100).toFixed(1)),
    couvertureForestiere:  parseFloat(((c.superfForest / total) * 100).toFixed(1)),
    partTerresImproductives: parseFloat((((c.terresImproductivesExploit + c.terresImproductivesNonAffect) / total) * 100).toFixed(1)),
    ratioLabourTotal:      sau > 0 ? parseFloat(((lab / sau) * 100).toFixed(1)) : 0,
  };
};

// Indicateurs wilaya pour le résumé exécutif
export const agropastoralWilayaIndicators = {
  tauxMiseEnValeur:       parseFloat(((130348 / 322348) * 100).toFixed(1)),    // 40.4%
  tauxIrrigation:         parseFloat(((6003 / 130348) * 100).toFixed(1)),      // 4.6%
  ratioCulturesPermanentes: parseFloat(((70678 / 130348) * 100).toFixed(1)),   // 54.2%
  couvertureForestiere:   parseFloat(((122500 / 322348) * 100).toFixed(1)),    // 38.0%
  intensitePastorale:     parseFloat(((30859 / 322348) * 100).toFixed(1)),     // 9.6%
  partTerresImproductives: parseFloat((((3587 + 35054) / 322348) * 100).toFixed(1)), // 12.0%
  ratioLabourTotal:       parseFloat(((59681 / 130348) * 100).toFixed(1)),     // 45.8%
};

// ─────────────────────────────────────────────────────────────────────────────
// TABLEAU 3 : Occupation des sols par commune — Campagne 2014/2015 (Unité : ha)
// Source : DSA Béjaïa
// Colonnes : cereales, legumesSecs, fourrages, agrumes, maraicher,
//            vigneTable, olivier, figuier, cultIndustrielle
// ─────────────────────────────────────────────────────────────────────────────
export const agropastoralOccupation = [
  // ── DAÏRA DE BÉJAÏA ──────────────────────────────────────────────────────
  { commune:'Béjaïa',           daira:'Béjaïa',       cereales:20,   legumesSecs:0,   fourrages:52,   agrumes:29,   maraicher:58,     vigneTable:0.5,  olivier:196,  figuier:0,    cultIndustrielle:0  },
  { commune:'Oued Ghir',        daira:'Béjaïa',       cereales:387,  legumesSecs:2,   fourrages:81,   agrumes:177,  maraicher:100.63, vigneTable:30,   olivier:101,  figuier:33,   cultIndustrielle:0  },
  // ── DAÏRA D'AMIZOUR ──────────────────────────────────────────────────────
  { commune:'Amizour',          daira:'Amizour',      cereales:395,  legumesSecs:20,  fourrages:620,  agrumes:373,  maraicher:264,    vigneTable:231,  olivier:2340, figuier:255,  cultIndustrielle:10 },
  { commune:'Feraoun',          daira:'Amizour',      cereales:290,  legumesSecs:8,   fourrages:260,  agrumes:0,    maraicher:32,     vigneTable:0,    olivier:258,  figuier:599,  cultIndustrielle:0  },
  { commune:'Semaoune',         daira:'Amizour',      cereales:370,  legumesSecs:69,  fourrages:100,  agrumes:148,  maraicher:114,    vigneTable:49,   olivier:571,  figuier:228,  cultIndustrielle:0  },
  { commune:'Beni Djellil',     daira:'Amizour',      cereales:20,   legumesSecs:17,  fourrages:40,   agrumes:0,    maraicher:54,     vigneTable:3,    olivier:154,  figuier:1237, cultIndustrielle:0  },
  // ── DAÏRA DE TICHY ───────────────────────────────────────────────────────
  { commune:'Timezrit',         daira:'Tichy',        cereales:200,  legumesSecs:15,  fourrages:0,    agrumes:309,  maraicher:82,     vigneTable:15,   olivier:878,  figuier:100,  cultIndustrielle:3  },
  { commune:'Si El Tenine',     daira:'Tichy',        cereales:147,  legumesSecs:0,   fourrages:197,  agrumes:55,   maraicher:58,     vigneTable:1,    olivier:348,  figuier:33,   cultIndustrielle:0  },
  { commune:'Melbou',           daira:'Tichy',        cereales:0,    legumesSecs:0,   fourrages:6,    agrumes:25,   maraicher:99,     vigneTable:3,    olivier:284,  figuier:11,   cultIndustrielle:0  },
  { commune:'Tamridjet',        daira:'Tichy',        cereales:0,    legumesSecs:0,   fourrages:0,    agrumes:8,    maraicher:59,     vigneTable:0,    olivier:235,  figuier:20,   cultIndustrielle:0  },
  { commune:'Tichy',            daira:'Tichy',        cereales:8,    legumesSecs:8,   fourrages:0,    agrumes:21,   maraicher:150,    vigneTable:3,    olivier:246,  figuier:102,  cultIndustrielle:0  },
  { commune:'Tala Hamza',       daira:'Tichy',        cereales:16,   legumesSecs:9,   fourrages:21,   agrumes:26,   maraicher:142.9,  vigneTable:9,    olivier:46,   figuier:10,   cultIndustrielle:0  },
  { commune:'Boukhlifa',        daira:'Tichy',        cereales:35,   legumesSecs:8,   fourrages:46,   agrumes:66,   maraicher:120,    vigneTable:5.75, olivier:199,  figuier:47,   cultIndustrielle:0  },
  // ── DAÏRA D'IGHIL ALI ────────────────────────────────────────────────────
  { commune:'Ighil Ali',        daira:'Ighil Ali',    cereales:45,   legumesSecs:0,   fourrages:10,   agrumes:0,    maraicher:7,      vigneTable:1,    olivier:3503, figuier:30,   cultIndustrielle:0  },
  { commune:"Aït R'zine",       daira:'Ighil Ali',    cereales:99,   legumesSecs:0,   fourrages:30,   agrumes:4,    maraicher:26,     vigneTable:0,    olivier:4300, figuier:120,  cultIndustrielle:0  },
  // ── DAÏRA DE DARGUINA ────────────────────────────────────────────────────
  { commune:'Darguina',         daira:'Darguina',     cereales:0,    legumesSecs:8,   fourrages:0,    agrumes:11,   maraicher:65,     vigneTable:0,    olivier:308,  figuier:110,  cultIndustrielle:8  },
  { commune:'Taskriout',        daira:'Darguina',     cereales:30,   legumesSecs:4,   fourrages:10,   agrumes:11,   maraicher:47,     vigneTable:2,    olivier:148,  figuier:40,   cultIndustrielle:20 },
  { commune:'Aït Smail',        daira:'Darguina',     cereales:50,   legumesSecs:8,   fourrages:2,    agrumes:1,    maraicher:74,     vigneTable:2,    olivier:314,  figuier:100,  cultIndustrielle:23 },
  // ── DAÏRA D'AOKAS ─────────────────────────────────────────────────────────
  { commune:'Aokas',            daira:'Aokas',        cereales:6,    legumesSecs:2,   fourrages:0,    agrumes:75,   maraicher:171,    vigneTable:12,   olivier:380,  figuier:150,  cultIndustrielle:0  },
  { commune:"Tizi N'Berber",    daira:'Aokas',        cereales:7,    legumesSecs:10,  fourrages:0,    agrumes:0,    maraicher:35,     vigneTable:0,    olivier:788,  figuier:499,  cultIndustrielle:0  },
  // ── DAÏRA D'ADEKAR ────────────────────────────────────────────────────────
  { commune:'Adekar',           daira:'Adekar',       cereales:4,    legumesSecs:2,   fourrages:5,    agrumes:0,    maraicher:19,     vigneTable:0,    olivier:575,  figuier:65,   cultIndustrielle:0  },
  { commune:'Tighilt',          daira:'Adekar',       cereales:5,    legumesSecs:2,   fourrages:10,   agrumes:0,    maraicher:15,     vigneTable:0,    olivier:311,  figuier:48,   cultIndustrielle:0  },
  { commune:"Beni K'Sila",      daira:'Adekar',       cereales:25,   legumesSecs:6,   fourrages:19,   agrumes:6,    maraicher:77,     vigneTable:0.66, olivier:161,  figuier:35,   cultIndustrielle:0  },
  // ── DAÏRA D'AKBOU ─────────────────────────────────────────────────────────
  { commune:'Akbou',            daira:'Akbou',        cereales:160,  legumesSecs:25,  fourrages:100,  agrumes:104,  maraicher:214,    vigneTable:0,    olivier:1487, figuier:60,   cultIndustrielle:0  },
  { commune:'Chellata',         daira:'Akbou',        cereales:15,   legumesSecs:11,  fourrages:16,   agrumes:0,    maraicher:15,     vigneTable:0,    olivier:1175, figuier:225,  cultIndustrielle:0  },
  { commune:'Tamokra',          daira:'Akbou',        cereales:0,    legumesSecs:0,   fourrages:18,   agrumes:0,    maraicher:10,     vigneTable:0,    olivier:2719, figuier:115,  cultIndustrielle:0  },
  { commune:'Ighram',           daira:'Akbou',        cereales:0,    legumesSecs:10,  fourrages:30,   agrumes:0,    maraicher:13,     vigneTable:0,    olivier:1344, figuier:310,  cultIndustrielle:0  },
  // ── DAÏRA DE SEDDOUK ──────────────────────────────────────────────────────
  { commune:'Seddouk',          daira:'Seddouk',      cereales:212,  legumesSecs:8,   fourrages:32,   agrumes:27,   maraicher:14,     vigneTable:10,   olivier:2330, figuier:267,  cultIndustrielle:0  },
  { commune:"M'Cisna",          daira:'Seddouk',      cereales:80,   legumesSecs:7,   fourrages:75,   agrumes:0,    maraicher:23,     vigneTable:1,    olivier:640,  figuier:900,  cultIndustrielle:0  },
  { commune:'Amalou',           daira:'Seddouk',      cereales:10,   legumesSecs:0,   fourrages:20,   agrumes:3,    maraicher:0,      vigneTable:0.5,  olivier:2485, figuier:468,  cultIndustrielle:0  },
  { commune:'Bouhamza',         daira:'Seddouk',      cereales:20,   legumesSecs:7,   fourrages:10,   agrumes:2,    maraicher:39,     vigneTable:1,    olivier:2862, figuier:178,  cultIndustrielle:0  },
  // ── DAÏRA DE TAZMALT ──────────────────────────────────────────────────────
  { commune:'Tazmalt',          daira:'Tazmalt',      cereales:74,   legumesSecs:0,   fourrages:27,   agrumes:8,    maraicher:85,     vigneTable:1,    olivier:1621, figuier:5,    cultIndustrielle:0  },
  { commune:'Beni Melikeche',   daira:'Tazmalt',      cereales:0,    legumesSecs:0,   fourrages:57,   agrumes:0,    maraicher:20,     vigneTable:1,    olivier:1323, figuier:70,   cultIndustrielle:0  },
  { commune:'Boudjellil',       daira:'Tazmalt',      cereales:5,    legumesSecs:0,   fourrages:25,   agrumes:13,   maraicher:57,     vigneTable:0,    olivier:3905, figuier:6,    cultIndustrielle:0  },
  // ── DAÏRA DE CHEMINI ──────────────────────────────────────────────────────
  { commune:'Chemini',          daira:'Chemini',      cereales:0,    legumesSecs:0,   fourrages:6,    agrumes:0,    maraicher:0,      vigneTable:0,    olivier:1696, figuier:60,   cultIndustrielle:0  },
  { commune:'Souk Oufela',      daira:'Chemini',      cereales:0,    legumesSecs:0,   fourrages:5,    agrumes:0,    maraicher:12,     vigneTable:0,    olivier:656,  figuier:15,   cultIndustrielle:0  },
  { commune:'Tibane',           daira:'Chemini',      cereales:0,    legumesSecs:1,   fourrages:0,    agrumes:1,    maraicher:0,      vigneTable:6,    olivier:0,    figuier:374,  cultIndustrielle:1  },
  { commune:'Akfadou',          daira:'Chemini',      cereales:0,    legumesSecs:0,   fourrages:2,    agrumes:0,    maraicher:12,     vigneTable:0,    olivier:172,  figuier:10,   cultIndustrielle:0  },
  // ── DAÏRA DE BARBACHA ─────────────────────────────────────────────────────
  { commune:'Barbacha',         daira:'Barbacha',     cereales:20,   legumesSecs:10,  fourrages:30,   agrumes:0,    maraicher:44,     vigneTable:5,    olivier:375,  figuier:1000, cultIndustrielle:0  },
  { commune:'Kendira',          daira:'Barbacha',     cereales:3,    legumesSecs:5,   fourrages:35,   agrumes:1,    maraicher:27,     vigneTable:5,    olivier:426,  figuier:700,  cultIndustrielle:0  },
  // ── DAÏRA D'OUZELLAGUEN ───────────────────────────────────────────────────
  { commune:'Ouzellaguen',      daira:'Ouzellaguen',  cereales:135,  legumesSecs:20,  fourrages:150,  agrumes:45,   maraicher:182.62, vigneTable:0,    olivier:1424, figuier:290,  cultIndustrielle:10 },
  // ── DAÏRA DE SIDI AICH ────────────────────────────────────────────────────
  { commune:'Sidi Aich',        daira:'Sidi Aich',    cereales:7,    legumesSecs:0,   fourrages:3,    agrumes:6,    maraicher:15,     vigneTable:0,    olivier:151,  figuier:5,    cultIndustrielle:0  },
  { commune:'Tinebdhar',        daira:'Sidi Aich',    cereales:0,    legumesSecs:0,   fourrages:4,    agrumes:0,    maraicher:7,      vigneTable:0,    olivier:770,  figuier:6,    cultIndustrielle:0  },
  { commune:'Tifra',            daira:'Sidi Aich',    cereales:0,    legumesSecs:0,   fourrages:3,    agrumes:0,    maraicher:14,     vigneTable:0,    olivier:229,  figuier:8,    cultIndustrielle:0  },
  { commune:'Sidi Ayad',        daira:'Sidi Aich',    cereales:0,    legumesSecs:0,   fourrages:2,    agrumes:2,    maraicher:18,     vigneTable:0,    olivier:604,  figuier:19,   cultIndustrielle:0  },
  { commune:'Leflaye',          daira:'Sidi Aich',    cereales:13,   legumesSecs:0,   fourrages:1,    agrumes:6,    maraicher:11,     vigneTable:0,    olivier:519,  figuier:2,    cultIndustrielle:0  },
  // ── DAÏRA D'EL KSEUR ──────────────────────────────────────────────────────
  { commune:'El Kseur',         daira:'El Kseur',     cereales:630,  legumesSecs:8,   fourrages:340,  agrumes:344,  maraicher:136,    vigneTable:24,   olivier:840,  figuier:95,   cultIndustrielle:0  },
  { commune:'Fenaia El Mathen', daira:'El Kseur',     cereales:305,  legumesSecs:8,   fourrages:67,   agrumes:97,   maraicher:52,     vigneTable:1,    olivier:1235, figuier:460,  cultIndustrielle:1  },
  { commune:'Toudja',           daira:'El Kseur',     cereales:0,    legumesSecs:0,   fourrages:2,    agrumes:7,    maraicher:101,    vigneTable:7,    olivier:290,  figuier:39,   cultIndustrielle:0  },
  // ── DAÏRA DE KHERRATA ─────────────────────────────────────────────────────
  { commune:'Kherrata',         daira:'Kherrata',     cereales:600,  legumesSecs:50,  fourrages:45,   agrumes:0,    maraicher:93,     vigneTable:7,    olivier:630,  figuier:60,   cultIndustrielle:4  },
  { commune:'Draa El Kaid',     daira:'Kherrata',     cereales:1920, legumesSecs:160, fourrages:141,  agrumes:0,    maraicher:286,    vigneTable:28,   olivier:1000, figuier:95,   cultIndustrielle:55 },
  // ── DAÏRA DE BENI MAOUCHE ─────────────────────────────────────────────────
  { commune:'Beni Maouche',     daira:'Beni Maouche', cereales:100,  legumesSecs:6,   fourrages:200,  agrumes:0,    maraicher:60,     vigneTable:1,    olivier:2982, figuier:1005, cultIndustrielle:0  },
];

// Totaux Wilaya — Occupation des sols
export const agropastoralOccupationWilaya = {
  cereales: 6472, legumesSecs: 533, fourrages: 2956, agrumes: 2010,
  maraicher: 3439, vigneTable: 461, olivier: 52800, figuier: 10303,
  cultIndustrielle: 134,
  get totalCulture() {
    return this.cereales + this.legumesSecs + this.fourrages + this.agrumes +
           this.maraicher + this.vigneTable + this.olivier + this.figuier + this.cultIndustrielle;
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// TABLEAU 4 : Principales productions par commune — Campagne 2014/2015 (Unité : Qx)
// Source : DSA Béjaïa
// ─────────────────────────────────────────────────────────────────────────────
export const agropastoralProductions = [
  // ── DAÏRA DE BÉJAÏA ──────────────────────────────────────────────────────
  { commune:'Béjaïa',           daira:'Béjaïa',       cereales:300,   legumesSecs:0,    fourrages:7575,   agrumes:2800,   maraicher:9409,   olivier:1160,   figuier:0,    cultIndustrielle:0    },
  { commune:'Oued Ghir',        daira:'Béjaïa',       cereales:6480,  legumesSecs:25,   fourrages:15270,  agrumes:18100,  maraicher:26646,  olivier:1200,   figuier:1130, cultIndustrielle:0    },
  // ── DAÏRA D'AMIZOUR ──────────────────────────────────────────────────────
  { commune:'Amizour',          daira:'Amizour',      cereales:4000,  legumesSecs:275,  fourrages:49950,  agrumes:27455,  maraicher:57560,  olivier:25300,  figuier:8500, cultIndustrielle:4200 },
  { commune:'Feraoun',          daira:'Amizour',      cereales:3780,  legumesSecs:100,  fourrages:9520,   agrumes:0,      maraicher:15499,  olivier:2440,   figuier:21000,cultIndustrielle:0    },
  { commune:'Semaoune',         daira:'Amizour',      cereales:6240,  legumesSecs:1085, fourrages:10875,  agrumes:9190,   maraicher:32026,  olivier:6060,   figuier:9000, cultIndustrielle:0    },
  { commune:'Beni Djellil',     daira:'Amizour',      cereales:300,   legumesSecs:145,  fourrages:8270,   agrumes:0,      maraicher:7357,   olivier:2400,   figuier:31000,cultIndustrielle:0    },
  // ── DAÏRA DE TICHY ───────────────────────────────────────────────────────
  { commune:'Timezrit',         daira:'Tichy',        cereales:3940,  legumesSecs:300,  fourrages:3300,   agrumes:30600,  maraicher:20540,  olivier:21500,  figuier:3700, cultIndustrielle:750  },
  { commune:'Si El Tenine',     daira:'Tichy',        cereales:1673,  legumesSecs:0,    fourrages:47380,  agrumes:6190,   maraicher:16393,  olivier:3276,   figuier:800,  cultIndustrielle:0    },
  { commune:'Melbou',           daira:'Tichy',        cereales:0,     legumesSecs:0,    fourrages:3200,   agrumes:3750,   maraicher:23330,  olivier:3290,   figuier:250,  cultIndustrielle:0    },
  { commune:'Tamridjet',        daira:'Tichy',        cereales:0,     legumesSecs:0,    fourrages:600,    agrumes:1120,   maraicher:10395,  olivier:700,    figuier:450,  cultIndustrielle:0    },
  { commune:'Tichy',            daira:'Tichy',        cereales:90,    legumesSecs:96,   fourrages:1000,   agrumes:1510,   maraicher:46621,  olivier:2370,   figuier:2500, cultIndustrielle:0    },
  { commune:'Tala Hamza',       daira:'Tichy',        cereales:239,   legumesSecs:215,  fourrages:4275,   agrumes:2850,   maraicher:34675,  olivier:476,    figuier:280,  cultIndustrielle:0    },
  { commune:'Boukhlifa',        daira:'Tichy',        cereales:494,   legumesSecs:411,  fourrages:9700,   agrumes:8355,   maraicher:31400,  olivier:2490,   figuier:1450, cultIndustrielle:0    },
  // ── DAÏRA D'IGHIL ALI ────────────────────────────────────────────────────
  { commune:'Ighil Ali',        daira:'Ighil Ali',    cereales:750,   legumesSecs:0,    fourrages:200,    agrumes:0,      maraicher:11000,  olivier:62250,  figuier:2000, cultIndustrielle:0    },
  { commune:"Aït R'zine",       daira:'Ighil Ali',    cereales:1720,  legumesSecs:0,    fourrages:5660,   agrumes:450,    maraicher:8230,   olivier:85930,  figuier:3500, cultIndustrielle:0    },
  // ── DAÏRA DE DARGUINA ────────────────────────────────────────────────────
  { commune:'Darguina',         daira:'Darguina',     cereales:0,     legumesSecs:120,  fourrages:8250,   agrumes:880,    maraicher:12630,  olivier:3000,   figuier:4900, cultIndustrielle:90   },
  { commune:'Taskriout',        daira:'Darguina',     cereales:180,   legumesSecs:60,   fourrages:2450,   agrumes:705,    maraicher:17066,  olivier:3000,   figuier:1800, cultIndustrielle:230  },
  { commune:'Aït Smail',        daira:'Darguina',     cereales:300,   legumesSecs:120,  fourrages:7660,   agrumes:80,     maraicher:14281,  olivier:1000,   figuier:4700, cultIndustrielle:245  },
  // ── DAÏRA D'AOKAS ─────────────────────────────────────────────────────────
  { commune:'Aokas',            daira:'Aokas',        cereales:65,    legumesSecs:30,   fourrages:1610,   agrumes:15440,  maraicher:43337,  olivier:1730,   figuier:3000, cultIndustrielle:0    },
  { commune:"Tizi N'Berber",    daira:'Aokas',        cereales:90,    legumesSecs:150,  fourrages:2400,   agrumes:0,      maraicher:11194,  olivier:4347,   figuier:11200,cultIndustrielle:0    },
  // ── DAÏRA D'ADEKAR ────────────────────────────────────────────────────────
  { commune:'Adekar',           daira:'Adekar',       cereales:49,    legumesSecs:20,   fourrages:2200,   agrumes:0,      maraicher:3648,   olivier:3830,   figuier:2000, cultIndustrielle:0    },
  { commune:'Tighilt',          daira:'Adekar',       cereales:62,    legumesSecs:23,   fourrages:990,    agrumes:0,      maraicher:2947,   olivier:2160,   figuier:1500, cultIndustrielle:0    },
  { commune:"Beni K'Sila",      daira:'Adekar',       cereales:312,   legumesSecs:78,   fourrages:905,    agrumes:370,    maraicher:17895,  olivier:730,    figuier:1200, cultIndustrielle:0    },
  // ── DAÏRA D'AKBOU ─────────────────────────────────────────────────────────
  { commune:'Akbou',            daira:'Akbou',        cereales:2591,  legumesSecs:180,  fourrages:4125,   agrumes:16200,  maraicher:45552,  olivier:41320,  figuier:3230, cultIndustrielle:0    },
  { commune:'Chellata',         daira:'Akbou',        cereales:210,   legumesSecs:94,   fourrages:2270,   agrumes:0,      maraicher:3332,   olivier:23340,  figuier:7500, cultIndustrielle:0    },
  { commune:'Tamokra',          daira:'Akbou',        cereales:0,     legumesSecs:0,    fourrages:880,    agrumes:0,      maraicher:1500,   olivier:55180,  figuier:3230, cultIndustrielle:0    },
  { commune:'Ighram',           daira:'Akbou',        cereales:0,     legumesSecs:90,   fourrages:1800,   agrumes:0,      maraicher:2838,   olivier:26520,  figuier:10200,cultIndustrielle:0    },
  // ── DAÏRA DE SEDDOUK ──────────────────────────────────────────────────────
  { commune:'Seddouk',          daira:'Seddouk',      cereales:1110,  legumesSecs:56,   fourrages:2856,   agrumes:56,     maraicher:4001,   olivier:31248,  figuier:4000, cultIndustrielle:0    },
  { commune:"M'Cisna",          daira:'Seddouk',      cereales:420,   legumesSecs:50,   fourrages:2100,   agrumes:0,      maraicher:4025,   olivier:8873,   figuier:16000,cultIndustrielle:0    },
  { commune:'Amalou',           daira:'Seddouk',      cereales:60,    legumesSecs:0,    fourrages:1050,   agrumes:18,     maraicher:0,      olivier:34170,  figuier:16000,cultIndustrielle:0    },
  { commune:'Bouhamza',         daira:'Seddouk',      cereales:110,   legumesSecs:56,   fourrages:4200,   agrumes:4,      maraicher:8486,   olivier:36960,  figuier:6000, cultIndustrielle:0    },
  // ── DAÏRA DE TAZMALT ──────────────────────────────────────────────────────
  { commune:'Tazmalt',          daira:'Tazmalt',      cereales:1548,  legumesSecs:0,    fourrages:2940,   agrumes:1530,   maraicher:20067,  olivier:56744,  figuier:150,  cultIndustrielle:0    },
  { commune:'Beni Melikeche',   daira:'Tazmalt',      cereales:0,     legumesSecs:0,    fourrages:3135,   agrumes:0,      maraicher:1510,   olivier:25660,  figuier:200,  cultIndustrielle:0    },
  { commune:'Boudjellil',       daira:'Tazmalt',      cereales:125,   legumesSecs:0,    fourrages:3050,   agrumes:1910,   maraicher:4600,   olivier:116805, figuier:750,  cultIndustrielle:0    },
  // ── DAÏRA DE CHEMINI ──────────────────────────────────────────────────────
  { commune:'Chemini',          daira:'Chemini',      cereales:0,     legumesSecs:0,    fourrages:294,    agrumes:0,      maraicher:1754,   olivier:26592,  figuier:300,  cultIndustrielle:0    },
  { commune:'Souk Oufela',      daira:'Chemini',      cereales:0,     legumesSecs:0,    fourrages:225,    agrumes:0,      maraicher:1908,   olivier:10496,  figuier:500,  cultIndustrielle:0    },
  { commune:'Tibane',           daira:'Chemini',      cereales:0,     legumesSecs:0,    fourrages:64,     agrumes:0,      maraicher:1097,   olivier:5984,   figuier:40,   cultIndustrielle:0    },
  { commune:'Akfadou',          daira:'Chemini',      cereales:0,     legumesSecs:0,    fourrages:238,    agrumes:0,      maraicher:1638,   olivier:2368,   figuier:300,  cultIndustrielle:0    },
  // ── DAÏRA DE BARBACHA ─────────────────────────────────────────────────────
  { commune:'Barbacha',         daira:'Barbacha',     cereales:270,   legumesSecs:80,   fourrages:7300,   agrumes:0,      maraicher:10090,  olivier:4110,   figuier:33000,cultIndustrielle:0    },
  { commune:'Kendira',          daira:'Barbacha',     cereales:39,    legumesSecs:50,   fourrages:3720,   agrumes:50,     maraicher:6080,   olivier:4500,   figuier:15000,cultIndustrielle:0    },
  // ── DAÏRA D'OUZELLAGUEN ───────────────────────────────────────────────────
  { commune:'Ouzellaguen',      daira:'Ouzellaguen',  cereales:2300,  legumesSecs:176,  fourrages:4500,   agrumes:6425,   maraicher:44354,  olivier:32870,  figuier:8800, cultIndustrielle:3220 },
  // ── DAÏRA DE SIDI AICH ────────────────────────────────────────────────────
  { commune:'Sidi Aich',        daira:'Sidi Aich',    cereales:25,    legumesSecs:0,    fourrages:132,    agrumes:180,    maraicher:3148,   olivier:2400,   figuier:100,  cultIndustrielle:0    },
  { commune:'Tinebdhar',        daira:'Sidi Aich',    cereales:0,     legumesSecs:0,    fourrages:181,    agrumes:0,      maraicher:1774,   olivier:12320,  figuier:160,  cultIndustrielle:0    },
  { commune:'Tifra',            daira:'Sidi Aich',    cereales:0,     legumesSecs:0,    fourrages:222,    agrumes:0,      maraicher:3749,   olivier:2880,   figuier:250,  cultIndustrielle:0    },
  { commune:'Sidi Ayad',        daira:'Sidi Aich',    cereales:0,     legumesSecs:0,    fourrages:198,    agrumes:210,    maraicher:4241,   olivier:9616,   figuier:500,  cultIndustrielle:0    },
  { commune:'Leflaye',          daira:'Sidi Aich',    cereales:46,    legumesSecs:0,    fourrages:99,     agrumes:690,    maraicher:2458,   olivier:8304,   figuier:80,   cultIndustrielle:0    },
  // ── DAÏRA D'EL KSEUR ──────────────────────────────────────────────────────
  { commune:'El Kseur',         daira:'El Kseur',     cereales:16150, legumesSecs:135,  fourrages:32000,  agrumes:39080,  maraicher:32528,  olivier:8800,   figuier:2880, cultIndustrielle:0    },
  { commune:'Fenaia El Mathen', daira:'El Kseur',     cereales:7150,  legumesSecs:88,   fourrages:11250,  agrumes:10240,  maraicher:9202,   olivier:13570,  figuier:12000,cultIndustrielle:180  },
  { commune:'Toudja',           daira:'El Kseur',     cereales:0,     legumesSecs:0,    fourrages:1070,   agrumes:360,    maraicher:30427,  olivier:630,    figuier:1050, cultIndustrielle:0    },
  // ── DAÏRA DE KHERRATA ─────────────────────────────────────────────────────
  { commune:'Kherrata',         daira:'Kherrata',     cereales:4400,  legumesSecs:750,  fourrages:11255,  agrumes:0,      maraicher:31300,  olivier:5700,   figuier:2800, cultIndustrielle:45   },
  { commune:'Draa El Kaid',     daira:'Kherrata',     cereales:14720, legumesSecs:2300, fourrages:24255,  agrumes:0,      maraicher:91380,  olivier:5800,   figuier:4300, cultIndustrielle:600  },
  // ── DAÏRA DE BENI MAOUCHE ─────────────────────────────────────────────────
  { commune:'Beni Maouche',     daira:'Beni Maouche', cereales:330,   legumesSecs:32,   fourrages:7650,   agrumes:0,      maraicher:12509,  olivier:40610,  figuier:31000,cultIndustrielle:0    },
];

// Totaux Wilaya — Productions
export const agropastoralProductionsWilaya = {
  cereales: 86678, legumesSecs: 7079, fourrages: 336299, agrumes: 206798,
  maraicher: 859627, olivier: 895009, figuier: 295000, cultIndustrielle: 9560,
};

// ─────────────────────────────────────────────────────────────────────────────
// TABLEAU 5 : Effectifs des cheptels par commune — Campagne 2014/2015 (Unité : Tête)
// Source : DSA Béjaïa
// Colonnes : bovines, ovines, caprines
// ─────────────────────────────────────────────────────────────────────────────
export const agropastoralCheptels = [
  // ── DAÏRA DE BÉJAÏA ──────────────────────────────────────────────────────
  { commune:'Béjaïa',           daira:'Béjaïa',       bovines:338,   ovines:1364,  caprines:221   },
  { commune:'Oued Ghir',        daira:'Béjaïa',       bovines:870,   ovines:1725,  caprines:260   },
  // ── DAÏRA D'AMIZOUR ──────────────────────────────────────────────────────
  { commune:'Amizour',          daira:'Amizour',      bovines:3249,  ovines:1405,  caprines:386   },
  { commune:'Feraoun',          daira:'Amizour',      bovines:803,   ovines:1327,  caprines:366   },
  { commune:'Semaoune',         daira:'Amizour',      bovines:1650,  ovines:1399,  caprines:0     },
  { commune:'Beni Djellil',     daira:'Amizour',      bovines:532,   ovines:681,   caprines:110   },
  // ── DAÏRA DE TICHY ───────────────────────────────────────────────────────
  { commune:'Timezrit',         daira:'Tichy',        bovines:1388,  ovines:3423,  caprines:710   },
  { commune:'Si El Tenine',     daira:'Tichy',        bovines:1520,  ovines:1735,  caprines:1100  },
  { commune:'Melbou',           daira:'Tichy',        bovines:1605,  ovines:3300,  caprines:1250  },
  { commune:'Tamridjet',        daira:'Tichy',        bovines:1230,  ovines:1080,  caprines:1450  },
  { commune:'Tichy',            daira:'Tichy',        bovines:1018,  ovines:3239,  caprines:3620  },
  { commune:'Tala Hamza',       daira:'Tichy',        bovines:358,   ovines:1220,  caprines:435   },
  { commune:'Boukhlifa',        daira:'Tichy',        bovines:684,   ovines:1800,  caprines:1160  },
  // ── DAÏRA D'IGHIL ALI ────────────────────────────────────────────────────
  { commune:'Ighil Ali',        daira:'Ighil Ali',    bovines:253,   ovines:1008,  caprines:106   },
  { commune:"Aït R'zine",       daira:'Ighil Ali',    bovines:571,   ovines:1720,  caprines:93    },
  // ── DAÏRA DE DARGUINA ────────────────────────────────────────────────────
  { commune:'Darguina',         daira:'Darguina',     bovines:823,   ovines:4371,  caprines:4190  },
  { commune:'Taskriout',        daira:'Darguina',     bovines:344,   ovines:2136,  caprines:3690  },
  { commune:'Aït Smail',        daira:'Darguina',     bovines:935,   ovines:2535,  caprines:1553  },
  // ── DAÏRA D'AOKAS ─────────────────────────────────────────────────────────
  { commune:'Aokas',            daira:'Aokas',        bovines:1495,  ovines:7095,  caprines:1650  },
  { commune:"Tizi N'Berber",    daira:'Aokas',        bovines:895,   ovines:4265,  caprines:3680  },
  // ── DAÏRA D'ADEKAR ────────────────────────────────────────────────────────
  { commune:'Adekar',           daira:'Adekar',       bovines:3503,  ovines:4799,  caprines:1063  },
  { commune:'Tighilt',          daira:'Adekar',       bovines:1615,  ovines:5433,  caprines:1284  },
  { commune:"Beni K'Sila",      daira:'Adekar',       bovines:346,   ovines:1970,  caprines:2025  },
  // ── DAÏRA D'AKBOU ─────────────────────────────────────────────────────────
  { commune:'Akbou',            daira:'Akbou',        bovines:920,   ovines:3400,  caprines:315   },
  { commune:'Chellata',         daira:'Akbou',        bovines:552,   ovines:1445,  caprines:685   },
  { commune:'Tamokra',          daira:'Akbou',        bovines:186,   ovines:861,   caprines:295   },
  { commune:'Ighram',           daira:'Akbou',        bovines:743,   ovines:2011,  caprines:645   },
  // ── DAÏRA DE SEDDOUK ──────────────────────────────────────────────────────
  { commune:'Seddouk',          daira:'Seddouk',      bovines:468,   ovines:1760,  caprines:242   },
  { commune:"M'Cisna",          daira:'Seddouk',      bovines:335,   ovines:521,   caprines:111   },
  { commune:'Amalou',           daira:'Seddouk',      bovines:231,   ovines:695,   caprines:560   },
  { commune:'Bouhamza',         daira:'Seddouk',      bovines:249,   ovines:354,   caprines:209   },
  // ── DAÏRA DE TAZMALT ──────────────────────────────────────────────────────
  { commune:'Tazmalt',          daira:'Tazmalt',      bovines:1516,  ovines:3456,  caprines:415   },
  { commune:'Beni Melikeche',   daira:'Tazmalt',      bovines:907,   ovines:1191,  caprines:256   },
  { commune:'Boudjellil',       daira:'Tazmalt',      bovines:552,   ovines:1987,  caprines:255   },
  // ── DAÏRA DE CHEMINI ──────────────────────────────────────────────────────
  { commune:'Chemini',          daira:'Chemini',      bovines:1513,  ovines:981,   caprines:167   },
  { commune:'Souk Oufela',      daira:'Chemini',      bovines:544,   ovines:434,   caprines:53    },
  { commune:'Tibane',           daira:'Chemini',      bovines:378,   ovines:211,   caprines:20    },
  { commune:'Akfadou',          daira:'Chemini',      bovines:1630,  ovines:694,   caprines:400   },
  // ── DAÏRA DE BARBACHA ─────────────────────────────────────────────────────
  { commune:'Barbacha',         daira:'Barbacha',     bovines:554,   ovines:840,   caprines:300   },
  { commune:'Kendira',          daira:'Barbacha',     bovines:281,   ovines:554,   caprines:94    },
  // ── DAÏRA D'OUZELLAGUEN ───────────────────────────────────────────────────
  { commune:'Ouzellaguen',      daira:'Ouzellaguen',  bovines:1165,  ovines:1590,  caprines:680   },
  // ── DAÏRA DE SIDI AICH ────────────────────────────────────────────────────
  { commune:'Sidi Aich',        daira:'Sidi Aich',    bovines:200,   ovines:160,   caprines:26    },
  { commune:'Tinebdhar',        daira:'Sidi Aich',    bovines:529,   ovines:741,   caprines:100   },
  { commune:'Tifra',            daira:'Sidi Aich',    bovines:994,   ovines:334,   caprines:277   },
  { commune:'Sidi Ayad',        daira:'Sidi Aich',    bovines:210,   ovines:351,   caprines:52    },
  { commune:'Leflaye',          daira:'Sidi Aich',    bovines:136,   ovines:133,   caprines:37    },
  // ── DAÏRA D'EL KSEUR ──────────────────────────────────────────────────────
  { commune:'El Kseur',         daira:'El Kseur',     bovines:1250,  ovines:1650,  caprines:330   },
  { commune:'Fenaia El Mathen', daira:'El Kseur',     bovines:902,   ovines:871,   caprines:145   },
  { commune:'Toudja',           daira:'El Kseur',     bovines:212,   ovines:1990,  caprines:1000  },
  // ── DAÏRA DE KHERRATA ─────────────────────────────────────────────────────
  { commune:'Kherrata',         daira:'Kherrata',     bovines:1297,  ovines:5141,  caprines:2836  },
  { commune:'Draa El Kaid',     daira:'Kherrata',     bovines:2007,  ovines:9936,  caprines:2404  },
  // ── DAÏRA DE BENI MAOUCHE ─────────────────────────────────────────────────
  { commune:'Beni Maouche',     daira:'Beni Maouche', bovines:472,   ovines:3460,  caprines:1000  },
];

// Totaux Wilaya — Cheptels
export const agropastoralCheptelsWilaya = {
  bovines: 46958, ovines: 106782, caprines: 44311,
};

// ─────────────────────────────────────────────────────────────────────────────
// TABLEAU 6 : Productions animales par commune — Campagne 2014/2015
// Source : DSA Béjaïa
// Colonnes : lait (10^3 litres), viandeRouge (Qx), viandeBlanche (Qx), oeufs (10^3 unités), miel (Qx), laine (QS)
// ─────────────────────────────────────────────────────────────────────────────
export const agropastoralProdAnimales = [
  // ── DAÏRA DE BÉJAÏA ──────────────────────────────────────────────────────
  { commune:'Béjaïa',           daira:'Béjaïa',       lait:421720,  viandeRouge:1400, viandeBlanche:3172, oeufs:9951, miel:7124, laine:17.13 },
  { commune:'Oued Ghir',        daira:'Béjaïa',       lait:1584000, viandeRouge:760,  viandeBlanche:5923, oeufs:12139,miel:2984, laine:24    },
  // ── DAÏRA D'AMIZOUR ──────────────────────────────────────────────────────
  { commune:'Amizour',          daira:'Amizour',      lait:2444800, viandeRouge:3380, viandeBlanche:9200, oeufs:14462,miel:4628, laine:25    },
  { commune:'Feraoun',          daira:'Amizour',      lait:421700,  viandeRouge:533,  viandeBlanche:2700, oeufs:3000, miel:694,  laine:15    },
  { commune:'Semaoune',         daira:'Amizour',      lait:920000,  viandeRouge:513,  viandeBlanche:1810, oeufs:3947, miel:1104, laine:22    },
  { commune:'Beni Djellil',     daira:'Amizour',      lait:0.475,   viandeRouge:303,  viandeBlanche:1549, oeufs:960,  miel:1208, laine:15    },
  // ── DAÏRA DE TICHY ───────────────────────────────────────────────────────
  { commune:'Timezrit',         daira:'Tichy',        lait:1160000, viandeRouge:1285, viandeBlanche:2317, oeufs:13536,miel:4428, laine:15    },
  { commune:'Si El Tenine',     daira:'Tichy',        lait:1065000, viandeRouge:812,  viandeBlanche:3653, oeufs:1280, miel:3378, laine:9.15  },
  { commune:'Melbou',           daira:'Tichy',        lait:763000,  viandeRouge:820,  viandeBlanche:4200, oeufs:1200, miel:2208, laine:30    },
  { commune:'Tamridjet',        daira:'Tichy',        lait:512000,  viandeRouge:586,  viandeBlanche:6757, oeufs:620,  miel:2490, laine:12    },
  { commune:'Tichy',            daira:'Tichy',        lait:533000,  viandeRouge:987,  viandeBlanche:4465, oeufs:0,    miel:1694, laine:30    },
  { commune:'Tala Hamza',       daira:'Tichy',        lait:660450,  viandeRouge:360,  viandeBlanche:2500, oeufs:0,    miel:2240, laine:18    },
  { commune:'Boukhlifa',        daira:'Tichy',        lait:1388140, viandeRouge:1850, viandeBlanche:4280, oeufs:29500,miel:4948, laine:45    },
  // ── DAÏRA D'IGHIL ALI ────────────────────────────────────────────────────
  { commune:'Ighil Ali',        daira:'Ighil Ali',    lait:175000,  viandeRouge:228,  viandeBlanche:476,  oeufs:860,  miel:4262, laine:10    },
  { commune:"Aït R'zine",       daira:'Ighil Ali',    lait:971000,  viandeRouge:345,  viandeBlanche:1084, oeufs:4980, miel:2973, laine:17.7  },
  // ── DAÏRA DE DARGUINA ────────────────────────────────────────────────────
  { commune:'Darguina',         daira:'Darguina',     lait:860000,  viandeRouge:754,  viandeBlanche:875,  oeufs:0,    miel:2250, laine:22    },
  { commune:'Taskriout',        daira:'Darguina',     lait:580000,  viandeRouge:488,  viandeBlanche:625,  oeufs:0,    miel:900,  laine:22    },
  { commune:'Aït Smail',        daira:'Darguina',     lait:585000,  viandeRouge:494,  viandeBlanche:567,  oeufs:1440, miel:860,  laine:20    },
  // ── DAÏRA D'AOKAS ─────────────────────────────────────────────────────────
  { commune:'Aokas',            daira:'Aokas',        lait:1135000, viandeRouge:1660, viandeBlanche:4667, oeufs:3221, miel:4920, laine:56    },
  { commune:"Tizi N'Berber",    daira:'Aokas',        lait:860000,  viandeRouge:855,  viandeBlanche:3540, oeufs:0,    miel:2675, laine:30    },
  // ── DAÏRA D'ADEKAR ────────────────────────────────────────────────────────
  { commune:'Adekar',           daira:'Adekar',       lait:1278000, viandeRouge:483,  viandeBlanche:3557, oeufs:3278, miel:1955, laine:45    },
  { commune:'Tighilt',          daira:'Adekar',       lait:652000,  viandeRouge:314,  viandeBlanche:1800, oeufs:0,    miel:1445, laine:52    },
  { commune:"Beni K'Sila",      daira:'Adekar',       lait:512000,  viandeRouge:117,  viandeBlanche:3849, oeufs:2000, miel:1444, laine:18    },
  // ── DAÏRA D'AKBOU ─────────────────────────────────────────────────────────
  { commune:'Akbou',            daira:'Akbou',        lait:1126738, viandeRouge:275,  viandeBlanche:3445, oeufs:14328,miel:2362, laine:12    },
  { commune:'Chellata',         daira:'Akbou',        lait:826975,  viandeRouge:126,  viandeBlanche:3015, oeufs:2775, miel:4414, laine:8     },
  { commune:'Tamokra',          daira:'Akbou',        lait:205500,  viandeRouge:87,   viandeBlanche:0,    oeufs:0,    miel:615,  laine:5.19  },
  { commune:'Ighram',           daira:'Akbou',        lait:672000,  viandeRouge:136,  viandeBlanche:1980, oeufs:4345.6,miel:2458,laine:7.62  },
  // ── DAÏRA DE SEDDOUK ──────────────────────────────────────────────────────
  { commune:'Seddouk',          daira:'Seddouk',      lait:853560,  viandeRouge:466,  viandeBlanche:329,  oeufs:3665.9,miel:3100,laine:30    },
  { commune:"M'Cisna",          daira:'Seddouk',      lait:736400,  viandeRouge:436,  viandeBlanche:953,  oeufs:5738.19,miel:2400,laine:10   },
  { commune:'Amalou',           daira:'Seddouk',      lait:818120,  viandeRouge:558,  viandeBlanche:1038, oeufs:1346.75,miel:2800,laine:16   },
  { commune:'Bouhamza',         daira:'Seddouk',      lait:367300,  viandeRouge:200,  viandeBlanche:235,  oeufs:960,  miel:2010, laine:10    },
  // ── DAÏRA DE TAZMALT ──────────────────────────────────────────────────────
  { commune:'Tazmalt',          daira:'Tazmalt',      lait:2040200, viandeRouge:932,  viandeBlanche:2637, oeufs:13136,miel:3556, laine:30    },
  { commune:'Beni Melikeche',   daira:'Tazmalt',      lait:1333120, viandeRouge:485,  viandeBlanche:602,  oeufs:0,    miel:2320, laine:16    },
  { commune:'Boudjellil',       daira:'Tazmalt',      lait:1330900, viandeRouge:372,  viandeBlanche:1780, oeufs:26264,miel:2149, laine:20.45 },
  // ── DAÏRA DE CHEMINI ──────────────────────────────────────────────────────
  { commune:'Chemini',          daira:'Chemini',      lait:978400,  viandeRouge:448,  viandeBlanche:2050, oeufs:4060, miel:1865, laine:3     },
  { commune:'Souk Oufela',      daira:'Chemini',      lait:383500,  viandeRouge:351,  viandeBlanche:2630, oeufs:13065,miel:950,  laine:9     },
  { commune:'Tibane',           daira:'Chemini',      lait:176000,  viandeRouge:109,  viandeBlanche:675,  oeufs:5560, miel:295,  laine:2     },
  { commune:'Akfadou',          daira:'Chemini',      lait:639300,  viandeRouge:411,  viandeBlanche:2120, oeufs:3690, miel:1716, laine:6     },
  // ── DAÏRA DE BARBACHA ─────────────────────────────────────────────────────
  { commune:'Barbacha',         daira:'Barbacha',     lait:368800,  viandeRouge:429,  viandeBlanche:1613, oeufs:2400, miel:2484, laine:17    },
  { commune:'Kendira',          daira:'Barbacha',     lait:360800,  viandeRouge:273,  viandeBlanche:1205, oeufs:395,  miel:1092, laine:15.37 },
  // ── DAÏRA D'OUZELLAGUEN ───────────────────────────────────────────────────
  { commune:'Ouzellaguen',      daira:'Ouzellaguen',  lait:1684170, viandeRouge:217,  viandeBlanche:2160, oeufs:30000,miel:2260, laine:9.3   },
  // ── DAÏRA DE SIDI AICH ────────────────────────────────────────────────────
  { commune:'Sidi Aich',        daira:'Sidi Aich',    lait:217100,  viandeRouge:189,  viandeBlanche:890,  oeufs:1200, miel:255,  laine:6     },
  { commune:'Tinebdhar',        daira:'Sidi Aich',    lait:549300,  viandeRouge:242,  viandeBlanche:955,  oeufs:2175, miel:510,  laine:5.58  },
  { commune:'Tifra',            daira:'Sidi Aich',    lait:629000,  viandeRouge:192,  viandeBlanche:8000, oeufs:3690, miel:5478, laine:8     },
  { commune:'Sidi Ayad',        daira:'Sidi Aich',    lait:282200,  viandeRouge:116,  viandeBlanche:1330, oeufs:8450, miel:1020, laine:8     },
  { commune:'Leflaye',          daira:'Sidi Aich',    lait:4683200, viandeRouge:99,   viandeBlanche:1411, oeufs:3145, miel:1355, laine:3     },
  // ── DAÏRA D'EL KSEUR ──────────────────────────────────────────────────────
  { commune:'El Kseur',         daira:'El Kseur',     lait:1979000, viandeRouge:939,  viandeBlanche:1772, oeufs:13032,miel:3510, laine:12    },
  { commune:'Fenaia El Mathen', daira:'El Kseur',     lait:1420000, viandeRouge:433,  viandeBlanche:960,  oeufs:1954, miel:735,  laine:8     },
  { commune:'Toudja',           daira:'El Kseur',     lait:565000,  viandeRouge:163,  viandeBlanche:1388, oeufs:3697, miel:468,  laine:16    },
  // ── DAÏRA DE KHERRATA ─────────────────────────────────────────────────────
  { commune:'Kherrata',         daira:'Kherrata',     lait:1122000, viandeRouge:1311, viandeBlanche:2111, oeufs:5360, miel:1845, laine:48    },
  { commune:'Draa El Kaid',     daira:'Kherrata',     lait:1590000, viandeRouge:1920, viandeBlanche:1100, oeufs:2800, miel:5900, laine:106   },
  // ── DAÏRA DE BENI MAOUCHE ─────────────────────────────────────────────────
  { commune:'Beni Maouche',     daira:'Beni Maouche', lait:1269860, viandeRouge:1148, viandeBlanche:1810, oeufs:440,  miel:10500,laine:34.05 },
];

// Totaux Wilaya — Productions animales
export const agropastoralProdAnimalesWilaya = {
  lait: 48690253, viandeRouge: 32390, viandeBlanche: 123760,
  oeufs: 284047, miel: 133234, laine: 1052,
};

