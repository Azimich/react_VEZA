import React, { FC } from "react";
import Styles from "./SliderContainer.module.scss";

const SliderItem: FC = () => {
  return (
    <div className={Styles.slider__tabs}>
      <div className={Styles.slider__tabs__container}></div>
    </div>
  );
};

export { SliderItem };
