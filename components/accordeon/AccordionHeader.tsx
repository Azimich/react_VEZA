import Styles from "./Accordion.module.scss";

const AccordionHeader = () => {
  return (
    <div className={Styles.header_container}>
      <span>Название Таблицы</span>
    </div>
  );
};
export { AccordionHeader };
