import { FC } from "react";
import Styles from "./Equipment.module.scss";
import { Link } from "../link";
import { IEquipment } from "features/decision/Decision";

const EquipmentItem: FC<IEquipment> = ({ imageUrl, alias }) => {
  return (
    <div className={Styles.equipment_container_item}>
      <Link url={alias}>
        <img src={imageUrl} alt="" />
      </Link>
    </div>
  );
};
export { EquipmentItem };
