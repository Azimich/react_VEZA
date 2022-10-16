import Styles from "../Equipment.module.scss";
import { CategoryIcon } from "../../../components/icons";
import { MenuItem } from "./MenuItem";

const Menu = () => {
  return (
    <div className={Styles.equipment__container_menu}>
      <h2 className={Styles.equipment__container_menu_title}>
        <CategoryIcon />
        продукция
      </h2>
      <MenuItem />
    </div>
  );
};
export { Menu };
