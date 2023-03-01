import { CalendarIcon, DownloadIcon } from "components/icons";
import { FC, useState } from "react";
import { IBim } from "./Bim";
import Styles from "./Bim.module.scss";
import { Link } from "components/link";
import { SpinnerButton } from "components/spinners";

const BimItem: FC<IBim> = ({
  title,
  imageUrl,
  description,
  updated,
  setupUrl,
}) => {
  const dataUpdate = new Date(updated);
  const [download, setDownload] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleDisabled = () => {
    setDownload(false);
    setIsLoading(true);
    /*    onButtonClick(setupUrl, title).then(() => {
      setDownload(true);
      setIsLoading(false);
    });*/
  };

  return (
    <div className={Styles.bim__items__item}>
      <div
        onClick={handleDisabled}
        className={
          download ? `${Styles.disabled_active}` : `${Styles.disabled}`
        }
      >
        <Link url={setupUrl} download={"true"}>
          Скачать
          <span>{isLoading ? <SpinnerButton /> : <DownloadIcon />}</span>
        </Link>
      </div>
      <div className={Styles.bim__items__item__img}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={Styles.bim__items__item__info}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <ul className={Styles.bim__items__item__calendar}>
        <CalendarIcon />
        <li>
          {`${dataUpdate.getDate()}.${
            dataUpdate.getMonth() + 1 < 10
              ? "0" + (dataUpdate.getMonth() + 1)
              : dataUpdate.getMonth() + 1
          }.${dataUpdate.getFullYear()}`}
        </li>
      </ul>
    </div>
  );
};

export { BimItem };
