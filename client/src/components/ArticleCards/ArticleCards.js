import React from "react";

const ArticleCards = ({children}) => {
    return(
        <div className="cardlist-overflow-container">
            <ul className="list-group">
                {children}
            </ul>
        </div>
    )
}

export default ArticleCards;