// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;
// ===========================================================


// Middleware
// ===========================================================
app.use(express.static(path.join(__dirname, './public')));
app.use(function(req,res,next){setTimeout(next,5000)});


// Routing
// ===========================================================
app.get('/', function(req, res){ 
  res.sendFile(path.join(__dirname,'./public/landing.html'));	
});

app.get('/main', function(req, res){ 
  res.sendFile(path.join(__dirname,'./public/main.html'));	
});

app.get("/about", function(req, res) {
  res.sendFile(path.join(__dirname,'./public/portfolio_about.html'));
});

app.get("/darthmaul", function(req, res) {
  res.json(darthmaul);
});

//USE POST REQUEST TO ADD CLASS TO HTML OF MAIN + REDIRECT PAGE ON SUCCESS
app.post('/main', function(req, res){ 
  res.sendFile(path.join(__dirname,'./public/main.html'));	
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

