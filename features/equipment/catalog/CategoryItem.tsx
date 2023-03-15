import { Link } from "components/link";
import { FC } from "react";
import { ICategoriesItem } from "../Equipment";
import Styles from "../Equipment.module.scss";
import { isMobile, isTablet, isDesktop } from "react-device-detect";
import { IImages } from "types/response";

const CategoryItem: FC<ICategoriesItem> = ({ images, title, aliasPath }) => {
  const img = images as IImages[];
  return (
    <Link
      url={aliasPath}
      classLink={Styles.equipment__container_catalog_product_a}
    >
      {isMobile && <img src={img[0]?.mobile} alt={title} />}
      {isTablet && <img src={img[0]?.ipad} alt={title} />}
      {isDesktop && (
        <img src={img[0]?.wide ? img[0]?.wide : img[0]?.pc} alt={title} />
      )}
    </Link>
  );
};

export { CategoryItem };
