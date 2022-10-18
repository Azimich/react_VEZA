import { CategoryItem } from "./CategoryItem";
import { CatalogData } from "../mockData";
import Styles from "../Equipment.module.scss";
import { Pagination } from "../../../components/pagination/Pagination";

const Catalog = () => {
  return (
    <>
      <div className={Styles.equipment__container_catalog}>
        Оборудование
        <div className={Styles.equipment__container_catalog_product}>
          {CatalogData.map((e) => {
            return <CategoryItem key={e.id} {...e} />;
          })}
        </div>
        <Pagination currentPage={1} totalPageCount={6} pageSize={11} />
      </div>
    </>
  );
};

export { Catalog };
