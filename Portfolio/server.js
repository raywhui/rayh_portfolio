// var http = require("http");
// var fs = require("fs");
// var url = require("url");


// // Specify the port.
// var PORT = process.env.PORT || 8080;

// var server = http.createServer(handleRequest);


// // Routes
// function handleRequest(req, res) {

//   // Capturing the url the request is made to.
//   var urlParts = url.parse(req.url);

//   // When we visit different urls, the switch statement call on different functions.
//   switch (urlParts.pathname) {

//     // Depending on the URL we display a different HTML file.
//     case "/":
//       fs.readFile(__dirname + "/index.html", function(err, data) {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//       });
//       break;

//     case "/about":
//       fs.readFile(__dirname + "portfolio_about.html", function(err, data) {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//       });
//       break;

//     // case "/works":
//     //   fs.readFile(__dirname + "/movies.html", function(err, data) {
//     //     res.writeHead(200, { "Content-Type": "text/html" });
//     //     res.end(data);
//     //   });
//     //   break;


//     default:
//       fs.readFile(__dirname + "index.html", function(err, data) {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//       });
//       break;
//   }
// }

// // app.get("/works", function(req, res) {
// //   res.sendFile(path.join(__dirname, "view.html"));
// // });



// server.listen(function(){
//   console.log('Connected to port', PORT);
// });


// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;
// ===========================================================

app.use(express.static(path.join(__dirname, './public')));



app.get('/', function(req, res){ 
  res.sendFile(path.join(__dirname,'./index.html'));
});

app.get("/yoda", function(req, res) {
  res.json(yoda);
});

app.get("/darthmaul", function(req, res) {
  res.json(darthmaul);
});

// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//

// YOUR CODE GOES HERE
app.get("/obiwan", function(req, res) {
  res.json(obiwan);
});


// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

