import { FC, useRef } from "react";
import Styles from "./About.module.scss";
import { ProgressBar } from "components/progressbar/ProgressBarContainer";
import { useIsInViewport } from "store/hooks/useIsInViewPort";
import { IAboutUsData } from "features/home/about/AboutUs";
import { AboutItems } from "features/home/about/AboutItem";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { Container } from "components/common/container";

interface IAboutUsSSR {
  response: IAboutUsData;
}

const AboutContainer: FC<IAboutUsSSR> = ({ response }) => {
  const ref1 = useRef(null);
  const pagination = {
    clickable: true,
    dynamicBullets: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <div className={Styles.about}>
      <div className={Styles.about__container}>
        <Container className="wrapper_clear">
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
              <div className={Styles.card_user_container}>
                <Swiper
                  modules={[Pagination, Autoplay]}
                  slidesPerView={6}
                  spaceBetween={23}
                  autoplay={false}
                  loop={true}
                  pagination={pagination}
                  breakpoints={{
                    "@0.00": {
                      slidesPerView: 2,
                      spaceBetween: 5,
                    },
                    "@0.50": {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    "@0.75": {
                      slidesPerView: 2,
                      spaceBetween: 5,
                    },
                    "@0.90": {
                      slidesPerView: 3,
                      spaceBetween: 8,
                    },
                    "@1.00": {
                      slidesPerView: 3,
                      spaceBetween: 8,
                    },
                    "@1.20": {
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
                        <AboutItems {...items} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
export { AboutContainer };
