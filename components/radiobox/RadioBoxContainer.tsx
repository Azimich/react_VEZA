import React, { FC } from "react";
import Styles from "./RadioBox.module.scss";
import { IRadioBox } from "./RadioBox";

const RadioBoxContainer: FC<IRadioBox> = ({
  title,
  id,
  onChangeData,
  isSelected,
  name,
}) => {
  return (
    <label htmlFor={String(id)} className={Styles.radio_label}>
      <input
        id={String(id)}
        className={Styles.radio_input}
        name={name}
        type="radio"
        checked={isSelected}
        onChange={onChangeData}
        value={String(id)}
      />
      <span>{title}</span>
    </label>
  );
};
export { RadioBoxContainer };
