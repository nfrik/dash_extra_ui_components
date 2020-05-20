#!/bin/bash
sudo rm -rf dist
cd
cd .virtualenvs/dash/lib/python3.6/site-packages
sudo rm -rf dash_extra_ui_components
cd 
cd Documents/Nikolay/dash_extra_ui_components
npm install
npm run build
npm run build:py_and_r
python3 setup.py sdist
pip install dist/dash_extra_ui_components-0.0.2.tar.gz