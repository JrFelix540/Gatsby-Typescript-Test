import React from "react";

export const Button: React.FC<
  Omit<React.HTMLProps<HTMLButtonElement>, "type">
> = ({ children, ...others }) => {
  return <button {...others}>{children}</button>;
};

export default Button;
