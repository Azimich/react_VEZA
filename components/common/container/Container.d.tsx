import { ReactNode } from "react";

export interface IContainer {
  className?: string;
  children?: ReactNode;
  el?: string;
  clean?: boolean;
}
