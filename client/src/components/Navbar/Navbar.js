import React from "react";

const Navbar = props => (
  <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="#">
        reddit Scraper
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => props.handleScrape()}
              href="/scrape"
            >
              Scrape
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="/saved"
              onClick={() => props.renderSaved()}
            >
              Saved
            </a>
          </li>
          <li className="nav-item">
            <a 
            className="nav-link" 
            id="clearArticles" 
            href="/"
            onClick={()=> props.clearArticles()}
            >
              Clear All
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
