const fs = require('fs');
const libPackage = require('./package.json');

libPackage.publishConfig = {
  access: 'public',
}

fs.writeFileSync(
  './package.json',
  JSON.stringify(libPackage, undefined, 2)
);
