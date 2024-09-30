var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {

  // read the url and identify the path of the file from it
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;

  //check the type of file the url requests
  //if it is html or css it will do something
  if (req.url.indexOf('.html') != -1 || req.url === '/') {
    // send your html here

    fs.readFile(filename, function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
      } 
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });

} else if (req.url.indexOf('.css') != -1) {
    // send your CSS here
    fs.readFile(filename, function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/css'});
        return res.end("404 Not Found");
      } 
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      return res.end();
    });
} else {
  // a generic case

  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}
  
}).listen(8080);
console.log('Server running at http://localhost:8080/HTML/index.html');