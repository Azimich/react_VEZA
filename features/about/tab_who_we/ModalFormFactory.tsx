import { IObjectItem } from "../../../components/map/Map";
import React, { FC } from "react";
import Styles from "../../../components/map/Map.module.scss";
import { ArrowRightWithOutCircle } from "components/icons";
import { factoryPath } from "../../../utils/bootstrap";
import { Link } from "../../../components/link";

const ModalFormFactory: FC<IObjectItem> = (e) => {
  return (
    <div>
      <div className={Styles.modal_title}>{e.name}</div>
      <div className={Styles.factory_info}>
        <p className={Styles.factory_info_services}>
          Площадь производства<span>16 900 м2</span>
        </p>
        <p className={Styles.factory_info_services}>
          Сервис:<span>Тел: +7 495 989-47-20</span>
        </p>
        <p className={Styles.factory_info_services}>
          Логистика:<span>Тел: +7 495 626-99-30</span>
        </p>
        <p className={Styles.factory_info_services}>
          Адрес:
          <span>
            <b>Рабочая 10А</b> 111397, Москва Россия
          </span>
        </p>
      </div>
      <Link url={factoryPath + e.alias} classLink={Styles.factory_button}>
        История завода <ArrowRightWithOutCircle />
      </Link>
    </div>
  );
};
export { ModalFormFactory };
