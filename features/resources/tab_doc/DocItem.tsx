import React from "react";

import Styles from "./Doc.module.scss";
import { InDevelopmentContainer } from "components/inDevelopment/InDevelopmentContainer";

const DocItem = () => {
  return (
    <div className={Styles.doc_container}>
      <InDevelopmentContainer />
    </div>
  );
};

export { DocItem };
