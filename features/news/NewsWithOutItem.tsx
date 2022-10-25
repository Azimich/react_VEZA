import { FC } from "react";
import { INewDataItem } from "./News";
import Styles from "./News.module.scss";
import { newsPath } from "../../utils/bootstrap";
import { ArrowRightIcon, ReactAngleIcon } from "../../components/icons";
import { Button } from "../../components/button";

const NewsWithOutItem: FC<INewDataItem> = ({
  title,
  image_category,
  title_wthout_desc,
  alias,
}) => {
  return (
    <div className={Styles.new_with_out_container_item}>
      <img src={image_category} alt={title} />
      <div className={Styles.new_with_out_container_item_desc}>
        {title_wthout_desc}
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
        <div>
          <span>Подробнее</span>
          <ArrowRightIcon />
        </div>
      </Button>
    </div>
  );
};

export { NewsWithOutItem };
