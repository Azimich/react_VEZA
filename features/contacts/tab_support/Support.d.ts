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
  alias?: string;
  firstName?: string;
  secondName?: string;
  email?: string;
  phone?: string;
  position?: string;
  orderNumber?: string;
  inn?: number;
  text?: string;
  title?: string;
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
