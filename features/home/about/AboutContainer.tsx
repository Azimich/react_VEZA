import { FC, useRef } from "react";
import Styles from "./About.module.scss";
import { ProgressBar } from "components/progressbar/ProgressBarContainer";
import { useIsInViewport } from "store/hooks/useIsInViewPort";
import { IAboutUsData } from "features/home/about/AboutUs";
import { levieCheliky } from "features/home/about/MockData";

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
            <ul className={Styles.card_user_container}>
              {levieCheliky.map((items, index) => {
                console.log("images", items);
                return (
                  <li key={index}>
                    <img src={items.img} alt={"#"} />
                  </li>
                );
              })}
            </ul>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export { AboutContainer };
