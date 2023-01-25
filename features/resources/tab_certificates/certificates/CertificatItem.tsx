import React, { FC } from "react";
import { ICertificates } from "features/resources/tab_bim/Bim";
import Styles from "../Certificates.module.scss";
import { CalendarIcon } from "components/icons";
import { Link } from "components/link";
import { Button } from "components/button";

const CertificatItem: FC<ICertificates> = ({
  documentURL,
  title,
  description,
  images,
  kind,
}) => {
  return (
    <div className={Styles.sertificates__page__items__card}>
      <div className={Styles.sertificates__page__items__card__img}>
        <Link url={documentURL} target={"_blank"}>
          <img src={images.pc} alt={title} />
        </Link>
      </div>
      <div className={Styles.separ}>
        <div>
          <Link
            url={documentURL}
            target={"_blank"}
            download={true}
            classLink={Styles.sil}
          >
            <h2>{kind}</h2>
          </Link>
          <h3>{title}</h3>
          <p>
            <CalendarIcon />
            {description}
          </p>
        </div>
        <Link
          url={documentURL}
          target={"_blank"}
          download={true}
          classLink={Styles.sil}
        >
          <Button>Скачать PDF</Button>
        </Link>
      </div>
    </div>
  );
};

export { CertificatItem };
