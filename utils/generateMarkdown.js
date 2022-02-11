// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

    const licensePromise = new Promise ((resolve, reject) => {
    if (license != 'None') {
      resolve({
        ok: true,
        message: 'License found!',
        foundLicense: license
      }
    )} else {
      reject({
        ok: false,
        message: 'No license found!',
        foundLicense: ''
      })
    } 
  })
    
    // pass license into renderLicenseLink
    licensePromise.then(promiseObj => {
      console.log("renderLicenseLink log: " + JSON.stringify(promiseObj.foundLicense))
      return renderLicenseLink(promiseObj.foundLicense)
    }) 
    // pass license into renderLicenseSection
      .then(licenseLink => {
      console.log("renderLicenseSection: " + licenseLink);
      return renderLicenseSection(licenseLink)
    })
    //   .then(licenseSection => {
    //   console.log("Final section markup: " + licenseSection);
    //   return licenseSection;
    // })
      // .catch(err => {
      //   console.log(err);
      // })
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT': 
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'APACHE 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL 3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD 3':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseLink) {
  return licenseLink;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

return `
# ${data.title}

<!--- expected outcome -->
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<!--- current outcome -->
${renderLicenseBadge(data.license)}

## ${data.description}

## Table of Contents

## ${data.install}

## ${data.usage}

## ${data.contributions}

`;
}

module.exports = {generateMarkdown};
