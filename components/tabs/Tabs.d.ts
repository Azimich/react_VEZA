interface ITabs {
  id?: number;
  title: string;
  tabsActive?: number;
  onClick?: () => void;
}
interface ITabsProps {
  props: ITabs[];
}
export { ITabsProps, ITabs };
