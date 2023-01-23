import Styles from "../Contacts.module.scss";
import React, { FC } from "react";
import { EmailIcon, PhoneFooterIcon } from "components/icons";
import { IManagers } from "features/about/tab_job/Job";

const SalesOfficeItem: FC<IManagers> = ({
  imageUrl,
  title,
  description,
  mail,
  phone,
}) => {
  return (
    <div className={Styles.director__items_item}>
      <div className={Styles.director__item_img}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={Styles.director__items_item_info}>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
      <ul className={Styles.director__items_item_calls}>
        <a href={"tel:" + phone}>
          <PhoneFooterIcon />
          {phone}
        </a>
        <a href={"mailto:" + mail}>
          <EmailIcon />
          {mail}
        </a>
      </ul>
    </div>
  );
};
export { SalesOfficeItem };
