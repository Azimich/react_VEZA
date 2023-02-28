import { FC } from "react";
import Styles from "./Equipment.module.scss";
import { Link } from "../link";
import { IEquipment } from "features/decision/Decision";
import { equipmentPath } from "utils/bootstrap";

const EquipmentItem: FC<IEquipment> = ({
  imageUrl,
  alias,
  title,
  aliasOtr,
}) => {
  return (
    <div className={Styles.equipment_container_item}>
      <Link url={equipmentPath + alias + "?otrasl=" + aliasOtr}>
        <img src={imageUrl} alt={title} />
      </Link>
    </div>
  );
};

export { EquipmentItem };
