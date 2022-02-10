// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {


  //TODO: fuckin figure out the promise syntax cuz this shit confusing as hell
  new Promise ((resolve, reject) => {
    if (license != 'None') {
      resolve({
        ok: true,
        message: 'License found!'
      }
    )} else {
      reject({
        ok: false,
        message: 'No license found!',
      })
    } // pass license into renderLicenseLink
    }).then(license => {
      return renderLicenseLink(license)
    }) // pass license into renderLicenseSection
      .then(license => {
      return renderLicenseSection(license)})
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT': 
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'APACHE 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case 'GPL 3.0':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case 'BSD 3':
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(license);
  // return ``
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## ${data.description}

## Table of Contents



## ${data.install}

## ${data.usage}

## ${data.contributions}

`;
}





module.exports = {generateMarkdown};
