interface IFieledsData {
  name: string;
  title: string;
  filter: RegExp;
  size: number;
  password?: number;
  configPassword?: number;
  type?: "text" | "password" | "file" | "checkbox" | "date" | "number";
}

export { IFieledsData };
