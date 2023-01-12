import { FC, useRef } from "react";
import Styles from "./About.module.scss";
import { staticAboutData } from "./mockData";
import { AboutItems } from "./AboutItem";
import { ProgressBar } from "components/progressbar/ProgressBarContainer";
import { useIsInViewport } from "store/hooks/useIsInViewPort";
import { IAboutUsData } from "features/home/about/AboutUs";

interface IAboutUsSSR {
  response: IAboutUsData;
}

const AboutContainer: FC<IAboutUsSSR> = ({ response }) => {
  console.log("response", response);
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
              {response.employeeDtos.map((e, i: number) => {
                return (
                  <AboutItems
                    keyLink={i}
                    key={i}
                    LinkClassName={"tile__item_" + (i + 1)}
                    img={e.imageUrl}
                    alt={e.title}
                    ImgClassName={"img__" + (i + 1)}
                    title={e.title}
                    desc={e.description}
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
