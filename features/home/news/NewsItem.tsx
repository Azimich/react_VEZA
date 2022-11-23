import Styles from "./News.module.scss";
import { FC, useEffect, useState } from "react";

import { ArrowRightIcon, EyeIcon } from "components/icons";
import { isMobile, isTablet, isDesktop } from "react-device-detect";
import { Button } from "components/button";
import { INewDataItem } from "features/news/News";
import { newsPath } from "utils/bootstrap";

interface INewsItemProps {
  className: string;
  props: INewDataItem;
}

const NewsItem: FC<INewsItemProps> = ({ className, props }) => {
  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );
  useEffect(() => {
    isMobile && setDevice("mobile");
    isTablet && setDevice("tablet");
    isDesktop && setDevice("desktop");
  }, [isMobile, isTablet, isDesktop]);
  console.log(props);

  return (
    <div className={Styles[className]}>
      <div className={Styles.news__item}>
        <div className={Styles.news__item_left}>
          {device === "mobile" && (
            <img src={"/images/no-foto.jpg"} alt={props.ShortDescription} />
          )}
          {device === "tablet" && (
            <img src={"/images/no-foto.jpg"} alt={props.ShortDescription} />
          )}
          {device === "desktop" && (
            <img src={"/images/no-foto.jpg"} alt={props.ShortDescription} />
          )}
          <div className={Styles.news__counter_icon}>
            <EyeIcon />
            {props.Statistics.StatisticsTotal}
          </div>
        </div>
        <div className={Styles.news__item_info}>
          <h2>{props.NewsName}</h2>
          <p>{props.ShortDescription}</p>
          <Button
            link={newsPath + props.Alias}
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
    </div>
  );
};
export { NewsItem };
