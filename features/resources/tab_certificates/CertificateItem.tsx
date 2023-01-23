import React from "react";
import { FC } from "react";
import { ICertificates } from "../tab_bim/Bim";
import Styles from "./Certificates.module.scss";
import { Link } from "components/link";
import { resourcesPath } from "utils/bootstrap";

const CertificateItem: FC<ICertificates> = ({ image, alias, parent }) => {
  console.log(image, alias, parent);

  return (
    <div className={Styles.certificates__items__block}>
      <Link
        url={resourcesPath + "certificates/" + alias}
        classLink={Styles.certificates__items__item}
      >
        <div className={Styles.certificates__items__item__img}>
          <img src={image.imageUrlPc} alt={image.imageTitlePc} />
        </div>
      </Link>
    </div>
  );
};

export { CertificateItem };
