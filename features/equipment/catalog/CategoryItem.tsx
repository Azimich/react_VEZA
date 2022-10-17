import { FC } from "react";
import { ICatalogData } from "../Equipment";
import Styles from "../Equipment.module.scss";
import Link from "next/link";

const CategoryItem: FC<ICatalogData> = ({ img }) => {
  return (
    <Link href={"#"}>
      <a className={Styles.equipment__container_catalog_product_a}>
        <img src={img} />
      </a>
    </Link>
  );
};

export { CategoryItem };
