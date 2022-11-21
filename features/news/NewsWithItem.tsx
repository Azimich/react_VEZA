import { Button } from "components/button";
import { FC } from "react";
import { INewDataItem } from "./News";
import Styles from "./News.module.scss";
import { ArrowRightIcon } from "components/icons";
import { newsPath } from "utils/bootstrap";

const NewsWithItem: FC<INewDataItem> = ({
  NewsName,
  ShortDescription,
  Alias,
}) => {
  return (
    <div className={Styles.news_container_item}>
      <img src={"/images/no-foto.jpg"} alt={NewsName} />
      <div className={Styles.news_container_item_right}>
        <div>
          <h1 className={Styles.news_container_item_right_title}>{NewsName}</h1>
          <div className={Styles.news_container_item_right_desc}>
            {ShortDescription}
          </div>
        </div>
        <Button
          link={newsPath + Alias}
          theme={"news"}
          size={"context"}
          color={"link"}
        >
          <span>
            <p>Подробнее</p>
            <ArrowRightIcon />
          </span>
        </Button>
      </div>
    </div>
  );
};

export { NewsWithItem };
