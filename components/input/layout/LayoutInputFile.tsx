import Styles from "components/input/input.module.scss";
import { IInput } from "components/input/Input";
import { FC } from "react";

const LayoutInputFile: FC<IInput> = ({
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
      <label>
        {title}
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
      </label>
    </div>
  );
};
export { LayoutInputFile };
