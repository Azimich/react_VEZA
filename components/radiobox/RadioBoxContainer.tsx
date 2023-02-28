import React, { FC, useState } from "react";
import Styles from "./RadioBox.module.scss";
import { IRadioBox } from "./RadioBox";

const RadioBoxContainer: FC<IRadioBox> = ({
  title,
  id,
  isSelected,
  ...attrs
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleOnClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label htmlFor={String(id)} {...attrs} className={Styles.radio_label}>
      <input
        id={String(id)}
        className={Styles.radio_input}
        type="radio"
        checked={isSelected}
        onClick={() => handleOnClick()}
      />
      <span>{title}</span>
    </label>
  );
};
export { RadioBoxContainer };
