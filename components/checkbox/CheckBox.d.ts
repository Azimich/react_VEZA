import { ITab } from "components/tabs/Tabs";
import { IModelGroups } from "features/resources/tab_bim/Bim";

interface ICheckBox {
  title?: string;
  isSelected?: boolean;
  classCheck?: string;
  onChangeData?: (e: IModelGroups) => void;
  onClick?: () => void;
  name: string;
  id: string;
  selectedCheckBox?: ITab[];
}

export { ICheckBox };
