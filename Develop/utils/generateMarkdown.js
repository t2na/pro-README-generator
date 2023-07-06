// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return``
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ${renderLicenseLink()}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseSection(data.license)}
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## License
${data.license}
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

// dynamically fill out the text and/or color

// in questions, provide a list of choices - MIT, GNU, Apache - then when they select one, you're going to put it in a conditional statement if license = MIT return this badge, if something else, return something else, put it all in conditional statement

// could write ![license]("https://img.shields.io/badge/License-MIT-green") and then in those parenthesis ()
