#!/usr/bin/env bash
# Push this folder to a new GitHub repository.
# Usage:  ./push-to-github.sh <github-username> [repo-name]
set -e
USER="${1:?usage: ./push-to-github.sh <github-username> [repo-name]}"
REPO="${2:-vaanartales}"

git init -b main
git add -A
git commit -m "Vaanar Tales site"
git remote add origin "https://github.com/$USER/$REPO.git"
git push -u origin main

cat <<EOF

Pushed to https://github.com/$USER/$REPO

Next, turn on GitHub Pages:
  Settings > Pages > Source: Deploy from a branch > main > / (root)
  Settings > Pages > Custom domain: vaanartales.ae   (the CNAME file already says so)

Then at your domain registrar add:
  A     vaanartales.ae   185.199.108.153
  A     vaanartales.ae   185.199.109.153
  A     vaanartales.ae   185.199.110.153
  A     vaanartales.ae   185.199.111.153
  CNAME www              $USER.github.io

Tick "Enforce HTTPS" once the certificate is issued (usually within the hour).
EOF
