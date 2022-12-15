import React from "react";
import { FC } from "react";
import { INewsDataItem } from "../News";
/*import {SliderContainer} from "components/slider";
import Styles from "../News.module.scss";
import {EyeIcon} from "components/icons";*/

const NewsPageItem: FC<INewsDataItem> = (props) => {
  console.log("props", props);
  return (
    <></>
    /*        <div className={Styles.news__active}>
            <div className={Styles.news__active__container}>
                <div className={Styles.news__active__img}>
                    <img src={props.imageModel.vertical.pc} alt="news"/>
                    <span>
            <EyeIcon/>
            <p>{props.statistics}</p>
          </span>
                </div>
                <div className={Styles.news__active__info}>
                    <h1>{props.newsName}</h1>
                    <p>{props.firstDescription}</p>
                </div>
                <div className={Styles.news__active__keyword}>
                    <h2>{props.title}</h2>
                    <div className={Styles.news__active__keyword__paragraph}>
                        {props.keywords?.map((value) => (
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
                    <h1>{props.newsName}</h1>
                    <p>{props.firstDescription}</p>
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
        </div>*/
  );
};

export { NewsPageItem };
