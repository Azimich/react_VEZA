import React from "react";
import Styles from "./Training.module.scss";
import { InDevelopmentContainer } from "components/inDevelopment/InDevelopmentContainer";

const TraningItem = () => {
  return (
    <div className={Styles.training_container}>
      <InDevelopmentContainer />
    </div>
  );
};

export { TraningItem };
