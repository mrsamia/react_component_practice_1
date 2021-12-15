import React from "react";

function Feature({ color = "", colour = "" }) {
  return (
    <div className="row">
      <div className="col-6">
        <h3>this is {color}</h3>
      </div>
      <div className="col-6">
        <h3>this is {colour}</h3>
      </div>
    </div>
  );
}
export default Feature;
