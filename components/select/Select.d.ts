interface IOptionSetting {
  instanceId: string;
  isMulti?: boolean;
  options?: boolean;
  placeholder?: string;
  closeMenuOnSelect?: boolean;
  name?: string;
  onChange?: (e) => void;
  optionsData: IOptionItem[];
  defaultValue?: IOptionItem;
}

interface IOptionItem {
  value?: string;
  label?: string;
  code?: string;
}

export { IOptionSetting, IOptionItem };
