const fs = require('fs');
const path = require('path');

const dairaData = [
  { "daira": "Adekar", "communes": ["Adekar", "Taourirt Ighil", "Beni Ksila"], "superficie": 363.10, "population": 24105 },
  { "daira": "Akbou", "communes": ["Akbou", "Chellata", "Ighram", "Tamokra"], "superficie": 212.29, "population": 78454 },
  { "daira": "Amizour", "communes": ["Amizour", "Beni Djellil", "Semaoun", "Ferraoun"], "superficie": 212.88, "population": 74455 },
  { "daira": "Aokas", "communes": ["Aokas", "Tizi N'Berber"], "superficie": 80.63, "population": 28613 },
  { "daira": "Barbacha", "communes": ["Barbacha", "Kendira"], "superficie": 129.33, "population": 22265 },
  { "daira": "Béjaïa", "communes": ["Béjaïa", "Oued Ghir"], "superficie": 168.15, "population": 197333 },
  { "daira": "Beni Maouche", "communes": ["Beni Maouche"], "superficie": 94.86, "population": 13412 },
  { "daira": "Chemini", "communes": ["Chemini", "Tibane", "Souk-Oufella", "Akfadou"], "superficie": 100.27, "population": 36766 },
  { "daira": "Darguina", "communes": ["Darguina", "Aït-Smail", "Taskriout"], "superficie": 140.67, "population": 32582 },
  { "daira": "El Kseur", "communes": ["El Kseur", "Fenaïa Ilmaten", "Toudja"], "superficie": 306.40, "population": 49496 },
  { "daira": "Ighil Ali", "communes": ["Ighil Ali", "Aït-R'zine"], "superficie": 269.93, "population": 24089 },
  { "daira": "Kherrata", "communes": ["Kherrata", "Draâ El-Kaïd"], "superficie": 217.85, "population": 81265 },
  { "daira": "Ouzellaguen", "communes": ["Ouzellaguen"], "superficie": 61.40, "population": 22719 },
  { "daira": "Seddouk", "communes": ["Amalou", "M'cisna", "Bouhamza", "Seddouk"], "superficie": 266.54, "population": 64296 },
  { "daira": "Sidi-Aïch", "communes": ["Sidi-Aïch", "Leflaye", "Tinabdher", "Tifra", "Sidi Ayad"], "superficie": 81.69, "population": 39839 },
  { "daira": "Souk El-Ténine", "communes": ["Melbou", "Souk El Ténine", "Tamridjet"], "superficie": 127.02, "population": 33854 },
  { "daira": "Tazmalt", "communes": ["Tazmalt", "Beni Mellikeche", "Boudjellil"], "superficie": 176.29, "population": 48874 },
  { "daira": "Tichy", "communes": ["Boukhelifa", "Tichy", "Tala Hamza"], "superficie": 211.87, "population": 36987 },
  { "daira": "Timezrit", "communes": ["Timezrit"], "superficie": 38.09, "population": 25853 }
];

const targetPath = path.join(__dirname, 'src/data/communeData.js');
let content = fs.readFileSync(targetPath, 'utf8');

if (!content.includes('export const dairaData')) {
    content += '\n\nexport const dairaData = ' + JSON.stringify(dairaData, null, 4) + ';\n';
    fs.writeFileSync(targetPath, content, 'utf8');
    console.log('Appended dairaData to communeData.js');
} else {
    console.log('dairaData already exists in communeData.js');
}
