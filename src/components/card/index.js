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
        <div className="sub mb-2">2019 | Web &bull; Solo</div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="project-name">Illutor</div>
    </div>
  </LazyLoad>
);

export default Card;
