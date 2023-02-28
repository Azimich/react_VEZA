import { CategoryItem } from "./CategoryItem";
import Styles from "../Equipment.module.scss";
import { FC, useEffect, useState } from "react";
import { ICatalogEquipmentData, ICategoriesItem } from "../Equipment";
import { IBreadCrumbs } from "components/breadcrumbs";
import { dataBreadEquipment } from "components/breadcrumbs/mockData";
import { equipmentPath } from "utils/bootstrap";
import { getParents } from "utils/helpers";

const Catalog: FC<{
  data: ICategoriesItem[];
  categories: ICategoriesItem[];
}> = ({ data, categories }) => {
  const [dataCategory] = useState<ICatalogEquipmentData>();
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadEquipment);
  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "Каталог продукции" }]);
  }, [dataBreadEquipment]);

  return (
    <div className={Styles.equipment__container_catalog}>
      <h1>{dataCategory ? dataCategory.title : "Каталог продукции"}</h1>
      <div className={Styles.equipment__container_catalog_product}>
        {data?.map((e) => {
          e.aliasPath =
            equipmentPath +
            getParents(categories, e.alias)
              .reverse()
              .map((d) => d.alias)
              .join("/");
          console.log("e", e);
          return <CategoryItem key={e.alias} {...e} />;
        })}
      </div>
    </div>
  );
};

export { Catalog };
