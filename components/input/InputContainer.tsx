import { FC, ReactNode } from "react";
import { IInput } from "./Input";
import { LayoutInput, LayoutInputFile } from "components/input/index";

const InputContainer: FC<IInput> = (props) => {
  const { type = "text" } = props;
  let result: ReactNode;
  switch (type) {
    case "file":
      result = LayoutInputFile(props);
      break;
    default:
      result = LayoutInput(props);
  }
  return <>{result}</>;
};

export { InputContainer as Input };
