import Styles from "../Contacts.module.scss";
import React, { FC } from "react";
import { ISallesOffice } from "./SalesOffice";
import { EmailIcon, PhoneFooterIcon } from "components/icons";

const SalesOfficeItem: FC<ISallesOffice> = ({
  image,
  title,
  desc,
  email,
  phone,
}) => {
  return (
    <div className={Styles.director__items_item}>
      <div className={Styles.director__item_img}>
        <img src={image} alt={title} />
      </div>
      <div className={Styles.director__items_item_info}>
        <h3>{title}</h3>
      </div>
      <p>{desc}</p>
      <ul className={Styles.director__items_item_calls}>
        <a href={"tel:" + phone}>
          <PhoneFooterIcon />
          {phone}
        </a>
        <a href={"mailto:" + email}>
          <EmailIcon />
          {email}
        </a>
      </ul>
    </div>
  );
};
export { SalesOfficeItem };
