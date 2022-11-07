interface IAccordion {
  title?: string;
  icon_show?: boolean;
  closeAccordionItem?: boolean;
}
interface IAccordionHeader {
  onClick?: () => void;
  title?: string;
  icon_show?: boolean;
  closeAccordionItem?: boolean;
  className?: string;
}
export { IAccordion, IAccordionHeader };
