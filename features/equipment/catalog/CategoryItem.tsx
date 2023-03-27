import { Link } from "components/link";
import { FC } from "react";
import { ICategoriesItem } from "../Equipment";
import Styles from "../Equipment.module.scss";
import { isMobile, isTablet, isDesktop } from "react-device-detect";
import { IImages } from "types/response";
import { ArchiveIcon } from "components/icons";
import { useAppSelector } from "store/hooks";
import { getAuth } from "features/auth/AuthSlice";

const CategoryItem: FC<ICategoriesItem> = ({
  onChange,
  archived,
  alias,
  images,
  title,
  aliasPath,
}) => {
  const img = images as IImages[];
  const auth = useAppSelector(getAuth);

  const handleOnClickArchive = (alias: string) => {
    onChange(alias);
  };
  return (
    <div
      className={`${Styles.equipment__container_catalog_product_a} ${
        archived ? Styles.archived : ""
      }`}
    >
      <Link url={aliasPath}>
        {isMobile && <img src={img[0]?.mobile} alt={title} />}
        {isTablet && <img src={img[0]?.ipad} alt={title} />}
        {isDesktop && (
          <img src={img[0]?.wide ? img[0]?.wide : img[0]?.pc} alt={title} />
        )}
      </Link>
      {auth.identify && (
        <span
          onClick={() => {
            handleOnClickArchive(alias);
          }}
        >
          <ArchiveIcon />
        </span>
      )}
    </div>
  );
};

export { CategoryItem };
