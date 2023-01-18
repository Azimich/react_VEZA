import React, { FC } from "react";
import { IObject } from "components/map/Map";
import Styles from "components/map/Map.module.scss";
import { EmailIcon, MapIcon, PhoneFooterIcon } from "components/icons";
import { Link } from "components/link";

const ModalFormOffice: FC<IObject> = (props) => {
  return (
    <>
      <p className={Styles.factory_info_fio}>
        Руководитель филиала:<p>{props.object.fio}</p>
      </p>
      <div className={Styles.factory_info}>
        <p className={`${Styles.factory_info_services} ${Styles.offices}`}>
          <MapIcon />
          <span>{props.object.address}</span>
        </p>
        <p className={`${Styles.factory_info_services} ${Styles.offices}`}>
          <PhoneFooterIcon />
          <Link url={"tel:" + props.object.service_phone}>
            <span>{props.object.service_phone}</span>
          </Link>
        </p>
        <p className={`${Styles.factory_info_services} ${Styles.offices}`}>
          <EmailIcon />
          <Link url={"mailto:" + props.object.service_phone}>
            <a>
              <span>{props.object.email}</span>
            </a>
          </Link>
        </p>
      </div>
    </>
  );
};

export { ModalFormOffice };
