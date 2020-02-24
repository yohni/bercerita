import React from "react";
import LazyLoad from "react-lazy-load";

const Card = props => (
  <LazyLoad>
    <div className="card-wrapper">
      <img src={props.src} alt="project1" />
      <div className="card-layer"> </div>
      <button className="project-more" onClick={console.log("Hello")}>
        Liat
      </button>
      <div className="card-detail">
        <div className="sub mb-2">{props.year} | {props.base} &bull; {props.team}</div>
        <p>
          {props.detail}
        </p>
      </div>
      <div className="project-name">{props.name}</div>
    </div>
  </LazyLoad>
);

export default Card;
