import React from "react";
import { FC } from "react";
import { INewDataItem } from "../News";
import Styles from "./NewsPageItem.module.scss";

const NewsPageItem: FC<INewDataItem> = ({
  title,
  desc_full,
  image_full_news,
}) => {
  return (
    <div className={Styles.news__active}>
      <div className={Styles.news__active__top}>
        <div className={Styles.news__active__top__img}>
          <img src={image_full_news} alt="news" />
        </div>
        <div className={Styles.news__active__info}>
          <h1>{title}</h1>
          <p>{desc_full}</p>
        </div>
        <p className={Styles.news__active__top__subtext}>{desc_full}</p>
      </div>
      <ul className={Styles.news__active__bottom}>
        <li></li>
      </ul>
    </div>
  );
};

export { NewsPageItem };
