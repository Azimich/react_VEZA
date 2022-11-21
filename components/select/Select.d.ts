interface IOptionSetting {
  instanceId: string;
  isMulti?: boolean;
  placeholder?: string;
  closeMenuOnSelect?: boolean;
  name?: string;
  onChange?: (e) => void;
  optionsData?: IOptionItem[];
  defaultValue?: IOptionItem;
  type?: "common" | "company_inn";
}

interface IOptionItem {
  value?: string;
  label?: string;
  code?: string;
}

export { IOptionSetting, IOptionItem };
