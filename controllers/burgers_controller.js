var express = require("express");

var router = express.Router();

// Import burger.js file
var burger = require("../models/burger.js");

// Router for getting burgers data
router.get("/", function(req,res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Router for posting burgers data
router.post("/api/burgers", function(req,res) {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

// Router for updating burgers data
router.put("/api/burgers/:id", function(req,res) {
    var condition = "id = " + req.params.id;
    
    console.log("condition", condition);

    burger.update(
        {
        devoured: req.body.devoured
    }, 
        condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
});

// Router for deleting burgers data
router.delete("/api/burgers/:id", function(req,res) {
    var condition = "id = " + req.params.id;
    
    console.log("condition", condition);

    burger.delete(condition, function(result) {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
});

// Export router
module.exports = router;