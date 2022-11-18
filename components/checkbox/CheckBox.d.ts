interface ICheckBox {
  title?: string;
  classCheck?: string;
  onChange: () => void;
  onClick?: () => void;
  name: string;
  id?: number;
}

export { ICheckBox };
