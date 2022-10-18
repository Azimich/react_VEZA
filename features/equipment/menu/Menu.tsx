import Styles from "../Equipment.module.scss";
import { CategoryIcon } from "../../../components/icons";
import { MenuItem } from "./MenuItem";
import { breadcrumbsData } from "./mockData";
import { ICatalogEquipmentData } from "../Equipment";
import { useEffect, useState } from "react";
import { CatalogEquipmentData } from "../mockData";
import { useRouter } from "next/router";
import { getData } from "../../../utils/helpers";

const Menu = () => {
  const router = useRouter();

  const [menu, setMenu] = useState<ICatalogEquipmentData[]>(
    CatalogEquipmentData.filter((e) => e.parent_id === 0)
  );

  useEffect(() => {
    if (router.query.slug) {
      console.log(
        "---",
        router.query.slug,
        getData(CatalogEquipmentData, router.asPath)[0]?.level
      );

      let resData: ICatalogEquipmentData[] = [];
      for (
        let i = 0;
        i < getData(CatalogEquipmentData, router.asPath)[0]?.level;
        i++
      ) {
        resData.push(
          (breadcrumbsData[i] = {
            title: breadcrumbsData[i].title,
            id: breadcrumbsData[i].id,
            alias:
              getData(CatalogEquipmentData, router.asPath)[0]?.parent_id === 0
                ? "/equipment"
                : getData(CatalogEquipmentData, router.asPath)[0]?.alias,
            back: true,
          })
        );
      }
      console.log("resData", resData);
      let bySortId = resData.slice(0);
      bySortId.sort((a, b) => a.id - b.id);

      setMenu(
        bySortId.concat(
          getData(CatalogEquipmentData, router.asPath)[0]?.childrenData
        )
      );
    } else {
      setMenu(CatalogEquipmentData.filter((e) => e.parent_id === 0));
    }
  }, [router.query.slug]);
  /*
        const handleOnClick = (data: ICatalogEquipmentData[], level: number) => {
            console.log("hjhj")
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
            console.log("888", bySortId.concat(data))
            setMenu(bySortId.concat(data));
        };
    */

  return (
    <div className={Styles.equipment__container_menu}>
      <h2 className={Styles.equipment__container_menu_title}>
        <CategoryIcon />
        продукция
      </h2>
      <ul>
        {menu?.map((e) => {
          return <MenuItem key={e.id} {...e} />;
        })}
      </ul>
    </div>
  );
};
export { Menu };
