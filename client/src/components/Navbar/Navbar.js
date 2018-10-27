import React from  'react';

const Navbar = () =>{


    return(
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">reddit Scraper</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/scrape">Scrape</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/saved">Saved</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="clearArticles" href="/clear">Clear All</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;