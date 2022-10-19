interface IInput {
  placeholder?: string;
  onChange?: () => {};
  hidden?: boolean;
  type?: "text" | "password" | "file" | "checkbox";
  name: string;
  className?: string;
  value: string;
}

export { IInput };
