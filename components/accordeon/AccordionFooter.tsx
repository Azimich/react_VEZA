import { FC, ReactNode } from "react";

interface IAAccordionFooter {
  children: ReactNode;
}

const AccordionFooter: FC<IAAccordionFooter> = ({ children }) => {
  return <div>{children}</div>;
};
export { AccordionFooter };
