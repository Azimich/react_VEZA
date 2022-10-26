import { ReactNode } from "react";

interface ITab {
  id?: number;
  url?: string;
  title: string;
  size?: "small300" | "max";
  content?: ReactNode;
  tabsActive?: number;
  onClick?: (e: ITab) => void;
}

interface ITabsProps {
  props: ITab[];
  onClick: (e: ITab) => void;
  activeTab?: number;
  size?: "small300" | "max";
}

interface IComponents {
  [index: string]: any;
}

export { ITabsProps, ITab, IComponents };
