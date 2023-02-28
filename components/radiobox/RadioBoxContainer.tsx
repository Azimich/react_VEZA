import React, { FC, useState } from "react";
import Styles from "./RadioBox.module.scss";
import { IRadioBox } from "./RadioBox";

const RadioBoxContainer: FC<IRadioBox> = ({ title, onChangeData }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleOnClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className={Styles.radio_label}>
      <input
        className={Styles.radio_input}
        type="radio"
        name="radio"
        onChange={(e) => onChangeData(e)}
        onClick={() => handleOnClick()}
      />
      <span>{title}</span>
    </label>
  );
};
export { RadioBoxContainer };
