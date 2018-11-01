import React from "react";
import "./ArticleLi.css"

const ArticleLi = props => {
  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.subreddit}</td>
      <td>
        <button type="button" className="btn btn-primary">
          {" "}
          <a href={`http://www.reddit.com${props.link}`} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-book-open" />
          </a>
        </button>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-primary save"
          data-id={props._id}
          data-saved={props.saved}
          onClick={()=>props.saveArticle(props._id)}
        >
          {props.saved ? <i className="fas fa-check" /> : <i className="fas fa-save" />}
        </button>
      </td>
    </tr>
  );
};

export default ArticleLi;
