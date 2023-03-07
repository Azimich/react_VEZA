import { ChangeEvent, ReactNode } from "react";

interface IInput {
  title?: string;
  draggable?: boolean;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  hidden?: boolean;
  type?: "text" | "password" | "file" | "checkbox" | "date" | "number";
  id: string;
  multi?: boolean;
  name?: string;
  className?: string;
  value?: string;
  filesname?: ReactNode;
  accept?: string;
}

export { IInput };
