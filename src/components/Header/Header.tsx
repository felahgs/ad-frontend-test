import clsx from "clsx";
import { ReactNode, HTMLProps } from "react";

export interface HeaderProps extends HTMLProps<HTMLElement> {
  logo: ReactNode;
  navItems?: ReactNode[];
}

function Header({ logo, navItems, className, ...rest }: HeaderProps) {
  const hasNavItems = navItems && navItems.length > 0;

  return (
    <header
      className={clsx(
        "flex  justify-center items-center w-full bg-zinc-100 h-16 px-6 sm:px-12",
        className,
      )}
      {...rest}
    >
      <div className="flex justify-between align-center w-full max-w-screen-xl">
        {logo}
        {hasNavItems && (
          <nav className="flex items-center">
            <ul className="flex items-center ml-auto space-x-4">
              {navItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
