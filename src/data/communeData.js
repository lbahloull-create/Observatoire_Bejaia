export const regionalStats = {
    "communes": 52,
    "dairas": 19,
    "population": 950000,
    "area": 3268
};

export const dimensions = [
    {
        "id": "env",
        "name": "Environnement physique",
        "icon": "leaf",
        "description": "Évaluation multicritère de la qualité environnementale combinant l'indice de pollution, la gestion des déchets solides et la préservation des écosystèmes fragiles de la Wilaya."
    },
    {
        "id": "service",
        "name": "Services publics",
        "icon": "concierge-bell",
        "description": "Indicateur d'accessibilité physique et fonctionnelle aux réseaux (AEP, Électricité, Gaz) et aux services de proximité, révélateur des disparités d'équipement inter-communales."
    },
    {
        "id": "safety",
        "name": "Sécurité",
        "icon": "shield-alt",
        "description": "Variable croisée analysant la sinistralité routière (axes RN12/RN26) et la densité des services de protection civile, essentielle à la résilience territoriale."
    },
    {
        "id": "health",
        "name": "Santé",
        "icon": "heartbeat",
        "description": "Diagnostic de l'offre de soins (lits d'hospitalisation, points de garde) rapporté à la population, soulignant les zones d'ombre médicales en milieu rural."
    },
    {
        "id": "edu",
        "name": "Éducation",
        "icon": "graduation-cap",
        "description": "Indice de performance scolaire (baccalauréat/BEM) corrélé à la qualité des infrastructures et aux ressources pédagogiques disponibles par bassin de vie."
    },
    {
        "id": "culture",
        "name": "Culture",
        "icon": "masks-theater",
        "description": "Cartographie de la vitalité associative et de l'accès au patrimoine, facteur clé de cohésion sociale et de rayonnement culturel local."
    },
    {
        "id": "social",
        "name": "Participation sociale",
        "icon": "users",
        "description": "Mesure du capital social et de l'implication citoyenne dans la gestion des affaires locales, pilier de la gouvernance démocratique territoriale."
    },
    {
        "id": "econ",
        "name": "Dynamique économique",
        "icon": "chart-line",
        "description": "Modélisation de l'attractivité fiscale (recettes propres) et de la structure de l'emploi, différenciant les pôles industriels des zones agricoles."
    }
];

export const regionalAverage = {
    scores: { env: 72, service: 65, safety: 78, health: 60, edu: 70, culture: 58, social: 75, econ: 62 },
    finances: { budgetTotal: 450, recettesFiscales: 280, depensesFonctionnement: 310, depensesEquipement: 140, tauxRecouvrement: 55 }
};

export const regionalAverageHistory = {
    "2016": {
        "personnel": 0.49,
        "services": 0.2,
        "subventions": 0.09,
        "investment": 0.21,
        "total": 11.58,
        "autonomy": 89,
        "rigidity": 52,
        "investEffort": 22
    },
    "2017": {
        "personnel": 0.31,
        "services": 0.2,
        "subventions": 0.06,
        "investment": 0.42,
        "total": 17.45,
        "autonomy": 89,
        "rigidity": 43,
        "investEffort": 59
    },
    "2018": {
        "personnel": 0.34,
        "services": 0.24,
        "subventions": 0.06,
        "investment": 0.36,
        "total": 15.86,
        "autonomy": 89,
        "rigidity": 43,
        "investEffort": 46
    },
    "2019": {
        "personnel": 0.42,
        "services": 0.27,
        "subventions": 0.07,
        "investment": 0.19,
        "total": 13.01,
        "autonomy": 102,
        "rigidity": 40,
        "investEffort": 19
    },
    "2020": {
        "personnel": 0.45,
        "services": 0.27,
        "subventions": 0.07,
        "investment": 0.2,
        "total": 12.11,
        "autonomy": 85,
        "rigidity": 45,
        "investEffort": 20
    }
};

export const communeData = [
    {
        "id": 1,
        "name": "Béjaïa",
        "daira": "Béjaïa",
        "cluster": 1,
        "scores": {
            "env": 85,
            "service": 90,
            "safety": 75,
            "health": 95,
            "edu": 88,
            "culture": 92,
            "social": 80,
            "econ": 94
        },
        "details": {
            "taxis": 450,
            "hospitalBeds": 1200,
            "bacSuccess": 72.5,
            "waterAccess": 98,
            "roadStatus": "Excellent"
        },
        "finances": {
            "budgetTotal": 2100,
            "recettesFiscales": 1450,
            "depensesFonctionnement": 1200,
            "depensesEquipement": 900,
            "tauxRecouvrement": 85
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 1002,
                    "recettesFiscales": 580,
                    "depensesFonctionnement": 952,
                    "depensesEquipement": 220,
                    "details": {
                        "personnel": 491,
                        "services": 200,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 77,
                    "service": 82,
                    "safety": 67,
                    "health": 87,
                    "edu": 80,
                    "culture": 84,
                    "social": 72,
                    "econ": 86
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 1510,
                    "recettesFiscales": 874,
                    "depensesFonctionnement": 1435,
                    "depensesEquipement": 891,
                    "details": {
                        "personnel": 468,
                        "services": 302,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 80,
                    "service": 85,
                    "safety": 70,
                    "health": 90,
                    "edu": 83,
                    "culture": 87,
                    "social": 75,
                    "econ": 89
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 1373,
                    "recettesFiscales": 794,
                    "depensesFonctionnement": 1304,
                    "depensesEquipement": 632,
                    "details": {
                        "personnel": 467,
                        "services": 330,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 83,
                    "service": 88,
                    "safety": 73,
                    "health": 93,
                    "edu": 86,
                    "culture": 90,
                    "social": 78,
                    "econ": 92
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 1126,
                    "recettesFiscales": 747,
                    "depensesFonctionnement": 1070,
                    "depensesEquipement": 214,
                    "details": {
                        "personnel": 473,
                        "services": 304,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 84,
                    "service": 89,
                    "safety": 74,
                    "health": 94,
                    "edu": 87,
                    "culture": 91,
                    "social": 79,
                    "econ": 93
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 1048,
                    "recettesFiscales": 579,
                    "depensesFonctionnement": 996,
                    "depensesEquipement": 210,
                    "details": {
                        "personnel": 472,
                        "services": 283,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 84,
                    "service": 89,
                    "safety": 74,
                    "health": 94,
                    "edu": 87,
                    "culture": 91,
                    "social": 79,
                    "econ": 93
                }
            }
        }
    },
    {
        "id": 2,
        "name": "Oued Ghir",
        "daira": "Béjaïa",
        "cluster": 5,
        "scores": {
            "env": 75,
            "service": 78,
            "safety": 80,
            "health": 70,
            "edu": 72,
            "culture": 65,
            "social": 78,
            "econ": 85
        },
        "details": {
            "taxis": 80,
            "hospitalBeds": 50,
            "bacSuccess": 68.2,
            "waterAccess": 95,
            "roadStatus": "Good"
        },
        "finances": {
            "budgetTotal": 450,
            "recettesFiscales": 280,
            "depensesFonctionnement": 300,
            "depensesEquipement": 150,
            "tauxRecouvrement": 65
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 223,
                    "recettesFiscales": 129,
                    "depensesFonctionnement": 212,
                    "depensesEquipement": 49,
                    "details": {
                        "personnel": 109,
                        "services": 45,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 67,
                    "service": 70,
                    "safety": 72,
                    "health": 62,
                    "edu": 64,
                    "culture": 57,
                    "social": 70,
                    "econ": 77
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 336,
                    "recettesFiscales": 194,
                    "depensesFonctionnement": 319,
                    "depensesEquipement": 198,
                    "details": {
                        "personnel": 104,
                        "services": 67,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 71,
                    "service": 74,
                    "safety": 76,
                    "health": 66,
                    "edu": 68,
                    "culture": 61,
                    "social": 74,
                    "econ": 81
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 305,
                    "recettesFiscales": 176,
                    "depensesFonctionnement": 290,
                    "depensesEquipement": 140,
                    "details": {
                        "personnel": 104,
                        "services": 73,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 73,
                    "service": 76,
                    "safety": 78,
                    "health": 68,
                    "edu": 70,
                    "culture": 63,
                    "social": 76,
                    "econ": 83
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 250,
                    "recettesFiscales": 166,
                    "depensesFonctionnement": 238,
                    "depensesEquipement": 48,
                    "details": {
                        "personnel": 105,
                        "services": 68,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 71,
                    "service": 74,
                    "safety": 76,
                    "health": 66,
                    "edu": 68,
                    "culture": 61,
                    "social": 74,
                    "econ": 81
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 233,
                    "recettesFiscales": 129,
                    "depensesFonctionnement": 221,
                    "depensesEquipement": 47,
                    "details": {
                        "personnel": 105,
                        "services": 63,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 74,
                    "service": 77,
                    "safety": 79,
                    "health": 69,
                    "edu": 71,
                    "culture": 64,
                    "social": 77,
                    "econ": 84
                }
            }
        }
    },
    {
        "id": 3,
        "name": "Amizour",
        "daira": "Amizour",
        "cluster": 6,
        "scores": {
            "env": 78,
            "service": 70,
            "safety": 82,
            "health": 65,
            "edu": 75,
            "culture": 60,
            "social": 85,
            "econ": 68
        },
        "details": {
            "taxis": 120,
            "hospitalBeds": 150,
            "bacSuccess": 65.2,
            "bemSuccess": 62.5,
            "pedagogicalResources": "Moyen - Lacunes identifiées",
            "waterAccess": 85,
            "roadStatus": "Good",
            "riskAlert": true,
            "accidentRate": "Élevé",
            "emergencyCalls": 450
        },
        "finances": {
            "budgetTotal": 850,
            "recettesFiscales": 520,
            "depensesFonctionnement": 500,
            "depensesEquipement": 350,
            "tauxRecouvrement": 72
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 421,
                    "recettesFiscales": 244,
                    "depensesFonctionnement": 400,
                    "depensesEquipement": 93,
                    "details": {
                        "personnel": 206,
                        "services": 84,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 71,
                    "service": 63,
                    "safety": 75,
                    "health": 58,
                    "edu": 68,
                    "culture": 53,
                    "social": 78,
                    "econ": 61
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 634,
                    "recettesFiscales": 367,
                    "depensesFonctionnement": 602,
                    "depensesEquipement": 374,
                    "details": {
                        "personnel": 197,
                        "services": 127,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 74,
                    "service": 66,
                    "safety": 78,
                    "health": 61,
                    "edu": 71,
                    "culture": 56,
                    "social": 81,
                    "econ": 64
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 576,
                    "recettesFiscales": 333,
                    "depensesFonctionnement": 547,
                    "depensesEquipement": 265,
                    "details": {
                        "personnel": 196,
                        "services": 138,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 74,
                    "service": 66,
                    "safety": 78,
                    "health": 61,
                    "edu": 71,
                    "culture": 56,
                    "social": 81,
                    "econ": 64
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 473,
                    "recettesFiscales": 314,
                    "depensesFonctionnement": 449,
                    "depensesEquipement": 90,
                    "details": {
                        "personnel": 199,
                        "services": 128,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 76,
                    "service": 68,
                    "safety": 80,
                    "health": 63,
                    "edu": 73,
                    "culture": 58,
                    "social": 83,
                    "econ": 66
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 440,
                    "recettesFiscales": 243,
                    "depensesFonctionnement": 418,
                    "depensesEquipement": 88,
                    "details": {
                        "personnel": 198,
                        "services": 119,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 77,
                    "service": 69,
                    "safety": 81,
                    "health": 64,
                    "edu": 74,
                    "culture": 59,
                    "social": 84,
                    "econ": 67
                }
            }
        }
    },
    {
        "id": 4,
        "name": "Beni Djellil",
        "daira": "Amizour",
        "cluster": 3,
        "scores": {
            "env": 82,
            "service": 55,
            "safety": 88,
            "health": 50,
            "edu": 68,
            "culture": 45,
            "social": 75,
            "econ": 42
        },
        "details": {
            "taxis": 25,
            "hospitalBeds": 10,
            "bacSuccess": 58.5,
            "waterAccess": 70,
            "roadStatus": "Average"
        },
        "finances": {
            "budgetTotal": 180,
            "recettesFiscales": 45,
            "depensesFonctionnement": 140,
            "depensesEquipement": 40,
            "tauxRecouvrement": 35
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 89,
                    "recettesFiscales": 51,
                    "depensesFonctionnement": 85,
                    "depensesEquipement": 20,
                    "details": {
                        "personnel": 44,
                        "services": 18,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 77,
                    "service": 50,
                    "safety": 83,
                    "health": 45,
                    "edu": 63,
                    "culture": 40,
                    "social": 70,
                    "econ": 37
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 134,
                    "recettesFiscales": 78,
                    "depensesFonctionnement": 127,
                    "depensesEquipement": 79,
                    "details": {
                        "personnel": 42,
                        "services": 27,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 78,
                    "service": 51,
                    "safety": 84,
                    "health": 46,
                    "edu": 64,
                    "culture": 41,
                    "social": 71,
                    "econ": 38
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 122,
                    "recettesFiscales": 71,
                    "depensesFonctionnement": 116,
                    "depensesEquipement": 56,
                    "details": {
                        "personnel": 41,
                        "services": 29,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 77,
                    "service": 50,
                    "safety": 83,
                    "health": 45,
                    "edu": 63,
                    "culture": 40,
                    "social": 70,
                    "econ": 37
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 100,
                    "recettesFiscales": 66,
                    "depensesFonctionnement": 95,
                    "depensesEquipement": 19,
                    "details": {
                        "personnel": 42,
                        "services": 27,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 81,
                    "service": 54,
                    "safety": 87,
                    "health": 49,
                    "edu": 67,
                    "culture": 44,
                    "social": 74,
                    "econ": 41
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 93,
                    "recettesFiscales": 51,
                    "depensesFonctionnement": 88,
                    "depensesEquipement": 19,
                    "details": {
                        "personnel": 42,
                        "services": 25,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 80,
                    "service": 53,
                    "safety": 86,
                    "health": 48,
                    "edu": 66,
                    "culture": 43,
                    "social": 73,
                    "econ": 40
                }
            }
        }
    },
    {
        "id": 5,
        "name": "Semaoun",
        "daira": "Amizour",
        "cluster": 3,
        "scores": {
            "env": 80,
            "service": 58,
            "safety": 85,
            "health": 52,
            "edu": 70,
            "culture": 48,
            "social": 72,
            "econ": 45
        },
        "details": {
            "taxis": 30,
            "hospitalBeds": 15,
            "bacSuccess": 60.1,
            "waterAccess": 72,
            "roadStatus": "Average"
        },
        "finances": {
            "budgetTotal": 220,
            "recettesFiscales": 65,
            "depensesFonctionnement": 160,
            "depensesEquipement": 60,
            "tauxRecouvrement": 42
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 109,
                    "recettesFiscales": 63,
                    "depensesFonctionnement": 104,
                    "depensesEquipement": 24,
                    "details": {
                        "personnel": 53,
                        "services": 22,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 76,
                    "service": 54,
                    "safety": 81,
                    "health": 48,
                    "edu": 66,
                    "culture": 44,
                    "social": 68,
                    "econ": 41
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 164,
                    "recettesFiscales": 95,
                    "depensesFonctionnement": 156,
                    "depensesEquipement": 97,
                    "details": {
                        "personnel": 51,
                        "services": 33,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 76,
                    "service": 54,
                    "safety": 81,
                    "health": 48,
                    "edu": 66,
                    "culture": 44,
                    "social": 68,
                    "econ": 41
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 149,
                    "recettesFiscales": 86,
                    "depensesFonctionnement": 142,
                    "depensesEquipement": 69,
                    "details": {
                        "personnel": 51,
                        "services": 36,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 75,
                    "service": 53,
                    "safety": 80,
                    "health": 47,
                    "edu": 65,
                    "culture": 43,
                    "social": 67,
                    "econ": 40
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 122,
                    "recettesFiscales": 81,
                    "depensesFonctionnement": 116,
                    "depensesEquipement": 23,
                    "details": {
                        "personnel": 51,
                        "services": 33,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 76,
                    "service": 54,
                    "safety": 81,
                    "health": 48,
                    "edu": 66,
                    "culture": 44,
                    "social": 68,
                    "econ": 41
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 114,
                    "recettesFiscales": 63,
                    "depensesFonctionnement": 108,
                    "depensesEquipement": 23,
                    "details": {
                        "personnel": 51,
                        "services": 31,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 79,
                    "service": 57,
                    "safety": 84,
                    "health": 51,
                    "edu": 69,
                    "culture": 47,
                    "social": 71,
                    "econ": 44
                }
            }
        }
    },
    {
        "id": 6,
        "name": "Ferraoun",
        "daira": "Amizour",
        "cluster": 3,
        "scores": {
            "env": 85,
            "service": 50,
            "safety": 90,
            "health": 45,
            "edu": 65,
            "culture": 40,
            "social": 80,
            "econ": 38
        },
        "details": {
            "taxis": 20,
            "hospitalBeds": 5,
            "bacSuccess": 55.8,
            "waterAccess": 65,
            "roadStatus": "Challenging"
        },
        "finances": {
            "budgetTotal": 160,
            "recettesFiscales": 38,
            "depensesFonctionnement": 130,
            "depensesEquipement": 30,
            "tauxRecouvrement": 30
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 79,
                    "recettesFiscales": 46,
                    "depensesFonctionnement": 75,
                    "depensesEquipement": 17,
                    "details": {
                        "personnel": 39,
                        "services": 16,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 81,
                    "service": 46,
                    "safety": 86,
                    "health": 41,
                    "edu": 61,
                    "culture": 36,
                    "social": 76,
                    "econ": 34
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 119,
                    "recettesFiscales": 69,
                    "depensesFonctionnement": 113,
                    "depensesEquipement": 70,
                    "details": {
                        "personnel": 37,
                        "services": 24,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 81,
                    "service": 46,
                    "safety": 86,
                    "health": 41,
                    "edu": 61,
                    "culture": 36,
                    "social": 76,
                    "econ": 34
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 108,
                    "recettesFiscales": 62,
                    "depensesFonctionnement": 103,
                    "depensesEquipement": 50,
                    "details": {
                        "personnel": 37,
                        "services": 26,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 82,
                    "service": 47,
                    "safety": 87,
                    "health": 42,
                    "edu": 62,
                    "culture": 37,
                    "social": 77,
                    "econ": 35
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 89,
                    "recettesFiscales": 59,
                    "depensesFonctionnement": 85,
                    "depensesEquipement": 17,
                    "details": {
                        "personnel": 37,
                        "services": 24,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 83,
                    "service": 48,
                    "safety": 88,
                    "health": 43,
                    "edu": 63,
                    "culture": 38,
                    "social": 78,
                    "econ": 36
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 83,
                    "recettesFiscales": 46,
                    "depensesFonctionnement": 79,
                    "depensesEquipement": 17,
                    "details": {
                        "personnel": 37,
                        "services": 22,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 83,
                    "service": 48,
                    "safety": 88,
                    "health": 43,
                    "edu": 63,
                    "culture": 38,
                    "social": 78,
                    "econ": 36
                }
            }
        }
    },
    {
        "id": 7,
        "name": "Akbou",
        "daira": "Akbou",
        "cluster": 1,
        "scores": {
            "env": 70,
            "service": 85,
            "safety": 78,
            "health": 80,
            "edu": 82,
            "culture": 65,
            "social": 75,
            "econ": 92
        },
        "details": {
            "taxis": 200,
            "hospitalBeds": 400,
            "bacSuccess": 68.9,
            "waterAccess": 92,
            "roadStatus": "Very Good"
        },
        "finances": {
            "budgetTotal": 1800,
            "recettesFiscales": 1350,
            "depensesFonctionnement": 1000,
            "depensesEquipement": 800,
            "tauxRecouvrement": 88
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 891,
                    "recettesFiscales": 515,
                    "depensesFonctionnement": 846,
                    "depensesEquipement": 196,
                    "details": {
                        "personnel": 437,
                        "services": 178,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 64,
                    "service": 79,
                    "safety": 72,
                    "health": 74,
                    "edu": 76,
                    "culture": 59,
                    "social": 69,
                    "econ": 86
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 1342,
                    "recettesFiscales": 776,
                    "depensesFonctionnement": 1275,
                    "depensesEquipement": 792,
                    "details": {
                        "personnel": 416,
                        "services": 268,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 66,
                    "service": 81,
                    "safety": 74,
                    "health": 76,
                    "edu": 78,
                    "culture": 61,
                    "social": 71,
                    "econ": 88
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 1220,
                    "recettesFiscales": 706,
                    "depensesFonctionnement": 1159,
                    "depensesEquipement": 561,
                    "details": {
                        "personnel": 415,
                        "services": 293,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 68,
                    "service": 83,
                    "safety": 76,
                    "health": 78,
                    "edu": 80,
                    "culture": 63,
                    "social": 73,
                    "econ": 90
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 1001,
                    "recettesFiscales": 664,
                    "depensesFonctionnement": 951,
                    "depensesEquipement": 190,
                    "details": {
                        "personnel": 420,
                        "services": 270,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 69,
                    "service": 84,
                    "safety": 77,
                    "health": 79,
                    "edu": 81,
                    "culture": 64,
                    "social": 74,
                    "econ": 91
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 932,
                    "recettesFiscales": 515,
                    "depensesFonctionnement": 885,
                    "depensesEquipement": 186,
                    "details": {
                        "personnel": 419,
                        "services": 252,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 69,
                    "service": 84,
                    "safety": 77,
                    "health": 79,
                    "edu": 81,
                    "culture": 64,
                    "social": 74,
                    "econ": 91
                }
            }
        }
    },
    {
        "id": 8,
        "name": "Chellata",
        "daira": "Akbou",
        "cluster": 3,
        "scores": {
            "env": 88,
            "service": 52,
            "safety": 85,
            "health": 48,
            "edu": 65,
            "culture": 42,
            "social": 78,
            "econ": 40
        },
        "details": {
            "taxis": 15,
            "hospitalBeds": 0,
            "bacSuccess": 57.2,
            "waterAccess": 68,
            "roadStatus": "Average"
        },
        "finances": {
            "budgetTotal": 140,
            "recettesFiscales": 30,
            "depensesFonctionnement": 110,
            "depensesEquipement": 30,
            "tauxRecouvrement": 32
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 69,
                    "recettesFiscales": 40,
                    "depensesFonctionnement": 66,
                    "depensesEquipement": 15,
                    "details": {
                        "personnel": 34,
                        "services": 14,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 80,
                    "service": 44,
                    "safety": 77,
                    "health": 40,
                    "edu": 57,
                    "culture": 34,
                    "social": 70,
                    "econ": 32
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 104,
                    "recettesFiscales": 60,
                    "depensesFonctionnement": 99,
                    "depensesEquipement": 61,
                    "details": {
                        "personnel": 32,
                        "services": 21,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 85,
                    "service": 49,
                    "safety": 82,
                    "health": 45,
                    "edu": 62,
                    "culture": 39,
                    "social": 75,
                    "econ": 37
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 95,
                    "recettesFiscales": 55,
                    "depensesFonctionnement": 90,
                    "depensesEquipement": 44,
                    "details": {
                        "personnel": 32,
                        "services": 23,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 86,
                    "service": 50,
                    "safety": 83,
                    "health": 46,
                    "edu": 63,
                    "culture": 40,
                    "social": 76,
                    "econ": 38
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 78,
                    "recettesFiscales": 52,
                    "depensesFonctionnement": 74,
                    "depensesEquipement": 15,
                    "details": {
                        "personnel": 33,
                        "services": 21,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 84,
                    "service": 48,
                    "safety": 81,
                    "health": 44,
                    "edu": 61,
                    "culture": 38,
                    "social": 74,
                    "econ": 36
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 72,
                    "recettesFiscales": 40,
                    "depensesFonctionnement": 68,
                    "depensesEquipement": 14,
                    "details": {
                        "personnel": 32,
                        "services": 19,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 86,
                    "service": 50,
                    "safety": 83,
                    "health": 46,
                    "edu": 63,
                    "culture": 40,
                    "social": 76,
                    "econ": 38
                }
            }
        }
    },
    {
        "id": 9,
        "name": "Ighram",
        "daira": "Akbou",
        "cluster": 2,
        "scores": {
            "env": 75,
            "service": 65,
            "safety": 80,
            "health": 58,
            "edu": 72,
            "culture": 55,
            "social": 70,
            "econ": 55
        },
        "details": {
            "taxis": 45,
            "hospitalBeds": 20,
            "bacSuccess": 62.5,
            "waterAccess": 78,
            "roadStatus": "Good"
        },
        "finances": {
            "budgetTotal": 280,
            "recettesFiscales": 110,
            "depensesFonctionnement": 200,
            "depensesEquipement": 80,
            "tauxRecouvrement": 55
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 139,
                    "recettesFiscales": 80,
                    "depensesFonctionnement": 132,
                    "depensesEquipement": 31,
                    "details": {
                        "personnel": 68,
                        "services": 28,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 67,
                    "service": 57,
                    "safety": 72,
                    "health": 50,
                    "edu": 64,
                    "culture": 47,
                    "social": 62,
                    "econ": 47
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 209,
                    "recettesFiscales": 121,
                    "depensesFonctionnement": 199,
                    "depensesEquipement": 123,
                    "details": {
                        "personnel": 65,
                        "services": 42,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 72,
                    "service": 62,
                    "safety": 77,
                    "health": 55,
                    "edu": 69,
                    "culture": 52,
                    "social": 67,
                    "econ": 52
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 190,
                    "recettesFiscales": 110,
                    "depensesFonctionnement": 181,
                    "depensesEquipement": 87,
                    "details": {
                        "personnel": 65,
                        "services": 46,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 71,
                    "service": 61,
                    "safety": 76,
                    "health": 54,
                    "edu": 68,
                    "culture": 51,
                    "social": 66,
                    "econ": 51
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 156,
                    "recettesFiscales": 103,
                    "depensesFonctionnement": 148,
                    "depensesEquipement": 30,
                    "details": {
                        "personnel": 66,
                        "services": 42,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 73,
                    "service": 63,
                    "safety": 78,
                    "health": 56,
                    "edu": 70,
                    "culture": 53,
                    "social": 68,
                    "econ": 53
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 145,
                    "recettesFiscales": 80,
                    "depensesFonctionnement": 138,
                    "depensesEquipement": 29,
                    "details": {
                        "personnel": 65,
                        "services": 39,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 75,
                    "service": 65,
                    "safety": 80,
                    "health": 58,
                    "edu": 72,
                    "culture": 55,
                    "social": 70,
                    "econ": 55
                }
            }
        }
    },
    {
        "id": 10,
        "name": "Tamokra",
        "daira": "Akbou",
        "cluster": 3,
        "scores": {
            "env": 84,
            "service": 45,
            "safety": 82,
            "health": 40,
            "edu": 60,
            "culture": 38,
            "social": 65,
            "econ": 35
        },
        "details": {
            "taxis": 10,
            "hospitalBeds": 0,
            "bacSuccess": 54.1,
            "waterAccess": 62,
            "roadStatus": "Challenging"
        },
        "finances": {
            "budgetTotal": 120,
            "recettesFiscales": 25,
            "depensesFonctionnement": 100,
            "depensesEquipement": 20,
            "tauxRecouvrement": 28
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 59,
                    "recettesFiscales": 34,
                    "depensesFonctionnement": 56,
                    "depensesEquipement": 13,
                    "details": {
                        "personnel": 29,
                        "services": 12,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 77,
                    "service": 38,
                    "safety": 75,
                    "health": 33,
                    "edu": 53,
                    "culture": 31,
                    "social": 58,
                    "econ": 28
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 89,
                    "recettesFiscales": 51,
                    "depensesFonctionnement": 85,
                    "depensesEquipement": 53,
                    "details": {
                        "personnel": 28,
                        "services": 18,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 81,
                    "service": 42,
                    "safety": 79,
                    "health": 37,
                    "edu": 57,
                    "culture": 35,
                    "social": 62,
                    "econ": 32
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 81,
                    "recettesFiscales": 47,
                    "depensesFonctionnement": 77,
                    "depensesEquipement": 37,
                    "details": {
                        "personnel": 28,
                        "services": 19,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 78,
                    "service": 39,
                    "safety": 76,
                    "health": 34,
                    "edu": 54,
                    "culture": 32,
                    "social": 59,
                    "econ": 29
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 67,
                    "recettesFiscales": 44,
                    "depensesFonctionnement": 64,
                    "depensesEquipement": 13,
                    "details": {
                        "personnel": 28,
                        "services": 18,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 83,
                    "service": 44,
                    "safety": 81,
                    "health": 39,
                    "edu": 59,
                    "culture": 37,
                    "social": 64,
                    "econ": 34
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 62,
                    "recettesFiscales": 34,
                    "depensesFonctionnement": 59,
                    "depensesEquipement": 12,
                    "details": {
                        "personnel": 28,
                        "services": 17,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 82,
                    "service": 43,
                    "safety": 80,
                    "health": 38,
                    "edu": 58,
                    "culture": 36,
                    "social": 63,
                    "econ": 33
                }
            }
        }
    },
    {
        "id": 11,
        "name": "Adekar",
        "daira": "Adekar",
        "cluster": 3,
        "scores": {
            "env": 92,
            "service": 55,
            "safety": 88,
            "health": 50,
            "edu": 68,
            "culture": 52,
            "social": 75,
            "econ": 48
        },
        "details": {
            "taxis": 35,
            "hospitalBeds": 60,
            "bacSuccess": 61.2,
            "waterAccess": 82,
            "roadStatus": "Average"
        },
        "finances": {
            "budgetTotal": 350,
            "recettesFiscales": 140,
            "depensesFonctionnement": 250,
            "depensesEquipement": 100,
            "tauxRecouvrement": 48
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 173,
                    "recettesFiscales": 100,
                    "depensesFonctionnement": 164,
                    "depensesEquipement": 38,
                    "details": {
                        "personnel": 85,
                        "services": 35,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 87,
                    "service": 50,
                    "safety": 83,
                    "health": 45,
                    "edu": 63,
                    "culture": 47,
                    "social": 70,
                    "econ": 43
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 261,
                    "recettesFiscales": 151,
                    "depensesFonctionnement": 248,
                    "depensesEquipement": 154,
                    "details": {
                        "personnel": 81,
                        "services": 52,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 89,
                    "service": 52,
                    "safety": 85,
                    "health": 47,
                    "edu": 65,
                    "culture": 49,
                    "social": 72,
                    "econ": 45
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 237,
                    "recettesFiscales": 137,
                    "depensesFonctionnement": 225,
                    "depensesEquipement": 109,
                    "details": {
                        "personnel": 81,
                        "services": 57,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 87,
                    "service": 50,
                    "safety": 83,
                    "health": 45,
                    "edu": 63,
                    "culture": 47,
                    "social": 70,
                    "econ": 43
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 195,
                    "recettesFiscales": 129,
                    "depensesFonctionnement": 185,
                    "depensesEquipement": 37,
                    "details": {
                        "personnel": 82,
                        "services": 53,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 88,
                    "service": 51,
                    "safety": 84,
                    "health": 46,
                    "edu": 64,
                    "culture": 48,
                    "social": 71,
                    "econ": 44
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 181,
                    "recettesFiscales": 100,
                    "depensesFonctionnement": 172,
                    "depensesEquipement": 36,
                    "details": {
                        "personnel": 81,
                        "services": 49,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 92,
                    "service": 55,
                    "safety": 88,
                    "health": 50,
                    "edu": 68,
                    "culture": 52,
                    "social": 75,
                    "econ": 48
                }
            }
        }
    },
    {
        "id": 12,
        "name": "Taourirt Ighil",
        "daira": "Adekar",
        "cluster": 3,
        "scores": {
            "env": 90,
            "service": 48,
            "safety": 85,
            "health": 45,
            "edu": 65,
            "culture": 45,
            "social": 72,
            "econ": 42
        },
        "details": {
            "taxis": 12,
            "hospitalBeds": 0,
            "bacSuccess": 56.5,
            "waterAccess": 70,
            "roadStatus": "Average"
        },
        "finances": {
            "budgetTotal": 180,
            "recettesFiscales": 45,
            "depensesFonctionnement": 140,
            "depensesEquipement": 40,
            "tauxRecouvrement": 38
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 89,
                    "recettesFiscales": 51,
                    "depensesFonctionnement": 85,
                    "depensesEquipement": 20,
                    "details": {
                        "personnel": 44,
                        "services": 18,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 86,
                    "service": 44,
                    "safety": 81,
                    "health": 41,
                    "edu": 61,
                    "culture": 41,
                    "social": 68,
                    "econ": 38
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 134,
                    "recettesFiscales": 78,
                    "depensesFonctionnement": 127,
                    "depensesEquipement": 79,
                    "details": {
                        "personnel": 42,
                        "services": 27,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 87,
                    "service": 45,
                    "safety": 82,
                    "health": 42,
                    "edu": 62,
                    "culture": 42,
                    "social": 69,
                    "econ": 39
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 122,
                    "recettesFiscales": 71,
                    "depensesFonctionnement": 116,
                    "depensesEquipement": 56,
                    "details": {
                        "personnel": 41,
                        "services": 29,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 88,
                    "service": 46,
                    "safety": 83,
                    "health": 43,
                    "edu": 63,
                    "culture": 43,
                    "social": 70,
                    "econ": 40
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 100,
                    "recettesFiscales": 66,
                    "depensesFonctionnement": 95,
                    "depensesEquipement": 19,
                    "details": {
                        "personnel": 42,
                        "services": 27,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 88,
                    "service": 46,
                    "safety": 83,
                    "health": 43,
                    "edu": 63,
                    "culture": 43,
                    "social": 70,
                    "econ": 40
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 93,
                    "recettesFiscales": 51,
                    "depensesFonctionnement": 88,
                    "depensesEquipement": 19,
                    "details": {
                        "personnel": 42,
                        "services": 25,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 88,
                    "service": 46,
                    "safety": 83,
                    "health": 43,
                    "edu": 63,
                    "culture": 43,
                    "social": 70,
                    "econ": 40
                }
            }
        }
    },
    {
        "id": 13,
        "name": "Beni Ksila",
        "daira": "Adekar",
        "cluster": 6,
        "scores": {
            "env": 95,
            "service": 42,
            "safety": 82,
            "health": 38,
            "edu": 62,
            "culture": 58,
            "social": 68,
            "econ": 55
        },
        "details": {
            "taxis": 25,
            "hospitalBeds": 5,
            "bacSuccess": 58.9,
            "waterAccess": 65,
            "roadStatus": "Average"
        },
        "finances": {
            "budgetTotal": 240,
            "recettesFiscales": 120,
            "depensesFonctionnement": 160,
            "depensesEquipement": 80,
            "tauxRecouvrement": 52
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 119,
                    "recettesFiscales": 69,
                    "depensesFonctionnement": 113,
                    "depensesEquipement": 26,
                    "details": {
                        "personnel": 58,
                        "services": 24,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 90,
                    "service": 37,
                    "safety": 77,
                    "health": 33,
                    "edu": 57,
                    "culture": 53,
                    "social": 63,
                    "econ": 50
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 179,
                    "recettesFiscales": 104,
                    "depensesFonctionnement": 170,
                    "depensesEquipement": 106,
                    "details": {
                        "personnel": 55,
                        "services": 36,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 92,
                    "service": 39,
                    "safety": 79,
                    "health": 35,
                    "edu": 59,
                    "culture": 55,
                    "social": 65,
                    "econ": 52
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 163,
                    "recettesFiscales": 94,
                    "depensesFonctionnement": 155,
                    "depensesEquipement": 75,
                    "details": {
                        "personnel": 55,
                        "services": 39,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 93,
                    "service": 40,
                    "safety": 80,
                    "health": 36,
                    "edu": 60,
                    "culture": 56,
                    "social": 66,
                    "econ": 53
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 133,
                    "recettesFiscales": 88,
                    "depensesFonctionnement": 126,
                    "depensesEquipement": 25,
                    "details": {
                        "personnel": 56,
                        "services": 36,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 94,
                    "service": 41,
                    "safety": 81,
                    "health": 37,
                    "edu": 61,
                    "culture": 57,
                    "social": 67,
                    "econ": 54
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 124,
                    "recettesFiscales": 69,
                    "depensesFonctionnement": 118,
                    "depensesEquipement": 25,
                    "details": {
                        "personnel": 56,
                        "services": 33,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 95,
                    "service": 42,
                    "safety": 82,
                    "health": 38,
                    "edu": 62,
                    "culture": 58,
                    "social": 68,
                    "econ": 55
                }
            }
        }
    },
    {
        "id": 14,
        "name": "Sidi Aïch",
        "daira": "Sidi-Aïch",
        "cluster": 2,
        "scores": {
            "env": 72,
            "service": 75,
            "safety": 78,
            "health": 72,
            "edu": 78,
            "culture": 68,
            "social": 82,
            "econ": 75
        },
        "details": {
            "taxis": 90,
            "hospitalBeds": 120,
            "bacSuccess": 66.8,
            "bemSuccess": 64.2,
            "pedagogicalResources": "Bon",
            "waterAccess": 90,
            "roadStatus": "Very Good",
            "riskAlert": true,
            "accidentRate": "Critique (Axe routier)",
            "emergencyCalls": 380
        },
        "finances": {
            "budgetTotal": 750,
            "recettesFiscales": 480,
            "depensesFonctionnement": 450,
            "depensesEquipement": 300,
            "tauxRecouvrement": 78
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 371,
                    "recettesFiscales": 215,
                    "depensesFonctionnement": 352,
                    "depensesEquipement": 82,
                    "details": {
                        "personnel": 182,
                        "services": 74,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 66,
                    "service": 69,
                    "safety": 72,
                    "health": 66,
                    "edu": 72,
                    "culture": 62,
                    "social": 76,
                    "econ": 69
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 559,
                    "recettesFiscales": 323,
                    "depensesFonctionnement": 531,
                    "depensesEquipement": 330,
                    "details": {
                        "personnel": 173,
                        "services": 112,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 69,
                    "service": 72,
                    "safety": 75,
                    "health": 69,
                    "edu": 75,
                    "culture": 65,
                    "social": 79,
                    "econ": 72
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 508,
                    "recettesFiscales": 294,
                    "depensesFonctionnement": 483,
                    "depensesEquipement": 234,
                    "details": {
                        "personnel": 173,
                        "services": 122,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 69,
                    "service": 72,
                    "safety": 75,
                    "health": 69,
                    "edu": 75,
                    "culture": 65,
                    "social": 79,
                    "econ": 72
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 417,
                    "recettesFiscales": 276,
                    "depensesFonctionnement": 396,
                    "depensesEquipement": 79,
                    "details": {
                        "personnel": 175,
                        "services": 113,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 68,
                    "service": 71,
                    "safety": 74,
                    "health": 68,
                    "edu": 74,
                    "culture": 64,
                    "social": 78,
                    "econ": 71
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 388,
                    "recettesFiscales": 214,
                    "depensesFonctionnement": 369,
                    "depensesEquipement": 78,
                    "details": {
                        "personnel": 175,
                        "services": 105,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 70,
                    "service": 73,
                    "safety": 76,
                    "health": 70,
                    "edu": 76,
                    "culture": 66,
                    "social": 80,
                    "econ": 73
                }
            }
        }
    },
    {
        "id": 15,
        "name": "Leflaye",
        "daira": "Sidi-Aïch",
        "cluster": 2,
        "scores": {
            "env": 78,
            "service": 62,
            "safety": 80,
            "health": 55,
            "edu": 72,
            "culture": 52,
            "social": 75,
            "econ": 58
        },
        "details": {
            "taxis": 30,
            "hospitalBeds": 10,
            "bacSuccess": 62.1,
            "waterAccess": 82,
            "roadStatus": "Good"
        },
        "finances": {
            "budgetTotal": 260,
            "recettesFiscales": 90,
            "depensesFonctionnement": 180,
            "depensesEquipement": 80,
            "tauxRecouvrement": 58
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 129,
                    "recettesFiscales": 75,
                    "depensesFonctionnement": 135,
                    "depensesEquipement": 28,
                    "details": {
                        "personnel": 63,
                        "services": 26,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": true
                    }
                },
                "scores": {
                    "env": 70,
                    "service": 54,
                    "safety": 72,
                    "health": 47,
                    "edu": 64,
                    "culture": 44,
                    "social": 67,
                    "econ": 50
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 194,
                    "recettesFiscales": 112,
                    "depensesFonctionnement": 184,
                    "depensesEquipement": 114,
                    "details": {
                        "personnel": 60,
                        "services": 39,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 75,
                    "service": 59,
                    "safety": 77,
                    "health": 52,
                    "edu": 69,
                    "culture": 49,
                    "social": 72,
                    "econ": 55
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 176,
                    "recettesFiscales": 102,
                    "depensesFonctionnement": 167,
                    "depensesEquipement": 81,
                    "details": {
                        "personnel": 60,
                        "services": 42,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 73,
                    "service": 57,
                    "safety": 75,
                    "health": 50,
                    "edu": 67,
                    "culture": 47,
                    "social": 70,
                    "econ": 53
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 145,
                    "recettesFiscales": 96,
                    "depensesFonctionnement": 138,
                    "depensesEquipement": 28,
                    "details": {
                        "personnel": 61,
                        "services": 39,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 76,
                    "service": 60,
                    "safety": 78,
                    "health": 53,
                    "edu": 70,
                    "culture": 50,
                    "social": 73,
                    "econ": 56
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 135,
                    "recettesFiscales": 75,
                    "depensesFonctionnement": 128,
                    "depensesEquipement": 27,
                    "details": {
                        "personnel": 61,
                        "services": 36,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 78,
                    "service": 62,
                    "safety": 80,
                    "health": 55,
                    "edu": 72,
                    "culture": 52,
                    "social": 75,
                    "econ": 58
                }
            }
        }
    },
    {
        "id": 16,
        "name": "Tinabdher",
        "daira": "Sidi-Aïch",
        "cluster": 4,
        "scores": {
            "env": 80,
            "service": 58,
            "safety": 82,
            "health": 52,
            "edu": 70,
            "culture": 48,
            "social": 72,
            "econ": 52
        },
        "details": {
            "taxis": 28,
            "hospitalBeds": 5,
            "bacSuccess": 60.5,
            "waterAccess": 78,
            "roadStatus": "Good"
        },
        "finances": {
            "budgetTotal": 240,
            "recettesFiscales": 85,
            "depensesFonctionnement": 170,
            "depensesEquipement": 70,
            "tauxRecouvrement": 55
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 119,
                    "recettesFiscales": 69,
                    "depensesFonctionnement": 113,
                    "depensesEquipement": 26,
                    "details": {
                        "personnel": 58,
                        "services": 24,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 72,
                    "service": 50,
                    "safety": 74,
                    "health": 44,
                    "edu": 62,
                    "culture": 40,
                    "social": 64,
                    "econ": 44
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 179,
                    "recettesFiscales": 104,
                    "depensesFonctionnement": 170,
                    "depensesEquipement": 106,
                    "details": {
                        "personnel": 55,
                        "services": 36,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 77,
                    "service": 55,
                    "safety": 79,
                    "health": 49,
                    "edu": 67,
                    "culture": 45,
                    "social": 69,
                    "econ": 49
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 163,
                    "recettesFiscales": 94,
                    "depensesFonctionnement": 155,
                    "depensesEquipement": 75,
                    "details": {
                        "personnel": 55,
                        "services": 39,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 74,
                    "service": 52,
                    "safety": 76,
                    "health": 46,
                    "edu": 64,
                    "culture": 42,
                    "social": 66,
                    "econ": 46
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 133,
                    "recettesFiscales": 88,
                    "depensesFonctionnement": 126,
                    "depensesEquipement": 25,
                    "details": {
                        "personnel": 56,
                        "services": 36,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 79,
                    "service": 57,
                    "safety": 81,
                    "health": 51,
                    "edu": 69,
                    "culture": 47,
                    "social": 71,
                    "econ": 51
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 124,
                    "recettesFiscales": 69,
                    "depensesFonctionnement": 118,
                    "depensesEquipement": 25,
                    "details": {
                        "personnel": 56,
                        "services": 33,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 78,
                    "service": 56,
                    "safety": 80,
                    "health": 50,
                    "edu": 68,
                    "culture": 46,
                    "social": 70,
                    "econ": 50
                }
            }
        }
    },
    {
        "id": 17,
        "name": "Tifra",
        "daira": "Sidi-Aïch",
        "cluster": 3,
        "scores": {
            "env": 85,
            "service": 52,
            "safety": 85,
            "health": 48,
            "edu": 68,
            "culture": 45,
            "social": 70,
            "econ": 45
        },
        "details": {
            "taxis": 22,
            "hospitalBeds": 0,
            "bacSuccess": 57.8,
            "waterAccess": 72,
            "roadStatus": "Average"
        },
        "finances": {
            "budgetTotal": 190,
            "recettesFiscales": 48,
            "depensesFonctionnement": 145,
            "depensesEquipement": 45,
            "tauxRecouvrement": 42
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 94,
                    "recettesFiscales": 54,
                    "depensesFonctionnement": 89,
                    "depensesEquipement": 21,
                    "details": {
                        "personnel": 46,
                        "services": 19,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 78,
                    "service": 45,
                    "safety": 78,
                    "health": 41,
                    "edu": 61,
                    "culture": 38,
                    "social": 63,
                    "econ": 38
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 142,
                    "recettesFiscales": 82,
                    "depensesFonctionnement": 135,
                    "depensesEquipement": 84,
                    "details": {
                        "personnel": 44,
                        "services": 28,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 82,
                    "service": 49,
                    "safety": 82,
                    "health": 45,
                    "edu": 65,
                    "culture": 42,
                    "social": 67,
                    "econ": 42
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 129,
                    "recettesFiscales": 75,
                    "depensesFonctionnement": 123,
                    "depensesEquipement": 59,
                    "details": {
                        "personnel": 44,
                        "services": 31,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 81,
                    "service": 48,
                    "safety": 81,
                    "health": 44,
                    "edu": 64,
                    "culture": 41,
                    "social": 66,
                    "econ": 41
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 106,
                    "recettesFiscales": 70,
                    "depensesFonctionnement": 101,
                    "depensesEquipement": 20,
                    "details": {
                        "personnel": 45,
                        "services": 29,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 81,
                    "service": 48,
                    "safety": 81,
                    "health": 44,
                    "edu": 64,
                    "culture": 41,
                    "social": 66,
                    "econ": 41
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 98,
                    "recettesFiscales": 54,
                    "depensesFonctionnement": 93,
                    "depensesEquipement": 20,
                    "details": {
                        "personnel": 44,
                        "services": 26,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 85,
                    "service": 52,
                    "safety": 85,
                    "health": 48,
                    "edu": 68,
                    "culture": 45,
                    "social": 70,
                    "econ": 45
                }
            }
        }
    },
    {
        "id": 18,
        "name": "Sidi Ayad",
        "daira": "Sidi-Aïch",
        "cluster": 4,
        "scores": {
            "env": 78,
            "service": 55,
            "safety": 80,
            "health": 50,
            "edu": 65,
            "culture": 42,
            "social": 68,
            "econ": 48
        },
        "details": {
            "taxis": 18,
            "hospitalBeds": 0,
            "bacSuccess": 55.2,
            "waterAccess": 70,
            "roadStatus": "Average"
        },
        "finances": {
            "budgetTotal": 150,
            "recettesFiscales": 35,
            "depensesFonctionnement": 120,
            "depensesEquipement": 30,
            "tauxRecouvrement": 38
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 74,
                    "recettesFiscales": 43,
                    "depensesFonctionnement": 70,
                    "depensesEquipement": 16,
                    "details": {
                        "personnel": 36,
                        "services": 15,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 73,
                    "service": 50,
                    "safety": 75,
                    "health": 45,
                    "edu": 60,
                    "culture": 37,
                    "social": 63,
                    "econ": 43
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 112,
                    "recettesFiscales": 65,
                    "depensesFonctionnement": 106,
                    "depensesEquipement": 66,
                    "details": {
                        "personnel": 35,
                        "services": 22,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 75,
                    "service": 52,
                    "safety": 77,
                    "health": 47,
                    "edu": 62,
                    "culture": 39,
                    "social": 65,
                    "econ": 45
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 102,
                    "recettesFiscales": 59,
                    "depensesFonctionnement": 97,
                    "depensesEquipement": 47,
                    "details": {
                        "personnel": 35,
                        "services": 24,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 76,
                    "service": 53,
                    "safety": 78,
                    "health": 48,
                    "edu": 63,
                    "culture": 40,
                    "social": 66,
                    "econ": 46
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 83,
                    "recettesFiscales": 55,
                    "depensesFonctionnement": 79,
                    "depensesEquipement": 16,
                    "details": {
                        "personnel": 35,
                        "services": 22,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 76,
                    "service": 53,
                    "safety": 78,
                    "health": 48,
                    "edu": 63,
                    "culture": 40,
                    "social": 66,
                    "econ": 46
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 78,
                    "recettesFiscales": 43,
                    "depensesFonctionnement": 74,
                    "depensesEquipement": 16,
                    "details": {
                        "personnel": 35,
                        "services": 21,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 75,
                    "service": 52,
                    "safety": 77,
                    "health": 47,
                    "edu": 62,
                    "culture": 39,
                    "social": 65,
                    "econ": 45
                }
            }
        }
    },
    {
        "id": 19,
        "name": "Kherrata",
        "daira": "Kherrata",
        "cluster": 3,
        "scores": {
            "env": 88,
            "service": 60,
            "safety": 85,
            "health": 55,
            "edu": 70,
            "culture": 55,
            "social": 80,
            "econ": 50
        },
        "details": {
            "taxis": 60,
            "hospitalBeds": 80,
            "bacSuccess": 62.1,
            "waterAccess": 78,
            "roadStatus": "Average"
        },
        "finances": {
            "budgetTotal": 580,
            "recettesFiscales": 320,
            "depensesFonctionnement": 380,
            "depensesEquipement": 200,
            "tauxRecouvrement": 65
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 287,
                    "recettesFiscales": 166,
                    "depensesFonctionnement": 273,
                    "depensesEquipement": 63,
                    "details": {
                        "personnel": 141,
                        "services": 57,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 84,
                    "service": 56,
                    "safety": 81,
                    "health": 51,
                    "edu": 66,
                    "culture": 51,
                    "social": 76,
                    "econ": 46
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 433,
                    "recettesFiscales": 250,
                    "depensesFonctionnement": 411,
                    "depensesEquipement": 255,
                    "details": {
                        "personnel": 134,
                        "services": 87,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 85,
                    "service": 57,
                    "safety": 82,
                    "health": 52,
                    "edu": 67,
                    "culture": 52,
                    "social": 77,
                    "econ": 47
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 393,
                    "recettesFiscales": 227,
                    "depensesFonctionnement": 373,
                    "depensesEquipement": 181,
                    "details": {
                        "personnel": 134,
                        "services": 94,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 86,
                    "service": 58,
                    "safety": 83,
                    "health": 53,
                    "edu": 68,
                    "culture": 53,
                    "social": 78,
                    "econ": 48
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 322,
                    "recettesFiscales": 213,
                    "depensesFonctionnement": 306,
                    "depensesEquipement": 61,
                    "details": {
                        "personnel": 135,
                        "services": 87,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 87,
                    "service": 59,
                    "safety": 84,
                    "health": 54,
                    "edu": 69,
                    "culture": 54,
                    "social": 79,
                    "econ": 49
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 300,
                    "recettesFiscales": 166,
                    "depensesFonctionnement": 285,
                    "depensesEquipement": 60,
                    "details": {
                        "personnel": 135,
                        "services": 81,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 88,
                    "service": 60,
                    "safety": 85,
                    "health": 55,
                    "edu": 70,
                    "culture": 55,
                    "social": 80,
                    "econ": 50
                }
            }
        }
    },
    {
        "id": 20,
        "name": "Draâ El-Kaïd",
        "daira": "Kherrata",
        "cluster": 6,
        "scores": {
            "env": 82,
            "service": 52,
            "safety": 82,
            "health": 48,
            "edu": 65,
            "culture": 48,
            "social": 75,
            "econ": 48
        },
        "details": {
            "taxis": 35,
            "hospitalBeds": 10,
            "bacSuccess": 58.4,
            "bemSuccess": 55.1,
            "pedagogicalResources": "Faible - Zone Rouge",
            "waterAccess": 72,
            "roadStatus": "Average"
        },
        "finances": {
            "budgetTotal": 250,
            "recettesFiscales": 95,
            "depensesFonctionnement": 180,
            "depensesEquipement": 70,
            "tauxRecouvrement": 52
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 124,
                    "recettesFiscales": 72,
                    "depensesFonctionnement": 118,
                    "depensesEquipement": 27,
                    "details": {
                        "personnel": 61,
                        "services": 25,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 77,
                    "service": 47,
                    "safety": 77,
                    "health": 43,
                    "edu": 60,
                    "culture": 43,
                    "social": 70,
                    "econ": 43
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 186,
                    "recettesFiscales": 108,
                    "depensesFonctionnement": 177,
                    "depensesEquipement": 110,
                    "details": {
                        "personnel": 58,
                        "services": 37,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 79,
                    "service": 49,
                    "safety": 79,
                    "health": 45,
                    "edu": 62,
                    "culture": 45,
                    "social": 72,
                    "econ": 45
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 169,
                    "recettesFiscales": 98,
                    "depensesFonctionnement": 161,
                    "depensesEquipement": 78,
                    "details": {
                        "personnel": 57,
                        "services": 41,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 78,
                    "service": 48,
                    "safety": 78,
                    "health": 44,
                    "edu": 61,
                    "culture": 44,
                    "social": 71,
                    "econ": 44
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 139,
                    "recettesFiscales": 92,
                    "depensesFonctionnement": 132,
                    "depensesEquipement": 26,
                    "details": {
                        "personnel": 58,
                        "services": 38,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 78,
                    "service": 48,
                    "safety": 78,
                    "health": 44,
                    "edu": 61,
                    "culture": 44,
                    "social": 71,
                    "econ": 44
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 129,
                    "recettesFiscales": 71,
                    "depensesFonctionnement": 123,
                    "depensesEquipement": 26,
                    "details": {
                        "personnel": 58,
                        "services": 35,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 79,
                    "service": 49,
                    "safety": 79,
                    "health": 45,
                    "edu": 62,
                    "culture": 45,
                    "social": 72,
                    "econ": 45
                }
            }
        }
    },
    {
        "id": 21,
        "name": "Aokas",
        "daira": "Aokas",
        "cluster": 6,
        "scores": {
            "env": 85,
            "service": 72,
            "safety": 80,
            "health": 65,
            "edu": 75,
            "culture": 70,
            "social": 82,
            "econ": 78
        },
        "details": {
            "taxis": 75,
            "hospitalBeds": 60,
            "bacSuccess": 67.5,
            "waterAccess": 92,
            "roadStatus": "Very Good"
        },
        "finances": {
            "budgetTotal": 650,
            "recettesFiscales": 420,
            "depensesFonctionnement": 400,
            "depensesEquipement": 250,
            "tauxRecouvrement": 75
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 322,
                    "recettesFiscales": 186,
                    "depensesFonctionnement": 306,
                    "depensesEquipement": 71,
                    "details": {
                        "personnel": 158,
                        "services": 64,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 79,
                    "service": 66,
                    "safety": 74,
                    "health": 59,
                    "edu": 69,
                    "culture": 64,
                    "social": 76,
                    "econ": 72
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 485,
                    "recettesFiscales": 281,
                    "depensesFonctionnement": 461,
                    "depensesEquipement": 286,
                    "details": {
                        "personnel": 150,
                        "services": 97,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 82,
                    "service": 69,
                    "safety": 77,
                    "health": 62,
                    "edu": 72,
                    "culture": 67,
                    "social": 79,
                    "econ": 75
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 441,
                    "recettesFiscales": 255,
                    "depensesFonctionnement": 419,
                    "depensesEquipement": 203,
                    "details": {
                        "personnel": 150,
                        "services": 106,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 80,
                    "service": 67,
                    "safety": 75,
                    "health": 60,
                    "edu": 70,
                    "culture": 65,
                    "social": 77,
                    "econ": 73
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 361,
                    "recettesFiscales": 239,
                    "depensesFonctionnement": 343,
                    "depensesEquipement": 69,
                    "details": {
                        "personnel": 152,
                        "services": 97,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 83,
                    "service": 70,
                    "safety": 78,
                    "health": 63,
                    "edu": 73,
                    "culture": 68,
                    "social": 80,
                    "econ": 76
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 336,
                    "recettesFiscales": 186,
                    "depensesFonctionnement": 319,
                    "depensesEquipement": 67,
                    "details": {
                        "personnel": 151,
                        "services": 91,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 85,
                    "service": 72,
                    "safety": 80,
                    "health": 65,
                    "edu": 75,
                    "culture": 70,
                    "social": 82,
                    "econ": 78
                }
            }
        }
    },
    {
        "id": 22,
        "name": "Tizi N'Berber",
        "daira": "Aokas",
        "cluster": 3,
        "scores": {
            "env": 90,
            "service": 55,
            "safety": 85,
            "health": 50,
            "edu": 68,
            "culture": 52,
            "social": 78,
            "econ": 52
        },
        "details": {
            "taxis": 25,
            "hospitalBeds": 0,
            "bacSuccess": 60.2,
            "waterAccess": 75,
            "roadStatus": "Average"
        },
        "finances": {
            "budgetTotal": 230,
            "recettesFiscales": 85,
            "depensesFonctionnement": 170,
            "depensesEquipement": 60,
            "tauxRecouvrement": 45
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 114,
                    "recettesFiscales": 66,
                    "depensesFonctionnement": 108,
                    "depensesEquipement": 25,
                    "details": {
                        "personnel": 56,
                        "services": 23,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 82,
                    "service": 47,
                    "safety": 77,
                    "health": 42,
                    "edu": 60,
                    "culture": 44,
                    "social": 70,
                    "econ": 44
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 172,
                    "recettesFiscales": 100,
                    "depensesFonctionnement": 163,
                    "depensesEquipement": 101,
                    "details": {
                        "personnel": 53,
                        "services": 34,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 87,
                    "service": 52,
                    "safety": 82,
                    "health": 47,
                    "edu": 65,
                    "culture": 49,
                    "social": 75,
                    "econ": 49
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 156,
                    "recettesFiscales": 90,
                    "depensesFonctionnement": 148,
                    "depensesEquipement": 72,
                    "details": {
                        "personnel": 53,
                        "services": 37,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 85,
                    "service": 50,
                    "safety": 80,
                    "health": 45,
                    "edu": 63,
                    "culture": 47,
                    "social": 73,
                    "econ": 47
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 128,
                    "recettesFiscales": 85,
                    "depensesFonctionnement": 122,
                    "depensesEquipement": 24,
                    "details": {
                        "personnel": 54,
                        "services": 35,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 89,
                    "service": 54,
                    "safety": 84,
                    "health": 49,
                    "edu": 67,
                    "culture": 51,
                    "social": 77,
                    "econ": 51
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 119,
                    "recettesFiscales": 66,
                    "depensesFonctionnement": 113,
                    "depensesEquipement": 24,
                    "details": {
                        "personnel": 54,
                        "services": 32,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 87,
                    "service": 52,
                    "safety": 82,
                    "health": 47,
                    "edu": 65,
                    "culture": 49,
                    "social": 75,
                    "econ": 49
                }
            }
        }
    },
    {
        "id": 23,
        "name": "Barbacha",
        "daira": "Barbacha",
        "cluster": 3,
        "scores": {
            "env": 88,
            "service": 58,
            "safety": 88,
            "health": 52,
            "edu": 72,
            "culture": 55,
            "social": 85,
            "econ": 45
        },
        "details": {
            "taxis": 40,
            "hospitalBeds": 15,
            "bacSuccess": 63.8,
            "waterAccess": 80,
            "roadStatus": "Average"
        },
        "finances": {
            "budgetTotal": 290,
            "recettesFiscales": 110,
            "depensesFonctionnement": 210,
            "depensesEquipement": 80,
            "tauxRecouvrement": 55
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 144,
                    "recettesFiscales": 83,
                    "depensesFonctionnement": 137,
                    "depensesEquipement": 32,
                    "details": {
                        "personnel": 71,
                        "services": 29,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 80,
                    "service": 50,
                    "safety": 80,
                    "health": 44,
                    "edu": 64,
                    "culture": 47,
                    "social": 77,
                    "econ": 37
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 216,
                    "recettesFiscales": 125,
                    "depensesFonctionnement": 205,
                    "depensesEquipement": 127,
                    "details": {
                        "personnel": 67,
                        "services": 43,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 85,
                    "service": 55,
                    "safety": 85,
                    "health": 49,
                    "edu": 69,
                    "culture": 52,
                    "social": 82,
                    "econ": 42
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 197,
                    "recettesFiscales": 114,
                    "depensesFonctionnement": 187,
                    "depensesEquipement": 91,
                    "details": {
                        "personnel": 67,
                        "services": 47,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 85,
                    "service": 55,
                    "safety": 85,
                    "health": 49,
                    "edu": 69,
                    "culture": 52,
                    "social": 82,
                    "econ": 42
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 161,
                    "recettesFiscales": 107,
                    "depensesFonctionnement": 153,
                    "depensesEquipement": 31,
                    "details": {
                        "personnel": 68,
                        "services": 43,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 84,
                    "service": 54,
                    "safety": 84,
                    "health": 48,
                    "edu": 68,
                    "culture": 51,
                    "social": 81,
                    "econ": 41
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 150,
                    "recettesFiscales": 83,
                    "depensesFonctionnement": 143,
                    "depensesEquipement": 30,
                    "details": {
                        "personnel": 68,
                        "services": 41,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 88,
                    "service": 58,
                    "safety": 88,
                    "health": 52,
                    "edu": 72,
                    "culture": 55,
                    "social": 85,
                    "econ": 45
                }
            }
        }
    },
    {
        "id": 24,
        "name": "Kendira",
        "daira": "Barbacha",
        "cluster": 3,
        "scores": {
            "env": 92,
            "service": 48,
            "safety": 90,
            "health": 45,
            "edu": 65,
            "culture": 42,
            "social": 80,
            "econ": 38
        },
        "details": {
            "taxis": 15,
            "hospitalBeds": 0,
            "bacSuccess": 56.2,
            "waterAccess": 68,
            "roadStatus": "Challenging"
        },
        "finances": {
            "budgetTotal": 170,
            "recettesFiscales": 45,
            "depensesFonctionnement": 130,
            "depensesEquipement": 40,
            "tauxRecouvrement": 40
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 84,
                    "recettesFiscales": 49,
                    "depensesFonctionnement": 80,
                    "depensesEquipement": 18,
                    "details": {
                        "personnel": 41,
                        "services": 17,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 85,
                    "service": 41,
                    "safety": 83,
                    "health": 38,
                    "edu": 58,
                    "culture": 35,
                    "social": 73,
                    "econ": 31
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 127,
                    "recettesFiscales": 73,
                    "depensesFonctionnement": 121,
                    "depensesEquipement": 75,
                    "details": {
                        "personnel": 39,
                        "services": 25,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 89,
                    "service": 45,
                    "safety": 87,
                    "health": 42,
                    "edu": 62,
                    "culture": 39,
                    "social": 77,
                    "econ": 35
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 115,
                    "recettesFiscales": 67,
                    "depensesFonctionnement": 109,
                    "depensesEquipement": 53,
                    "details": {
                        "personnel": 39,
                        "services": 28,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 90,
                    "service": 46,
                    "safety": 88,
                    "health": 43,
                    "edu": 63,
                    "culture": 40,
                    "social": 78,
                    "econ": 36
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 95,
                    "recettesFiscales": 63,
                    "depensesFonctionnement": 90,
                    "depensesEquipement": 18,
                    "details": {
                        "personnel": 40,
                        "services": 26,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 90,
                    "service": 46,
                    "safety": 88,
                    "health": 43,
                    "edu": 63,
                    "culture": 40,
                    "social": 78,
                    "econ": 36
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 88,
                    "recettesFiscales": 49,
                    "depensesFonctionnement": 84,
                    "depensesEquipement": 18,
                    "details": {
                        "personnel": 40,
                        "services": 24,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 89,
                    "service": 45,
                    "safety": 87,
                    "health": 42,
                    "edu": 62,
                    "culture": 39,
                    "social": 77,
                    "econ": 35
                }
            }
        }
    },
    {
        "id": 25,
        "name": "Beni Maouche",
        "daira": "Beni Maouche",
        "cluster": 4,
        "scores": {
            "env": 85,
            "service": 55,
            "safety": 85,
            "health": 50,
            "edu": 70,
            "culture": 60,
            "social": 75,
            "econ": 58
        },
        "details": {
            "taxis": 55,
            "hospitalBeds": 20,
            "bacSuccess": 64.5,
            "waterAccess": 75,
            "roadStatus": "Average"
        },
        "finances": {
            "budgetTotal": 380,
            "recettesFiscales": 150,
            "depensesFonctionnement": 260,
            "depensesEquipement": 120,
            "tauxRecouvrement": 62
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 188,
                    "recettesFiscales": 109,
                    "depensesFonctionnement": 179,
                    "depensesEquipement": 41,
                    "details": {
                        "personnel": 92,
                        "services": 38,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 80,
                    "service": 50,
                    "safety": 80,
                    "health": 45,
                    "edu": 65,
                    "culture": 55,
                    "social": 70,
                    "econ": 53
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 283,
                    "recettesFiscales": 164,
                    "depensesFonctionnement": 269,
                    "depensesEquipement": 167,
                    "details": {
                        "personnel": 88,
                        "services": 57,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 81,
                    "service": 51,
                    "safety": 81,
                    "health": 46,
                    "edu": 66,
                    "culture": 56,
                    "social": 71,
                    "econ": 54
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 258,
                    "recettesFiscales": 149,
                    "depensesFonctionnement": 245,
                    "depensesEquipement": 119,
                    "details": {
                        "personnel": 88,
                        "services": 62,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 83,
                    "service": 53,
                    "safety": 83,
                    "health": 48,
                    "edu": 68,
                    "culture": 58,
                    "social": 73,
                    "econ": 56
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 211,
                    "recettesFiscales": 140,
                    "depensesFonctionnement": 200,
                    "depensesEquipement": 40,
                    "details": {
                        "personnel": 89,
                        "services": 57,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 84,
                    "service": 54,
                    "safety": 84,
                    "health": 49,
                    "edu": 69,
                    "culture": 59,
                    "social": 74,
                    "econ": 57
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 197,
                    "recettesFiscales": 109,
                    "depensesFonctionnement": 187,
                    "depensesEquipement": 39,
                    "details": {
                        "personnel": 89,
                        "services": 53,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 86,
                    "service": 56,
                    "safety": 86,
                    "health": 51,
                    "edu": 71,
                    "culture": 61,
                    "social": 76,
                    "econ": 59
                }
            }
        }
    },
    {
        "id": 26,
        "name": "Chemini",
        "daira": "Chemini",
        "cluster": 3,
        "scores": {
            "env": 82,
            "service": 65,
            "safety": 85,
            "health": 68,
            "edu": 75,
            "culture": 62,
            "social": 88,
            "econ": 55
        },
        "details": {
            "taxis": 45,
            "hospitalBeds": 40,
            "bacSuccess": 66.2,
            "waterAccess": 85,
            "roadStatus": "Good"
        },
        "finances": {
            "budgetTotal": 420,
            "recettesFiscales": 210,
            "depensesFonctionnement": 280,
            "depensesEquipement": 140,
            "tauxRecouvrement": 68
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 208,
                    "recettesFiscales": 120,
                    "depensesFonctionnement": 198,
                    "depensesEquipement": 46,
                    "details": {
                        "personnel": 102,
                        "services": 42,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 78,
                    "service": 61,
                    "safety": 81,
                    "health": 64,
                    "edu": 71,
                    "culture": 58,
                    "social": 84,
                    "econ": 51
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 313,
                    "recettesFiscales": 181,
                    "depensesFonctionnement": 297,
                    "depensesEquipement": 185,
                    "details": {
                        "personnel": 97,
                        "services": 63,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 78,
                    "service": 61,
                    "safety": 81,
                    "health": 64,
                    "edu": 71,
                    "culture": 58,
                    "social": 84,
                    "econ": 51
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 285,
                    "recettesFiscales": 165,
                    "depensesFonctionnement": 271,
                    "depensesEquipement": 131,
                    "details": {
                        "personnel": 97,
                        "services": 68,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 78,
                    "service": 61,
                    "safety": 81,
                    "health": 64,
                    "edu": 71,
                    "culture": 58,
                    "social": 84,
                    "econ": 51
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 234,
                    "recettesFiscales": 155,
                    "depensesFonctionnement": 222,
                    "depensesEquipement": 44,
                    "details": {
                        "personnel": 98,
                        "services": 63,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 78,
                    "service": 61,
                    "safety": 81,
                    "health": 64,
                    "edu": 71,
                    "culture": 58,
                    "social": 84,
                    "econ": 51
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 217,
                    "recettesFiscales": 120,
                    "depensesFonctionnement": 206,
                    "depensesEquipement": 43,
                    "details": {
                        "personnel": 98,
                        "services": 59,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 79,
                    "service": 62,
                    "safety": 82,
                    "health": 65,
                    "edu": 72,
                    "culture": 59,
                    "social": 85,
                    "econ": 52
                }
            }
        }
    },
    {
        "id": 27,
        "name": "Tibane",
        "daira": "Chemini",
        "cluster": 3,
        "scores": {
            "env": 85,
            "service": 58,
            "safety": 82,
            "health": 55,
            "edu": 72,
            "culture": 58,
            "social": 82,
            "econ": 48
        },
        "details": {
            "taxis": 20,
            "hospitalBeds": 0,
            "bacSuccess": 61.8,
            "waterAccess": 78,
            "roadStatus": "Average"
        },
        "finances": {
            "budgetTotal": 210,
            "recettesFiscales": 65,
            "depensesFonctionnement": 160,
            "depensesEquipement": 50,
            "tauxRecouvrement": 45
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 104,
                    "recettesFiscales": 60,
                    "depensesFonctionnement": 99,
                    "depensesEquipement": 23,
                    "details": {
                        "personnel": 51,
                        "services": 21,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 80,
                    "service": 53,
                    "safety": 77,
                    "health": 50,
                    "edu": 67,
                    "culture": 53,
                    "social": 77,
                    "econ": 43
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 157,
                    "recettesFiscales": 91,
                    "depensesFonctionnement": 149,
                    "depensesEquipement": 93,
                    "details": {
                        "personnel": 49,
                        "services": 31,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 81,
                    "service": 54,
                    "safety": 78,
                    "health": 51,
                    "edu": 68,
                    "culture": 54,
                    "social": 78,
                    "econ": 44
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 142,
                    "recettesFiscales": 82,
                    "depensesFonctionnement": 135,
                    "depensesEquipement": 65,
                    "details": {
                        "personnel": 48,
                        "services": 34,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 79,
                    "service": 52,
                    "safety": 76,
                    "health": 49,
                    "edu": 66,
                    "culture": 52,
                    "social": 76,
                    "econ": 42
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 117,
                    "recettesFiscales": 78,
                    "depensesFonctionnement": 111,
                    "depensesEquipement": 22,
                    "details": {
                        "personnel": 49,
                        "services": 32,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 83,
                    "service": 56,
                    "safety": 80,
                    "health": 53,
                    "edu": 70,
                    "culture": 56,
                    "social": 80,
                    "econ": 46
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 109,
                    "recettesFiscales": 60,
                    "depensesFonctionnement": 104,
                    "depensesEquipement": 22,
                    "details": {
                        "personnel": 49,
                        "services": 29,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 86,
                    "service": 59,
                    "safety": 83,
                    "health": 56,
                    "edu": 73,
                    "culture": 59,
                    "social": 83,
                    "econ": 49
                }
            }
        }
    },
    {
        "id": 28,
        "name": "Souk-Oufella",
        "daira": "Chemini",
        "cluster": 3,
        "scores": {
            "env": 80,
            "service": 60,
            "safety": 80,
            "health": 58,
            "edu": 70,
            "culture": 55,
            "social": 80,
            "econ": 50
        },
        "details": {
            "taxis": 25,
            "hospitalBeds": 0,
            "bacSuccess": 60.5,
            "waterAccess": 80,
            "roadStatus": "Average"
        },
        "finances": {
            "budgetTotal": 180,
            "recettesFiscales": 55,
            "depensesFonctionnement": 140,
            "depensesEquipement": 40,
            "tauxRecouvrement": 42
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 89,
                    "recettesFiscales": 51,
                    "depensesFonctionnement": 85,
                    "depensesEquipement": 20,
                    "details": {
                        "personnel": 44,
                        "services": 18,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 74,
                    "service": 54,
                    "safety": 74,
                    "health": 52,
                    "edu": 64,
                    "culture": 49,
                    "social": 74,
                    "econ": 44
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 134,
                    "recettesFiscales": 78,
                    "depensesFonctionnement": 127,
                    "depensesEquipement": 79,
                    "details": {
                        "personnel": 42,
                        "services": 27,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 76,
                    "service": 56,
                    "safety": 76,
                    "health": 54,
                    "edu": 66,
                    "culture": 51,
                    "social": 76,
                    "econ": 46
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 122,
                    "recettesFiscales": 71,
                    "depensesFonctionnement": 116,
                    "depensesEquipement": 56,
                    "details": {
                        "personnel": 41,
                        "services": 29,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 75,
                    "service": 55,
                    "safety": 75,
                    "health": 53,
                    "edu": 65,
                    "culture": 50,
                    "social": 75,
                    "econ": 45
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 100,
                    "recettesFiscales": 66,
                    "depensesFonctionnement": 95,
                    "depensesEquipement": 19,
                    "details": {
                        "personnel": 42,
                        "services": 27,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 79,
                    "service": 59,
                    "safety": 79,
                    "health": 57,
                    "edu": 69,
                    "culture": 54,
                    "social": 79,
                    "econ": 49
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 93,
                    "recettesFiscales": 51,
                    "depensesFonctionnement": 88,
                    "depensesEquipement": 19,
                    "details": {
                        "personnel": 42,
                        "services": 25,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 77,
                    "service": 57,
                    "safety": 77,
                    "health": 55,
                    "edu": 67,
                    "culture": 52,
                    "social": 77,
                    "econ": 47
                }
            }
        }
    },
    {
        "id": 29,
        "name": "Akfadou",
        "daira": "Chemini",
        "cluster": 3,
        "scores": {
            "env": 95,
            "service": 52,
            "safety": 88,
            "health": 50,
            "edu": 68,
            "culture": 52,
            "social": 78,
            "econ": 45
        },
        "details": {
            "taxis": 18,
            "hospitalBeds": 0,
            "bacSuccess": 58.2,
            "waterAccess": 72,
            "roadStatus": "Average"
        },
        "finances": {
            "budgetTotal": 160,
            "recettesFiscales": 42,
            "depensesFonctionnement": 125,
            "depensesEquipement": 35,
            "tauxRecouvrement": 38
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 79,
                    "recettesFiscales": 46,
                    "depensesFonctionnement": 75,
                    "depensesEquipement": 17,
                    "details": {
                        "personnel": 39,
                        "services": 16,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 87,
                    "service": 44,
                    "safety": 80,
                    "health": 42,
                    "edu": 60,
                    "culture": 44,
                    "social": 70,
                    "econ": 37
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 119,
                    "recettesFiscales": 69,
                    "depensesFonctionnement": 113,
                    "depensesEquipement": 70,
                    "details": {
                        "personnel": 37,
                        "services": 24,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 91,
                    "service": 48,
                    "safety": 84,
                    "health": 46,
                    "edu": 64,
                    "culture": 48,
                    "social": 74,
                    "econ": 41
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 108,
                    "recettesFiscales": 62,
                    "depensesFonctionnement": 103,
                    "depensesEquipement": 50,
                    "details": {
                        "personnel": 37,
                        "services": 26,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 92,
                    "service": 49,
                    "safety": 85,
                    "health": 47,
                    "edu": 65,
                    "culture": 49,
                    "social": 75,
                    "econ": 42
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 89,
                    "recettesFiscales": 59,
                    "depensesFonctionnement": 85,
                    "depensesEquipement": 17,
                    "details": {
                        "personnel": 37,
                        "services": 24,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 91,
                    "service": 48,
                    "safety": 84,
                    "health": 46,
                    "edu": 64,
                    "culture": 48,
                    "social": 74,
                    "econ": 41
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 83,
                    "recettesFiscales": 46,
                    "depensesFonctionnement": 79,
                    "depensesEquipement": 17,
                    "details": {
                        "personnel": 37,
                        "services": 22,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 96,
                    "service": 53,
                    "safety": 89,
                    "health": 51,
                    "edu": 69,
                    "culture": 53,
                    "social": 79,
                    "econ": 46
                }
            }
        }
    },
    {
        "id": 30,
        "name": "Darguina",
        "daira": "Darguina",
        "cluster": 6,
        "scores": {
            "env": 88,
            "service": 65,
            "safety": 82,
            "health": 58,
            "edu": 72,
            "culture": 60,
            "social": 78,
            "econ": 65
        },
        "details": {
            "taxis": 50,
            "hospitalBeds": 30,
            "bacSuccess": 64.9,
            "waterAccess": 85,
            "roadStatus": "Average"
        },
        "finances": {
            "budgetTotal": 480,
            "recettesFiscales": 240,
            "depensesFonctionnement": 320,
            "depensesEquipement": 160,
            "tauxRecouvrement": 68
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 238,
                    "recettesFiscales": 138,
                    "depensesFonctionnement": 226,
                    "depensesEquipement": 52,
                    "details": {
                        "personnel": 117,
                        "services": 48,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 80,
                    "service": 57,
                    "safety": 74,
                    "health": 50,
                    "edu": 64,
                    "culture": 52,
                    "social": 70,
                    "econ": 57
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 358,
                    "recettesFiscales": 207,
                    "depensesFonctionnement": 340,
                    "depensesEquipement": 211,
                    "details": {
                        "personnel": 111,
                        "services": 72,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 84,
                    "service": 61,
                    "safety": 78,
                    "health": 54,
                    "edu": 68,
                    "culture": 56,
                    "social": 74,
                    "econ": 61
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 325,
                    "recettesFiscales": 188,
                    "depensesFonctionnement": 309,
                    "depensesEquipement": 150,
                    "details": {
                        "personnel": 111,
                        "services": 78,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 86,
                    "service": 63,
                    "safety": 80,
                    "health": 56,
                    "edu": 70,
                    "culture": 58,
                    "social": 76,
                    "econ": 63
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 267,
                    "recettesFiscales": 177,
                    "depensesFonctionnement": 254,
                    "depensesEquipement": 51,
                    "details": {
                        "personnel": 112,
                        "services": 72,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 86,
                    "service": 63,
                    "safety": 80,
                    "health": 56,
                    "edu": 70,
                    "culture": 58,
                    "social": 76,
                    "econ": 63
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 248,
                    "recettesFiscales": 137,
                    "depensesFonctionnement": 236,
                    "depensesEquipement": 50,
                    "details": {
                        "personnel": 112,
                        "services": 67,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 85,
                    "service": 62,
                    "safety": 79,
                    "health": 55,
                    "edu": 69,
                    "culture": 57,
                    "social": 75,
                    "econ": 62
                }
            }
        }
    },
    {
        "id": 31,
        "name": "Aït-Smail",
        "daira": "Darguina",
        "cluster": 3,
        "scores": {
            "env": 92,
            "service": 50,
            "safety": 85,
            "health": 45,
            "edu": 65,
            "culture": 48,
            "social": 72,
            "econ": 42
        },
        "details": {
            "taxis": 20,
            "hospitalBeds": 0,
            "bacSuccess": 57.5,
            "waterAccess": 70,
            "roadStatus": "Average"
        },
        "finances": {
            "budgetTotal": 220,
            "recettesFiscales": 65,
            "depensesFonctionnement": 165,
            "depensesEquipement": 55,
            "tauxRecouvrement": 45
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 109,
                    "recettesFiscales": 63,
                    "depensesFonctionnement": 104,
                    "depensesEquipement": 24,
                    "details": {
                        "personnel": 53,
                        "services": 22,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 85,
                    "service": 43,
                    "safety": 78,
                    "health": 38,
                    "edu": 58,
                    "culture": 41,
                    "social": 65,
                    "econ": 35
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 164,
                    "recettesFiscales": 95,
                    "depensesFonctionnement": 156,
                    "depensesEquipement": 97,
                    "details": {
                        "personnel": 51,
                        "services": 33,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 87,
                    "service": 45,
                    "safety": 80,
                    "health": 40,
                    "edu": 60,
                    "culture": 43,
                    "social": 67,
                    "econ": 37
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 149,
                    "recettesFiscales": 86,
                    "depensesFonctionnement": 142,
                    "depensesEquipement": 69,
                    "details": {
                        "personnel": 51,
                        "services": 36,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 89,
                    "service": 47,
                    "safety": 82,
                    "health": 42,
                    "edu": 62,
                    "culture": 45,
                    "social": 69,
                    "econ": 39
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 122,
                    "recettesFiscales": 81,
                    "depensesFonctionnement": 116,
                    "depensesEquipement": 23,
                    "details": {
                        "personnel": 51,
                        "services": 33,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 91,
                    "service": 49,
                    "safety": 84,
                    "health": 44,
                    "edu": 64,
                    "culture": 47,
                    "social": 71,
                    "econ": 41
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 114,
                    "recettesFiscales": 63,
                    "depensesFonctionnement": 108,
                    "depensesEquipement": 23,
                    "details": {
                        "personnel": 51,
                        "services": 31,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 93,
                    "service": 51,
                    "safety": 86,
                    "health": 46,
                    "edu": 66,
                    "culture": 49,
                    "social": 73,
                    "econ": 43
                }
            }
        }
    },
    {
        "id": 32,
        "name": "Taskriout",
        "daira": "Darguina",
        "cluster": 6,
        "scores": {
            "env": 90,
            "service": 55,
            "safety": 80,
            "health": 52,
            "edu": 68,
            "culture": 58,
            "social": 75,
            "econ": 52
        },
        "details": {
            "taxis": 28,
            "hospitalBeds": 5,
            "bacSuccess": 60.1,
            "waterAccess": 78,
            "roadStatus": "Average"
        },
        "finances": {
            "budgetTotal": 250,
            "recettesFiscales": 95,
            "depensesFonctionnement": 180,
            "depensesEquipement": 70,
            "tauxRecouvrement": 52
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 124,
                    "recettesFiscales": 72,
                    "depensesFonctionnement": 118,
                    "depensesEquipement": 27,
                    "details": {
                        "personnel": 61,
                        "services": 25,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 85,
                    "service": 50,
                    "safety": 75,
                    "health": 47,
                    "edu": 63,
                    "culture": 53,
                    "social": 70,
                    "econ": 47
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 186,
                    "recettesFiscales": 108,
                    "depensesFonctionnement": 177,
                    "depensesEquipement": 110,
                    "details": {
                        "personnel": 58,
                        "services": 37,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 85,
                    "service": 50,
                    "safety": 75,
                    "health": 47,
                    "edu": 63,
                    "culture": 53,
                    "social": 70,
                    "econ": 47
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 169,
                    "recettesFiscales": 98,
                    "depensesFonctionnement": 161,
                    "depensesEquipement": 78,
                    "details": {
                        "personnel": 57,
                        "services": 41,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 85,
                    "service": 50,
                    "safety": 75,
                    "health": 47,
                    "edu": 63,
                    "culture": 53,
                    "social": 70,
                    "econ": 47
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 139,
                    "recettesFiscales": 92,
                    "depensesFonctionnement": 132,
                    "depensesEquipement": 26,
                    "details": {
                        "personnel": 58,
                        "services": 38,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 86,
                    "service": 51,
                    "safety": 76,
                    "health": 48,
                    "edu": 64,
                    "culture": 54,
                    "social": 71,
                    "econ": 48
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 129,
                    "recettesFiscales": 71,
                    "depensesFonctionnement": 123,
                    "depensesEquipement": 26,
                    "details": {
                        "personnel": 58,
                        "services": 35,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 87,
                    "service": 52,
                    "safety": 77,
                    "health": 49,
                    "edu": 65,
                    "culture": 55,
                    "social": 72,
                    "econ": 49
                }
            }
        }
    },
    {
        "id": 33,
        "name": "El Kseur",
        "daira": "El Kseur",
        "cluster": 2,
        "scores": {
            "env": 75,
            "service": 78,
            "safety": 75,
            "health": 70,
            "edu": 75,
            "culture": 62,
            "social": 80,
            "econ": 82
        },
        "details": {
            "taxis": 110,
            "hospitalBeds": 80,
            "bacSuccess": 67.2,
            "bemSuccess": 65.8,
            "pedagogicalResources": "Satisfaisant",
            "waterAccess": 95,
            "roadStatus": "Very Good",
            "riskAlert": true,
            "accidentRate": "Élevé (RN 12/26)",
            "emergencyCalls": 420
        },
        "finances": {
            "budgetTotal": 950,
            "recettesFiscales": 620,
            "depensesFonctionnement": 550,
            "depensesEquipement": 400,
            "tauxRecouvrement": 82
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 470,
                    "recettesFiscales": 272,
                    "depensesFonctionnement": 447,
                    "depensesEquipement": 103,
                    "details": {
                        "personnel": 230,
                        "services": 94,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 71,
                    "service": 74,
                    "safety": 71,
                    "health": 66,
                    "edu": 71,
                    "culture": 58,
                    "social": 76,
                    "econ": 78
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 708,
                    "recettesFiscales": 410,
                    "depensesFonctionnement": 673,
                    "depensesEquipement": 418,
                    "details": {
                        "personnel": 219,
                        "services": 142,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 70,
                    "service": 73,
                    "safety": 70,
                    "health": 65,
                    "edu": 70,
                    "culture": 57,
                    "social": 75,
                    "econ": 77
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 644,
                    "recettesFiscales": 373,
                    "depensesFonctionnement": 612,
                    "depensesEquipement": 296,
                    "details": {
                        "personnel": 219,
                        "services": 155,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 69,
                    "service": 72,
                    "safety": 69,
                    "health": 64,
                    "edu": 69,
                    "culture": 56,
                    "social": 74,
                    "econ": 76
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 528,
                    "recettesFiscales": 350,
                    "depensesFonctionnement": 502,
                    "depensesEquipement": 100,
                    "details": {
                        "personnel": 222,
                        "services": 143,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 73,
                    "service": 76,
                    "safety": 73,
                    "health": 68,
                    "edu": 73,
                    "culture": 60,
                    "social": 78,
                    "econ": 80
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 492,
                    "recettesFiscales": 272,
                    "depensesFonctionnement": 517,
                    "depensesEquipement": 98,
                    "details": {
                        "personnel": 221,
                        "services": 133,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": true
                    }
                },
                "scores": {
                    "env": 76,
                    "service": 79,
                    "safety": 76,
                    "health": 71,
                    "edu": 76,
                    "culture": 63,
                    "social": 81,
                    "econ": 83
                }
            }
        }
    },
    {
        "id": 34,
        "name": "Fenaïa Ilmaten",
        "daira": "El Kseur",
        "cluster": 4,
        "scores": {
            "env": 82,
            "service": 60,
            "safety": 82,
            "health": 55,
            "edu": 68,
            "culture": 52,
            "social": 75,
            "econ": 55
        },
        "details": {
            "taxis": 35,
            "hospitalBeds": 10,
            "bacSuccess": 61.5,
            "waterAccess": 82,
            "roadStatus": "Good"
        },
        "finances": {
            "budgetTotal": 280,
            "recettesFiscales": 110,
            "depensesFonctionnement": 200,
            "depensesEquipement": 80,
            "tauxRecouvrement": 58
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 139,
                    "recettesFiscales": 80,
                    "depensesFonctionnement": 132,
                    "depensesEquipement": 31,
                    "details": {
                        "personnel": 68,
                        "services": 28,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 77,
                    "service": 55,
                    "safety": 77,
                    "health": 50,
                    "edu": 63,
                    "culture": 47,
                    "social": 70,
                    "econ": 50
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 209,
                    "recettesFiscales": 121,
                    "depensesFonctionnement": 199,
                    "depensesEquipement": 123,
                    "details": {
                        "personnel": 65,
                        "services": 42,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 77,
                    "service": 55,
                    "safety": 77,
                    "health": 50,
                    "edu": 63,
                    "culture": 47,
                    "social": 70,
                    "econ": 50
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 190,
                    "recettesFiscales": 110,
                    "depensesFonctionnement": 181,
                    "depensesEquipement": 87,
                    "details": {
                        "personnel": 65,
                        "services": 46,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 78,
                    "service": 56,
                    "safety": 78,
                    "health": 51,
                    "edu": 64,
                    "culture": 48,
                    "social": 71,
                    "econ": 51
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 156,
                    "recettesFiscales": 103,
                    "depensesFonctionnement": 148,
                    "depensesEquipement": 30,
                    "details": {
                        "personnel": 66,
                        "services": 42,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 81,
                    "service": 59,
                    "safety": 81,
                    "health": 54,
                    "edu": 67,
                    "culture": 51,
                    "social": 74,
                    "econ": 54
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 145,
                    "recettesFiscales": 80,
                    "depensesFonctionnement": 138,
                    "depensesEquipement": 29,
                    "details": {
                        "personnel": 65,
                        "services": 39,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 79,
                    "service": 57,
                    "safety": 79,
                    "health": 52,
                    "edu": 65,
                    "culture": 49,
                    "social": 72,
                    "econ": 52
                }
            }
        }
    },
    {
        "id": 35,
        "name": "Toudja",
        "daira": "El Kseur",
        "cluster": 6,
        "scores": {
            "env": 94,
            "service": 58,
            "safety": 85,
            "health": 52,
            "edu": 70,
            "culture": 65,
            "social": 78,
            "econ": 62
        },
        "details": {
            "taxis": 40,
            "hospitalBeds": 5,
            "bacSuccess": 62.8,
            "waterAccess": 78,
            "roadStatus": "Average"
        },
        "finances": {
            "budgetTotal": 340,
            "recettesFiscales": 150,
            "depensesFonctionnement": 240,
            "depensesEquipement": 100,
            "tauxRecouvrement": 62
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 168,
                    "recettesFiscales": 97,
                    "depensesFonctionnement": 160,
                    "depensesEquipement": 37,
                    "details": {
                        "personnel": 82,
                        "services": 34,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 88,
                    "service": 52,
                    "safety": 79,
                    "health": 46,
                    "edu": 64,
                    "culture": 59,
                    "social": 72,
                    "econ": 56
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 254,
                    "recettesFiscales": 147,
                    "depensesFonctionnement": 241,
                    "depensesEquipement": 150,
                    "details": {
                        "personnel": 79,
                        "services": 51,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 89,
                    "service": 53,
                    "safety": 80,
                    "health": 47,
                    "edu": 65,
                    "culture": 60,
                    "social": 73,
                    "econ": 57
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 230,
                    "recettesFiscales": 133,
                    "depensesFonctionnement": 219,
                    "depensesEquipement": 106,
                    "details": {
                        "personnel": 78,
                        "services": 55,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 92,
                    "service": 56,
                    "safety": 83,
                    "health": 50,
                    "edu": 68,
                    "culture": 63,
                    "social": 76,
                    "econ": 60
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 189,
                    "recettesFiscales": 125,
                    "depensesFonctionnement": 180,
                    "depensesEquipement": 36,
                    "details": {
                        "personnel": 79,
                        "services": 51,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 90,
                    "service": 54,
                    "safety": 81,
                    "health": 48,
                    "edu": 66,
                    "culture": 61,
                    "social": 74,
                    "econ": 58
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 176,
                    "recettesFiscales": 97,
                    "depensesFonctionnement": 167,
                    "depensesEquipement": 35,
                    "details": {
                        "personnel": 79,
                        "services": 48,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 95,
                    "service": 59,
                    "safety": 86,
                    "health": 53,
                    "edu": 71,
                    "culture": 66,
                    "social": 79,
                    "econ": 63
                }
            }
        }
    },
    {
        "id": 36,
        "name": "Ighil Ali",
        "daira": "Ighil Ali",
        "cluster": 3,
        "scores": {
            "env": 85,
            "service": 52,
            "safety": 82,
            "health": 55,
            "edu": 72,
            "culture": 75,
            "social": 78,
            "econ": 48
        },
        "details": {
            "taxis": 35,
            "hospitalBeds": 15,
            "bacSuccess": 63.2,
            "waterAccess": 75,
            "roadStatus": "Average"
        },
        "finances": {
            "budgetTotal": 310,
            "recettesFiscales": 125,
            "depensesFonctionnement": 215,
            "depensesEquipement": 95,
            "tauxRecouvrement": 55
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 153,
                    "recettesFiscales": 89,
                    "depensesFonctionnement": 145,
                    "depensesEquipement": 34,
                    "details": {
                        "personnel": 75,
                        "services": 31,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 77,
                    "service": 44,
                    "safety": 74,
                    "health": 47,
                    "edu": 64,
                    "culture": 67,
                    "social": 70,
                    "econ": 40
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 231,
                    "recettesFiscales": 134,
                    "depensesFonctionnement": 219,
                    "depensesEquipement": 136,
                    "details": {
                        "personnel": 72,
                        "services": 46,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 79,
                    "service": 46,
                    "safety": 76,
                    "health": 49,
                    "edu": 66,
                    "culture": 69,
                    "social": 72,
                    "econ": 42
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 210,
                    "recettesFiscales": 121,
                    "depensesFonctionnement": 200,
                    "depensesEquipement": 97,
                    "details": {
                        "personnel": 71,
                        "services": 50,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 83,
                    "service": 50,
                    "safety": 80,
                    "health": 53,
                    "edu": 70,
                    "culture": 73,
                    "social": 76,
                    "econ": 46
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 172,
                    "recettesFiscales": 114,
                    "depensesFonctionnement": 163,
                    "depensesEquipement": 33,
                    "details": {
                        "personnel": 72,
                        "services": 46,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 83,
                    "service": 50,
                    "safety": 80,
                    "health": 53,
                    "edu": 70,
                    "culture": 73,
                    "social": 76,
                    "econ": 46
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 160,
                    "recettesFiscales": 88,
                    "depensesFonctionnement": 152,
                    "depensesEquipement": 32,
                    "details": {
                        "personnel": 72,
                        "services": 43,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 82,
                    "service": 49,
                    "safety": 79,
                    "health": 52,
                    "edu": 69,
                    "culture": 72,
                    "social": 75,
                    "econ": 45
                }
            }
        }
    },
    {
        "id": 37,
        "name": "Aït-R'zine",
        "daira": "Ighil Ali",
        "cluster": 4,
        "scores": {
            "env": 82,
            "service": 48,
            "safety": 85,
            "health": 45,
            "edu": 65,
            "culture": 58,
            "social": 72,
            "econ": 42
        },
        "details": {
            "taxis": 15,
            "hospitalBeds": 0,
            "bacSuccess": 55.4,
            "waterAccess": 68,
            "roadStatus": "Average"
        },
        "finances": {
            "budgetTotal": 180,
            "recettesFiscales": 45,
            "depensesFonctionnement": 140,
            "depensesEquipement": 40,
            "tauxRecouvrement": 38
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 89,
                    "recettesFiscales": 51,
                    "depensesFonctionnement": 85,
                    "depensesEquipement": 20,
                    "details": {
                        "personnel": 44,
                        "services": 18,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 74,
                    "service": 40,
                    "safety": 77,
                    "health": 37,
                    "edu": 57,
                    "culture": 50,
                    "social": 64,
                    "econ": 34
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 134,
                    "recettesFiscales": 78,
                    "depensesFonctionnement": 127,
                    "depensesEquipement": 79,
                    "details": {
                        "personnel": 42,
                        "services": 27,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 76,
                    "service": 42,
                    "safety": 79,
                    "health": 39,
                    "edu": 59,
                    "culture": 52,
                    "social": 66,
                    "econ": 36
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 122,
                    "recettesFiscales": 71,
                    "depensesFonctionnement": 116,
                    "depensesEquipement": 56,
                    "details": {
                        "personnel": 41,
                        "services": 29,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 79,
                    "service": 45,
                    "safety": 82,
                    "health": 42,
                    "edu": 62,
                    "culture": 55,
                    "social": 69,
                    "econ": 39
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 100,
                    "recettesFiscales": 66,
                    "depensesFonctionnement": 95,
                    "depensesEquipement": 19,
                    "details": {
                        "personnel": 42,
                        "services": 27,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 81,
                    "service": 47,
                    "safety": 84,
                    "health": 44,
                    "edu": 64,
                    "culture": 57,
                    "social": 71,
                    "econ": 41
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 93,
                    "recettesFiscales": 51,
                    "depensesFonctionnement": 88,
                    "depensesEquipement": 19,
                    "details": {
                        "personnel": 42,
                        "services": 25,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 83,
                    "service": 49,
                    "safety": 86,
                    "health": 46,
                    "edu": 66,
                    "culture": 59,
                    "social": 73,
                    "econ": 43
                }
            }
        }
    },
    {
        "id": 38,
        "name": "Ouzellaguen",
        "daira": "Ouzellaguen",
        "cluster": 1,
        "scores": {
            "env": 78,
            "service": 80,
            "safety": 78,
            "health": 75,
            "edu": 78,
            "culture": 65,
            "social": 78,
            "econ": 88
        },
        "details": {
            "taxis": 85,
            "hospitalBeds": 60,
            "bacSuccess": 68.5,
            "waterAccess": 90,
            "roadStatus": "Very Good"
        },
        "finances": {
            "budgetTotal": 850,
            "recettesFiscales": 610,
            "depensesFonctionnement": 500,
            "depensesEquipement": 350,
            "tauxRecouvrement": 85
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 421,
                    "recettesFiscales": 244,
                    "depensesFonctionnement": 400,
                    "depensesEquipement": 93,
                    "details": {
                        "personnel": 206,
                        "services": 84,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 71,
                    "service": 73,
                    "safety": 71,
                    "health": 68,
                    "edu": 71,
                    "culture": 58,
                    "social": 71,
                    "econ": 81
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 634,
                    "recettesFiscales": 367,
                    "depensesFonctionnement": 602,
                    "depensesEquipement": 374,
                    "details": {
                        "personnel": 197,
                        "services": 127,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 72,
                    "service": 74,
                    "safety": 72,
                    "health": 69,
                    "edu": 72,
                    "culture": 59,
                    "social": 72,
                    "econ": 82
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 576,
                    "recettesFiscales": 333,
                    "depensesFonctionnement": 547,
                    "depensesEquipement": 265,
                    "details": {
                        "personnel": 196,
                        "services": 138,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 73,
                    "service": 75,
                    "safety": 73,
                    "health": 70,
                    "edu": 73,
                    "culture": 60,
                    "social": 73,
                    "econ": 83
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 473,
                    "recettesFiscales": 314,
                    "depensesFonctionnement": 449,
                    "depensesEquipement": 90,
                    "details": {
                        "personnel": 199,
                        "services": 128,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 74,
                    "service": 76,
                    "safety": 74,
                    "health": 71,
                    "edu": 74,
                    "culture": 61,
                    "social": 74,
                    "econ": 84
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 440,
                    "recettesFiscales": 243,
                    "depensesFonctionnement": 418,
                    "depensesEquipement": 88,
                    "details": {
                        "personnel": 198,
                        "services": 119,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 75,
                    "service": 77,
                    "safety": 75,
                    "health": 72,
                    "edu": 75,
                    "culture": 62,
                    "social": 75,
                    "econ": 85
                }
            }
        }
    },
    {
        "id": 39,
        "name": "Amalou",
        "daira": "Seddouk",
        "cluster": 4,
        "scores": {
            "env": 85,
            "service": 55,
            "safety": 82,
            "health": 50,
            "edu": 70,
            "culture": 55,
            "social": 75,
            "econ": 52
        },
        "details": {
            "taxis": 28,
            "hospitalBeds": 10,
            "bacSuccess": 61.2,
            "waterAccess": 78,
            "roadStatus": "Average"
        },
        "finances": {
            "budgetTotal": 220,
            "recettesFiscales": 65,
            "depensesFonctionnement": 165,
            "depensesEquipement": 55,
            "tauxRecouvrement": 48
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 109,
                    "recettesFiscales": 63,
                    "depensesFonctionnement": 104,
                    "depensesEquipement": 24,
                    "details": {
                        "personnel": 53,
                        "services": 22,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 80,
                    "service": 50,
                    "safety": 77,
                    "health": 45,
                    "edu": 65,
                    "culture": 50,
                    "social": 70,
                    "econ": 47
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 164,
                    "recettesFiscales": 95,
                    "depensesFonctionnement": 156,
                    "depensesEquipement": 97,
                    "details": {
                        "personnel": 51,
                        "services": 33,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 79,
                    "service": 49,
                    "safety": 76,
                    "health": 44,
                    "edu": 64,
                    "culture": 49,
                    "social": 69,
                    "econ": 46
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 149,
                    "recettesFiscales": 86,
                    "depensesFonctionnement": 142,
                    "depensesEquipement": 69,
                    "details": {
                        "personnel": 51,
                        "services": 36,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 80,
                    "service": 50,
                    "safety": 77,
                    "health": 45,
                    "edu": 65,
                    "culture": 50,
                    "social": 70,
                    "econ": 47
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 122,
                    "recettesFiscales": 81,
                    "depensesFonctionnement": 116,
                    "depensesEquipement": 23,
                    "details": {
                        "personnel": 51,
                        "services": 33,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 83,
                    "service": 53,
                    "safety": 80,
                    "health": 48,
                    "edu": 68,
                    "culture": 53,
                    "social": 73,
                    "econ": 50
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 114,
                    "recettesFiscales": 63,
                    "depensesFonctionnement": 108,
                    "depensesEquipement": 23,
                    "details": {
                        "personnel": 51,
                        "services": 31,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 86,
                    "service": 56,
                    "safety": 83,
                    "health": 51,
                    "edu": 71,
                    "culture": 56,
                    "social": 76,
                    "econ": 53
                }
            }
        }
    },
    {
        "id": 40,
        "name": "M'cisna",
        "daira": "Seddouk",
        "cluster": 4,
        "scores": {
            "env": 88,
            "service": 52,
            "safety": 85,
            "health": 48,
            "edu": 68,
            "culture": 52,
            "social": 72,
            "econ": 48
        },
        "details": {
            "taxis": 22,
            "hospitalBeds": 5,
            "bacSuccess": 58.8,
            "waterAccess": 72,
            "roadStatus": "Average"
        },
        "finances": {
            "budgetTotal": 190,
            "recettesFiscales": 48,
            "depensesFonctionnement": 145,
            "depensesEquipement": 45,
            "tauxRecouvrement": 42
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 94,
                    "recettesFiscales": 54,
                    "depensesFonctionnement": 89,
                    "depensesEquipement": 21,
                    "details": {
                        "personnel": 46,
                        "services": 19,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 84,
                    "service": 48,
                    "safety": 81,
                    "health": 44,
                    "edu": 64,
                    "culture": 48,
                    "social": 68,
                    "econ": 44
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 142,
                    "recettesFiscales": 82,
                    "depensesFonctionnement": 135,
                    "depensesEquipement": 84,
                    "details": {
                        "personnel": 44,
                        "services": 28,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 82,
                    "service": 46,
                    "safety": 79,
                    "health": 42,
                    "edu": 62,
                    "culture": 46,
                    "social": 66,
                    "econ": 42
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 129,
                    "recettesFiscales": 75,
                    "depensesFonctionnement": 135,
                    "depensesEquipement": 59,
                    "details": {
                        "personnel": 44,
                        "services": 31,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": true
                    }
                },
                "scores": {
                    "env": 84,
                    "service": 48,
                    "safety": 81,
                    "health": 44,
                    "edu": 64,
                    "culture": 48,
                    "social": 68,
                    "econ": 44
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 106,
                    "recettesFiscales": 70,
                    "depensesFonctionnement": 101,
                    "depensesEquipement": 20,
                    "details": {
                        "personnel": 45,
                        "services": 29,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 87,
                    "service": 51,
                    "safety": 84,
                    "health": 47,
                    "edu": 67,
                    "culture": 51,
                    "social": 71,
                    "econ": 47
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 98,
                    "recettesFiscales": 54,
                    "depensesFonctionnement": 93,
                    "depensesEquipement": 20,
                    "details": {
                        "personnel": 44,
                        "services": 26,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 85,
                    "service": 49,
                    "safety": 82,
                    "health": 45,
                    "edu": 65,
                    "culture": 49,
                    "social": 69,
                    "econ": 45
                }
            }
        }
    },
    {
        "id": 41,
        "name": "Bouhamza",
        "daira": "Seddouk",
        "cluster": 4,
        "scores": {
            "env": 92,
            "service": 45,
            "safety": 82,
            "health": 45,
            "edu": 65,
            "culture": 48,
            "social": 70,
            "econ": 45
        },
        "details": {
            "taxis": 15,
            "hospitalBeds": 0,
            "bacSuccess": 55.1,
            "waterAccess": 65,
            "roadStatus": "Challenging"
        },
        "finances": {
            "budgetTotal": 160,
            "recettesFiscales": 35,
            "depensesFonctionnement": 130,
            "depensesEquipement": 30,
            "tauxRecouvrement": 35
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 79,
                    "recettesFiscales": 46,
                    "depensesFonctionnement": 75,
                    "depensesEquipement": 17,
                    "details": {
                        "personnel": 39,
                        "services": 16,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 87,
                    "service": 40,
                    "safety": 77,
                    "health": 40,
                    "edu": 60,
                    "culture": 43,
                    "social": 65,
                    "econ": 40
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 119,
                    "recettesFiscales": 69,
                    "depensesFonctionnement": 113,
                    "depensesEquipement": 70,
                    "details": {
                        "personnel": 37,
                        "services": 24,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 86,
                    "service": 39,
                    "safety": 76,
                    "health": 39,
                    "edu": 59,
                    "culture": 42,
                    "social": 64,
                    "econ": 39
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 108,
                    "recettesFiscales": 62,
                    "depensesFonctionnement": 103,
                    "depensesEquipement": 50,
                    "details": {
                        "personnel": 37,
                        "services": 26,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 90,
                    "service": 43,
                    "safety": 80,
                    "health": 43,
                    "edu": 63,
                    "culture": 46,
                    "social": 68,
                    "econ": 43
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 89,
                    "recettesFiscales": 59,
                    "depensesFonctionnement": 85,
                    "depensesEquipement": 17,
                    "details": {
                        "personnel": 37,
                        "services": 24,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 88,
                    "service": 41,
                    "safety": 78,
                    "health": 41,
                    "edu": 61,
                    "culture": 44,
                    "social": 66,
                    "econ": 41
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 83,
                    "recettesFiscales": 46,
                    "depensesFonctionnement": 79,
                    "depensesEquipement": 17,
                    "details": {
                        "personnel": 37,
                        "services": 22,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 93,
                    "service": 46,
                    "safety": 83,
                    "health": 46,
                    "edu": 66,
                    "culture": 49,
                    "social": 71,
                    "econ": 46
                }
            }
        }
    },
    {
        "id": 42,
        "name": "Seddouk",
        "daira": "Seddouk",
        "cluster": 2,
        "scores": {
            "env": 75,
            "service": 72,
            "safety": 78,
            "health": 70,
            "edu": 75,
            "culture": 65,
            "social": 82,
            "econ": 75
        },
        "details": {
            "taxis": 95,
            "hospitalBeds": 100,
            "bacSuccess": 67.2,
            "waterAccess": 92,
            "roadStatus": "Good"
        },
        "finances": {
            "budgetTotal": 680,
            "recettesFiscales": 420,
            "depensesFonctionnement": 410,
            "depensesEquipement": 270,
            "tauxRecouvrement": 75
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 337,
                    "recettesFiscales": 195,
                    "depensesFonctionnement": 320,
                    "depensesEquipement": 74,
                    "details": {
                        "personnel": 165,
                        "services": 67,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 69,
                    "service": 66,
                    "safety": 72,
                    "health": 64,
                    "edu": 69,
                    "culture": 59,
                    "social": 76,
                    "econ": 69
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 507,
                    "recettesFiscales": 293,
                    "depensesFonctionnement": 482,
                    "depensesEquipement": 299,
                    "details": {
                        "personnel": 157,
                        "services": 101,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 69,
                    "service": 66,
                    "safety": 72,
                    "health": 64,
                    "edu": 69,
                    "culture": 59,
                    "social": 76,
                    "econ": 69
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 461,
                    "recettesFiscales": 267,
                    "depensesFonctionnement": 438,
                    "depensesEquipement": 212,
                    "details": {
                        "personnel": 157,
                        "services": 111,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 73,
                    "service": 70,
                    "safety": 76,
                    "health": 68,
                    "edu": 73,
                    "culture": 63,
                    "social": 80,
                    "econ": 73
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 378,
                    "recettesFiscales": 251,
                    "depensesFonctionnement": 359,
                    "depensesEquipement": 72,
                    "details": {
                        "personnel": 159,
                        "services": 102,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 73,
                    "service": 70,
                    "safety": 76,
                    "health": 68,
                    "edu": 73,
                    "culture": 63,
                    "social": 80,
                    "econ": 73
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 352,
                    "recettesFiscales": 194,
                    "depensesFonctionnement": 334,
                    "depensesEquipement": 70,
                    "details": {
                        "personnel": 158,
                        "services": 95,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 72,
                    "service": 69,
                    "safety": 75,
                    "health": 67,
                    "edu": 72,
                    "culture": 62,
                    "social": 79,
                    "econ": 72
                }
            }
        }
    },
    {
        "id": 43,
        "name": "Melbou",
        "daira": "Souk El-Ténine",
        "cluster": 6,
        "scores": {
            "env": 92,
            "service": 65,
            "safety": 80,
            "health": 60,
            "edu": 72,
            "culture": 75,
            "social": 85,
            "econ": 78
        },
        "details": {
            "taxis": 65,
            "hospitalBeds": 30,
            "bacSuccess": 65.8,
            "waterAccess": 88,
            "roadStatus": "Good"
        },
        "finances": {
            "budgetTotal": 450,
            "recettesFiscales": 220,
            "depensesFonctionnement": 300,
            "depensesEquipement": 150,
            "tauxRecouvrement": 68
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 223,
                    "recettesFiscales": 129,
                    "depensesFonctionnement": 212,
                    "depensesEquipement": 49,
                    "details": {
                        "personnel": 109,
                        "services": 45,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 84,
                    "service": 57,
                    "safety": 72,
                    "health": 52,
                    "edu": 64,
                    "culture": 67,
                    "social": 77,
                    "econ": 70
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 336,
                    "recettesFiscales": 194,
                    "depensesFonctionnement": 319,
                    "depensesEquipement": 198,
                    "details": {
                        "personnel": 104,
                        "services": 67,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 85,
                    "service": 58,
                    "safety": 73,
                    "health": 53,
                    "edu": 65,
                    "culture": 68,
                    "social": 78,
                    "econ": 71
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 305,
                    "recettesFiscales": 176,
                    "depensesFonctionnement": 290,
                    "depensesEquipement": 140,
                    "details": {
                        "personnel": 104,
                        "services": 73,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 88,
                    "service": 61,
                    "safety": 76,
                    "health": 56,
                    "edu": 68,
                    "culture": 71,
                    "social": 81,
                    "econ": 74
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 250,
                    "recettesFiscales": 166,
                    "depensesFonctionnement": 238,
                    "depensesEquipement": 48,
                    "details": {
                        "personnel": 105,
                        "services": 68,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 91,
                    "service": 64,
                    "safety": 79,
                    "health": 59,
                    "edu": 71,
                    "culture": 74,
                    "social": 84,
                    "econ": 77
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 233,
                    "recettesFiscales": 129,
                    "depensesFonctionnement": 221,
                    "depensesEquipement": 47,
                    "details": {
                        "personnel": 105,
                        "services": 63,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 93,
                    "service": 66,
                    "safety": 81,
                    "health": 61,
                    "edu": 73,
                    "culture": 76,
                    "social": 86,
                    "econ": 79
                }
            }
        }
    },
    {
        "id": 44,
        "name": "Souk El Ténine",
        "daira": "Souk El-Ténine",
        "cluster": 6,
        "scores": {
            "env": 85,
            "service": 75,
            "safety": 78,
            "health": 68,
            "edu": 78,
            "culture": 70,
            "social": 82,
            "econ": 85
        },
        "details": {
            "taxis": 120,
            "hospitalBeds": 40,
            "bacSuccess": 69.1,
            "waterAccess": 95,
            "roadStatus": "Very Good"
        },
        "finances": {
            "budgetTotal": 720,
            "recettesFiscales": 480,
            "depensesFonctionnement": 450,
            "depensesEquipement": 270,
            "tauxRecouvrement": 80
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 356,
                    "recettesFiscales": 206,
                    "depensesFonctionnement": 338,
                    "depensesEquipement": 78,
                    "details": {
                        "personnel": 174,
                        "services": 71,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 77,
                    "service": 67,
                    "safety": 70,
                    "health": 60,
                    "edu": 70,
                    "culture": 62,
                    "social": 74,
                    "econ": 77
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 537,
                    "recettesFiscales": 311,
                    "depensesFonctionnement": 510,
                    "depensesEquipement": 317,
                    "details": {
                        "personnel": 166,
                        "services": 107,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 78,
                    "service": 68,
                    "safety": 71,
                    "health": 61,
                    "edu": 71,
                    "culture": 63,
                    "social": 75,
                    "econ": 78
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 488,
                    "recettesFiscales": 282,
                    "depensesFonctionnement": 464,
                    "depensesEquipement": 224,
                    "details": {
                        "personnel": 166,
                        "services": 117,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 80,
                    "service": 70,
                    "safety": 73,
                    "health": 63,
                    "edu": 73,
                    "culture": 65,
                    "social": 77,
                    "econ": 80
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 400,
                    "recettesFiscales": 265,
                    "depensesFonctionnement": 380,
                    "depensesEquipement": 76,
                    "details": {
                        "personnel": 168,
                        "services": 108,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 81,
                    "service": 71,
                    "safety": 74,
                    "health": 64,
                    "edu": 74,
                    "culture": 66,
                    "social": 78,
                    "econ": 81
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 373,
                    "recettesFiscales": 206,
                    "depensesFonctionnement": 354,
                    "depensesEquipement": 75,
                    "details": {
                        "personnel": 168,
                        "services": 101,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 82,
                    "service": 72,
                    "safety": 75,
                    "health": 65,
                    "edu": 75,
                    "culture": 67,
                    "social": 79,
                    "econ": 82
                }
            }
        }
    },
    {
        "id": 45,
        "name": "Tamridjet",
        "daira": "Souk El-Ténine",
        "cluster": 3,
        "scores": {
            "env": 90,
            "service": 52,
            "safety": 85,
            "health": 48,
            "edu": 65,
            "culture": 52,
            "social": 75,
            "econ": 50
        },
        "details": {
            "taxis": 25,
            "hospitalBeds": 0,
            "bacSuccess": 57.2,
            "waterAccess": 72,
            "roadStatus": "Average"
        },
        "finances": {
            "budgetTotal": 180,
            "recettesFiscales": 45,
            "depensesFonctionnement": 140,
            "depensesEquipement": 40,
            "tauxRecouvrement": 40
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 89,
                    "recettesFiscales": 51,
                    "depensesFonctionnement": 85,
                    "depensesEquipement": 20,
                    "details": {
                        "personnel": 44,
                        "services": 18,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 84,
                    "service": 46,
                    "safety": 79,
                    "health": 42,
                    "edu": 59,
                    "culture": 46,
                    "social": 69,
                    "econ": 44
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 134,
                    "recettesFiscales": 78,
                    "depensesFonctionnement": 127,
                    "depensesEquipement": 79,
                    "details": {
                        "personnel": 42,
                        "services": 27,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 83,
                    "service": 45,
                    "safety": 78,
                    "health": 41,
                    "edu": 58,
                    "culture": 45,
                    "social": 68,
                    "econ": 43
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 122,
                    "recettesFiscales": 71,
                    "depensesFonctionnement": 116,
                    "depensesEquipement": 56,
                    "details": {
                        "personnel": 41,
                        "services": 29,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 85,
                    "service": 47,
                    "safety": 80,
                    "health": 43,
                    "edu": 60,
                    "culture": 47,
                    "social": 70,
                    "econ": 45
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 100,
                    "recettesFiscales": 66,
                    "depensesFonctionnement": 95,
                    "depensesEquipement": 19,
                    "details": {
                        "personnel": 42,
                        "services": 27,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 88,
                    "service": 50,
                    "safety": 83,
                    "health": 46,
                    "edu": 63,
                    "culture": 50,
                    "social": 73,
                    "econ": 48
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 93,
                    "recettesFiscales": 51,
                    "depensesFonctionnement": 88,
                    "depensesEquipement": 19,
                    "details": {
                        "personnel": 42,
                        "services": 25,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 91,
                    "service": 53,
                    "safety": 86,
                    "health": 49,
                    "edu": 66,
                    "culture": 53,
                    "social": 76,
                    "econ": 51
                }
            }
        }
    },
    {
        "id": 46,
        "name": "Tazmalt",
        "daira": "Tazmalt",
        "cluster": 1,
        "scores": {
            "env": 72,
            "service": 82,
            "safety": 75,
            "health": 78,
            "edu": 80,
            "culture": 62,
            "social": 75,
            "econ": 90
        },
        "details": {
            "taxis": 140,
            "hospitalBeds": 150,
            "bacSuccess": 69.5,
            "waterAccess": 92,
            "roadStatus": "Very Good"
        },
        "finances": {
            "budgetTotal": 1200,
            "recettesFiscales": 920,
            "depensesFonctionnement": 700,
            "depensesEquipement": 500,
            "tauxRecouvrement": 88
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 594,
                    "recettesFiscales": 344,
                    "depensesFonctionnement": 564,
                    "depensesEquipement": 131,
                    "details": {
                        "personnel": 291,
                        "services": 119,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 67,
                    "service": 77,
                    "safety": 70,
                    "health": 73,
                    "edu": 75,
                    "culture": 57,
                    "social": 70,
                    "econ": 85
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 895,
                    "recettesFiscales": 518,
                    "depensesFonctionnement": 850,
                    "depensesEquipement": 528,
                    "details": {
                        "personnel": 277,
                        "services": 179,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 65,
                    "service": 75,
                    "safety": 68,
                    "health": 71,
                    "edu": 73,
                    "culture": 55,
                    "social": 68,
                    "econ": 83
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 813,
                    "recettesFiscales": 470,
                    "depensesFonctionnement": 772,
                    "depensesEquipement": 374,
                    "details": {
                        "personnel": 276,
                        "services": 195,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 69,
                    "service": 79,
                    "safety": 72,
                    "health": 75,
                    "edu": 77,
                    "culture": 59,
                    "social": 72,
                    "econ": 87
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 667,
                    "recettesFiscales": 442,
                    "depensesFonctionnement": 634,
                    "depensesEquipement": 127,
                    "details": {
                        "personnel": 280,
                        "services": 180,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 71,
                    "service": 81,
                    "safety": 74,
                    "health": 77,
                    "edu": 79,
                    "culture": 61,
                    "social": 74,
                    "econ": 89
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 621,
                    "recettesFiscales": 343,
                    "depensesFonctionnement": 590,
                    "depensesEquipement": 124,
                    "details": {
                        "personnel": 279,
                        "services": 168,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 69,
                    "service": 79,
                    "safety": 72,
                    "health": 75,
                    "edu": 77,
                    "culture": 59,
                    "social": 72,
                    "econ": 87
                }
            }
        }
    },
    {
        "id": 47,
        "name": "Beni Mellikeche",
        "daira": "Tazmalt",
        "cluster": 3,
        "scores": {
            "env": 88,
            "service": 50,
            "safety": 85,
            "health": 45,
            "edu": 62,
            "culture": 45,
            "social": 78,
            "econ": 45
        },
        "details": {
            "taxis": 20,
            "hospitalBeds": 5,
            "bacSuccess": 56.4,
            "waterAccess": 68,
            "roadStatus": "Average"
        },
        "finances": {
            "budgetTotal": 170,
            "recettesFiscales": 40,
            "depensesFonctionnement": 135,
            "depensesEquipement": 35,
            "tauxRecouvrement": 38
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 84,
                    "recettesFiscales": 49,
                    "depensesFonctionnement": 80,
                    "depensesEquipement": 18,
                    "details": {
                        "personnel": 41,
                        "services": 17,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 84,
                    "service": 46,
                    "safety": 81,
                    "health": 41,
                    "edu": 58,
                    "culture": 41,
                    "social": 74,
                    "econ": 41
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 127,
                    "recettesFiscales": 73,
                    "depensesFonctionnement": 121,
                    "depensesEquipement": 75,
                    "details": {
                        "personnel": 39,
                        "services": 25,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 81,
                    "service": 43,
                    "safety": 78,
                    "health": 38,
                    "edu": 55,
                    "culture": 38,
                    "social": 71,
                    "econ": 38
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 115,
                    "recettesFiscales": 67,
                    "depensesFonctionnement": 109,
                    "depensesEquipement": 53,
                    "details": {
                        "personnel": 39,
                        "services": 28,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 86,
                    "service": 48,
                    "safety": 83,
                    "health": 43,
                    "edu": 60,
                    "culture": 43,
                    "social": 76,
                    "econ": 43
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 95,
                    "recettesFiscales": 63,
                    "depensesFonctionnement": 100,
                    "depensesEquipement": 18,
                    "details": {
                        "personnel": 40,
                        "services": 26,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": true
                    }
                },
                "scores": {
                    "env": 84,
                    "service": 46,
                    "safety": 81,
                    "health": 41,
                    "edu": 58,
                    "culture": 41,
                    "social": 74,
                    "econ": 41
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 88,
                    "recettesFiscales": 49,
                    "depensesFonctionnement": 84,
                    "depensesEquipement": 18,
                    "details": {
                        "personnel": 40,
                        "services": 24,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 89,
                    "service": 51,
                    "safety": 86,
                    "health": 46,
                    "edu": 63,
                    "culture": 46,
                    "social": 79,
                    "econ": 46
                }
            }
        }
    },
    {
        "id": 48,
        "name": "Boudjellil",
        "daira": "Tazmalt",
        "cluster": 4,
        "scores": {
            "env": 82,
            "service": 58,
            "safety": 80,
            "health": 52,
            "edu": 68,
            "culture": 50,
            "social": 72,
            "econ": 55
        },
        "details": {
            "taxis": 45,
            "hospitalBeds": 10,
            "bacSuccess": 60.8,
            "waterAccess": 78,
            "roadStatus": "Average"
        },
        "finances": {
            "budgetTotal": 290,
            "recettesFiscales": 110,
            "depensesFonctionnement": 210,
            "depensesEquipement": 80,
            "tauxRecouvrement": 58
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 144,
                    "recettesFiscales": 83,
                    "depensesFonctionnement": 137,
                    "depensesEquipement": 32,
                    "details": {
                        "personnel": 71,
                        "services": 29,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 77,
                    "service": 53,
                    "safety": 75,
                    "health": 47,
                    "edu": 63,
                    "culture": 45,
                    "social": 67,
                    "econ": 50
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 216,
                    "recettesFiscales": 125,
                    "depensesFonctionnement": 205,
                    "depensesEquipement": 127,
                    "details": {
                        "personnel": 67,
                        "services": 43,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 75,
                    "service": 51,
                    "safety": 73,
                    "health": 45,
                    "edu": 61,
                    "culture": 43,
                    "social": 65,
                    "econ": 48
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 197,
                    "recettesFiscales": 114,
                    "depensesFonctionnement": 187,
                    "depensesEquipement": 91,
                    "details": {
                        "personnel": 67,
                        "services": 47,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 80,
                    "service": 56,
                    "safety": 78,
                    "health": 50,
                    "edu": 66,
                    "culture": 48,
                    "social": 70,
                    "econ": 53
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 161,
                    "recettesFiscales": 107,
                    "depensesFonctionnement": 153,
                    "depensesEquipement": 31,
                    "details": {
                        "personnel": 68,
                        "services": 43,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 80,
                    "service": 56,
                    "safety": 78,
                    "health": 50,
                    "edu": 66,
                    "culture": 48,
                    "social": 70,
                    "econ": 53
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 150,
                    "recettesFiscales": 83,
                    "depensesFonctionnement": 143,
                    "depensesEquipement": 30,
                    "details": {
                        "personnel": 68,
                        "services": 41,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 79,
                    "service": 55,
                    "safety": 77,
                    "health": 49,
                    "edu": 65,
                    "culture": 47,
                    "social": 69,
                    "econ": 52
                }
            }
        }
    },
    {
        "id": 49,
        "name": "Boukhelifa",
        "daira": "Tichy",
        "cluster": 6,
        "scores": {
            "env": 88,
            "service": 62,
            "safety": 82,
            "health": 58,
            "edu": 70,
            "culture": 65,
            "social": 78,
            "econ": 70
        },
        "details": {
            "taxis": 55,
            "hospitalBeds": 20,
            "bacSuccess": 64.2,
            "waterAccess": 85,
            "roadStatus": "Good"
        },
        "finances": {
            "budgetTotal": 380,
            "recettesFiscales": 160,
            "depensesFonctionnement": 260,
            "depensesEquipement": 120,
            "tauxRecouvrement": 65
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 188,
                    "recettesFiscales": 109,
                    "depensesFonctionnement": 179,
                    "depensesEquipement": 41,
                    "details": {
                        "personnel": 92,
                        "services": 38,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 82,
                    "service": 56,
                    "safety": 76,
                    "health": 52,
                    "edu": 64,
                    "culture": 59,
                    "social": 72,
                    "econ": 64
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 283,
                    "recettesFiscales": 164,
                    "depensesFonctionnement": 269,
                    "depensesEquipement": 167,
                    "details": {
                        "personnel": 88,
                        "services": 57,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 81,
                    "service": 55,
                    "safety": 75,
                    "health": 51,
                    "edu": 63,
                    "culture": 58,
                    "social": 71,
                    "econ": 63
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 258,
                    "recettesFiscales": 149,
                    "depensesFonctionnement": 245,
                    "depensesEquipement": 119,
                    "details": {
                        "personnel": 88,
                        "services": 62,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 84,
                    "service": 58,
                    "safety": 78,
                    "health": 54,
                    "edu": 66,
                    "culture": 61,
                    "social": 74,
                    "econ": 66
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 211,
                    "recettesFiscales": 140,
                    "depensesFonctionnement": 200,
                    "depensesEquipement": 40,
                    "details": {
                        "personnel": 89,
                        "services": 57,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 87,
                    "service": 61,
                    "safety": 81,
                    "health": 57,
                    "edu": 69,
                    "culture": 64,
                    "social": 77,
                    "econ": 69
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 197,
                    "recettesFiscales": 109,
                    "depensesFonctionnement": 187,
                    "depensesEquipement": 39,
                    "details": {
                        "personnel": 89,
                        "services": 53,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 88,
                    "service": 62,
                    "safety": 82,
                    "health": 58,
                    "edu": 70,
                    "culture": 65,
                    "social": 78,
                    "econ": 70
                }
            }
        }
    },
    {
        "id": 50,
        "name": "Tichy",
        "daira": "Tichy",
        "cluster": 6,
        "scores": {
            "env": 80,
            "service": 75,
            "safety": 78,
            "health": 75,
            "edu": 80,
            "culture": 85,
            "social": 85,
            "econ": 82
        },
        "details": {
            "taxis": 150,
            "hospitalBeds": 80,
            "bacSuccess": 70.2,
            "waterAccess": 95,
            "roadStatus": "Excellent"
        },
        "finances": {
            "budgetTotal": 820,
            "recettesFiscales": 580,
            "depensesFonctionnement": 520,
            "depensesEquipement": 300,
            "tauxRecouvrement": 85
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 406,
                    "recettesFiscales": 235,
                    "depensesFonctionnement": 386,
                    "depensesEquipement": 89,
                    "details": {
                        "personnel": 199,
                        "services": 81,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 72,
                    "service": 67,
                    "safety": 70,
                    "health": 67,
                    "edu": 72,
                    "culture": 77,
                    "social": 77,
                    "econ": 74
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 611,
                    "recettesFiscales": 353,
                    "depensesFonctionnement": 580,
                    "depensesEquipement": 360,
                    "details": {
                        "personnel": 189,
                        "services": 122,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 73,
                    "service": 68,
                    "safety": 71,
                    "health": 68,
                    "edu": 73,
                    "culture": 78,
                    "social": 78,
                    "econ": 75
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 556,
                    "recettesFiscales": 322,
                    "depensesFonctionnement": 528,
                    "depensesEquipement": 256,
                    "details": {
                        "personnel": 189,
                        "services": 133,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 74,
                    "service": 69,
                    "safety": 72,
                    "health": 69,
                    "edu": 74,
                    "culture": 79,
                    "social": 79,
                    "econ": 76
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 456,
                    "recettesFiscales": 302,
                    "depensesFonctionnement": 433,
                    "depensesEquipement": 87,
                    "details": {
                        "personnel": 192,
                        "services": 123,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 76,
                    "service": 71,
                    "safety": 74,
                    "health": 71,
                    "edu": 76,
                    "culture": 81,
                    "social": 81,
                    "econ": 78
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 424,
                    "recettesFiscales": 234,
                    "depensesFonctionnement": 445,
                    "depensesEquipement": 85,
                    "details": {
                        "personnel": 191,
                        "services": 114,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": true
                    }
                },
                "scores": {
                    "env": 77,
                    "service": 72,
                    "safety": 75,
                    "health": 72,
                    "edu": 77,
                    "culture": 82,
                    "social": 82,
                    "econ": 79
                }
            }
        }
    },
    {
        "id": 51,
        "name": "Tala Hamza",
        "daira": "Tichy",
        "cluster": 5,
        "scores": {
            "env": 78,
            "service": 72,
            "safety": 80,
            "health": 65,
            "edu": 75,
            "culture": 60,
            "social": 78,
            "econ": 75
        },
        "details": {
            "taxis": 60,
            "hospitalBeds": 30,
            "bacSuccess": 66.5,
            "waterAccess": 92,
            "roadStatus": "Very Good"
        },
        "finances": {
            "budgetTotal": 420,
            "recettesFiscales": 220,
            "depensesFonctionnement": 280,
            "depensesEquipement": 140,
            "tauxRecouvrement": 72
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 208,
                    "recettesFiscales": 120,
                    "depensesFonctionnement": 198,
                    "depensesEquipement": 46,
                    "details": {
                        "personnel": 102,
                        "services": 42,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 70,
                    "service": 64,
                    "safety": 72,
                    "health": 57,
                    "edu": 67,
                    "culture": 52,
                    "social": 70,
                    "econ": 67
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 313,
                    "recettesFiscales": 181,
                    "depensesFonctionnement": 297,
                    "depensesEquipement": 185,
                    "details": {
                        "personnel": 97,
                        "services": 63,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 71,
                    "service": 65,
                    "safety": 73,
                    "health": 58,
                    "edu": 68,
                    "culture": 53,
                    "social": 71,
                    "econ": 68
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 285,
                    "recettesFiscales": 165,
                    "depensesFonctionnement": 271,
                    "depensesEquipement": 131,
                    "details": {
                        "personnel": 97,
                        "services": 68,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 73,
                    "service": 67,
                    "safety": 75,
                    "health": 60,
                    "edu": 70,
                    "culture": 55,
                    "social": 73,
                    "econ": 70
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 234,
                    "recettesFiscales": 155,
                    "depensesFonctionnement": 222,
                    "depensesEquipement": 44,
                    "details": {
                        "personnel": 98,
                        "services": 63,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 76,
                    "service": 70,
                    "safety": 78,
                    "health": 63,
                    "edu": 73,
                    "culture": 58,
                    "social": 76,
                    "econ": 73
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 217,
                    "recettesFiscales": 120,
                    "depensesFonctionnement": 206,
                    "depensesEquipement": 43,
                    "details": {
                        "personnel": 98,
                        "services": 59,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 78,
                    "service": 72,
                    "safety": 80,
                    "health": 65,
                    "edu": 75,
                    "culture": 60,
                    "social": 78,
                    "econ": 75
                }
            }
        }
    },
    {
        "id": 52,
        "name": "Timezrit",
        "daira": "Timezrit",
        "cluster": 3,
        "scores": {
            "env": 82,
            "service": 70,
            "safety": 82,
            "health": 65,
            "edu": 78,
            "culture": 62,
            "social": 85,
            "econ": 68
        },
        "details": {
            "taxis": 75,
            "hospitalBeds": 40,
            "bacSuccess": 68.1,
            "waterAccess": 88,
            "roadStatus": "Good"
        },
        "finances": {
            "budgetTotal": 480,
            "recettesFiscales": 240,
            "depensesFonctionnement": 320,
            "depensesEquipement": 160,
            "tauxRecouvrement": 70
        },
        "history": {
            "2016": {
                "finances": {
                    "budgetTotal": 238,
                    "recettesFiscales": 138,
                    "depensesFonctionnement": 226,
                    "depensesEquipement": 52,
                    "details": {
                        "personnel": 117,
                        "services": 48,
                        "rigidité": 52,
                        "autonomie": 89,
                        "effortInvestissement": 22,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 76,
                    "service": 64,
                    "safety": 76,
                    "health": 59,
                    "edu": 72,
                    "culture": 56,
                    "social": 79,
                    "econ": 62
                }
            },
            "2017": {
                "finances": {
                    "budgetTotal": 358,
                    "recettesFiscales": 207,
                    "depensesFonctionnement": 340,
                    "depensesEquipement": 211,
                    "details": {
                        "personnel": 111,
                        "services": 72,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 59,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 75,
                    "service": 63,
                    "safety": 75,
                    "health": 58,
                    "edu": 71,
                    "culture": 55,
                    "social": 78,
                    "econ": 61
                }
            },
            "2018": {
                "finances": {
                    "budgetTotal": 325,
                    "recettesFiscales": 188,
                    "depensesFonctionnement": 341,
                    "depensesEquipement": 150,
                    "details": {
                        "personnel": 111,
                        "services": 78,
                        "rigidité": 43,
                        "autonomie": 89,
                        "effortInvestissement": 46,
                        "deficit": true
                    }
                },
                "scores": {
                    "env": 79,
                    "service": 67,
                    "safety": 79,
                    "health": 62,
                    "edu": 75,
                    "culture": 59,
                    "social": 82,
                    "econ": 65
                }
            },
            "2019": {
                "finances": {
                    "budgetTotal": 267,
                    "recettesFiscales": 177,
                    "depensesFonctionnement": 254,
                    "depensesEquipement": 51,
                    "details": {
                        "personnel": 112,
                        "services": 72,
                        "rigidité": 40,
                        "autonomie": 102,
                        "effortInvestissement": 19,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 81,
                    "service": 69,
                    "safety": 81,
                    "health": 64,
                    "edu": 77,
                    "culture": 61,
                    "social": 84,
                    "econ": 67
                }
            },
            "2020": {
                "finances": {
                    "budgetTotal": 248,
                    "recettesFiscales": 137,
                    "depensesFonctionnement": 236,
                    "depensesEquipement": 50,
                    "details": {
                        "personnel": 112,
                        "services": 67,
                        "rigidité": 45,
                        "autonomie": 85,
                        "effortInvestissement": 20,
                        "deficit": false
                    }
                },
                "scores": {
                    "env": 79,
                    "service": 67,
                    "safety": 79,
                    "health": 62,
                    "edu": 75,
                    "culture": 59,
                    "social": 82,
                    "econ": 65
                }
            }
        }
    }
];

export const clusters = [
    {
        "id": 1,
        "name": "Pôles Urbains et Industriels",
        "description": "Haute performance économique. Stratégie : Consolidation et optimisation des infrastructures."
    },
    {
        "id": 2,
        "name": "Centres de Services Intermédiaires",
        "description": "Couverture de base stable. Stratégie : Renforcement de la qualité de service et diversification."
    },
    {
        "id": 3,
        "name": "Zones de Montagne Résilientes",
        "description": "Fort potentiel écologique. Stratégie : Désenclavement et tourisme durable."
    },
    {
        "id": 4,
        "name": "Communes Rurales en Développement",
        "description": "Besoin d'investissements. Stratégie : Plan d'urgence pour les infrastructures de base."
    },
    {
        "id": 5,
        "name": "Zones en Mutation Spatiale",
        "description": "Pressions démographiques. Stratégie : Maîtrise de l'urbanisation et services de proximité."
    },
    {
        "id": 6,
        "name": "Zones à Potentiel et Risques Spécifiques",
        "description": "Communes comme Amizour et Draâ El-Kaïd. Stratégie : Investissement différencié et gestion des risques prioritaires."
    }
];
