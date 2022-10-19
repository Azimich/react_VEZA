import { FC } from "react";
import { IInput } from "./Input";
import Styles from "./input.module.scss";

const InputContainer: FC<IInput> = ({
  placeholder = "",
  hidden = false,
  onChange = () => {},
  type = "text",
  name = "",
  className = "",
  value = "",
}) => {
  return (
    <div className={Styles.input__container}>
      <input
        type={type}
        onChange={onChange}
        hidden={hidden}
        name={name}
        className={className}
        value={value}
      />
      <label>{placeholder}</label>
    </div>
  );
};

export { InputContainer as Input };
