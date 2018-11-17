var express = require("express");
var router = express.Router();
var show = require("../models/show");

  router.get("/", function(req, res) {
    show.all(function(data) {
      var hbsObject = {
        shows: data
      };
      
      console.log(hbsObject);

      res.render("index", hbsObject);
    });
  });

  router.post("/api/shows", function(req, res) {
    show.create([
      "name", "liked"
    ], [
      req.body.name, req.body.liked
    ], function(result) {

      res.json({ id: result.insertId });
    });
  });

  router.put("/api/shows/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    show.update({
      liked: req.body.liked
    }, condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  router.delete("/api/shows/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    show.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;
