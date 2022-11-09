import { IObjectItem } from "components/map/Map";
import React, { FC } from "react";
import Styles from "components/map/Map.module.scss";
import {
  EmailIcon,
  MapIcon,
  PhoneFooterIcon,
  TelefoneIcon,
} from "components/icons";
import { Link } from "components/link";

const ModalFormOffice: FC<IObjectItem> = (e) => {
  console.log("eee", e);
  return (
    <div>
      <div className={Styles.modal_title}>{e.name}</div>
      <p className={Styles.factory_info_fio}>
        Руководитель филиала:<p>{e.fio}</p>
      </p>
      <div className={Styles.factory_info}>
        <p className={Styles.factory_info_services}>
          <MapIcon />
          <span>{e.address}</span>
        </p>
        <p className={Styles.factory_info_services}>
          <PhoneFooterIcon />
          <Link url={"tel:" + e.service_phone}>
            <a>
              <span>{e.service_phone}</span>
            </a>
          </Link>
        </p>
        <p className={Styles.factory_info_services}>
          <EmailIcon />
          <Link url={"mailto:" + e.service_phone}>
            <a>
              <span>{e.email}</span>
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};
export { ModalFormOffice };
