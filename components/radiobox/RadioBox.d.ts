import { ChangeEvent } from "react";

interface IRadioBox {
  isSelected?: boolean;
  type?: string;
  checked?: boolean;
  title?: string;
  onChangeData?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  name?: string;
  id?: string;
}

export { IRadioBox };
