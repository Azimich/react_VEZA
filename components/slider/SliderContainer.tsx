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
      spaceBetween={50}
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
      {/*        <div className={`${Styles.banner__slider_slide} ${Styles.swiper_slide}`} data-swiper-autoplay="2000">
          <div className={Styles.banner__slider_img}>
            <img className={Styles.banner__images_pc} src="/images/banner.jpg" alt="banner" />
            <img className={Styles.banner__images_ipad} src="/images/banner__ipad.jpg" alt="banner" />
            <img className={Styles.banner__images_mobile} src="/images/banner__phone.jpg" alt="banner" />
          </div>
          <div className={Styles.banner__right_element}>
            <h1 className={Styles.banner__title}>Основа для здоровой жизни</h1>
            <p className={Styles.banner__text}>Lorem ipstum dolor sit amet, at ipsum imperdiet, dui ipsum conubia
              susndisse</p>

            <a href="production-page.html" className="banner__button">Продукция</a>
          </div>
        </div>
        <div className="banner__slider-slide swiper-slide banner__slide-video" data-swiper-autoplay="2000">
          <video src="../assets/images/banner_2.mp4" className="banner__video" autoPlay muted loop></video>
          <div className="banner__video__info-box">
            <div className="banner__video-info">
              <h1 className="banner__title-video">Veza</h1>
              <p className="banner__text-video">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>*/}

    </Swiper>
  );
};
export { SliderContainer };
