const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const articleRoutes = require("./routes/articles.js");
const PORT = process.env.PORT || 8080;

//Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "client/build", "index.html"));
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(articleRoutes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mongoScraper");

app.listen(PORT, function() {
  console.log("Connected on PORT: http://localhost:" + PORT);
});
