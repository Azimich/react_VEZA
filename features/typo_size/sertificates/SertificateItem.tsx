import { FC } from "react";
import { ISertificatesData } from "./Sertificates";
import Styles from "./Sertificates.module.scss";

const SertificateItem: FC<ISertificatesData> = ({ title, desc, img }) => {
  return (
    <div className={Styles.sertificates_container_titleimg}>
      <span>
        <img src={img} alt="Фото" />
      </span>
      <h2 className={Styles.title}>{title}</h2>
      <p className={Styles.desc}>{desc}</p>
    </div>
  );
};
export { SertificateItem };
