import React, { FC, useEffect, useState } from "react";
import Styles from "./CheckBox.module.scss";
import { ICheckBox } from "./CheckBox";

const CheckboxWithLabel: FC<ICheckBox> = ({
  title = "",
  classCheck = "",
  name = "checkbox",
  onChangeData,
  selectedCheckBox,
  id,
  ...attrs
}) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    selectedCheckBox.filter((e) => e.id === Number(id)).length > 0
      ? setIsChecked(true)
      : setIsChecked(false);
  }, [selectedCheckBox]);

  return (
    <div className={Styles.checkbox_container}>
      <label
        htmlFor={String(id)}
        {...attrs}
        className={`${Styles.checkbox__label} ${Styles.bounce} ${classCheck}`}
      >
        <input
          data-testid={"check-box"}
          id={String(id)}
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onChangeData(e)}
          name={name}
        />
        {title}
        <svg viewBox="0 0 21 21">
          <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
        </svg>
      </label>
    </div>
  );
};

export { CheckboxWithLabel };
