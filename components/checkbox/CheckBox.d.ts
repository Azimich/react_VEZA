interface ICheckBox {
  title?: string;
  turnOn?: boolean;
  turnOff?: boolean;
  classCheck?: string;
  onChange?: () => void;
  onClick?: () => void;
  name: string;
  id?: number;
}

export { ICheckBox };
