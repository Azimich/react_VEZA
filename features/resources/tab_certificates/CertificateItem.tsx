import React from "react";
import { FC } from "react";
import { ICertificates } from "../tab_bim/Bim";
import Styles from "./Certificates.module.scss";

const CertificateItem: FC<ICertificates> = ({ image }) => {
  return (
    <a href="#" className={Styles.certificates__items__item}>
      <div className={Styles.certificates__items__item__img}>
        <img src={image} alt="" />
      </div>
    </a>
  );
};

export { CertificateItem };
