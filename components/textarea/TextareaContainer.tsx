import { FC } from "react";
import Styles from "./Textarea.module.scss";
import { ITextarae } from "./Textarea";

const TextareaContainer: FC<ITextarae> = () => {
  return (
    <div className={Styles.textarea__container}>
      <textarea placeholder={"Ваше сообщение"}></textarea>
    </div>
  );
};

export { TextareaContainer };
