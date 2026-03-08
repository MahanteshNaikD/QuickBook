#!/bin/bash
set -ex

npm install
npm run build

# Ensure dist directory exists
if [ ! -d "dist" ]; then
  echo "ERROR: dist directory not created after build!"
  exit 1
fi

echo "Build completed successfully"
ls -la dist/
