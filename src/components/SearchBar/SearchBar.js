import React from "react";
import "./SearchBar.css"

const SearchBar = props => (
    <div className="form navbar navbar-dark bg-dark rounded">
        
        <div className="form-group input">
            <label htmlFor="inputTopic">Search Topic</label>
            <input type="string" className="form-control" id="inputTopic" name="topic" onChange={props.onChange} placeholder="What's New?"/>
        </div>
        
        <div className="form-group input">
            <label htmlFor="inputStart">Starting from (by year)</label>
            <input type="integer" className="form-control" id="inputPassword4" onChange={props.onChange} name="from" placeholder="(Optional)"/>
        </div>
            
        <div className="form-group input">
            <label htmlFor="inputStop">Ending (by year)</label>
            <input type="integer" className="form-control" id="inputPassword4" onChange={props.onChange} name="to" placeholder="(Optional)"/>
        </div>
           
        <div className="form-group row ml-1">
            <button type="button" className="btn btn-outline-info col-offset-1" id="searchButton" onClick={()=>props.onClick()}>Search</button>
            <button type="button" className="btn btn-outline-info col mt-1 mr-1" id="clearButton">Clear Results</button>
            <a href="/" className="btn btn-outline-info col-offset mt-1" id="clearButton">Saved Articles</a>
        </div>
    
    </div>
);

export default SearchBar;