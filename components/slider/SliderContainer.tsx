import { FC } from "react";
import { ISliderProps } from "./Slider.d";
import { SlideItem } from "./SlideItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const SliderContainer: FC<ISliderProps> = ({
  items = [],
  theme = "home",
  dots = false,
  autoplay = true,
}) => {
  const pagination = {
    clickable: true,
    dynamicBullets: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  const handleOnClick = (url: string) => {
    console.log("add ctatic click button", url);
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={1}
      pagination={dots ? pagination : false}
      autoplay={autoplay}
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
