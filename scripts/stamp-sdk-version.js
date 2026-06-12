#!/usr/bin/env node

const fs = require("fs");

const [clientFile, version] = process.argv.slice(2);

if (!clientFile || !version) {
    console.error("Usage: stamp-sdk-version.js <client-file> <version>");
    process.exit(1);
}

const stamps = [
    [/("X-Fern-SDK-Version": ")[^"]*(")/, "X-Fern-SDK-Version"],
    [/("User-Agent": "@basis-theory\/node-sdk\/)[^"]*(")/, "User-Agent"],
];

let content = fs.readFileSync(clientFile, "utf8");

for (const [pattern, label] of stamps) {
    if (!pattern.test(content)) {
        console.error(`ERROR: pattern not found for ${label} in ${clientFile}`);
        console.error("Fern may have changed the generated client; update scripts/stamp-sdk-version.js.");
        process.exit(1);
    }
    content = content.replace(pattern, `$1${version}$2`);
}

fs.writeFileSync(clientFile, content);
