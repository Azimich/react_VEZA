import { FC, useRef } from "react";
import Styles from "./About.module.scss";
import { AboutItems } from "./AboutItem";
import { ProgressBar } from "components/progressbar/ProgressBarContainer";
import { useIsInViewport } from "store/hooks/useIsInViewPort";
import { IAboutUsData } from "features/home/about/AboutUs";

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
            {response.employeeDtos.map((e, i: number) => {
              return (
                <AboutItems
                  keyLink={i}
                  key={i}
                  LinkClassName={"tile__item_" + (i + 1)}
                  img={e.images?.pc}
                  alt={e.title}
                  ImgClassName={"img__" + (i + 1)}
                  title={e.title}
                  desc={e.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export { AboutContainer };
