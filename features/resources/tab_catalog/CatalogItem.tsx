import { FC } from "react";
import { ICatalog } from "../tab_bim/Bim";
import Styles from "./Catalog.module.scss";
import { Button } from "../../../components/button";

const CatalogItem: FC<ICatalog> = ({ title, image }) => {
  return (
    <div className={Styles.box_item}>
      <div className={Styles.box_item__images}>
        <img src={image} alt={title} />
      </div>
      <div className={Styles.box_item__info}>
        <p className={Styles.box_item__info_title}>{title}</p>
        <div className={Styles.box_item__item_button}>
          <Button
            type={"button"}
            theme={"banner"}
            children={"Скачать"}
            size={"small"}
            color={"green"}
          />
          <p>.PDF</p>
          <Button
            type={"button"}
            theme={"banner"}
            children={"Web-Версия"}
            size={"small"}
            color={"green"}
          />
        </div>
      </div>
    </div>
  );
};

export { CatalogItem };
