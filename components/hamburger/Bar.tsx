import React from "react";
import Styles from "./Hamburger.module.scss";

const Bar = () => {
  return (
    <>
      <span className={`${Styles.bar} ${Styles.bar_1}`}></span>
      <span className={Styles.bar_small}></span>
      <span className={`${Styles.bar} ${Styles.bar_2}`}></span>
    </>
  );
};

export { Bar };
