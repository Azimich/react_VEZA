import Styles from "./Slider.module.scss";
import { ISlideItem } from "./Slider.d";
import { FC, useEffect, useState } from "react";
import { isMobile, isTablet, isDesktop } from "react-device-detect";

const SlideItem: FC<ISlideItem> = ({
                                     images,
                                     typeSlider = "img",
                                     alt = "",
                                     block_description = false,
                                     title = "",
                                     description = "",
                                     url = "",
                                     OnClick = () => {
                                     }
                                   }) => {
  const [hasWindow, setHasWindow] = useState(false);
  const isWindow = typeof window !== "undefined";

  useEffect(() => {
    isWindow && setHasWindow(true);
  }, [isWindow]);

  return (
    (typeSlider === "img" ?
        <div className={`${Styles.banner__slider_slide} ${Styles.swiper_slide}`} key={Math.random() * 10}>
          <div className={Styles.banner__slider_img}>
            {hasWindow && isDesktop && <img src={typeof images === "object" ? images.pc : images} alt={alt} />}
            {hasWindow && isTablet && <img src={typeof images === "object" ? images.ipad : images} alt={alt} />}
            {hasWindow && isMobile && <img src={typeof images === "object" ? images.mobile : images} alt={alt} />}
          </div>
          {block_description && <div className={Styles.banner__right_element}>
            <h1 className={Styles.banner__title}>{title}</h1>
            <p className={Styles.banner__text}>{description}</p>

            <div onClick={() => OnClick(url)}>
              <a className={Styles.banner__button}>Продукция</a>
            </div>
          </div>
          }
        </div> : (<div className={`${Styles.banner__slider_slide} ${Styles.banner__slide_video}`}>
          <video src={typeof images === "string" ? images : ""} className={Styles.banner__video} autoPlay muted loop></video>
          <div className={Styles.banner__video__info_box}>
            <div className={Styles.banner__video_info}>
              <h1 className={Styles.banner__title_video}>Veza</h1>
              <p className={Styles.banner__text_video}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>)
    )
  );
};

export { SlideItem };
