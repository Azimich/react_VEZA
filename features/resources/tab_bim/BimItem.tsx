import React from "react";
import { FC } from "react";
import { IBim } from "./Bim";
import Styles from "./Bim.module.scss";

const BimItem: FC<IBim> = ({ title, img, desc }) => {
  console.log(title, img, desc);

  return (
    <div className={Styles.bim__items__item}>
      <div className={Styles.bim__items__item__img}>
        <img src={img} alt={title} />
      </div>
      <div className={Styles.bim__items__item__info}>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export { BimItem };
