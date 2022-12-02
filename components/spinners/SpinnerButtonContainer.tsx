import React from "react";
import Styles from "./Spinners.module.scss";

const SpinnerButtonContainer = () => {
  return (
    <div className={Styles.spinner__button__container}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export { SpinnerButtonContainer };
