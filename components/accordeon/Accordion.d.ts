interface IAccordion {
  title?: string;
  icon_show?: boolean;
}
interface IAccordionHeader {
  onClick?: () => void;
  title?: string;
  icon_show?: boolean;
}
export { IAccordion, IAccordionHeader };
