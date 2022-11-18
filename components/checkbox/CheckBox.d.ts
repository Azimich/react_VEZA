import { ChangeEvent } from "react";

interface ICheckBox {
  title?: string;
  turnOn?: boolean;
  turnOff?: boolean;
  classCheck?: string;
  onChangeData?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  name: string;
  id?: string;
}

export { ICheckBox };
