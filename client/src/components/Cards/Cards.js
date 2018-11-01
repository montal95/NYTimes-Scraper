import React from "react";

const Cards = props => {
    return(
        <div className="card mb-3" data-id={props._id} id={`card-${props._id}`}>
            <div className="card-header">
                <h4>{props.title}</h4>
            </div>
            <div className="card card-body" id={props._id}>
                <div className="row">
                    <button className="btn btn-primary btn-block btn-sm mt-1 mr-3 ml-3" type="button"><a href={`http://www.reddit.com${props.link}`}
                            target="_blank" rel="noopener noreferrer">Read Article <i className="fas fa-book-open"></i></a></button>
                    <button className="btn btn-danger btn-block btn-sm mr-3 ml-3 mb-1" type="button"
                        data-target={props._id} onClick={()=>props.deleteArticle(props._id)}>
                        Delete <i className="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cards;