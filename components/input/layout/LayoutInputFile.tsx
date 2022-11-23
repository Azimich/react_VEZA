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
  onKeyUp,
  type = "text",
  name = "",
  className = "",
  filesname,
  title = "",
}) => {
  return (
    <div className={Styles.div__container_file}>
      <label htmlFor={id} className={Styles.label__container_empty}>
        {filesname}
      </label>
      <label htmlFor={id} className={Styles.label__container_file}>
        <UploadIcon />
        {title}
        <input
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          multiple={multi}
          hidden={hidden}
          name={name}
          id={id}
          className={className}
          placeholder={placeholder}
          onKeyUp={onKeyUp}
        />
      </label>
    </div>
  );
};
export { LayoutInputFile };
