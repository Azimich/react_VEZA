import { Button } from "components/button";
import React, { FC } from "react";
import { INewsDataItem } from "./News";
import Styles from "./News.module.scss";
import { ArrowRightIcon, EyeIcon } from "components/icons";
import { newsPath } from "utils/bootstrap";
import { Link } from "components/link";

const NewsWithItem: FC<INewsDataItem> = ({
  newsName,

  alias,
  shortDescription,
  imageModel,
  statistics,
}) => {
  return (
    <Link url={newsPath + alias}>
      <div className={Styles.news_container_item}>
        <div className={Styles.news_container_item_image}>
          <span>
            <EyeIcon />
            {statistics?.statisticsTotal}
          </span>
          <img src={imageModel.horizontal.pc} alt={newsName} />
        </div>
        <div className={Styles.news_container_item_right}>
          <div>
            <h4 className={Styles.news_container_item_right_title}>
              {newsName}
            </h4>
            <div className={Styles.news_container_item_right_desc}>
              {shortDescription}
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
    </Link>
  );
};

export { NewsWithItem };
