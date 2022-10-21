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

const SliderContainer: FC<ISliderProps> = ({
  items = [],
  theme = "home",
  size = "medium",
  themeButton = "banner",
  dots = false,
  color = "white",
  autoplay = true,
  effectSlide = "slide",
}) => {
  console.log("items", items);
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
  const handleOnClick = (url: string) => {
    console.log("add ctatic click button", url);
  };
  console.log("item", items);
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCards]}
      slidesPerView={1}
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
  );
};

export { SliderContainer };
