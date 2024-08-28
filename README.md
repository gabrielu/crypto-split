<a id="readme-top"></a>
<!--
*** Created from Best-README-Template: https://github.com/othneildrew/Best-README-Template
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="public/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Crypto Split</h3>

  <p align="center">
    A demonstration of Vite + Vue.js containerized for local development using Docker.
  </p>
</div>

![Screen Shot][product-screenshot]

**Built With**

* [![Docker][Docker]][Docker-url]
* [![Vite][Vite]][Vite-url] 
* [![Vue][Vue.js]][Vue-url]



---



<!-- TOC -->
  * [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Run Local Development Environment](#run-local-development-environment)
  * [TODO](#todo)
  * [Contact](#contact)
<!-- TOC -->



<!-- GETTING STARTED -->
## Getting Started

To get a copy of this project up and running locally for development, follow the steps below.

### Prerequisites

This project utilizes Docker in order to minimize dependencies, ensure consistency across environments, and help keep your system secure.

* Install [Docker](https://www.docker.com)

### Run Local Development Environment

Run the local development environment (Vite + Vue.js) within Docker following the instructions below.

1. Clone the repo
   ```sh
   git clone https://github.com/gabrielu/crypto-split.git
   ```
2. Change directory
    ```sh
    cd crypto-split
    ```
3. Start Vite serve via Docker
    ```sh
    docker compose up
    ```
4. Open browser to: http://localhost:5173

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- TODO -->
## TODO

- Must
  - [x] Setup Docker (containerize/secure environment from possible malicious NPM packages plus broader and more reliable for engineers with different OSes as well as consistencies with online servers)
  - [x] Create/Update README
  - [x] Import CSS framework
  - [x] Build UI form
  - [x] Request data from API; Proxy
  - [x] Add assignment calculations for UI ⚠️ JavaScript is notoriously bad with numbers/currency
- Should
  - [ ] Add API retry
  - [ ] Add API on fail UI
  - [ ] Setup code standards/consistency and enforcement thereof (e.g. .editorconfig, linting, prettify)
  - [ ] Make UI responsive
  - [ ] Improve accessibility
  - [ ] Add unsupported browser detection & page
  - [ ] Show table of existing crypto rates
- Want
  - [ ] Make PWA compatible
  - [ ] Optimize based on Google Chrome web optimizations
  - [ ] Optimize project for remote shared in-development review (helps with quick unexpected questions that arise and need instant design or product team review)
- Later
  - [ ] Setup Unit Testing (Jest)
  - [ ] Setup Mock API (Mirage; Great/Critical for testing)
  - [ ] Setup E2E Testing (Cypress)
  - [ ] Append documentation (e.g. JSDoc)
  - [ ] Add error logging
  - [ ] Environmental specific config files
  - [ ] Add performance metrics logging
  - [ ] VSCode plugin to simplify commands??
  - [ ] Create configuration to show site is updating while updates are being applied but allow for specific IP(s) access (e.g. internal office)
  - [ ] SEO??
  - [ ] Multi-currency support
  - [ ] Multi-language support

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Gabriel Urena - [gabrielu@gmail.com](mailto:gabrielu@gmail.com?subject=crypto-split)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Docker]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/gabe-urena/
[product-screenshot]: public/screenshot.png
[Vite]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
