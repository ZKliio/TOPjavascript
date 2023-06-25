
const http = require('http') // imports http module into local scope(this file)

const hostname = '127.0.0.1'  // hostname n port assigned
const port = 3000

const server = http.createServer((req, res), err => {   // http createServer: 2 objects req res created. req for requests, res for responses
  res.statusCode = 200                                  
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello I am BeepBoop\n')
})




// this is standard
server.listen(port, hostname, () => {  // addded callback function to notify if server running
  console.log(`Server running at http://${hostname}:${port}/`)
})