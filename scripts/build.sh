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
CLIENT_FILE="../src/BaseClient.ts"
SDK_VERSION=$(node -p "require('../package.json').version")

# Fail closed on a non-semver version. SDK_VERSION is interpolated into the sed
# replacement below; restricting it to semver characters keeps sed metacharacters
# (#, &, \1) and GNU sed's `e` flag out of an OIDC-backed release job.
if [[ ! "$SDK_VERSION" =~ ^[0-9]+\.[0-9]+\.[0-9]+([-+][0-9A-Za-z.-]+)?$ ]]; then
  echo "ERROR: invalid SDK version '${SDK_VERSION}'; expected semver (e.g. 1.2.3)" >&2
  exit 1
fi

echo "Stamping SDK version ${SDK_VERSION} into ${CLIENT_FILE}"
node ./stamp-sdk-version.js "$CLIENT_FILE" "$SDK_VERSION"

yarn build

cd "$current_directory"

node ./prepare.js