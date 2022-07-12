const http = require('http');
const fs = require('fs');
const port = 3000;

const hostname = 'localhost';



const server = http.createServer((req, res) => {
    //console.log('A request is made')
    //console.log(req)
    //console.log('Request URL', req.url)
    //console.log('Request method', req.method)
    res.setHeader('Content-Type', 'text/html'); //'text/plain'
    /*res.write('<body class="app"></body>');
    res.write('<h3>Welcome to ckmobile!</h3>');
    res.write('<p>This is Node.js course</p>');*/
    let route = './views/';
    switch(req.url){
        case '/': 
            route += 'index.html';
            res.statusCode = 200;
            break;
        case '/contact':
            route += 'contact.html';
            res.statusCode = 200;
            break;
        case '/contact-us':
            res.statusCode = 301;
            res.setHeader('Location', 'contact');
            res.end();
            break;
        default:
            route += '404.html'; 
            res.statusCode = 404;
            break;
    }
    fs.readFile(route, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    })
})

server.listen(port, hostname, () => {
    console.log(`listening on port ${port}`);
})