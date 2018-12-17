import React from "react";
import "./HeroCard.css";

const HeroCard = props => (
  <div className="card" onClick={() => props.handleClick(props.id)}>
    <div className="img-container">
      <img alt={props.id} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Race:</strong> {props.race}
        </li>
        <li>
          <strong>Realm:</strong> {props.realm}
        </li>
      </ul>
    </div>
  </div>
);

export default HeroCard;