import React, { useState } from "react";
import "./Button.css";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      disabled={props?.disabled}
      data-testid={`${props.testId}`}
      className={`button ${props?.color}`}
      onClick={() => props.onClick}
    >
      {props?.label}
    </button>
  );
};

export default Button;
