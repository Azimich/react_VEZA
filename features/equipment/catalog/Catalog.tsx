import { CategoryItem } from "./CategoryItem";
import Styles from "../Equipment.module.scss";
import { FC, useEffect, useState } from "react";
import { ICatalogEquipmentData, ICategoriesItem } from "../Equipment";
import { IBreadCrumbs } from "components/breadcrumbs";
import { dataBreadEquipment } from "components/breadcrumbs/mockData";
import { equipmentPath } from "utils/bootstrap";
import { checkEmptyObject, getParents } from "utils/helpers";
import { useRouter } from "next/router";
import { IImages } from "../../../types/response";

const Catalog: FC<{
  data: ICategoriesItem[];
  categories: ICategoriesItem[];
}> = ({ data, categories }) => {
  const router = useRouter();
  const [dataCategory] = useState<ICatalogEquipmentData>();
  const [free, setFree] = useState(false);
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadEquipment);
  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "Каталог продукции" }]);
  }, [dataBreadEquipment]);

  useEffect(() => {
    checkEmptyObject(router.query) ? setFree(false) : setFree(true);
  }, [router.query]);

  const dataClear = data?.filter((e) => {
    const d = e.images as IImages[];
    return d[0].pc !== "";
  });

  return (
    <div className={Styles.equipment__container_catalog}>
      <h1>{dataCategory ? dataCategory.title : "Каталог продукции"}</h1>
      <div
        className={`${Styles.equipment__container_catalog_product} ${
          free ? Styles.free : ""
        }`}
      >
        {dataClear?.map((e) => {
          e.aliasPath =
            equipmentPath +
            getParents(categories, e.alias)
              .reverse()
              .map((d) => d.alias)
              .join("/");
          return <CategoryItem key={e.alias} {...e} />;
        })}
      </div>
    </div>
  );
};

export { Catalog };
