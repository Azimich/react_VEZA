import { ReactNode } from "react";

interface ITab {
  id?: number;
  url?: string;
  title: string;
  size?: "small300" | "max";
  menu_style?: "link" | "button";
  content?: ReactNode;
  tabsActive?: number;
  onClick?: (e: ITab) => void;
}

interface ITabsProps {
  props: ITab[];
  line?: boolean;
  menu_style?: "link" | "button";
  onClick: (e: ITab) => void;
  activeTab?: number;
  size?: "small300" | "max";
}

interface IComponents {
  [index: string]: any;
}

export { ITabsProps, ITab, IComponents };
