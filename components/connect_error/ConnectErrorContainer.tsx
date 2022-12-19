import Styles from "./ConnectError.module.scss";
import { FC } from "react";

interface IConnectError {
  type: "text" | "banner" | "catalog";
}

const ConnectErrorContainer: FC<IConnectError> = ({ type }) => {
  let result = "";
  switch (type) {
    case "text": {
      result = `Приносим свои извинения. Произошел технический сбой. Наши специалисты уже работают над решением!`;
      break;
    }
    default: {
      result = "";
    }
  }
  return <div className={Styles.ConnectErrorContainer}>{result}</div>;
};

export { ConnectErrorContainer };
