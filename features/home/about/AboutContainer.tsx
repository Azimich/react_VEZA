import { FC, useRef } from "react";
import Styles from "./About.module.scss";
import { PeopleData, staticAboutData } from "./mockData";
import { AboutItems } from "./AboutItem";
import { ProgressBar } from "components/progressbar/ProgressBarContainer";
import { useIsInViewport } from "store/hooks/useIsInViewPort";

const AboutContainer: FC = () => {
  const ref1 = useRef(null);
  return (
    <div className={Styles.about}>
      <div className={Styles.about__container}>
        <div className={Styles.about__mobile_bg}>
          <img src="../images/about__mens-mob.png" alt="foto" />
        </div>
        <div className={Styles.about__elem_box}>
          <div className={Styles.about__left_block}>
            <div className={Styles.tiles}>
              {PeopleData.map((e, i: number) => {
                return (
                  <AboutItems
                    keyLink={i}
                    key={i}
                    LinkClassName={"tile__item_" + e.id}
                    img={`/images/man-${e.id}.png`}
                    alt={"фото-" + e.id}
                    ImgClassName={"img__" + e.id}
                    title={e.title}
                    desc={e.job}
                  ></AboutItems>
                );
              })}
            </div>
            <div className={Styles.about__ipad_mans}>
              <img src="/images/about__mens-mob.png" alt="" />
            </div>
          </div>
          <div className={Styles.about__right_block}>
            <p className={Styles.about__text}>
              Мы верим в упорство в достижении своих целей и верность
              стратегическому выбору. Мы реинвестируем на постоянной основе в
              развитие компании, делая акцент на собственных научных
              разработках, передовом оборудовании, росте квалификации кадров и
              обеспечении лучшего качества производимой продукции. Идя всегда на
              шаг впереди, мы разрабатываем системы и оборудование для
              завтрашнего дня. Мы неизменно поднимаем планку, создавая продукты,
              предвосхищающие ожидания потребителей. Мы выстраиваем долгосрочные
              отношения с клиентами, заботясь об удовлетворенности качеством
              наших систем в ходе полного цикла эксплуатации. Мы участвуем в
              наиболее сложных международных технологических проектах, поднимая
              репутацию России на внешних рынках. Мы развиваем традицию
              новаторства, обеспечивающую технологическое первенство на
              десятилетия вперед.
            </p>
            <div
              className={`${Styles.about__progress_box} cards__progress-bar`}
              ref={ref1}
            >
              {staticAboutData.map((e) => {
                return (
                  <div
                    className={`${Styles.about__progress} progress__container`}
                    key={e.id}
                  >
                    <ProgressBar
                      isView={useIsInViewport(ref1)}
                      trackWidth={2}
                      indicatorWidth={2}
                      progressLabel={e.data_circle}
                    />
                    <p className={Styles.about__progress_title}>{e.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AboutContainer };
