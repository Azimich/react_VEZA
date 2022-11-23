import React, { FC } from "react";
import Styles from "./ReferencesModal.module.scss";
import IModalReferencesData from "./ReferencesModal.d";
import { ArrowRightIcon, LogoIcon } from "components/icons";

const ReferencesModal: FC<IModalReferencesData> = ({
  image,
  title,
  sub_title,
  production_1,
  production_2,
  production_3,
  address,
  onClick = () => {},
}) => {
  return (
    <div className={Styles.references__modal}>
      <div className={Styles.references__modal__logo}>
        <LogoIcon />
      </div>
      <img src={image} alt={title} />
      <div className={Styles.references__modal__body}>
        <ul>
          <h2>{title}</h2>
          <h3>{address}</h3>
          <li>{sub_title}</li>
          <li>{production_1}</li>
          <li>{production_2}</li>
          <li>{production_3}</li>
        </ul>
        <div
          onClick={() => onClick()}
          className={Styles.references__modal__body__button}
        >
          <span>
            <p>Подробнее</p>
            <ArrowRightIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export { ReferencesModal };
