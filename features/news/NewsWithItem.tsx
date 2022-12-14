/*import { Button } from "components/button";*/
import { FC } from "react";
import { INewsDataItem } from "./News";
/*import Styles from "./News.module.scss";
import { ArrowRightIcon } from "components/icons";
import { newsPath } from "utils/bootstrap";*/

const NewsWithItem: FC<INewsDataItem> = (/*{
/!*  NewsName,
  SecondDescription,
  Alias,
  ImageModel,*!/
}*/) => {
  return (
    <></>
    /*    <div className={Styles.news_container_item}>
      <div className={Styles.news_container_item_image}>
        <img src={ImageModel.Horizontal.Pc} alt={NewsName} />
      </div>
      <div className={Styles.news_container_item_right}>
        <div>
          <h4 className={Styles.news_container_item_right_title}>{NewsName}</h4>
          <div className={Styles.news_container_item_right_desc}>
            {SecondDescription}
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
    </div>*/
  );
};

export { NewsWithItem };
