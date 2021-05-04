const Path = require('path');
const Fs = require('fs');
let jsonPath = Path.join(__dirname, 'package.json');
let jsonData = JSON.parse(Fs.readFileSync(jsonPath, 'utf8'));
jsonData.publish = true;
Fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2))
console.log('已经修改为Publish模式')
