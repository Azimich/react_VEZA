import { IResponse } from "../../../types/response";

interface ISupport {
  id?: number;
  title?: string;
  subtitle?: string;
  description?: string;
}

interface ITelegramResponse extends Omit<IResponse, "response"> {
  response: ITelegramItem[];
}

interface ITelegramItem {
  telegramId: number;
  title: string;
  description: string;
  channelUrl: string;
  status: number;
}
interface ISubjectResponse extends Omit<IResponse, "response"> {
  response: ISubjectItem[];
}

interface ISubjectItem {
  title: string;
  alias: string;
}

interface IFieldData {
  name: string;
  title: string;
  filter: RegExp;
  size: number;
}
export {
  ISupport,
  IFieldData,
  ITelegramResponse,
  ITelegramItem,
  ISubjectResponse,
  ISubjectItem,
};
