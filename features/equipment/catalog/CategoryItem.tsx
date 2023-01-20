import { Link } from "components/link";
import { FC } from "react";
import { ICategoriesItem } from "../Equipment";
import Styles from "../Equipment.module.scss";

const CategoryItem: FC<ICategoriesItem> = ({ images, alias }) => {
  return (
    <Link url={alias} classLink={Styles.equipment__container_catalog_product_a}>
      <img src={images && images.pc} alt={"Photo"} />
    </Link>
  );
};

export { CategoryItem };
