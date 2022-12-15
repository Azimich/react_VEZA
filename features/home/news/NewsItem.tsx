import Styles from "./News.module.scss";
import { FC, useEffect, useState, ReactNode } from "react";

import { ArrowRightIcon, EyeIcon } from "components/icons";
import { isMobile, isTablet, isDesktop } from "react-device-detect";
import { Button } from "components/button";
import { INewsDataItem } from "features/news/News";
import { newsPath } from "utils/bootstrap";

interface INewsItemProps {
  className: string;
  props: INewsDataItem;
  countColumn: number;
}

const NewsItem: FC<INewsItemProps> = ({ className, props, countColumn }) => {
  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">(
    "desktop",
  );
  const [newsImg, setNewsImg] = useState<ReactNode>();

  useEffect(() => {
    if (countColumn !== 2) {
      console.log("device", device);
      device === "mobile" &&
        setNewsImg(
          <img
            src={props.imageModel.horizontal.mobile}
            alt={props.shortDescription}
          />,
        );
      device === "tablet" &&
        setNewsImg(
          <img
            src={props.imageModel.horizontal.ipad}
            alt={props.shortDescription}
          />,
        );
      device === "desktop" &&
        setNewsImg(
          <img
            src={props.imageModel.horizontal.pc}
            alt={props.shortDescription}
          />,
        );
    } else {
      device === "mobile" &&
        setNewsImg(
          <img
            src={props.imageModel.horizontal.mobile}
            alt={props.shortDescription}
          />,
        );
      device === "tablet" &&
        setNewsImg(
          <img
            src={props.imageModel.horizontal.ipad}
            alt={props.shortDescription}
          />,
        );
      device === "desktop" &&
        setNewsImg(
          <img
            src={props.imageModel.horizontal.pc}
            alt={props.shortDescription}
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
            {props.statistics.statisticsTotal}
          </div>
        </div>
        <div className={Styles.news__item_info}>
          <h2>{props.newsName}</h2>
          <p>{props.shortDescription}</p>
          <Button
            link={newsPath + props.alias}
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
