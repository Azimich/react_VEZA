import { FC } from "react";
import { IInput } from "./Input";
import Styles from "./input.module.scss";
import { SearchIcon } from "../icons";
import { SearchInputIcon } from "../icons/includes/SearchInputIcon";

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
