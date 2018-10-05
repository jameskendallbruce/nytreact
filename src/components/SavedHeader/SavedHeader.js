import React from "react";
import "./SavedHeader.css";

const SavedHeader = props => (

  <nav className="card-header bg-secondary border border-info mb-3 rounded">
    <h4 className="mx-auto">{props.header}</h4>
  </nav>

);

export default SavedHeader;