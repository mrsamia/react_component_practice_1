import React from "react";
import Button from "./Button";

function Card() {
  return (
    <div>
      <div className="container">
        <h2>Card titles, text, and links</h2>
        <p>
          Use .card-title to add card titles to any heading element. The
          .card-text class is used The .card-link class adds a blue color to any
          link, and a hover effect.
        </p>
        <div className="card">
          <img class="card-img-top" src="img_avatar1.png" alt="Card image" />
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Some example text. Some example text.</p>
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
