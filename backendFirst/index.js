const http = require('http');
const fs = require('fs');



const hostname = '127.0.0.1'  // hostname n port assigned
const port = 3000

const server = http.createServer(function(req, res){
    
    if (req.url === "/"){
        const path = "index.html" 
        read(path)
    }
    else if (req.url === "/about"){
        const path = "about.html" 
        read(path)
    }
    else if (req.url === "/contact-me"){
        const path = "about.html" 
        read(path)
    }
    //remember style.css is a "directory file" too in the server folder "sources" under inspect element
    else if (req.url === "/style.css"){
        const path = "style.css" 
        read(path)
    }
    else {
        const path = "404.html" 
        read(path)
    }
   // read file
    function read(path) {
        res.statusCode = 200;
        res.setHeader("Content", "text/html")
        fs.readFile(path, 'utf-8', (err, data) =>{

            if (err){
                console.log(err)
            }

            res.write(data);
            return res.end();
            })  
    }
});


server.listen(port, hostname,  () =>{
    console.log("SKYNET ACTIVATED")
})

   
    