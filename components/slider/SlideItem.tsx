import Styles from "./Slider.module.scss";
import { ISlideItem } from "./Slider.d";
import { FC, useEffect, useState } from "react";
import { isMobile, isTablet, isDesktop } from "react-device-detect";
import { Button } from "../button/Button";

const SlideItem: FC<ISlideItem> = ({
  images,
  typeSlider = "img",
  theme = "home",
  alt = "",
  block_description = false,
  title = "",
  description = "",
  url = "",
  //OnClick = () => {},
}) => {
  const [hasWindow, setHasWindow] = useState(false);
  const isWindow = typeof window !== "undefined";

  useEffect(() => {
    isWindow && setHasWindow(true);
  }, [isWindow]);

  return typeSlider === "img" ? (
    <div
      className={`${Styles[`${theme}_banner__slider_slide`]}`}
      key={Math.random() * 10}
    >
      <div className={Styles[`${theme}_banner__slider_img`]}>
        {hasWindow && isDesktop && (
          <img
            src={typeof images === "object" ? images.pc : images}
            alt={alt}
          />
        )}
        {hasWindow && isTablet && (
          <img
            src={typeof images === "object" ? images.ipad : images}
            alt={alt}
          />
        )}
        {hasWindow && isMobile && (
          <img
            src={typeof images === "object" ? images.mobile : images}
            alt={alt}
          />
        )}
      </div>
      {block_description && (
        <div className={Styles[`${theme}_banner__right_element`]}>
          <h1 className={Styles[`${theme}_banner__right_element_title`]}>
            {title}
          </h1>
          <p className={Styles[`${theme}_banner__right_element_text`]}>
            {description}
          </p>

          <Button theme={"banner"} size={"medium"} link={url} color={"white"}>
            Продукция
          </Button>
        </div>
      )}
    </div>
  ) : (
    <div
      className={`${Styles[`${theme}_banner__slider_slide`]} ${
        Styles[`${theme}_banner__slide_video`]
      }`}
    >
      <video
        src={typeof images === "string" ? images : ""}
        className={Styles[`${theme}_banner__slide_video_video`]}
        autoPlay
        muted
        loop
      ></video>
      <div className={Styles[`${theme}_banner__slide_video_info_box`]}>
        <div className={Styles[`${theme}_banner__slide_video_info`]}>
          <h1 className={Styles[`${theme}_banner__slide_video_title_video`]}>
            Veza
          </h1>
          <p className={Styles[`${theme}_banner__slide_video_text_video`]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export { SlideItem };
