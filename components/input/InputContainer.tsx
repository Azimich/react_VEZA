import { FC, ReactNode } from "react";
import { IInput } from "./Input";
import Styles from "./input.module.scss";
import { LayoutInput, LayoutInputFile } from "components/input/Index";

const InputContainer: FC<IInput> = (props) => {
  let result: ReactNode;
  switch (props.type) {
    case "file":
      result = LayoutInputFile(props);
      break;
    default:
      result = LayoutInput(props);
  }

  return <>{result}</>;
};

export { InputContainer as Input };
