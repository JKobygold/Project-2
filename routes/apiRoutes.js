var db = require("../models");
var PluginManager = require("covid19-api")

module.exports = function (app) {
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
};


//https://www.npmjs.com/package/covid19-api#pluginmanagergetsituationreports
//trying to put documentation for covid19-api npm in please move if you find correct, or a better, location for it 

PluginManager.getJohnsHopkinsDataDailyReport().then(res => {
  console.log(res);
})
  
    // { 
    //   table: [
    //     {
    //       "Province_State": "South Carolina",
    //       "Country_Region": "US",
    //       "Last_Update": "2020-03-26 23:48:35",
    //       "Lat": "34.22333378",
    //       "Long_": "-82.46170658",
    //       "Confirmed": "3",
    //       "Deaths": "0",
    //       "Recovered": "0",
    //       "Active": "0",
    //       "Combined_Key": "Abbeville, South Carolina, US"
    //     },
    //     {
    //       "Province_State": "Louisiana",
    //       "Country_Region": "US",
    //       "Last_Update": "2020-03-26 23:48:35",
    //       "Lat": "30.295064899999996",
    //       "Long_": "-92.41419698",
    //       "Confirmed": "3",
    //       "Deaths": "0",
    //       "Recovered": "0",
    //       "Active": "0",
    //       "Combined_Key": "Acadia, Louisiana, US"
    //     },
    //     // .....
    //   ] 
    // } 




  