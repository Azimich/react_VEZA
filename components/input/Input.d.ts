import { ChangeEvent } from "react";

interface IInput {
  title?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  hidden?: boolean;
  type?: "text" | "password" | "file" | "checkbox";
  name: string;
  className?: string;
  value: string;
}

export { IInput };
