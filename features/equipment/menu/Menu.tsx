import Styles from "../Equipment.module.scss";
import { CategoryIcon } from "components/icons";
import { MenuItem } from "./MenuItem";
import { breadcrumbsData } from "./mockData";
import { ICategoriesItem } from "../Equipment.d";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getData, getParents } from "utils/helpers";
import { equipmentPath } from "utils/bootstrap";

interface IMenu {
  categories: ICategoriesItem[];
  data: ICategoriesItem[];
  alias: string;
}

const Menu: FC<IMenu> = ({ categories, data, alias }) => {
  const router = useRouter();
  const [menu, setMenu] = useState<ICategoriesItem[]>([]);

  useEffect(() => {
    //categories?.filter((e) => e.level === 0)
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
        const bySortLevel = parentsData.slice(0);
        bySortLevel.sort((a, b) => a.level - b.level);

        resData.push({
          title: breadcrumbsData[i]?.title,
          alias:
            i === 0 ? "/equipment" : equipmentPath + bySortLevel[i - 1]?.alias,
          back: true,
          level: i,
        });
      }

      const bySortId = resData.slice(0);
      bySortId.sort((a, b) => a.level - b.level);

      setMenu(
        bySortId.concat(
          getData(categories, alias)[0]?.subCategories?.map((e) => {
            return { ...e, alias: router.asPath + "/" + e.alias };
          }),
        ),
      );
    } else {
      categories?.length > 0 &&
        setMenu(
          categories?.map((e) => {
            return { ...e, alias: router.asPath + "/" + e.alias };
          }),
        );
    }
  }, [router.query.slug, categories]);

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
