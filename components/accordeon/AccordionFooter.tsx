import { FC, ReactNode } from "react";
import Styles from "./Accordion.module.scss";

interface IAAccordionFooter {
  children: ReactNode;
}

const AccordionFooter: FC<IAAccordionFooter> = ({ children }) => {
  return <div className={Styles.accordion__container__item}>{children}</div>;
};
export { AccordionFooter };
