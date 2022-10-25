import React from "react";
import { FC } from "react";
import { INewDataItem } from "../News";
import Styles from "./NewsPageItem.module.scss";
import { EyeIcon } from "components/icons";

const NewsPageItem: FC<INewDataItem> = ({
  title,
  desc_full,
  images_list_news,
  image_category,
  count_view,
}) => {
  return (
    <div className={Styles.news__active}>
      <div className={Styles.news__active__top}>
        <div className={Styles.news__active__top__img}>
          <img src={image_category} alt="news" />
          <span>
            <EyeIcon />
            <p>{count_view}</p>
          </span>
        </div>
        <div className={Styles.news__active__top__info}>
          <h1>{title}</h1>
          <p>{desc_full}</p>
        </div>
      </div>
      <p className={Styles.news__active__subtext}>{desc_full}</p>
      <ul className={Styles.news__active__bottom}>
        {images_list_news.map((item) => {
          return (
            <li>
              <img src={item.image} alt="news" />
            </li>
          );
        })}

        {/* <li><img src={image_full_news} alt="news" /></li>
        <li><img src={image_full_news} alt="news" /></li> */}
      </ul>
    </div>
  );
};

export { NewsPageItem };
