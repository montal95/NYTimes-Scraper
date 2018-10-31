import React from "react";

const Cards = props => {
    return(
        <div className="card flex-row flex-wrap" data-id={props.id} id={`card-${props.id}`}>
            <div className="card-header">
                <h4>{props.title}</h4>
            </div>
            <div class="card card-body" id={`collapseForm-${props.id}`}>
                <div className="row">
                    <button className="btn btn-primary btn-block btn-sm mt-1 mr-3 ml-3" type="button"><a href={`http://www.reddit.com${props.link}`}
                            target="_blank" rel="noopener noreferrer">Read Article <i className="fas fa-book-open"></i></a></button>
                    <button className="btn btn-primary btn-block btn-sm mr-3 ml-3 mb-1" type="button" data-toggle="collapse"
                        data-target={`#collapseForm-${props.id}`} aria-expanded="false" aria-controls="collapseExample">
                        Save <i className="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cards;