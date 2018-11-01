import React, { Component } from "react";
import ArticleList from "../../components/ArticleList";
import ArticleLi from "../../components/ArticleLi";
import API from "../../utils/API";

class Main extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    console.log("Main page mounted");
    this.getAllArticles();
    console.log(this.state);
  }

  getAllArticles = () => {
    API.getArticles()
      .then(response => this.setState({ articles: response.data }))
      .catch(err => console.log(err));
  };

  saveArticle = id => {
    API.saveArticle(id)
      .then(function(data) {
        console.log(data);
      })
      .catch(err => console.log(err));
    this.getAllArticles();
  };

  render() {
    return (
      <div className="container" id="mainContainer">
        <ArticleList>
          {this.state.articles.map(article => (
            <ArticleLi
              key={article._id}
              _id={article._id}
              title={article.title}
              link={article.link}
              subreddit={article.subreddit}
              saved={article.saved}
              saveArticle={this.saveArticle}
            />
          ))}
        </ArticleList>
      </div>
    );
  }
}

export default Main;
