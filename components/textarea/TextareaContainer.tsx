import { FC } from "react";

import Styles from "./Textarea.module.scss";
import { ITextarea } from "./Textarea";

const TextareaContainer: FC<ITextarea> = ({ placeholder, onChange, name }) => {
  return (
    <div className={Styles.textarea__container}>
      <textarea
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      ></textarea>
    </div>
  );
};

export { TextareaContainer };
