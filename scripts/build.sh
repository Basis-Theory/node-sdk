#!/bin/bash
set -e

current_directory="$PWD"

cd $(dirname $0)

if [ "$SKIP_INSTALL" = true ] || [ "$SKIP_INSTALL" = 1 ]
then
  echo SKIP_INSTALL is set, skipping dependency installation...
else
  yarn install --frozen-lockfile
fi

# ENG-10837: injects the real package version into the Fern-generated client so the
# emitted headers match the published release instead of the 0.0.1 placeholder.
# Done here (build time) rather than in `Client.ts` so Fern can own it and keep
# tracking new API resources on regeneration.
SDK_VERSION=$(node -p "require('../package.json').version")
echo "Stamping SDK version ${SDK_VERSION} into src/Client.ts"
sed -i -E "s#(\"X-Fern-SDK-Version\": \")[^\"]*(\")#\1${SDK_VERSION}\2#" ../src/Client.ts
sed -i -E "s#(\"User-Agent\": \"@basis-theory/node-sdk/)[^\"]*(\")#\1${SDK_VERSION}\2#" ../src/Client.ts

yarn build



cd "$current_directory"

node ./prepare.js