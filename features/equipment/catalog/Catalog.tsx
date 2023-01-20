import { CategoryItem } from "./CategoryItem";
import Styles from "../Equipment.module.scss";
import { FC, useState } from "react";
import { ICatalogEquipmentData, ICategoriesItem } from "../Equipment";

const Catalog: FC<{ data: ICategoriesItem[] }> = ({ data }) => {
  /*  const router = useRouter();*/
  console.log("data", data);
  const [dataCategory /*setDataCategory*/] = useState<ICatalogEquipmentData>();
  /*  useEffect(() => {
      setDataCategory(getData(CatalogEquipmentData, router.asPath).shift());
    }, []);*/

  return (
    <>
      <div className={Styles.equipment__container_catalog}>
        <h1>{dataCategory ? dataCategory.title : "Каталог продукции"}</h1>
        <div className={Styles.equipment__container_catalog_product}>
          {data?.map((e) => {
            return <CategoryItem key={e.alias} {...e} />;
          })}
        </div>
        {/*<Pagination currentPage={1} totalPageCount={6} pageSize={11} />*/}
      </div>
    </>
  );
};

export { Catalog };
