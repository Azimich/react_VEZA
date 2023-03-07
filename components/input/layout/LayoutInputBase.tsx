import Styles from "components/input/input.module.scss";
import { IInput } from "components/input/Input";
import { FC } from "react";

const LayoutInputBase: FC<IInput> = ({
  placeholder = " ",
  draggable = false,
  hidden = false,
  onChange,
  onBlur,
  onKeyUp,
  id,
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
        id={id}
        className={className}
        value={value}
        placeholder={placeholder}
        onKeyUp={onKeyUp}
        draggable={draggable}
      />
      <label htmlFor={id}>{title}</label>
    </div>
  );
};

export { LayoutInputBase };
