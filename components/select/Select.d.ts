interface IOptionSetting {
  instanceId: string;
  isMulti?: boolean;
  placeholder?: string;
  closeMenuOnSelect?: boolean;
  name?: string;
  onChange?: (e) => void;
  optionsData?: IOptionItem[];
  defaultValue?: IOptionItem;
  classNameProps?: string;
  type?: "common" | "organizationINN" | "variantNews";
  value?: IOptionItem;
}

interface IOptionItem {
  value?: string;
  label?: string;
  code?: string;
  name?: string;
}

export { IOptionSetting, IOptionItem };
