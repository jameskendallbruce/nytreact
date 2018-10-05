import React from "react";
import "./ResultsHeader.css";

const ResultsHeader = props => (

  <nav className="card-header bg-secondary border border-info mb-3 rounded">
    <h4 className="mx-auto" onChange={props.onChange}>Results for {props.topic}</h4>
  </nav>

);

export default ResultsHeader;