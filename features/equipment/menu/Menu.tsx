import Styles from "../Equipment.module.scss";
import { CategoryIcon } from "../../../components/icons";
import { MenuItem } from "./MenuItem";
import { breadcrumbsData } from "./mockData";
import { ICatalogEquipmentData } from "../Equipment";
import { useEffect, useState } from "react";
import { CatalogEquipmentData } from "../mockData";
import { useRouter } from "next/router";

const Menu = () => {
  const router = useRouter();

  const [menu, setMenu] = useState<ICatalogEquipmentData[]>(
    CatalogEquipmentData.filter((e) => e.parent_id === 0)
  );

  useEffect(() => {
    console.log(router.query.slug);
    if (router.query.slug) {
      setMenu(
        CatalogEquipmentData.filter((e) => {
          return e.alias === router.asPath;
        })[0].childrenData
      );
    } else {
      setMenu(CatalogEquipmentData.filter((e) => e.parent_id === 0));
    }
  }, [router.query.slug]);

  const handleOnClick = (data: ICatalogEquipmentData[], level: number) => {
    let resData: ICatalogEquipmentData[] = [];
    for (let i = 0; i < level; i++) {
      resData.push(
        (breadcrumbsData[i] = {
          title: breadcrumbsData[i].title,
          id: breadcrumbsData[i].id,
          back: true,
        })
      );
    }

    let bySortId = resData.slice(0);
    bySortId.sort((a, b) => b.id - a.id);
    setMenu(resData.concat(data));
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
            <MenuItem
              key={e.id}
              {...e}
              onClick={(e, level) => handleOnClick(e, level)}
            />
          );
        })}
      </ul>
    </div>
  );
};
export { Menu };
