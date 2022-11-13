// Importing the express module
const express = require('express')

// Initializing the express and port number
const app = express()

//setting the root for the home page
app.get('/', (req,res) =>{
    res.status(200).send('Home Page')
})

app.get('/about', (req,res) =>{
    res.status(200).send('About Page')
})

// All request that will hit 404
app.all('*', (req,res) =>{
    res.status(404).send('<h1>Page not Found</h1>')
})

app.listen(5000, (req,res) => {
    console.log('server is listening on port 5000...')
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen