import React from "react";
import "./Button.css";

const Button = ({
  label,
  onClick,
  color,
  backgroundColor,
  border,
  borderColor,
  ...otherProps
}) => {
  return (
    <button
      className={`button ${border ? "bordered" : ""}`}
      style={{
        color,
        backgroundColor,
        borderColor: borderColor ? borderColor : "#000",
      }}
      onClick={onClick}
      {...otherProps}
    >
      {label}
    </button>
  );
};

export default Button;
