#!/bin/bash -l

rm -rf node_modules/
rm -rf build/
yarn install
yarn build
git add .
git commit -a -m "Deploy"
git push heroku master
git push origin master

