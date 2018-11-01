import axios from "axios";

//Exports all API routes to the server
const API = {
  scrape: function() {
    return axios.get("/scrape");
  },
  getArticles: function() {
    return axios.get("/api/article/");
  },
  saveArticle: function(id) {
    return axios.put("/api/article/" + id);
  },
  clearArticles: function() {
    return axios.delete("/clear");
  },
  savedArticles: function() {
    return axios.get("/api/article/saved");
  },
  clearOneArticle: function(id) {
    return axios.delete("/api/article/" + id);
  }
};

export default API;
