import React, { FC, useState } from "react";
import Styles from "./RadioBox.module.scss";
import { IRadioBox } from "./RadioBox";

const RadioBoxContainer: FC<IRadioBox> = ({
  title,
  id,
  onChangeData,
  name,
}) => {
  const [isChecked, setIsChecked] = useState<string>("0");
  const onClickRadio = (
    values: React.MouseEvent<HTMLInputElement, MouseEvent>,
  ) => {
    setIsChecked(values.currentTarget.value);
  };
  return (
    <label htmlFor={String(id)} className={Styles.radio_label}>
      <input
        id={String(id)}
        className={Styles.radio_input}
        name={name}
        type="radio"
        checked={isChecked === String(id)}
        onChange={onChangeData}
        onClick={(e) => onClickRadio(e)}
        value={String(id)}
      />
      <span>{title}</span>
    </label>
  );
};
export { RadioBoxContainer };
