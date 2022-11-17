import { FC } from "react";
import { IInput } from "./Input";
import Styles from "./input.module.scss";

const InputContainer: FC<IInput> = ({
  placeholder = " ",
  hidden = false,
  onChange,
  onBlur,
  onKeyUp,
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
        id={name + "id"}
        className={className}
        value={value}
        placeholder={placeholder}
        onKeyUp={onKeyUp}
      />
      <label>{title}</label>
    </div>
  );
};

export { InputContainer as Input };
