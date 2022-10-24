import Styles from "../Equipment.module.scss";
import { CategoryIcon } from "../../../components/icons";
import { MenuItem } from "./MenuItem";
import { breadcrumbsData } from "./mockData";
import { ICatalogEquipmentData } from "../Equipment";
import { useEffect, useState } from "react";
import { CatalogEquipmentData } from "../mockData";
import { useRouter } from "next/router";
import { getData, getParents } from "../../../utils/helpers";

const Menu = () => {
  const router = useRouter();
  const [menu, setMenu] = useState<ICatalogEquipmentData[]>(
    CatalogEquipmentData.filter((e) => e.parent_id === 0)
  );

  useEffect(() => {
    if (router.query.slug) {
      let resData: ICatalogEquipmentData[] = [];
      for (
        let i = 0;
        i <
        getData(CatalogEquipmentData, "/equipment/" + router.query.slug)[0]
          ?.level;
        i++
      ) {
        const parentsData = getParents(
          CatalogEquipmentData,
          getData(CatalogEquipmentData, "/equipment/" + router.query.slug)[0]
            ?.parent_id
        );
        let bySortLevel = parentsData.slice(0);
        bySortLevel.sort((a, b) => a.level - b.level);

        resData.push(
          (breadcrumbsData[i] = {
            title: breadcrumbsData[i]?.title,
            id: breadcrumbsData[i]?.id,
            alias: i === 0 ? "/equipment/" : bySortLevel[i - 1]?.alias,
            back: true,
          })
        );
      }

      let bySortId = resData.slice(0);
      bySortId.sort((a, b) => a.id - b.id);

      setMenu(
        bySortId.concat(
          getData(CatalogEquipmentData, "/equipment/" + router.query.slug)[0]
            ?.childrenData
        )
      );
    } else {
      setMenu(CatalogEquipmentData.filter((e) => e.parent_id === 0));
    }
  }, [router.query.slug]);

  return (
    <div className={Styles.equipment__container_menu}>
      <h2 className={Styles.equipment__container_menu_title}>
        <CategoryIcon />
        продукция
      </h2>
      <ul>
        {menu?.map((e, i) => {
          return <MenuItem key={i} {...e} />;
        })}
      </ul>
    </div>
  );
};
export { Menu };
