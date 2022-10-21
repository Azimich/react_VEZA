import { ReactNode } from "react";

interface ITab {
  id?: number;
  title: string;
  content: ReactNode;
  tabsActive?: number;
  onClick?: (id: number) => void;
}

interface ITabsProps {
  props: ITab[];
  onClick: (id: number) => void;
  activeTab?: number;
  size?: "small300" | "max";
}

interface IComponents {
  [index: string]: any;
}

export { ITabsProps, ITab, IComponents };
