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
}
export { ITabsProps, ITab };
