import { FC, ReactNode } from "react";
import Styles from "./Message.module.scss";

interface IMessage {
  children: ReactNode;
  className?: string;
  type: "error" | "success" | "attention";
}

const MessageItem: FC<IMessage> = ({
  children,
  type = "error",
  className = "",
}) => {
  return (
    <div
      className={`${Styles["message_container_" + type]} ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};
export { MessageItem };
