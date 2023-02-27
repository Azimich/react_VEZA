import { Link } from "components/link";
import { FC } from "react";
import { ICategoriesItem } from "../Equipment";
import Styles from "../Equipment.module.scss";
import { useRouter } from "next/router";

const CategoryItem: FC<ICategoriesItem> = ({ images, alias }) => {
  const router = useRouter();

  return (
    <Link
      url={router.asPath + "/" + alias}
      classLink={Styles.equipment__container_catalog_product_a}
    >
      <img src={images?.wide ? images?.wide : images?.pc} alt={"Photo"} />
    </Link>
  );
};

export { CategoryItem };
