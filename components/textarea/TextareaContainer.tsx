import { FC } from "react";

import Styles from "./Textarea.module.scss";
import { ITextarea } from "./Textarea";

const TextareaContainer: FC<ITextarea> = ({
  placeholder,
  onChange,
  name,
  children,
  value,
}) => {
  return (
    <div className={Styles.textarea__container}>
      <textarea
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
      >
        {children}
      </textarea>
    </div>
  );
};

export default TextareaContainer;
