import React, { InputHTMLAttributes } from "react";

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {}

function Select({ children, className, ...rest }: SelectProps) {
  return (
    <select
      className={`p-2 rounded border-none cursor-pointer outline-zinc-400 ${className}`}
      {...rest}
    >
      {children}
    </select>
  );
}

export default Select;
