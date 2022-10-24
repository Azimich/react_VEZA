import { AccordionHeader } from "./AccordionHeader";
import { FC } from "react";
import { IAccordion } from "./Accordion";
import { useToggle } from "../../store/hooks/useToggle";

const AccordionContainer: FC<IAccordion> = ({ title, icon_show, children }) => {
  const [stateToggle, toggle] = useToggle(icon_show);

  return (
    <div>
      <AccordionHeader
        onClick={toggle as () => void}
        title={title}
        icon_show={stateToggle as boolean}
      >
        {children}
      </AccordionHeader>
    </div>
  );
};

export { AccordionContainer };
