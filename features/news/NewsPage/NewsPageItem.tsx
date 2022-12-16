import React from "react";
import { FC } from "react";
import { INewsDataItem } from "../News";
/*import {SliderContainer} from "components/slider";*/
import Styles from "../News.module.scss";
import { EyeIcon } from "components/icons";

const NewsPageItem: FC<INewsDataItem> = ({
  firstDescription,
  imageModel,
  statistics,
  keywords,
  newsName,
  title,
}) => {
  return (
    <div className={Styles.news__active}>
      <div className={Styles.news__active__container}>
        <div className={Styles.news__active__img}>
          <img src={imageModel.vertical.pc} alt="news" />
          <span className={Styles.view_count}>
            <EyeIcon />
            <p>{statistics.statisticsTotal}</p>
          </span>
        </div>
        <div className={Styles.news__active__title}>
          <h1>{newsName}</h1>
          <p>{firstDescription}</p>
        </div>

        <div className={Styles.news__active__keyword}>
          <h2>{title}</h2>
          <div className={Styles.news__active__keyword__paragraph}>
            {keywords?.map((value) => (
              <span>{value.Keywords}</span>
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
          <h1>{newsName}</h1>
          <p>{firstDescription}</p>
        </div>
      </div>
    </div>
  );
};

export { NewsPageItem };
