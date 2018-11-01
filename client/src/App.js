import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/Main";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import API from "../src/utils/API";

class App extends Component {
  clearArticles = () => {
    API.clearArticles()
      .then(function(data) {
        console.log(data);
        window.location("/");
      })
      .catch(err => console.log(err));
  };

  scrapeArticles = () => {
    API.scrape()
      .then(function(data) {
        console.log(data);
        window.location("/");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar 
            clearArticles={this.clearArticles} 
            scrapeArticles={this.scrapeArticles}
            />
            <Jumbotron />
            <div>
              <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/saved" component={Saved} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
