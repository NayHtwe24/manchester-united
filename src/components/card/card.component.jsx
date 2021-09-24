import React from "react";

import './card.styles.css';

export const Card = (props) => (
    <div className="card-container">
        <img alt='monster' src={props.monster.full_image} className="image"/>;
        <h2>{props.monster.name}</h2>
        <h3>{props.monster.number}</h3>
    </div>
);