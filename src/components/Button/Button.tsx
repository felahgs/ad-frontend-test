import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ onClick }: ButtonProps) {
  return <button onClick={onClick}>Button</button>;
}

export default Button;
