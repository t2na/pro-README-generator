// array that sets up the license badge

const licenseArray = [
  {
    name: 'License: Apache',
    link: 'https://opensource.org/licenses/Apache-2.0',
    shield: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg', 
  },
  {
    name: 'License: GNU',
    link: 'https://www.gnu.org/licenses/gpl-3.0',
    shield: 'https://img.shields.io/badge/License-GNU-blue.svg', 
  },
  {
    name: 'License: MIT',
    link: 'https://opensource.org/licenses/MIT',
    shield: 'https://img.shields.io/badge/License-MIT-yellow.svg', 
  },

]

// TODO: Create a function that returns a license badge based on which license is passed in

// function that generates the license badge

function renderLicenseBadge(license) {
 if (license === 'Apache')
 
 return `[![${licenseArray[0].name}](${licenseArray[0].shield})](${licenseArray[0].link})`

 else if (license === 'GNU')

 return `[![${licenseArray[1].name}](${licenseArray[1].shield})](${licenseArray[1].link})`

 else if (license === 'MIT')

 return `[![${licenseArray[2].name}](${licenseArray[2].shield})](${licenseArray[2].link})`
 
}

// TODO: Create a function to generate markdown for README

// function that generates the markdown for the read me

function generateMarkdown(data) {

  // function above passes the input from node.js into the variable below

  const licenseBadge = renderLicenseBadge(data.license);

  return `# ${data.title}

  ${licenseBadge}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contributions)
  - [Testing](#testing)
  - [Questions](#questions)

  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  This license project is covered under the ${data.license} license
  ## Contributions
  ${data.contributions}
  ## Testing
  ${data.testing}
  ## Questions

  Email: ${data.email}

  GitHub: github.com/${data.github}
  `;
  }

module.exports = generateMarkdown;

// misc comments

// dynamically fill out the text and/or color

// in questions, provide a list of choices - MIT, GNU, Apache - then when they select one, you're going to put it in a conditional statement if license = MIT return this badge, if something else, return something else, put it all in conditional statement

// could write ![license]("https://img.shields.io/badge/License-MIT-green") and then in those parenthesis ()
