import { Link } from "components/link";
import { FC } from "react";
import { ICatalogData } from "../Equipment";
import Styles from "../Equipment.module.scss";

const CategoryItem: FC<ICatalogData> = ({ image, alias }) => {
  console.log("catalog image", image);
  return (
    <Link url={alias} classLink={Styles.equipment__container_catalog_product_a}>
      <img src={image?.length > 0 && image} alt={"Photo"} />
    </Link>
  );
};

export { CategoryItem };
