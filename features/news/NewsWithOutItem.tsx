import { FC } from "react";
import { INewDataItem } from "./News";
/*import Styles from "./News.module.scss";
import { newsPath } from "utils/bootstrap";
import { ArrowRightIcon, ReactAngleIcon } from "components/icons";
import { Button } from "components/button";
import { Link } from "components/link";*/

const NewsWithOutItem: FC<INewDataItem> = ({
  NewsName,
  /*  news_name,
  image_category,
  alias,*/
}) => {
  return (
    <li>
      {/*      <div className={Styles.new_with_out_container_item}>
        <img src={image_category} alt={news_name} />
        <div className={Styles.new_with_out_container_item_desc}>
          <Link url={newsPath + alias}>{news_name}</Link>
        </div>
        <div className={Styles.new_with_out_container_item_svg}>
          <ReactAngleIcon />
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
      </div>*/}
    </li>
  );
};

export { NewsWithOutItem };
