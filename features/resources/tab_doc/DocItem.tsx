import React from "react";
import Styles from "./Doc.module.scss";

const DocItem = () => {
  return (
    <div className={Styles.documuntation}>
      <img src="/images/dev.jpg" alt="dev" />
    </div>
  );
};

export { DocItem };
