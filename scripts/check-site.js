const fs = require('node:fs');
const path = require('node:path');

const requiredFiles = ['index.html', 'styles.css'];
const missingFiles = requiredFiles.filter((file) => !fs.existsSync(path.join(process.cwd(), file)));

if (missingFiles.length > 0) {
  console.error(`Fichiers manquants: ${missingFiles.join(', ')}`);
  process.exit(1);
}

const html = fs.readFileSync('index.html', 'utf8');
const checks = [
  ['titre Sans Frontière', /<title>Sans Frontière \| Lavage auto mobile, moto et tapis<\/title>/],
  ['section services', /id="services"/],
  ['section galerie', /id="galerie"/],
  ['section contact', /id="contact"/],
  ['feuille de style', /href="styles\.css"/],
];

const failures = checks.filter(([, pattern]) => !pattern.test(html));

if (failures.length > 0) {
  console.error(`Contrôles échoués: ${failures.map(([name]) => name).join(', ')}`);
  process.exit(1);
}

console.log('Site statique Sans Frontière prêt à être servi.');
