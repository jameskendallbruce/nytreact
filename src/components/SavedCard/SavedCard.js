import React from "react";
import "./SavedCard.css";

const SavedCard = props => (

  
  // <div className="bg-light">
  //   <div className="row">
  //     <h4 className="card-header">{props.title}</h4>
  //   </div>
  //   <div className="row card-body">
  //     <h5 className="col">By {props.author}</h5>
  //     <span className="col">{props.date}</span>
  //   </div>
  //   <p className="row card-footer">{props.synopsis}</p>
  // </div>

  
  <div className="container">
    <div className="card-body row mx-auto shadow-sm p-3 mb-5 bg-white rounded">
      <div className="col">
        <div className="card-header bg-light rounded"> 
          <a href={props.link}>
            <h5 className="card-title card-text my-2">{props.title}</h5>
          </a>
          <span className="card-text">By {props.author}</span>
        </div>
      </div>
      <div className="col">
        <p className="card-text ml-4"><i>{props.synopsis}</i></p>
        {/* <button className="btn btn-outline-secondary ml-3" onClick={()=>props.onClick()}>Save</button> */}
      </div>

    </div>
  </div>

);

export default SavedCard;