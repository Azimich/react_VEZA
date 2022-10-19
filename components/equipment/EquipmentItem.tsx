import { FC } from "react";
import { IEquipmentData } from "./Equipment";
import Styles from "./Equipment.module.scss";
import { Link } from "../link";

const EquipmentItem: FC<IEquipmentData> = ({ image, url, position }) => {
  return (
    <div className={`${Styles[`col${position}`]}`}>
      <div className={Styles.equipment_container_item}>
        <Link url={url}>
          <img src={image} alt="" />
        </Link>
      </div>
    </div>
  );
};
export { EquipmentItem };
