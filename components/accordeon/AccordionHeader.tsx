import Styles from "./Accordion.module.scss";
import { ArrowDownIcon, ArrowUpIcon } from "../icons";
import { FC } from "react";
import { IAccordionHeader } from "./Accordion";
import { AccordionFooter } from "./AccordionFooter";

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
        {icon_show ? <ArrowDownIcon /> : <ArrowUpIcon />}
      </div>
      {icon_show && <AccordionFooter children={children} />}
    </>
  );
};
export { AccordionHeader };
