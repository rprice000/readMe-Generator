// List of License: https://opensource.org/licenses/category
// Badge Creation: https://shields.io/


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license==="Academic Free License") {
    return "![License](https://img.shields.io/badge/License-Academic%20Free%20License-blue.svg)"
  } 
  else if (license==="Apache License") {
    return "![License](https://img.shields.io/badge/License-Apache%20License-blue.svg)"
  }
   else if (license==="Artistic License") {
    return "![License](https://img.shields.io/badge/License-Artistic%20License-blue.svg)"
  }
   else if (license==="BSD 2-Clause License") {
    return "![License](https://img.shields.io/badge/License-BSD%202%20Clause%20License-blue.svg)"
  }
   else if (license==="BSD 3-Clause License") {
    return "![License](https://img.shields.io/badge/License-BSD%203%20Clause%20License-blue.svg)"
  }
   else if (license==="Eclipse Public License") {
    return "![License](https://img.shields.io/badge/License-Eclipse%20Public%20License-blue.svg)"
  }
   else if (license==="ISC License") {
    return "![License](https://img.shields.io/badge/License-ISC%20License-blue.svg)"
  }
   else if (license==="MIT License") {
    return "![License](https://img.shields.io/badge/License-MIT%20License-blue.svg)"
  }
   else if (license==="Mozilla Public License") {
    return "![License](https://img.shields.io/badge/License-Mozilla%20Public%20License-blue.svg)"
  }
   else if (license==="Open Software License") {
    return "![License](https://img.shields.io/badge/License-Open%20Software%20License-blue.svg)"
  }
  else if (license==="None") {
    return ""
  }
  else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license==="Academic Free License"){
    return `https://opensource.org/licenses/AFL-3.0`
  }
   else if (license==="Apache License"){
    return `https://opensource.org/licenses/Apache-2.0`
  }
   else if (license==="Artistic License"){
    return `https://opensource.org/licenses/Artistic-2.0`
  }
   else if (license==="BSD 2-Clause License"){
    return `https://opensource.org/licenses/BSD-2-Clause`
  }
   else if (license==="BSD 3-Clause License"){
    return `https://opensource.org/licenses/BSD-3-Clause`
  }
   else if (license==="Eclipse Public License"){
    return `https://opensource.org/licenses/EPL-2.0`
  }
   else if (license==="ISC License"){
    return `https://opensource.org/licenses/ISC`
  }
   else if (license==="MIT License"){
    return `https://opensource.org/licenses/MIT`
  }
   else if (license==="Mozilla Public License"){
    return `https://opensource.org/licenses/MPL-2.0`
  }
   else if (license==="Open Software License"){
    return `https://opensource.org/licenses/OSL-3.0`
  }
  else if (license==="None"){
    return ``
  }
   else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license==="Academic Free License") {
    return `Academic Free License`
  }
   else if (license==="Apache License") {
    return `Apache License`
  }
   else if (license==="Artistic License"){
    return `Artistic License`
  }
   else if (license==="BSD 2-Clause License"){
    return `BSD 2-Clause License`
  }
   else if (license==="BSD 3-Clause License"){
    return `BSD 3-clause license`
  }
   else if (license==="Eclipse Public License"){
    return `EEclipse Public License`
  }
   else if (license==="ISC License"){
    return `ISC License`
  }
   else if (license==="MIT License"){
    return `MIT License`
  }
   else if (license==="Mozilla Public License"){
    return `Mozilla Public License`
  }
   else if (license==="Open Software License"){
    return `Open Software License`
  }
  else if (license==="None"){
    return ``
  }
   else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Badges
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Version](#version)
  - [Links](#links)
  - [License](#license)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.test}

  ## Version
  ${data.version}

  ## Links
  - ${data.repo}
  - ${data.deployed}

  ## License
  - For more license information please review the following licenses for this applicaiton and the corresponding links.
  ${renderLicenseSection(data.license)}: ${renderLicenseLink(data.license)}
  
  ### Questions:
  For more information please contact:
  - ${data.name}
  - https://github.com/${data.username}  
  - ${data.email}`;
}

module.exports = generateMarkdown;
