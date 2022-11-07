import { Button } from "components/button";
import { FC } from "react";
import { INewDataItem } from "./News";
import Styles from "./News.module.scss";
import { ArrowRightIcon } from "../../components/icons";
import { newsPath } from "../../utils/bootstrap";

const NewsWithItem: FC<INewDataItem> = ({
  news_name,
  image_category,
  short_description,
  alias,
}) => {
  return (
    <div className={Styles.news_container_item}>
      <img src={image_category} alt={news_name} />
      <div className={Styles.news_container_item_right}>
        <div>
          <h1 className={Styles.news_container_item_right_title}>
            {news_name}
          </h1>
          <div className={Styles.news_container_item_right_desc}>
            {short_description}
          </div>
        </div>
        <Button
          link={newsPath + alias}
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
