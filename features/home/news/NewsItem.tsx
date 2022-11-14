import Styles from "./News.module.scss";
import { FC, useEffect, useState } from "react";
import { INewsProps } from "./News";
import { ArrowRightIcon, EyeIcon } from "components/icons";
import { isMobile, isTablet, isDesktop } from "react-device-detect";
import { Button } from "components/button";

interface INewsItemProps {
  className: string;
  props: INewsProps;
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
  return (
    <div className={Styles[className]}>
      <div className={Styles.news__item}>
        <div className={Styles.news__item_left}>
          <div className={Styles.news__counter_icon}>
            <EyeIcon />
            {props.countView}
          </div>
          {device === "mobile" && (
            <img src={props.images.mobile} alt={props.description} />
          )}
          {device === "tablet" && (
            <img src={props.images.ipad} alt={props.description} />
          )}
          {device === "desktop" && (
            <img src={props.images.pc} alt={props.description} />
          )}
        </div>
        <div className={Styles.news__item_info}>
          <p>{props.description}</p>

          <Button
            link={props.url}
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
