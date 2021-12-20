import React from "react";
import "../style/card.css";
import Pic1 from "../images/Pic1.png";

function Cardd({ name = "", tittle = "", text = "" }) {
  return (
    <div>
      <div className="container">
        <div className="card">
          <img className="card-img-top" src={Pic1} alt="Card image" />
          <div className="card-body">
            <h4 className="card-title text-center text-black">{tittle}</h4>
            <p className="card-text text-center">{text}</p>
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
