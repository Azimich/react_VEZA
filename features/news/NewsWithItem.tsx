import { Button } from "components/button";
import { FC } from "react";
import { INewDataItem } from "./News";
import Styles from "./News.module.scss";
import { ArrowRightIcon } from "../../components/icons";
import { newsPath } from "../../utils/bootstrap";

const NewsWithItem: FC<INewDataItem> = ({
  title,
  image_category,
  desc_small,
  alias,
}) => {
  return (
    <div className={Styles.news_container_item}>
      <img src={image_category} alt={title} />
      <div className={Styles.news_container_item_right}>
        <div>
          <h1 className={Styles.news_container_item_right_title}>{title}</h1>
          <div className={Styles.news_container_item_right_desc}>
            {desc_small}
          </div>
        </div>
        <Button
          link={newsPath + alias}
          theme={"news"}
          size={"context"}
          color={"link"}
        >
          <div>
            <span>Подробнее</span>
            <ArrowRightIcon />
          </div>
        </Button>
      </div>
    </div>
  );
};

export { NewsWithItem };
