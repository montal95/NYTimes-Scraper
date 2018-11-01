import React from "react";

const ArticleList = ({ children }) => {
  return (
      <div className="row">
        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Subreddit</th>
                <th scope="col">Read</th>
                <th scope="col">Save</th>
              </tr>
            </thead>
            <tbody>{children}</tbody>
          </table>
        </div>
      </div>
  );
};

export default ArticleList;
