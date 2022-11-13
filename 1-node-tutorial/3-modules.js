// Node uses CommonJS library to function and every file in node is a module.
// Technically, modules can be defined as encapsulated code (only share minimum)

const frankberg = require('./4-names')
const sayHi = require('./5-utlis')
const vehicles = require('./6-alternative-flavor')
require('./7-no-assign')

//console.log(frankberg)
//console.log(vehicles)

//sayHi('susan')
//sayHi(frankberg.john)
//sayHi(frankberg.peter)
