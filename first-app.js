const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url=='/home'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Welcome Home</h1></body>');
    res.write('<html>');
    }
    else  if(req.url=='/about'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>My first page</title></head>');
        res.write('<body><h1>Welcome to about us</h1></body>');
        res.write('<html>');
        }
       else if(req.url=='/node'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>My first page</title></head>');
        res.write('<body><h1>Welcome to my Nodejs Project</h1></body>');
        res.write('<html>');
        }
        res.end();
})
server.listen(4000);