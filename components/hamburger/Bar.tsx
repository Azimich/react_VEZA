import React from "react";
import Styles from "./Hamburger.module.scss";

const Bar = () => {
  return (
    <>
      <span className={`${Styles.bar} ${Styles.bar__1}`}></span>
      <span className={`${Styles.bar} ${Styles.bar__2}`}></span>
      <span className={`${Styles.bar} ${Styles.bar__3}`}></span>
      <span className={`${Styles.bar} ${Styles.bar__4}`}></span>
    </>
  );
};

export { Bar };
