import { CalendarIcon, DownloadIcon } from "components/icons";
import { FC, useState } from "react";
import { IBim } from "./Bim";
import Styles from "./Bim.module.scss";
import { Link } from "components/link";

const BimItem: FC<IBim> = ({
  title,
  imageUrl,
  description,
  updated,
  setupUrl,
}) => {
  const year = new Date(updated);
  // console.log(`${year.getDate()}-${year.getMonth() + 1}-${year.getFullYear()}`);

  const [download, setDownload] = useState(true);
  const handleDisabled = () => {
    setDownload(false);
  };

  return (
    <div className={Styles.bim__items__item}>
      {
        <div
          onClick={handleDisabled}
          className={
            download ? `${Styles.disabled_active}` : `${Styles.disabled}`
          }
        >
          <Link url={setupUrl} download={"true"}>
            Скачать
            <span>
              <DownloadIcon />
            </span>
          </Link>
        </div>
      }
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
          {`${year.getDate()}.${
            year.getMonth() + 1 < 10 ? "01" : "01"
          }.${year.getFullYear()}`}
        </li>
      </ul>
    </div>
  );
};

export { BimItem };
