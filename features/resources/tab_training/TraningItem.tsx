import React from "react";
import Styles from "./Training.module.scss";

const TraningItem = () => {
  return (
    <div className={Styles.traning__item}>
      <img src="/images/dev.jpg" alt="dev" />
    </div>
  );
};

export { TraningItem };
