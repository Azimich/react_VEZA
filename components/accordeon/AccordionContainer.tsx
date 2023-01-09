import { AccordionHeader } from "./AccordionHeader";
import { FC } from "react";
import { IAccordion } from "./Accordion";
import Styles from "./Accordion.module.scss";
import { useToggle } from "store/hooks/useToggle";

const AccordionContainer: FC<IAccordion> = ({
  title,
  icon_show,
  children,
  closeAccordionItem,
}) => {
  const [stateToggle, toggle] = useToggle(icon_show);

  return (
    <li
      className={`${
        stateToggle
          ? Styles.accordion__container__animation
          : Styles.accordion__container
      }`}
    >
      <AccordionHeader
        onClick={toggle as () => void}
        title={title}
        icon_show={stateToggle as boolean}
        closeAccordionItem={closeAccordionItem as boolean}
      >
        {children}
      </AccordionHeader>
    </li>
  );
};

export { AccordionContainer };
