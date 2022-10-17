import Styles from "../Equipment.module.scss";
import { CategoryIcon } from "../../../components/icons";
import { MenuItem } from "./MenuItem";
import { CatalogEquipmentData } from "../mockData";

import { ICatalogEquipmentData } from "../Equipment";
import { useState } from "react";
import { getNested } from "../../../utils";

const Menu = () => {
  const [menu, setMenu] = useState<ICatalogEquipmentData[]>(
    CatalogEquipmentData.filter((e) => e.parent_id === 0)
  );

  const handleOnClick = (data: number) => {
    console.log("getNested", getNested(CatalogEquipmentData));
    setMenu(CatalogEquipmentData.filter((e) => data === e.parent_id));
  };
  return (
    <div className={Styles.equipment__container_menu}>
      <h2 className={Styles.equipment__container_menu_title}>
        <CategoryIcon />
        продукция
      </h2>
      <ul>
        {menu.map((e) => {
          return (
            <MenuItem key={e.id} {...e} onClick={(e) => handleOnClick(e)} />
          );
        })}
      </ul>
    </div>
  );
};
export { Menu };
