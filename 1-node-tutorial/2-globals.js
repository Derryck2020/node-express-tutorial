// Global Variables: These are variables that can be access anywhere within our applications 
// and it doesn't work in the window object.

//Most Used Globals in node:

// __dirname    - path to current directory
// __filename   - file name
// require      - function to use modules(CommonJS)
// module       - info about current module (file)
// process      - info about environment where the program is being executed


console.log(__dirname)
setInterval(() =>{
    console.log('Hello world')
},1000)
