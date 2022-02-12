// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch (license) {
    case 'MIT': 
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'APACHE 2.0':
      return'[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL 3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD 3':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case 'None':
      return '';
    default: 
      console.log("No license badge found!");
      return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  switch (license) {
    case 'MIT': 
      return '[MIT](https://opensource.org/licenses/MIT)';
    case 'APACHE 2.0':
      return'[APACHE 2.0](https://www.apache.org/licenses/LICENSE-2.0)';
    case 'GPL 3.0':
      return '[GPL 3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)';
    case 'BSD 3':
      return '[BSD 3.0](https://opensource.org/licenses/BSD-3-Clause)';
    case 'None':
      return '';
    default: 
      console.log("No license badge found!");
      return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license && license != 'None') {
      return `
    Licensed under the ${licenseLink} license.
    `
  } else if (license === 'None') {
      return '';
  } else {
    console.log("Error! License not found.");
    return '';
  }
}

var renderSection = function(section) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  var header = `
${renderLicenseBadge(data.license)}
# ${title}

## Description
${data.description}
`


// `
// // ## Table of Contents

// // ## ${data.install}

// // ## ${data.usage}

// // ## ${data.contributions}

// // ## License
// // ${data.license}

// `
}

module.exports = {generateMarkdown};
