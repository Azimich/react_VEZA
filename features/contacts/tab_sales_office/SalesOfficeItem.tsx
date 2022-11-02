import Styles from "../Contacts.module.scss";
import React, { FC } from "react";
import { ISallesOffice } from "./SalesOffice";

const SalesOfficeItem: FC<ISallesOffice> = ({ image, title, desc }) => {
  return (
    <div className={Styles.director__items_item}>
      <div className={Styles.director__item_img}>
        <img src={image} alt={title} />
      </div>
      <div className={Styles.director__items_item_info}>
        <h3>{title}</h3>
      </div>
      <p>{desc}</p>
    </div>
  );
};
export { SalesOfficeItem };
