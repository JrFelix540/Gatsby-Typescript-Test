import React from "react";

export const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = ({
  children,
  ...others
}) => {
  return <button {...others}>{children}</button>;
};

export default Button;
