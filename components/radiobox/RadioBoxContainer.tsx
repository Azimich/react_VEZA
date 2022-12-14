import React, { FC } from "react";
import Styles from "./RadioBox.module.scss";
import { IRadioBox } from "./RadioBox";

const RadioBoxContainer: FC<IRadioBox> = ({ title }) => {
  return (
    <>
      <label className={Styles.radio_label}>
        <input className={Styles.radio_input} type="radio" name="radio" />
        <span>{title}</span>
      </label>
    </>
  );
};
export { RadioBoxContainer };
