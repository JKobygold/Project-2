var db = require("../models");
const axios = require('axios');

async function getNyTimesTopStories() {
  try {
    const response = await axios.get("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=EFrSMOkn5IJ3i2V2bk1irq3plcwbIgae");
    return (response);
  } catch (error) {
    console.error(error);
  }
}



module.exports = function(app) {
  // Load index page
  app.get("/", async function(req, res) {
    var nyt = await getNyTimesTopStories();
    console.log(nyt);
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "WASH YOUR HANDS",
        examples: dbExamples,
        articles: nyt.data.results,
      });
    });
  });

  app.get('/users', function(req, res) {
    res.sendFile(path.join(__dirname + 'public/html/users.html'));
});


    
  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
