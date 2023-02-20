import React, { ReactNode, useEffect, useState } from "react";
import { FC } from "react";
import { INewsDataItem } from "../News";
import Styles from "../News.module.scss";
import { EyeIcon } from "components/icons";
import { isDesktop, isMobile, isTablet } from "react-device-detect";

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
  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">(
    "desktop",
  );
  const [newsImg, setNewsImg] = useState<ReactNode>();

  useEffect(() => {
    console.log("device11", device);
    if (device === "mobile") {
      console.log("device", device);
      setNewsImg(<img src={imageModel.pageTopImage.mobile} alt={newsName} />);
    }
    if (device === "tablet") {
      setNewsImg(<img src={imageModel.pageTopImage.ipad} alt={newsName} />);
    }
    if (device === "desktop") {
      setNewsImg(<img src={imageModel.pageTopImage.pc} alt={newsName} />);
    }
  }, [device]);

  useEffect(() => {
    isMobile && setDevice("mobile");
    isTablet && setDevice("tablet");
    isDesktop && setDevice("desktop");
  }, [isMobile, isTablet, isDesktop]);

  return (
    <div className={Styles.news__active}>
      <div className={Styles.news__active__container}>
        <div className={Styles.news__active__img}>
          {newsImg}
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
          <h2>{seoKeywords && seoKeywords}</h2>
          <div className={Styles.news__active__keyword__paragraph}>
            {keywords?.map((value) => {
              return <span>{value.keywords}</span>;
            })}
          </div>
        </div>
        {videoUrl && (
          <div className={Styles.news__active__video}>
            <video src={videoUrl} autoPlay={true} controls={true}></video>
          </div>
        )}
        <div className={Styles.news__active__info__right}>
          <h2>{title}</h2>
          <ul>
            {secondDescription &&
              secondDescription.split("|").map((e, i) => {
                return <li key={i}>{e}</li>;
              })}
          </ul>
          {imageModel?.pageGalleryImages?.pc.length > 0 && (
            <div className={Styles.gallery}>
              <ul>
                {imageModel?.pageGalleryImages?.pc.map((e, i) => {
                  return (
                    <div key={i}>
                      <img src={e} alt={e} />
                    </div>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { NewsPageItem };
