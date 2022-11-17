import Styles from "./Accordion.module.scss";
import { ArrowDownIcon } from "../icons";
import { FC } from "react";
import { IAccordionHeader } from "./Accordion";

const AccordionHeader: FC<IAccordionHeader> = ({
  onClick,
  title,
  icon_show,
  children,
}) => {
  return (
    <>
      <div className={Styles.header_container} onClick={() => onClick()}>
        <span>{title}</span>
        <ArrowDownIcon
          className={`${icon_show ? Styles.arrow : Styles.arrow__show}`}
        />
      </div>
      <div className={Styles.accordion__container__item}>{children}</div>
    </>
  );
};
export { AccordionHeader };
