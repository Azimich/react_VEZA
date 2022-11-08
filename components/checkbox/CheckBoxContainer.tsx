import React, { FC, useState } from "react";
import Styles from "./CheckBox.module.scss";
import { ICheckBox } from "./CheckBox";

const CheckboxWithLabel: FC<ICheckBox> = ({
  title = "",
  classCheck = "",
  name = "checkbox",
  onChange,
  id,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const onChangeData = () => {
    setIsChecked(!isChecked);
    // return onChange();
  };

  return (
    <>
      <label
        htmlFor={String(id)}
        className={`${Styles.checkbox__label} ${Styles.bounce} ${classCheck}`}
      >
        <input
          id={String(id)}
          type="checkbox"
          checked={isChecked}
          onChange={onChangeData}
          name={name}
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
