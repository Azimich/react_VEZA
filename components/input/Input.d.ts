interface IInput {
  placeholder?: string;
  onChange: () => void;
  hidden?: boolean;
  type?: "text" | "password" | "file" | "checkbox";
}

export { IInput };
