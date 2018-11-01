import React, { Component } from "react";
import ArticleCards from "../../components/ArticleCards";
import Cards from "../../components/Cards";
import API from "../../utils/API";

class Saved extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    console.log("Saved page mounted");
    this.savedArticles();
    console.log(this.state);
  }

  savedArticles = () => {
    API.savedArticles()
      .then(response => this.setState({ articles: response.data }))
      .catch(err => console.log(err));
  };

  deleteArticle = (id) => {
    API.clearOneArticle(id)
      .then(function(data) {
        console.log(data);
      })
      .catch(err => console.log(err));
    this.savedArticles();
  };

  render() {
    return (
      <div className="container">
        <ArticleCards>
          {this.state.articles.map(article => (
            <Cards
              key={article._id}
              _id={article._id}
              title={article.title}
              link={article.link}
              subreddit={article.subreddit}
              deleteArticle={this.deleteArticle}
            />
          ))}
        </ArticleCards>
      </div>
    );
  }
}

export default Saved;
