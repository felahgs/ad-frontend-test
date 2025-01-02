import clsx from "clsx";
import React, { HTMLProps, ReactNode } from "react";

export interface FooterProps extends HTMLProps<HTMLElement> {
  children?: ReactNode;
}

function Footer({ children, className }: FooterProps) {
  return (
    <footer
      className={clsx(
        "flex items-center justify-center h-44 bg-neutral-700 text-white",
        className,
      )}
    >
      {children}
    </footer>
  );
}

export default Footer;
