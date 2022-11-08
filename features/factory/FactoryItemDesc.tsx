import { FC } from "react";

import { IFactoryItems } from "./Factory";
import Styles from "./FactoryItem.module.scss";

const FactoryItemDesc: FC<IFactoryItems> = ({ secondTitle, subText, img }) => {
  return (
    <div className={Styles.factory__items} key={img}>
      <div className={Styles.factory__items__bottom}>
        <div className={Styles.factory__items__item}>
          <div className={Styles.factory__items__item__unfo}>
            <h2>{secondTitle}</h2>
            <p>{subText}</p>
          </div>
          <div className={Styles.factory__items__image}>
            <img src={"/images/" + img} alt="factory" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { FactoryItemDesc };
