# Pathfinder Prototype

[![Continuous Deployment](https://github.com/ministryofjustice/pathfinder-prototype/actions/workflows/cd-main.yaml/badge.svg)](https://github.com/ministryofjustice/pathfinder-prototype/actions/workflows/cd-main.yaml)
[![repo standards badge](https://img.shields.io/badge/dynamic/json?color=blue&logo=github&label=MoJ%20Compliant&query=%24.data%5B%3F%28%40.name%20%3D%3D%20%22moj-prototype-template%22%29%5D.status&url=https%3A%2F%2Foperations-engineering-reports.cloud-platform.service.justice.gov.uk%2Fgithub_repositories)](https://operations-engineering-reports.cloud-platform.service.justice.gov.uk/github_repositories#moj-prototype-template "Link to report")

[![Runbook](https://img.shields.io/badge/runbook-view-172B4D.svg?logo=confluence)](https://dsdmoj.atlassian.net/wiki/spaces/PAT/overview)

[![JS](https://img.shields.io/badge/JavaScript-323330?style=flat&logo=javascript&logoColor=F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com)
[![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=Node.js&logoColor=fff)](https://nodejs.org/en/)
[![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=flat&logo=express)](https://expressjs.com/)
[![Jest](https://img.shields.io/badge/-Jest-C21325?style=postgres&logo=Jest&logoColor=fff)](https://jestjs.io/)
[![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?logo=ESLint&logoColor=fff)](https://eslint.org/)

[![AWS](https://img.shields.io/badge/-Amazon%20AWS-232F3E?logo=Amazonaws&logoColor=amazonorange)](https://aws.amazon.com/)
[![Docker](https://img.shields.io/badge/-Docker-000?logo=docker)](https://www.docker.com)
[![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=flat&logo=kubernetes&logoColor=white)](https://kubernetes.io/)

## Website

- [Website](https://pathfinder-prototype-main.apps.live.cloud-platform.service.justice.gov.uk/)

| | | |
|-|-|-|
| Username | *pf-prototype-user* | [config](https://github.com/ministryofjustice/cloud-platform-environments/blob/54fe832275dfa00610157cdeac6a70555ba643e5/namespaces/live.cloud-platform.service.justice.gov.uk/pathfinder-prototype/resources/variables.tf#L63) |
| Password | | *see config* | 


## Running Prototype locally

```
npm install
npm i -g gulp
gulp --tasks
gulp
```

this prototype uses the same moj patten of using node and gulp to run the projects, ideally for making changes the developer/designer should have a basic understand of node. Running the above commands will start the prototype on port 3000 by default. 

## Services

- [UI](https://github.com/ministryofjustice/pathfinder)
- [API](https://github.com/ministryofjustice/pathfinder-api)
- [Cloud Platform Environment](https://github.com/ministryofjustice/cloud-platform-environments/tree/main/namespaces/live.cloud-platform.service.justice.gov.uk/pathfinder-prototype)
