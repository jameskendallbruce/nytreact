import React from "react";
import "./NytHeader.css";

const NytHeader = props => (
  // <div className="card mx-auto" value={props.id} onClick={() => props.clickMe(props.id)}>
  //   <div>
  //     <img className="imgCard" alt={props.image} src={props.image} />
  //   </div>
  // </div>

  <nav className="card-header bg-dark border border-info rounded">
    {/* <!-- Navbar content --> */}
    <h2 className="mx-auto">{props.H2words}</h2>
  </nav>

);

export default NytHeader;