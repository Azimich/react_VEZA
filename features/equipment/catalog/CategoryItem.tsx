import { Link } from "components/link";
import { FC } from "react";
import { ICatalogData } from "../Equipment";
import Styles from "../Equipment.module.scss";

const CategoryItem: FC<ICatalogData> = ({ img, alias }) => {
  return (
    <Link url={alias} classLink={Styles.equipment__container_catalog_product_a}>
      <img src={img} />
    </Link>
  );
};

export { CategoryItem };
