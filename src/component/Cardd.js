import React from "react";
import "../style/card.css";
import Pic1 from "../images/Pic1.png";

function Cardd({ name = "", tittle = "", text = "" }) {
  return (
    <div>
      <div className="container">
        <h2>Card titles, text, and links</h2>
        <p>
          Use .card-title to add card titles to any heading element. The
          .card-text class is used The .card-link class adds a blue color to any
          link, and a hover effect.
        </p>
        <div className="card card_size">
          <img class="card-img-top" src={Pic1} alt="Card image" />
          <div className="card-body">
            <h4 className="card-title text-center text-black" tittle={tittle} />
            <p className="card-text text-center" text={text} />
            <div className="d-flex justify-content-center">
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
    </div>
  );
}
export default Cardd;
