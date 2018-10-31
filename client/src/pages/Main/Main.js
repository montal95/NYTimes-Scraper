import React, { Component } from "react";
import ArticleCards from "../../components/ArticleCards";
import Cards from "../../components/Cards";
import API from "../../utils/API";

class Main extends Component {

  state = {
    articles: []
  };

  componentDidMount() {
    console.log("Main page mounted");
    this.getArticles();
    console.log(this.state);
  }

  getArticles = () => {
    API.getAllArticles()
      .then(response => this.setState({ articles: response.data }))
      .catch(err => console.log(err));
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
            />
          ))}
        </ArticleCards>
      </div>
    );
  }
}

export default Main;
