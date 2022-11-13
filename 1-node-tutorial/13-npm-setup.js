// npm - global command, comes with node
// npm -v (to check the npm version)

// local dependency - use it only in this particular project
// npm i <packageName> - installing a package locally

// global dependency - use it in any project
// npm install -g <packageName> - installing a package locally
// sudo npm install -g <packageName> (Macbook)

// package.json - manifest file (stores important info about project/package)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
console.log("Hello ")
