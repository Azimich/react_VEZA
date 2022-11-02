interface IStateOption {
  readonly value?: string;
  readonly label?: string;
  code?: string;
  isMulti?: boolean;
  options?: boolean;
  placeholder?: string;
  closeMenuOnSelect?: boolean;
  onChange?: (e) => void;
}

export { IStateOption };
