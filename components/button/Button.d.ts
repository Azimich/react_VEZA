import React from "react";

export interface ButtonI {
  children?: string | React.ReactElement | React.ReactNode;
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
  onClick?: (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  size?: "large" | "medium" | "small" | "max" | "context";
  theme?: "banner" | "news" | "industries";
  color?: "white" | "green" | "link";
  link?: string;
  className?: string;
}
