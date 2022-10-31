import { FC } from "react";

import { IFactory } from "./Factory";
import Styles from "./FactoryItem.module.scss";

const FactoryItem: FC<IFactory> = (props) => {
  return (
    <></>
    /*    <>
      {items && (
        <div className={Styles.factory__items}>
          <div className={Styles.factory__items__top}>
            <h1>{firstTitle}</h1>
            <p>{descroptionTop}</p>
          </div>
          <div className={Styles.factory__items__bottom}>
            <div className={Styles.factory__items__item}>
              <div className={Styles.factory__items__item__unfo}>
                <h2>{items?.secondTitle}</h2>
                <p>{items?.subText}</p>
              </div>
              <div className={Styles.factory__items__image}>
                <img src={"/images/" + items?.img} alt="factory" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>*/
  );
};

export { FactoryItem };
