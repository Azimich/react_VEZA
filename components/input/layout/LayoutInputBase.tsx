import Styles from "components/input/input.module.scss";
import { IInput } from "components/input/Input";
import { FC } from "react";

const LayoutInputBase: FC<IInput> = ({
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
        id={name + "_file_id"}
        className={className}
        value={value}
        placeholder={placeholder}
        onKeyUp={onKeyUp}
      />
      <label>{title} </label>
    </div>
  );
};
export { LayoutInputBase };
