import React from "react";
import "../style/input.css";

function Input({ type = "text", name = "", placeholder = "", style = {} }) {
  return (
    <div>
      <input type={type} name={name} placeholder={placeholder} style={style} />
    </div>
  );
}
export default Input;
