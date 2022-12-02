import React from "react";
import Styles from "./Spinners.module.scss";

const SpinnerLoadingContainer = () => {
  return (
    <div className={Styles.spinner__loading__container}>
      <div className={Styles.spinner__loading}>
        <div className={`${Styles.inner} ${Styles.one}`}></div>
        <div className={`${Styles.inner} ${Styles.two}`}></div>
        <div className={`${Styles.inner} ${Styles.three}`}></div>
      </div>
    </div>
  );
};

export { SpinnerLoadingContainer };
