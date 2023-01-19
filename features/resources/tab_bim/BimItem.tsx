import { CalendarIcon, DownloadIcon } from "components/icons";
import { FC } from "react";
import { IBim } from "./Bim";
import Styles from "./Bim.module.scss";

const BimItem: FC<IBim> = ({
  showDownload = false,
  title,
  imageUrl,
  description,
  updated,
}) => {
  const year = new Date(updated);
  console.log(`${year.getDate()}-${year.getMonth() + 1}-${year.getFullYear()}`);

  return (
    <div className={Styles.bim__items__item}>
      {showDownload && <DownloadIcon />}
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
