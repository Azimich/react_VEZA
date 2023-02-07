import React, { FC, useState } from "react";
import { ICertificates } from "features/resources/tab_bim/Bim";
import Styles from "../Certificates.module.scss";
import { CalendarIcon, DownloadIcon } from "components/icons";
import { Link } from "components/link";
import { Button } from "components/button";
import { onButtonClick } from "utils/helpers";
import { SpinnerButton } from "components/spinners";

const CertificatItem: FC<ICertificates> = ({
  documentURL,
  title,
  description,
  images,
  kind,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [download, setDownload] = useState(true);

  const handleDownload = () => {
    setIsLoading(true);
    setDownload(false);
    onButtonClick(documentURL, title).then(() => {
      setIsLoading(false);
      setDownload(true);
    });
  };

  return (
    <div className={Styles.sertificates__page__items__card}>
      <div className={Styles.sertificates__page__items__card__img}>
        <Link url={"/pdfviewer?document=" + documentURL}>
          <img src={images.pc} alt={title} />
        </Link>
      </div>
      <div className={Styles.separ}>
        <Link url={documentURL} target={"_blank"} classLink={Styles.sil}>
          <h2>{kind}</h2>
        </Link>
        <h3>{title}</h3>
        <p>
          <CalendarIcon />
          {description}
        </p>
        <div
          onClick={handleDownload}
          className={
            download ? `${Styles.disabled_active}` : `${Styles.disabled}`
          }
        >
          <Button>
            Скачать PDF
            <span>{isLoading ? <SpinnerButton /> : <DownloadIcon />}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export { CertificatItem };
