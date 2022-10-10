import { FC } from "react";
import { ISliderProps } from "./Slider.d";
import { SlideItem } from "./SlideItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SliderContainer: FC<ISliderProps> = ({
                                             items = [],
                                           }) => {
  const handleOnClick = (url:string)=>{

    console.log("add ctatic click button",url);
  }
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {items.map((e, i) => {
        return (<SwiperSlide key={i}>
          <SlideItem
            images={e.images}
            typeSlider={e.typeSlider}
            alt={e.alt}
            block_description={e.block_description}
            title={e.title}
            description={e.description}
            url={e.url}
            OnClick={(url)=>handleOnClick(url)}
          />
        </SwiperSlide>);
      })
      }
    </Swiper>
  );
};
export { SliderContainer };
