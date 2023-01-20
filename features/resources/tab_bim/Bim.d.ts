import { IResponse } from "types/response";

interface IBim {
  bim?: string;
  description?: string;
  imageUrl?: string;
  pluginId?: number;
  setupUrl?: string;
  status?: number;
  title?: string;
  updated?: string;
  showDownload?: boolean;
}

interface ICatalog {
  id: number;
  title?: string;
  image?: string;
  download_url?: string;
  alias?: string;
}

interface ICertificates {
  id?: number;
  image?: {
    imageTitleIpad?: string;
    imageTitleMobile?: string;
    imageTitlePc?: string;
    imageUrlIpad?: string;
    imageUrlMobile?: string;
    imageUrlPc?: string;
  };
  download_url?: string;
  alias?: string;
  parent: number;
  title?: string;
  desc?: string;
  category?: string;
}

interface IQuestions {
  answer?: string;
  question?: string;
}

interface IBimResponseArray extends Omit<IResponse, "response"> {
  response: IBim[];
}

interface ICertResponseArray extends Omit<IResponse, "response"> {
  response: ICertificates[];
}

interface IQuestionsResponseArray extends Omit<IResponse, "response"> {
  response: IQuestions[];
}

interface IQuestionnaires {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  alias?: string;
  parent?: number;
}

export {
  IBim,
  ICatalog,
  ICertificates,
  IQuestions,
  IQuestionnaires,
  IQuestionsResponseArray,
  IBimResponseArray,
  ICertResponseArray,
};
