import Styles from "../Equipment.module.scss";
import { CategoryIcon } from "components/icons";
import { MenuItem } from "./MenuItem";
import { breadcrumbsData } from "./mockData";
import { FC, useEffect, useState } from "react";
import { getData, getParents } from "utils/helpers";
import { equipmentPath } from "utils/bootstrap";
import { ICategoriesItem } from "features/equipment/Equipment.d";
import { useRouter } from "next/router";

interface IMenu {
  categories: ICategoriesItem[];
  data: ICategoriesItem[];
  alias: string;
}

const Menu: FC<IMenu> = ({ categories, data, alias }) => {
  const [menu, setMenu] = useState<ICategoriesItem[]>([]);
  const router = useRouter();
  useEffect(() => {
    data?.length > 0 && setMenu(data);
  }, [data]);

  useEffect(() => {
    if (alias) {
      const resData: ICategoriesItem[] = [];
      for (let i = 0; i < getData(categories, alias)[0]?.level; i++) {
        const parentsData = getParents(
          categories,
          getData(categories, alias)[0]?.parentAlias,
          getData(categories, alias)[0]?.level,
        );
        console.log("1111", data);
        const bySortLevel = parentsData.slice(0);
        bySortLevel.sort((a, b) => a.level - b.level);
        resData.push({
          title: breadcrumbsData[i]?.title,
          alias:
            i === 0
              ? "/produktsiya"
              : equipmentPath +
                getParents(categories, bySortLevel[i - 1]?.alias)
                  .reverse()
                  .map((d) => d.alias)
                  .join("/"),
          back: true,
          level: i,
        });
      }

      const bySortId = resData.slice(0);
      bySortId.sort((a, b) => a.level - b.level);
      setMenu(
        bySortId.concat(
          getData(categories, alias)[0]?.subCategories?.map((e) => {
            return {
              ...e,
              alias:
                equipmentPath +
                getParents(categories, e.alias)
                  .reverse()
                  .map((d) => d.alias)
                  .join("/"),
            };
          }),
        ),
      );
    } else {
      console.log("2222", data);
      categories?.length > 0 &&
        setMenu(
          categories?.map((e) => {
            return { ...e, alias: equipmentPath + e.alias };
          }),
        );
    }
  }, [router.query]);

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
