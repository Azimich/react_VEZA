import Styles from "./Selection.module.scss";
import { Button } from "components/button";
import { Link } from "components/link";

const SelectionContainer = () => {
  return (
    <>
      <div className={Styles.selectionContainer}>
        Оформление бланка-заказа осуществляется через программу расчета
      </div>
      <div className={Styles.selectionButton}>
        <Link url={"/develop"}>
          <Button size={"medium"} theme={"banner"} children={"Рассчитать"} />
        </Link>
      </div>
    </>
  );
};
export { SelectionContainer };
