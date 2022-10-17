import { CategoryItem } from "./CategoryItem";
import { CatalogData } from "../mockData";
import Styles from "../Equipment.module.scss";

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
      </div>
    </>
  );
};

export { Catalog };
