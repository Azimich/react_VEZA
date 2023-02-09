import Styles from "./News.module.scss";
import { FC, useEffect, useState, ReactNode } from "react";

import { ArrowRightIcon, EyeIcon } from "components/icons";
import { isMobile, isTablet, isDesktop } from "react-device-detect";
import { Button } from "components/button";
import { INewsDataItem } from "features/news/News";
import { newsPath } from "utils/bootstrap";
import { Link } from "components/link";

interface INewsItemProps {
  props: INewsDataItem;
}

const NewsItem: FC<INewsItemProps> = ({ props }) => {
  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">(
    "desktop",
  );
  const [newsImg, setNewsImg] = useState<ReactNode>();

  useEffect(() => {
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
  }, [isMobile, isTablet, isDesktop]);

  useEffect(() => {
    isMobile && setDevice("mobile");
    isTablet && setDevice("tablet");
    isDesktop && setDevice("desktop");
  }, [isMobile, isTablet, isDesktop]);

  return (
    <Link url={newsPath + props.alias} classLink={Styles.news__item}>
      <div className={Styles.news__item_img}>
        {newsImg}
        <div className={`${Styles.news} ${Styles.counter_icon}`}>
          <EyeIcon />
          {props?.statistics?.statisticsTotal}
        </div>
      </div>
      <div className={Styles.news__item_info}>
        <div>
          <h2>{props.newsName}</h2>
          <p className={Styles.description}>{props.shortDescription}</p>
        </div>
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
    </Link>
  );
};

export { NewsItem };
