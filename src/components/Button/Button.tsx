import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "text";
  fluid?: boolean;
  disabled?: boolean;
}

function Button({
  variant = "primary",
  fluid = false,
  children,
  disabled,
  className,
  ...rest
}: ButtonProps) {
  const variantClass = {
    primary:
      "bg-zinc-600 text-white border-zinc-600 hover:bg-zinc-700 active:bg-zinc-800 active:shadow-inner",
    secondary:
      "bg-white text-neutral-700 border-neutral-700 hover:bg-neutral-200 active:bg-neutral-300 active:shadow-inner",
    text: "border-none p-0",
  };

  const disabledClass = "opacity-50 cursor-not-allowed pointer-events-none";

  return (
    <button
      disabled={disabled}
      className={clsx(
        "p-3.5 rounded-lg font-bold border trasition-all duration-200 ease-in-out",
        variantClass[variant],
        fluid && "w-full",
        disabled && disabledClass,
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
