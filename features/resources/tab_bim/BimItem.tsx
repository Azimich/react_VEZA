import { CalendarIcon } from "components/icons";
import React from "react";
import { FC } from "react";
import { IBim } from "./Bim";
import Styles from "./Bim.module.scss";

const BimItem: FC<IBim> = ({ title, img, desc, date }) => {
  return (
    <div className={Styles.bim__items__item}>
      <div className={Styles.bim__items__item__img}>
        <img src={img} alt={title} />
      </div>
      <div className={Styles.bim__items__item__info}>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <ul className={Styles.bim__items__item__calendar}>
        <CalendarIcon />
        <li>{date}</li>
      </ul>
    </div>
  );
};

export { BimItem };
