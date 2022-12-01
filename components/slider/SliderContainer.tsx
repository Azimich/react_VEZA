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
import Styles from "./Slider.module.scss";

const SliderContainer: FC<ISliderProps> = ({
  items = [],
  theme = "home",
  size = "medium",
  themeButton = "banner",
  dots = false,
  color = "white",
  activePage,
  autoplay = true,
  effectSlide = "slide",
  spaceBetween = 0,
  slidesPerView = 1,
  loop = true,
  OnClick,
  navigations = false,
  breakpoints,
  centeredSlides = false,
}) => {
  const pagination = {
    clickable: true,
    dynamicBullets: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  const slideEffect = {
    slideShadows: false,
  };

  return (
    <>
      {navigations && (
        <div className={Styles.block_arrow}>
          <div
            className={`swiper-next ${Styles.block_arrow_all} ${Styles.button__next}`}
          ></div>
          <div
            className={`swiper-prev ${Styles.block_arrow_all} ${Styles.button__prev}`}
          ></div>
        </div>
      )}
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
        navigation={navigations}
        pagination={dots ? pagination : false}
        cardsEffect={slideEffect}
        effect={effectSlide}
        autoplay={autoplay}
        grabCursor={true}
        breakpoints={breakpoints}
        centeredSlides={centeredSlides}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {items.map((e, i) => {
          return (
            <SwiperSlide key={i}>
              <SlideItem
                images={e.images}
                link_slider={e.link_slider}
                code={e.code}
                typeSlider={e.typeSlider}
                theme={theme}
                activePage={activePage}
                themeButton={themeButton}
                size={size}
                color={color}
                alt={e.alt}
                block_description={e.block_description}
                title={e.title}
                description={e.description}
                url={e.url}
                OnClick={(code: string) => OnClick(code)}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export { SliderContainer };
