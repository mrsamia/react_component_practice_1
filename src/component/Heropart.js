import React from "react";
import "../style/heropart.css";
import Picc from "../images/Picc.jpg";

function Heropart() {
  return (
    <div>
      <div className="row d-flex align-items-center">
        <div className="col-6 ">
          <div>
            <h1 className="text-center hero_h1_txt ">Sunny Cats</h1>
          </div>
          <div>
            <p className="text-center hero_p_txt">
              A collection of 10,000 artfully designed cats living on the Solana
              blockchain with a mission to benefit the community.
            </p>
          </div>
        </div>
        <div className="col-6">
          <img className="img_size" src={Picc} />
        </div>
      </div>
    </div>
  );
}
export default Heropart;
