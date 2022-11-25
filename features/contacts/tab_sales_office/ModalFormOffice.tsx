import { IObjectItem } from "components/map/Map";
import React, { FC } from "react";
import Styles from "components/map/Map.module.scss";
import { EmailIcon, MapIcon, PhoneFooterIcon } from "components/icons";
import { Link } from "components/link";

const ModalFormOffice: FC<IObjectItem> = ({
  fio,
  address,
  service_phone,
  email,
}) => {
  return (
    <div>
      <div className={Styles.modal_title}>{service_phone}</div>
      <p className={Styles.factory_info_fio}>
        Руководитель филиала:<p>{fio}</p>
      </p>
      <div className={Styles.factory_info}>
        <p className={Styles.factory_info_services}>
          <MapIcon />
          <span>{address}</span>
        </p>
        <p className={Styles.factory_info_services}>
          <PhoneFooterIcon />
          <Link url={"tel:" + service_phone}>
            <a>
              <span>{service_phone}</span>
            </a>
          </Link>
        </p>
        <p className={Styles.factory_info_services}>
          <EmailIcon />
          <Link url={"mailto:" + service_phone}>
            <a>
              <span>{email}</span>
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export { ModalFormOffice };
