const express = require('express') // Importing the express module
const path = require('path') // Importing the path module

const app = express()  // Initializing the express and port number

app.use(express.static('./publik')) // Setup static and middleware

// app.get('/', (req,res) =>{
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// adding html to the static asset
// SSR - server side rendering
// })

app.all('*', (res,req) =>{
    res.status(404).send('resource not found')
})

app.listen(5000, () =>{
    console.log('server is listening on port 5000...')
})
