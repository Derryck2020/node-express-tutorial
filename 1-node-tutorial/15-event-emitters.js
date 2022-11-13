// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance

const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on('response', (name,age) =>{
    console.log(`First user's name is ${name} and ${age} years`)
})

customEmitter.on('response', () =>{
    console.log(`What's going on?`)
})

customEmitter.emit('response', "mike", 22)