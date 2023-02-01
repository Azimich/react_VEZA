import { FC } from "react";
import { ICatalogsItem } from "../tab_bim/Bim";
import Styles from "./Catalog.module.scss";
import { Button } from "components/button";
import { onButtonClick } from "utils/helpers";

const CatalogItem: FC<ICatalogsItem> = ({ title, imageUrl, url }) => {
  return (
    <div className={Styles.box_item}>
      <div className={Styles.box_item__images}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={Styles.box_item__info}>
        <div className={Styles.box_item__info_title}>
          <p>{title}</p>
        </div>
        <div className={Styles.box_item__item_button}>
          <Button
            type={"button"}
            theme={"banner"}
            children={"Скачать"}
            size={"small"}
            color={"green"}
            onClick={() => {
              onButtonClick(url, title);
            }}
          />

          <p>.PDF</p>

          <Button
            type={"button"}
            theme={"banner"}
            children={"Web-Версия"}
            size={"small"}
            color={"green"}
            link={"/pdfviewer?document=" + url}
          />
        </div>
      </div>
    </div>
  );
};

export { CatalogItem };
