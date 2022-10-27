import { FC } from "react";
import { ISliderProps } from "./Slider.d";
import { SlideItem } from "./SlideItem";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCards,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { NavigationOptions } from "swiper/types/modules/navigation";
import Styles from "./Slider.module.scss";

const SliderContainer: FC<ISliderProps> = ({
  items = [],
  theme = "home",
  size = "medium",
  themeButton = "banner",
  dots = false,
  color = "white",
  autoplay = true,
  effectSlide = "slide",
  spaceBetween = 0,
  slidesPerView = 1,
  loop = true,
}) => {
  const pagination = {
    clickable: true,
    dynamicBullets: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  const navigationButton: NavigationOptions = {
    enabled: true,
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  };

  const slideEffect = {
    slideShadows: false,
  };

  const handleOnClick = (url: string) => {
    console.log("add ctatic click button", url);
  };

  return (
    <>
      {" "}
      <div className={Styles.block_arrow}>
        <div className={`swiper-next ${Styles.block_arrow_all}`}></div>
        <div className={`swiper-prev ${Styles.block_arrow_all}`}></div>
      </div>
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectCards,
        ]}
        loop={loop}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        navigation={navigationButton}
        pagination={dots ? pagination : false}
        cardsEffect={slideEffect}
        effect={effectSlide}
        autoplay={autoplay}
        grabCursor={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {items.map((e, i) => {
          return (
            <SwiperSlide key={i}>
              <SlideItem
                images={e.images}
                typeSlider={e.typeSlider}
                theme={theme}
                themeButton={themeButton}
                size={size}
                color={color}
                alt={e.alt}
                block_description={e.block_description}
                title={e.title}
                description={e.description}
                url={e.url}
                OnClick={(url) => handleOnClick(url)}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export { SliderContainer };
