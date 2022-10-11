import { FC } from "react";
import Styles from "./About.module.scss";
import {PeopleData} from './mockData'
import { AboutItems } from "./AboutItem";

const AboutContainer: FC = () => {
  return (<div className={Styles.about}>
      <div className={Styles.about__elem_box}>
        <div className={Styles.about__left_block}>
          <div className={Styles.tiles}>
            {PeopleData.map(e=>{
              return (<AboutItems
                LinkClassName={'tile__item_'+e.id}
                img={`/images/man-${e.id}.png`}
                alt={"фото-"+e.id}
                ImgClassName={'img__'+e.id}
                title={e.title}
                desc={e.job}
              ></AboutItems>)
            })}
           </div>
          <div className={Styles.about__ipad_mans}><img src="/images/about__mens-mob.png" alt="" /></div>
        </div>
        <div className={Styles.about__right_block}>
          <p className={Styles.about__text}>
            Мы верим в упорство в достижении своих целей и верность стратегическому выбору. Мы реинвестируем на
            постоянной основе в развитие компании, делая акцент на собственных научных разработках, передовом
            оборудовании, росте квалификации кадров и обеспечении лучшего качества производимой продукции. Идя всегда
            на шаг впереди, мы разрабатываем системы и оборудование для завтрашнего дня. Мы неизменно поднимаем
            планку, создавая продукты, предвосхищающие ожидания потребителей. Мы выстраиваем долгосрочные отношения
            с клиентами, заботясь об удовлетворенности качеством наших систем в ходе полного цикла эксплуатации. Мы
            участвуем в наиболее сложных международных технологических проектах, поднимая репутацию России на внешних
            рынках.
            Мы развиваем традицию новаторства, обеспечивающую технологическое первенство на десятилетия вперед.
          </p>
          <div className={`${Styles.about__progress_box} ${Styles.cards__progress__bar}`}>

            <div className={`${Styles.about__progress} ${Styles.progress__container}`}>
              <svg className={Styles.progressbar} viewBox="0 0 64 64">
                <circle className={Styles.progressbar__track} cx="50%" cy="50%" r="30"></circle>
                <circle className={Styles.progressbar__thumb} data-circle="185" cx="50%" cy="50%" r="30"></circle>
                <text x="32" y="33" textAnchor="middle" dominantBaseline="middle"></text>
              </svg>
              <p className={Styles.about__progress_title}>IT СПЕЦИАЛИСТОВ</p>
            </div>


            <div className={`${Styles.about__progress} ${Styles.progress__container}`}>
              <svg className={Styles.progressbar} viewBox="0 0 64 64">
                <circle className={Styles.progressbar__track} cx="50%" cy="50%" r="30"></circle>
                <circle className={Styles.progressbar__thumb} data-circle="157" cx="50%" cy="50%" r="30"></circle>
                <text x="32" y="33" textAnchor="middle" dominantBaseline="middle"></text>
              </svg>
              <p className={Styles.about__progress_title}>ИНЖИНЕРОВ</p>
            </div>

            <div className={`${Styles.about__progress} ${Styles.progress__container}`}>
              <svg className={Styles.progressbar} viewBox="0 0 64 64">
                <circle className={Styles.progressbar__track} cx="50%" cy="50%" r="30"></circle>
                <circle className={Styles.progressbar__thumb} data-circle="122" cx="50%" cy="50%" r="30"></circle>
                <text x="32" y="33" textAnchor="middle" dominantBaseline="middle"></text>
              </svg>
              <p className={Styles.about__progress_title}>МЕНЕДЖЕРОВ</p>
            </div>

            <div className={`${Styles.about__progress} ${Styles.progress__container}`}>
              <svg className={Styles.progressbar} viewBox="0 0 64 64">
                <circle className={Styles.progressbar__track} cx="50%" cy="50%" r="30"></circle>
                <circle className={Styles.progressbar__thumb} data-circle="185" cx="50%" cy="50%" r="30"></circle>
                <text x="32" y="33" textAnchor="middle" dominantBaseline="middle"></text>
              </svg>
              <p className={Styles.about__progress_title}>СОТРУДНИКОВ</p>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export { AboutContainer };
