import { Link } from "components/link";
import { FC } from "react";
import { ICategoriesItem } from "../Equipment";
import Styles from "../Equipment.module.scss";
import { useRouter } from "next/router";
import { isMobile, isTablet, isDesktop } from "react-device-detect";
import { IImages } from "types/response";

const CategoryItem: FC<ICategoriesItem> = ({ parentAlias, images, alias }) => {
  const router = useRouter();
  const img = images as IImages[];
  return (
    <Link
      url={router.asPath + "/" + parentAlias + "/" + alias}
      classLink={Styles.equipment__container_catalog_product_a}
    >
      {isMobile && <img src={img[0]?.mobile} alt={alias} />}
      {isTablet && <img src={img[0]?.ipad} alt={alias} />}
      {isDesktop && (
        <img src={img[0]?.wide ? img[0]?.wide : img[0]?.pc} alt={alias} />
      )}
    </Link>
  );
};

export { CategoryItem };
