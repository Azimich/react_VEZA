import React from "react";

import Styles from "./StylesIcon.module.scss";
import { CloseIcon } from "components/icons";

const ClearIcon = () => {
  return (
    <div className={Styles.close__block}>
      <CloseIcon />
    </div>
  );
};

export { ClearIcon };
