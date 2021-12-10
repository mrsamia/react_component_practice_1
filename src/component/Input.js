import React from "react";
import "../style/input.css";

function Input({ type = "text", name = "", placeholder = "" }) {
  return (
    <div>
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  );
}
export default Input;
