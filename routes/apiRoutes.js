var db = require("../models");

var PluginManager = require("covid19-api");
var walmart = require('walmart')(apiKey);
//npm pluginmanager package information at https://www.npmjs.com/package/covid19-api#pluginmanagergetsituationreports 
//add syntax as it appears in above link to use that api key
//npm walmart package information at https://www.npmjs.com/package/walmart

// to install covid19-api npm package:    % npm i covid19-api 
// to install walmart npm package:        % npm install walmart --save


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

// PluginManager.getJohnsHopkinsDataDailyReport().then(res => {
//   console.log(res);
// });
  
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

    walmart.getItem(10449075).then(function(item) {
      console.log(item.product.productAttributes.productName);
    });

//     The then function is called when the item data is returned.
// You can see more examples in examples/simple.js.

//          note from ben- getting API key from Walmartlabs.  Once you have the walmart object we can make these requests.

// This is a promise based library, so requests will look like this:
walmart.getItem(10449075).then(function(item) {
  console.log(item.product.productAttributes.productName);
});

//here are 4 queries we could use, if we can get one to work, the other 3 shouldn't take much more work.

walmart.stores.byZip(zip)
// Returns a list of stores by the specified zip code.

walmart.feeds.trending(categoryId)
// Returns an array of items of the trending items on the specified category.


walmart.getItem(itemID)
// This returns the item information for a specific product based on it's WalmartLabs product ID.

recommendations(itemID)
// Returns recommended products based on the item ID.

