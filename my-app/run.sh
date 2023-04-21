#!/bin/bash
#cd to the backend root
cd /BACKEND && python3 manage.py runserver &

#cd to the frontend root
cd /FRONTEND && npm start &