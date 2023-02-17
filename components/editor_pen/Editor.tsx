import React, { FC } from "react";
import Styles from "./Editor.module.scss";
import { PenIcon } from "components/icons";

const Editor: FC = () => {
  return (
    <div className={Styles.edit_icon_container}>
      <div className={Styles.edit_icon}>
        <PenIcon />
      </div>
    </div>
  );
};

export { Editor };
