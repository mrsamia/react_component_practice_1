import React from "react";
import "../style/button.css";

function Button({ name}) {

  function click(){
    alert("clicked");
  }

  return (

    <div>
      <button className="btn_style" onClick={click}>{name}</button>
    </div>
    
  );
}
export default Button;
