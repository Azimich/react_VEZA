import { IObject, IObjectItem } from "components/map/Map";
import React, { FC } from "react";
import Styles from "components/map/Map.module.scss";
import { ArrowRightWithOutCircle } from "components/icons";
import { factoryPath } from "utils/bootstrap";
import { Link } from "components/link";

const ModalFormFactory: FC<IObject> = (e) => {
  console.log("props", e);

  return (
    <>
      <div className={Styles.modal_title}>{e.object.name}</div>
      <div className={Styles.factory_info}>
        <p className={Styles.factory_info_services}>
          Площадь производства<span>{e.object.production_area}</span>
        </p>
        <p className={Styles.factory_info_services}>
          Сервис:<span>{e.object.service_phone}</span>
        </p>
        <p className={Styles.factory_info_services}>
          Логистика:<span>{e.object.logistic_phone}</span>
        </p>
        <p className={Styles.factory_info_services}>
          Адрес:
          <span>{e.object.address}</span>
        </p>
      </div>
      <Link url={factoryPath + e.alias} classLink={Styles.factory_button}>
        История завода <ArrowRightWithOutCircle />
      </Link>
    </>
  );
};
export { ModalFormFactory };
