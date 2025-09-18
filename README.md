# Açaí Roots - Static Deploy

This repository hosts the static files for the Açaí Roots web application and serves as the deployment target for GitHub Pages.

## Live Project
[🔗 Access the live site](https://val-cantarelli.github.io/acai_roots/)

## Purpose
This repository contains the built static assets (HTML, CSS, JS, images) for the Açaí Roots frontend. 
The source code for the frontend is maintained separately and published here automatically via CI/CD.

## Deployment Workflow
- The frontend is developed in [acai_roots_frontend](https://github.com/val-cantarelli/acai_roots_frontend).
- On each update, GitHub Actions builds the frontend and deploys the static files to this repository.
- The site is served publicly via GitHub Pages at the link above.

## Related Repositories
- [Frontend (Vue.js)](https://github.com/val-cantarelli/acai_roots_frontend)
- [Backend (Spring Boot)](https://github.com/val-cantarelli/acai_roots_backend)

## Note
Direct changes to files in this repository may be overwritten by automated deployments. For development or feature changes, use the frontend or backend repositories.
