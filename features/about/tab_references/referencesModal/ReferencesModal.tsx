import React, { FC } from "react";
import Styles from "./ReferencesModal.module.scss";
import IModalReferencesData from "./ReferencesModal.d";
import { LogoIcon } from "components/icons";

const ReferencesModal: FC<IModalReferencesData> = ({
  image,
  title,
  sub_title,
  production_1,
  production_2,
  production_3,
}) => {
  return (
    <div className={Styles.references__modal}>
      <div className={Styles.references__modal__logo}>
        <LogoIcon />
      </div>
      <div className={Styles.references__modal__body}>
        <div className={Styles.references__modal__body__image_box}>
          <img src={image} alt={title} />
        </div>
        <ul>
          <h2>{title}</h2>
          <li>{sub_title}</li>
          <li>{production_1}</li>
          <li>{production_2}</li>
          <li>{production_3}</li>
        </ul>
      </div>
    </div>
  );
};

export { ReferencesModal };
