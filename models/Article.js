var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: { type: String, required: true, unique:true },
  link: { type: String, required: true },
  // 'subreddit'
  subreddit: { type: String, required: true },

  saved: { type: Boolean, default: false }
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;
