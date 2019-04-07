#!/bin/bash -l

yarn build
git add .
git commit -a -m "Fix"
git push heroku master
git push origin master

