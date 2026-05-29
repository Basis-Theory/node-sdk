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
CLIENT_FILE="../src/Client.ts"
SDK_VERSION=$(node -p "require('../package.json').version")

# Fail closed on a non-semver version. SDK_VERSION is interpolated into the sed
# replacement below; restricting it to semver characters keeps sed metacharacters
# (#, &, \1) and GNU sed's `e` flag out of an OIDC-backed release job.
if [[ ! "$SDK_VERSION" =~ ^[0-9]+\.[0-9]+\.[0-9]+([-+][0-9A-Za-z.-]+)?$ ]]; then
  echo "ERROR: invalid SDK version '${SDK_VERSION}'; expected semver (e.g. 1.2.3)" >&2
  exit 1
fi

echo "Stamping SDK version ${SDK_VERSION} into src/Client.ts"

# Replace one header value, failing loudly if the expected pattern is absent.
# sed exits 0 even when nothing matches, so without this guard a Fern change to the
# generated header would silently publish the stale 0.0.1 placeholder.
stamp_header() {
  local pattern="$1"
  if ! grep -qE "$pattern" "$CLIENT_FILE"; then
    echo "ERROR: pattern not found in ${CLIENT_FILE}: ${pattern}" >&2
    echo "Fern may have changed the generated client; update scripts/build.sh." >&2
    exit 1
  fi
  sed -i -E "s#${pattern}#\1${SDK_VERSION}\2#" "$CLIENT_FILE"
}

stamp_header "(\"X-Fern-SDK-Version\": \")[^\"]*(\")"
stamp_header "(\"User-Agent\": \"@basis-theory/node-sdk/)[^\"]*(\")"

yarn build



cd "$current_directory"

node ./prepare.js