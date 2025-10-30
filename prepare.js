const fs = require('fs');
const libPackage = require('./package.json');

// remove not required fields
delete libPackage.devDependencies;

// Preserve publishConfig if it already exists, otherwise set default
if (!libPackage.publishConfig) {
  libPackage.publishConfig = {
    access: 'public',
  }
}

fs.writeFileSync(
  './package.json',
  JSON.stringify(libPackage, undefined, 2)
);
