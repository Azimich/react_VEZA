import Styles from "./News.module.scss";
import { FC, useEffect, useState, ReactNode } from "react";

import { ArrowRightIcon, EyeIcon } from "components/icons";
import { isMobile, isTablet, isDesktop } from "react-device-detect";
import { Button } from "components/button";
import { INewDataItem } from "features/news/News";
import { newsPath } from "utils/bootstrap";

interface INewsItemProps {
  className: string;
  props: INewDataItem;
  countColumn: number;
}

const NewsItem: FC<INewsItemProps> = ({ className, props, countColumn }) => {
  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">(
    "desktop",
  );
  const [newsImg, setNewsImg] = useState<ReactNode>();

  useEffect(() => {
    if (countColumn !== 2) {
      device === "mobile" &&
        setNewsImg(
          <img
            src={props.ImageModel.Horizontal.Mobile}
            alt={props.ShortDescription}
          />,
        );
      device === "tablet" &&
        setNewsImg(
          <img
            src={props.ImageModel.Horizontal.Ipad}
            alt={props.ShortDescription}
          />,
        );
      device === "desktop" &&
        setNewsImg(
          <img
            src={props.ImageModel.Horizontal.Pc}
            alt={props.ShortDescription}
          />,
        );
    } else {
      device === "mobile" &&
        setNewsImg(
          <img
            src={props.ImageModel.Horizontal.Mobile}
            alt={props.ShortDescription}
          />,
        );
      device === "tablet" &&
        setNewsImg(
          <img
            src={props.ImageModel.Horizontal.Ipad}
            alt={props.ShortDescription}
          />,
        );
      device === "desktop" &&
        setNewsImg(
          <img
            src={props.ImageModel.Horizontal.Pc}
            alt={props.ShortDescription}
          />,
        );
    }
  }, [isMobile, isTablet, isDesktop, countColumn]);

  useEffect(() => {
    isMobile && setDevice("mobile");
    isTablet && setDevice("tablet");
    isDesktop && setDevice("desktop");
  }, [isMobile, isTablet, isDesktop]);

  return (
    <div className={Styles[className]}>
      <div className={Styles.news__item}>
        <div className={Styles.news__item_left}>
          {newsImg}
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
