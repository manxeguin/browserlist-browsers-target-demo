const browserlistRegex = require('browserslist-useragent-regexp')
const fs = require('fs');

const options = { env: process.env.BROWSERSLIST_ENV};

console.log('BROWSERSLIST_ENV', process.env.BROWSERSLIST_ENV);
console.log('browserlistRegex', browserlistRegex.getUserAgentRegExp(options));



// writeFile function with filename, content and callback function
fs.writeFile('modernBrowserRegex.properties', 'regex=' + browserlistRegex.getUserAgentRegExp(options), function (err) {
 if (err) throw err;
 console.log('Regex created succesfully');
}); 