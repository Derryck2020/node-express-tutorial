const http = require('http')

const server = http.createServer((req,res)=>{
    if (req.url ==='/') {
        res.end('Welcome to the Home page')
    }
    if (req.url ==='/about'){
        res.end('Here is our short history')
    }
    res.end(`
        <h1>Ooops</h1>
        <p>We cant find the page you are looking for</p>
        <a href='/'>Back to Home page<a/>
        `)
})

server.listen(8000)
