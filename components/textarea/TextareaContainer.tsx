import { FC } from "react";
import Styles from "./Textarea.module.scss";
import { ITextarae } from "./Textarea";

const TextareaContainer: FC<ITextarae> = ({ placeholder }) => {
  return (
    <div className={Styles.textarea__container}>
      <textarea placeholder={placeholder}></textarea>
    </div>
  );
};

export { TextareaContainer };
