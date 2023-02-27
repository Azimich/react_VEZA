import { Link } from "components/link";
import { FC } from "react";
import { ICategoriesItem } from "../Equipment";
import Styles from "../Equipment.module.scss";
import { useRouter } from "next/router";
import { isMobile, isTablet, isDesktop } from "react-device-detect";

const CategoryItem: FC<ICategoriesItem> = ({ images, alias }) => {
  const router = useRouter();
  return (
    <Link
      url={router.asPath + "/" + alias}
      classLink={Styles.equipment__container_catalog_product_a}
    >
      {isMobile && <img src={images[0]?.mobile} alt={alias} />}
      {isTablet && <img src={images[0]?.ipad} alt={alias} />}
      {isDesktop && (
        <img
          src={images[0]?.wide ? images[0]?.wide : images[0]?.pc}
          alt={alias}
        />
      )}
    </Link>
  );
};

export { CategoryItem };
