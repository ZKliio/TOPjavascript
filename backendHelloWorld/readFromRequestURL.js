const http = require('http')
const fs = require('fs');
const url = require('url')


const hostname = '127.0.0.1'  // hostname n port assigned
const port = 3000
const clicked_url = url.parse(req.url, true);
console.log(clicked_url.pathname)

const server = http.createServer(function(req, res){
    
    
    const path = "C:\\Users\\limzu\VS_learnjs\\TOPjavascript\\backendFirst" + clicked_url.pathname;  
    console.log(path)
    res.statusCode = 200;
    res.setHeader("Content", "text/html")

    fs.readFile(path, 'utf-8', (err, data) =>{
    console.log(path)
    // if (err){
    //     path = ".\\"
    //     res.write()
    // }

    res.write(data);
    res.end();
    })
});

    server.listen(port, hostname,  () =>{
        console.log("SKYNET ACTIVATED")
    })

   
    