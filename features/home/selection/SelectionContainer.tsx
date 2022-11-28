import Styles from "./Selection.module.scss";
import { Button } from "components/button";
import { LinkContainer } from "components/link/LinkContainer";
import { Link } from "components/link";

const SelectionContainer = () => {
  return (
    <>
      <div className={Styles.selectionContainer}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis
        id, placeat quam suscipit, est numquam voluptatum nihil rerum eius
        fugiat?
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
