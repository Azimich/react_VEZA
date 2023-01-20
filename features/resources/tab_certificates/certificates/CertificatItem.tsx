import React, { FC } from "react";
import { ICertificates } from "features/resources/tab_bim/Bim";
import Styles from "../Certificates.module.scss";

const CertificatItem: FC<ICertificates> = ({ title, desc, image }) => {
  return (
    <div className={Styles.sertificates__page__items__card}>
      <div className={Styles.sertificates__page__items__card__img}>
        <img src={image.imageUrlPc} alt={image.imageTitlePc} />
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export { CertificatItem };
