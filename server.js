const http = require('http');
const port = 3000;
const hostname = 'localhost';

const server = http.createServer((req, res) => {
    //console.log('A request is made')
    //console.log(req)
    //console.log('Request URL', req.url)
    //console.log('Request method', req.method)
    res.setHeader('Content-Type', 'text/html'); //'text/plain'
    res.write('<body class="app"></body>');
    res.write('<h3>Welcome to ckmobile!</h3>');
    res.write('<p>This is Node.js course</p>');
    res.end();
})

server.listen(port, hostname, () => {
    console.log(`listening on port ${port}`);
})