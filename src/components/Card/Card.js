import React from "react";
import "./Card.css"

const Card = ({children}) => (
    <div className="card row shadow-lg p-2 my-3">
        {children}
    </div>
);

export default Card;