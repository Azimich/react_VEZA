import React from "react";
import { FC } from "react";
import { INewDataItem } from "../News";
import Styles from "./NewsPageItem.module.scss";
import { EyeIcon } from "components/icons";
import { SliderContainer } from "../../../components/slider";

const NewsPageItem: FC<INewDataItem> = ({
  news_name,
  description_first,
  image_category,
  statistics,
  title,
  keyword,
  items,
}) => {
  return (
    <div className={Styles.news__active}>
      <div className={Styles.news__active__container}>
        <div className={Styles.news__active__img}>
          <img src={image_category} alt="news" />
          <span>
            <EyeIcon />
            <p>{statistics}</p>
          </span>
        </div>
        <div className={Styles.news__active__info}>
          <h1>{news_name}</h1>
          <p>{description_first}</p>
        </div>
        <div className={Styles.news__active__keyword}>
          <h2>{title}</h2>
          <div className={Styles.news__active__keyword__paragraph}>
            {keyword.map((value) => (
              <span>{value.paragraph}</span>
            ))}
          </div>
        </div>
        <div className={Styles.news__active__video}>
          <video
            src="/images/banner_2.mp4"
            autoPlay={true}
            controls={true}
          ></video>
        </div>
        <div className={Styles.news__active__info__right}>
          <h1>{news_name}</h1>
          <p>{description_first}</p>
        </div>
        <SliderContainer
          items={items}
          dots={true}
          autoplay={false}
          theme={"industries"}
          themeButton={"industries"}
          size={"medium"}
          effectSlide={"cards"}
        />
      </div>
    </div>
  );
};

export { NewsPageItem };
