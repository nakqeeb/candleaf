import { FC } from "react";
import "./CustomButton.css";
const CustomButton = (props: any) => {
  return (
    <button
      onClick={props.onClick}
      className={`custom-button ${props.className}`}
      style={props.style}
      type={props.type}
      disabled={props.disabled}
    >
      {props.children}
      {props.name}
    </button>
  );
};

export default CustomButton;
