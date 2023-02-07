import { FC, useRef } from "react";
import Styles from "./About.module.scss";
import { ProgressBar } from "components/progressbar/ProgressBarContainer";
import { useIsInViewport } from "store/hooks/useIsInViewPort";
import { IAboutUsData } from "features/home/about/AboutUs";
import { AboutItems } from "features/home/about/AboutItem";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

interface IAboutUsSSR {
  response: IAboutUsData;
}

const AboutContainer: FC<IAboutUsSSR> = ({ response }) => {
  const ref1 = useRef(null);
  return (
    <div className={Styles.about}>
      <div className={Styles.about__container}>
        <div className={Styles.about__elem_box}>
          <h2>О нас</h2>
          <div className={Styles.about_block}>
            <div className={Styles.about__right_block}>
              <p className={Styles.about__text}>{response.description}</p>
              <div
                className={`${Styles.about__progress_box} cards__progress-bar`}
                ref={ref1}
              >
                {response?.specialistCounters.map((e) => {
                  return (
                    <div
                      className={`${Styles.about__progress} progress__container`}
                      key={e.specialistName}
                    >
                      <ProgressBar
                        isView={useIsInViewport(ref1)}
                        trackWidth={2}
                        indicatorWidth={2}
                        progressLabel={e.specialistCount}
                      />
                      <p className={Styles.about__progress_title}>
                        {e.specialistName.toUpperCase()}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <ul className={Styles.card_user_container}>
              <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={6}
                spaceBetween={23}
                autoplay={true}
                loop={true}
                pagination={true}
                breakpoints={{
                  "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 40,
                  },
                  "@0.75": {
                    slidesPerView: 3,
                    spaceBetween: 5,
                  },
                  "@1.00": {
                    slidesPerView: 4,
                    spaceBetween: 8,
                  },
                  "@1.50": {
                    slidesPerView: 6,
                    spaceBetween: 23,
                  },
                }}
              >
                {response.employeeDtos.map((items, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <AboutItems img={""} desc={""} {...items} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AboutContainer };
