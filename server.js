require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
const bodyparser = require("body-parser");
var db = require("./models");
var app = express();



var path = require("path");

var PORT = process.env.PORT || 3080;



// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
//Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false }; 

// require("./public/html/index.html")(app);
// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});


const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.write('you posted:\n');
  res.end(JSON.stringify(req.body, null, 2));
});

module.exports = app;
