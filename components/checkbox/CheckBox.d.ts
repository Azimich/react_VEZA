import { ChangeEvent } from "react";
import { ITab } from "components/tabs/Tabs";

interface ICheckBox {
  title?: string;
  classCheck?: string;
  onChangeData?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  name: string;
  id: string;
  selectedCheckBox?: ITab[];
}

export { ICheckBox };
