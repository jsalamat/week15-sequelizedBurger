var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var models = require("../models");

// Create all our routes and set up logic within those routes where required.


router.get("/", function(req, res) {  
  models.Burger.findAll({}).then(function(burgerdata){
    console.log(burgerdata);
    res.render('index', {
      burgerdata
    });
    
  });
});

router.post("/burgers/create", function(req, res) {
  models.Burger.create(req.body.burger_name, function(result){
    res.redirect('/')
  })
});


router.put("/burgers/update", function(req, res) {
  models.burger.update(req.body.burger_id, function(result) {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;