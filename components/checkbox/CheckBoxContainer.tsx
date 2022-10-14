import React, { FC, useState } from "react";
import Styles from "./CheckBox.module.scss";
import { ICheckBox } from "./CheckBox";

const CheckboxWithLabel: FC<ICheckBox> = ({ title = "" }) => {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label
        htmlFor={"customCheckbox"}
        className={`${Styles.checkbox__label} ${Styles.bounce}`}
      >
        <input
          className={Styles.checkbox__input}
          id={"customCheckbox"}
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
        />
        {title}
        <svg viewBox="0 0 21 21">
          <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
        </svg>
      </label>
    </>
  );
};
export { CheckboxWithLabel };
