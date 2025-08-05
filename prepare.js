const fs = require('fs');
const libPackage = require('./package.json');

// remove not required fields
delete libPackage.devDependencies;

libPackage.publishConfig = {
  access: 'public',
}

fs.writeFileSync(
  './package.json',
  JSON.stringify(libPackage, undefined, 2)
);
