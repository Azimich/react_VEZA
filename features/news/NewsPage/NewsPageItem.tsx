import React from "react";
import { FC } from "react";
import { INewsDataItem } from "../News";
import Styles from "../News.module.scss";
import { EyeIcon } from "components/icons";

const NewsPageItem: FC<INewsDataItem> = ({
  firstDescription,
  secondDescription,
  imageModel,
  statistics,
  title,
  keywords,
  seoKeywords,
  newsName,
  videoUrl,
}) => {
  return (
    <div className={Styles.news__active}>
      <div className={Styles.news__active__container}>
        <div className={Styles.news__active__img}>
          <img src={imageModel?.images?.pc} alt="news" />
          <span className={Styles.view_count}>
            <EyeIcon />
            <p>{statistics?.statisticsTotal}</p>
          </span>
        </div>
        <div className={Styles.news__active__title}>
          <h1>{newsName}</h1>
          <div>
            {firstDescription &&
              firstDescription.split("|").map((e, i) => {
                return <p key={i}>{e}</p>;
              })}
          </div>
        </div>

        <div className={Styles.news__active__keyword}>
          <h2>{seoKeywords}</h2>
          <div className={Styles.news__active__keyword__paragraph}>
            {keywords?.map((value) => {
              return <span>{value.keywords}</span>;
            })}
          </div>
        </div>
        <div className={Styles.news__active__video}>
          <video src={videoUrl} autoPlay={true} controls={true}></video>
        </div>
        <div className={Styles.news__active__info__right}>
          <h2>{title}</h2>
          <p>{secondDescription}</p>
        </div>
      </div>
    </div>
  );
};

export { NewsPageItem };
