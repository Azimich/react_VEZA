import { ArrowRightWhiteIcon } from "components/icons";
import { FC } from "react";
import { ICatalogEquipmentData } from "../Equipment";
import { CatalogEquipmentData } from "../mockData";
import { Link } from "../../../components/link";

const MenuItem: FC<ICatalogEquipmentData> = ({
  title = "",
  id,
  alias,
  onClick,
}) => {
  const wichoutLink =
    CatalogEquipmentData.filter(
      (e: { parent_id: number }) => id === e.parent_id
    ).length > 0 ? (
      <a onClick={() => onClick(id)}>
        <li>
          <span>{title}</span>
          <ArrowRightWhiteIcon />
        </li>
      </a>
    ) : (
      <Link url={alias}>
        <li>
          <span>{title}</span>
          <ArrowRightWhiteIcon />
        </li>
      </Link>
    );
  return wichoutLink;
};

export { MenuItem };
