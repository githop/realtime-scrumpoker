#!/usr/bin/env bash
#build into dev public
gulp clean
gulp build
mkdir public/scrumPoker
cp -r client/scrumPoker/assets public/scrumPoker
#prep and copy to deploy
rm -rf ../deploy/public
cp -r public/ ../deploy/public

