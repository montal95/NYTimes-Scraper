const db = require("../../models");

//Exports all API routes to the server
module.exports = function(app) {
  //API-Routes
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/article", function(req, res) {

  });

  

  app.get("/saved", function(req, res) {
    db.Article.find({ saved: true })
      .populate("note")
      .populate("notes._id")
      .then(function(articles) {
        console.log(articles);
        res.render("recorded", {
          save: articles
        });
      });
  });

  app.put("/article/:id", function(req, res) {
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
  });

  app.post("/submit", function(req, res) {
    db.Note.create(req.body)
      .then(function(dbNote) {
        return db.Article.findOneAndUpdate(
          {},
          { $push: { notes: dbNote._id } },
          { new: true }
        );
      })
      .then(function(dbArticle) {
        res.json(dbArticle);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  app.post("/article/:id", function(req, res) {
    db.Note.create(req.body).then(function(dbNote) {
      // console.log(dbNote);
      return db.Article.findOneAndUpdate(
        {
          _id: req.params.id
        },
        { $push: { note: dbNote._id } },
        { new: true }
      )
        .then(function(dbNote) {
          res.json(dbNote);
        })
        .catch(function(err) {
          res.json(err);
        });
    });
  });

  app.delete("/clear", function(req, res) {
    db.Article.remove({}, function(err, response) {
      if (err) {
        console.log(err);
      } else {
        console.log(response);
        res.json(response);
      }
    });
  });

  app.delete("/clear/:id", function(req, res) {
    db.Note.remove(
      {
        _id: req.params.id
      },
      function(err, response) {
        if (err) {
          console.log(err);
        } else {
          console.log(response);
          res.json(response);
        }
      }
    );
  });
};
