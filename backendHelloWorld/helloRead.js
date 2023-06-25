const http = require('http')
const fs = require('fs');

const hostname = '127.0.0.1'  // hostname n port assigned
const port = 80

const server = http.createServer(function(req, res){
    
     res.statusCode = 200;
     res.setHeader("Content", "text/html")
     fs.readFile('C:\\Users\\limzu\\VS_learnjs\\TOPjavascript\\backendFirst\\index.html', 'utf-8', (err, data) =>{
        if (err){
            console.err(err)
        }
        console.log(data) 
        res.write(data);
        return res.end();
     })
    //  const data = fs.readFileSync("C:\\Users\\limzu\\VS_learnjs\\TOPjavascript\\backendFirst\\index.html", (err) =>{ 
    //     if (err){
    //         console.log(err)
    //     }
    // })         

});

server.listen(port, hostname,  () =>{
    console.log("SKYNET ACTIVATED")
})


// C:\Users\limzu\VS_learnjs\TOPjavascript\backendHelloWorld node helloRead.js