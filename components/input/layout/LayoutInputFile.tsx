import Styles from "components/input/input.module.scss";
import { IInput } from "components/input/Input";
import React, { FC } from "react";
import { UploadIcon } from "components/icons";

const LayoutInputFile: FC<IInput> = ({
  placeholder = " ",
  hidden = false,
  onChange,
  onBlur,
  multi = true,
  id = "",
  ref,
  onKeyUp,
  type = "text",
  name = "",
  className = "",
  value = "",
  title = "",
}) => {
  return (
    <div className={Styles.div__container_file}>
      <label htmlFor={id} className={Styles.label__container_empty}></label>
      <label htmlFor={id} className={Styles.label__container_file}>
        <UploadIcon />
        {title}
        <input
          type={type}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          multiple={multi}
          hidden={hidden}
          name={name}
          id={id}
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
