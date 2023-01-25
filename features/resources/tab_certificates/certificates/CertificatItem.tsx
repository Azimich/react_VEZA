import React, { FC } from "react";
import { ICertificates } from "features/resources/tab_bim/Bim";
import Styles from "../Certificates.module.scss";
import { CalendarIcon } from "components/icons";

const CertificatItem: FC<ICertificates> = ({ title, description, images }) => {
  return (
    <div className={Styles.sertificates__page__items__card}>
      <div className={Styles.sertificates__page__items__card__img}>
        <img src={images.pc} alt={title} />
      </div>
      <div>
        <div>
          <h2>sss</h2>
          <h3>{title}</h3>
        </div>
        <p>
          <CalendarIcon />
          {description}
        </p>
        <></>
      </div>
    </div>
  );
};

export { CertificatItem };
