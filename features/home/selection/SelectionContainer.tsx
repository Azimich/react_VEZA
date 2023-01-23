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
        <Link url={"auth/singin"}>
          <Button size={"medium"} theme={"banner"}>
            Расчитать
          </Button>
        </Link>
      </div>
    </>
  );
};
export { SelectionContainer };
