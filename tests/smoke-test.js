const fs = require('fs');
const html = fs.readFileSync('index.html','utf8');
const required = ['showTravelerDashboard','calculateTravelerCommission','exportBackup','seedDemoData','showAdminDashboard'];
for (const key of required) {
  if (!html.includes(key)) {
    console.error(`Missing ${key}`);
    process.exit(1);
  }
}
console.log('Smoke test passed.');
