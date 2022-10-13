import Styles from "./Selection.module.scss";
import { Button } from "../../../components/button";
const SelectionContainer = () => {
  return (
    <>
      <div className={Styles.selectionContainer}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis
        id, placeat quam suscipit, est numquam voluptatum nihil rerum eius
        fugiat?
      </div>
      <div className={Styles.selectionButton}>
        <Button link={""} size={"small"} theme={"banner"}>
          Расчитать
        </Button>
      </div>
    </>
  );
};
export { SelectionContainer };
