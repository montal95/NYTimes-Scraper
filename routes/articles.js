const express = require("express");
const router = express.Router();
const db = require("../models");
const axios = require("axios");
const cheerio = require("cheerio");

router.get("/api/article", function(req, res) {
  db.Article.find({}, function(error, response) {
    if (error) {
      console.log(error);
    } else {
      res.json(response);
    }
  });
});

router.get("/saved", function(req, res) {
  db.Article.find({ saved: true }).then(function(articles) {
    console.log(articles);
    // res.render("recorded", {
    //   save: articles
    // });
    res.send(articles);
  });
});

router.get("/scrape", function(req, res) {
  //initialize axios
  axios.get("https://www.reddit.com/").then(function(response) {
    //set cheerio to $
    var $ = cheerio.load(response.data);

    //set cheerio to pull from each of the span classes that have the title and link
    $("span.y8HYJ-y_lTUHkQIc1mdCq").each(function(i, element) {
      //save each data piece as a result
      var result = {};

      result.title = $(this)
        .children()
        .text();
      result.link = $(this)
        .children()
        .attr("href");
      result.subreddit = $(this)
        .parent()
        .siblings()
        .find("a")
        .attr("href");

      if (result.link !== undefined) {
        console.log(result);
        db.Article.create(result)
          .then(function(dbArticle) {
            console.log(dbArticle);
          })
          .catch(function(err) {
            return res.json(err);
          });
      }
    });
    res.send("Scrape complete");
  });
});

router.put("/api/article/:id", function(req, res) {
  console.log(req.params.id);
  db.Article.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        saved: true
      }
    }
  ).catch(function(err) {
    console.log(err);
  });
  res.send(`${req.params.id} saved`);
});

router.delete("/clear", function(req, res) {
  db.Article.remove({}, function(err, response) {
    if (err) {
      console.log(err);
    } else {
      console.log(response);
      res.json(response);
    }
  });
});

module.exports = router;
