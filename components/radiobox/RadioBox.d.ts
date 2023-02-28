interface IRadioBox {
  isSelected?: boolean;
  type?: string;
  checked?: boolean;
  title?: string;
  onChangeData?: () => void;
  onClick?: (e) => void;
  name?: string;
  id?: string;
}

export { IRadioBox };
