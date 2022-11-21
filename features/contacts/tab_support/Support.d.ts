interface ISupport {
  id?: number;
  title?: string;
  subtitle?: string;
  description?: string;
}
interface IFieldData {
  name: string;
  title: string;
  filter: RegExp;
  size: number;
  separator: boolean;
}
export { ISupport, IFieldData };
