import axios from "axios";

//Exports all API routes to the server
const API = {
  scrape: function() {
    return axios.get("/scrape");
  },

  getAllArticles: function() {
    return axios.get("/api/article");
  }
};

export default API;
