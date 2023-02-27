import { CategoryItem } from "./CategoryItem";
import Styles from "../Equipment.module.scss";
import { FC, useEffect, useState } from "react";
import { ICatalogEquipmentData, ICategoriesItem } from "../Equipment";
import { IBreadCrumbs } from "components/breadcrumbs";
import { dataBreadEquipment } from "components/breadcrumbs/mockData";

const Catalog: FC<{ data: ICategoriesItem[] }> = ({ data }) => {
  const [dataCategory] = useState<ICatalogEquipmentData>();
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadEquipment);
  console.log("data", data);
  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "Каталог продукции" }]);
  }, [dataBreadEquipment]);

  return (
    <div className={Styles.equipment__container_catalog}>
      <h1>{dataCategory ? dataCategory.title : "Каталог продукции"}</h1>
      <div className={Styles.equipment__container_catalog_product}>
        {data?.map((e) => {
          return <CategoryItem key={e.alias} {...e} />;
        })}
      </div>
    </div>
  );
};

export { Catalog };
