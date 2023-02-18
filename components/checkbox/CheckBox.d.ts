import { ITab } from "components/tabs/Tabs";

interface ICheckBox {
  title?: string;
  isSelected?: boolean;
  classCheck?: string;
  onChangeData?: (e: boolean) => void;
  onClick?: () => void;
  name: string;
  id: string;
  selectedCheckBox?: ITab[];
}

export { ICheckBox };
