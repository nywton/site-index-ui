#!/bin/bash -l

git push heroku master
git push origin master
firebase deploy

