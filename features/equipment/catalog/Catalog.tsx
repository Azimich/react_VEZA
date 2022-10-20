import { CategoryItem } from "./CategoryItem";
import { CatalogEquipmentData } from "../mockData";
import Styles from "../Equipment.module.scss";
import { Pagination } from "../../../components/pagination/Pagination";
import { getData } from "../../../utils/helpers";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { ICatalogData, ICatalogEquipmentData } from "../Equipment";

const Catalog: FC<{ data: ICatalogData[] }> = ({ data }) => {
  const router = useRouter();
  const [dataCategory, setDataCategory] = useState<ICatalogEquipmentData>();
  useEffect(() => {
    setDataCategory(getData(CatalogEquipmentData, router.asPath).shift());
  }, []);

  return (
    <>
      <div className={Styles.equipment__container_catalog}>
        <h1>{dataCategory && dataCategory.title}</h1>
        <div className={Styles.equipment__container_catalog_banner}>
          <img src={dataCategory && dataCategory.img} alt="Фото" />
        </div>
        <div className={Styles.equipment__container_catalog_product}>
          {data?.map((e) => {
            return <CategoryItem key={e.id} {...e} />;
          })}
        </div>
        <Pagination currentPage={1} totalPageCount={6} pageSize={11} />
      </div>
    </>
  );
};

export { Catalog };
