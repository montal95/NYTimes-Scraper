import React from "react";

const ArticleCards = ({children}) => {
    return(
        <div id="mainContainer">
            <ul className="list-group">
                {children}
            </ul>
        </div>
    )
}

export default ArticleCards;