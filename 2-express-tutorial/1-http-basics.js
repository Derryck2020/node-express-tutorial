const http = require('http')

const server = http.createServer((req, res) => {
  // console.log(req.method) --method are available on the req, e.g. get,post
    const url = req.url
  // home page
    if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' }) //writeHead() is called to write the header of the response, that the application will serve to the client.
    res.write('<h1>home page</h1>')
    res.end() // the server should consider this message complete, i.e. all the response header and body have been sent
    }   
  // about page
    else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
    }
  // 404
    else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
    }
})

server.listen(5000)