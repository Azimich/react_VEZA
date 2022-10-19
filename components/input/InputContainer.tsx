import { FC } from "react";
import { IInput } from "./Input";
import Styles from "./input.module.scss";

const InputContainer: FC<IInput> = ({
  placeholder = " ",
  hidden = false,
  onChange,
  onBlur,
  type = "text",
  name = "",
  className = "",
  value = "",
  title = "",
}) => {
  return (
    <div className={Styles.input__container}>
      <input
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        hidden={hidden}
        name={name}
        className={className}
        value={value}
        placeholder={placeholder}
      />
      <label>{title}</label>
    </div>
  );
};

export { InputContainer as Input };
