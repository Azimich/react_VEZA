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
  onClick?: () => void;
}

interface ICatalogsItem {
  imageUrl?: string;
  title: string;
  update: string;
  url: string;
}

interface ICatalog {
  alias?: string;
  catalogues: ICatalogsItem[];
  seoDescription?: string;
  seoKeyword?: string;
  seoMetaH1?: string;
  seoTitle?: string;
  title?: string;
  url?: string;
}

interface ISEOModal {
  toggle: () => void;
  seoTitle?: string;
  seoMetaH1?: string;
  seoDescription?: string;
  seoKeyword?: string;
  catalogData: {
    response: any;
  };
}

interface ICertificates {
  id?: number;
  images?: {
    ipad?: string;
    mobile?: string;
    pc?: string;
  };
  documentURL?: string;
  alias?: string;
  parent: number;
  title?: string;
  kind?: string;
  description?: string;
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

interface ICatalogResponse extends Omit<IResponse, "response"> {
  response: ICatalog;
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

// Данные по модалке
interface IModalBIMGroups {
  bimModelGroupId?: number;
  title?: string;
  modelGroups?: IModelGroups[];
}

interface IModelGroups {
  bimModelGroupId?: number;
  title?: string;
  modelDocuments?: IModalBIMItem[];
}

interface IModalBIMItem {
  bimModelDocumentId?: number;
  title?: string;
  documentUrl?: string;
  status?: number;

  substr(number: number): void;
}

interface IBIMModalResponse extends Omit<IResponse, "response"> {
  response: IModalBIMGroups[];
}

export {
  IBim,
  ICatalog,
  ISEOModal,
  ICertificates,
  IQuestions,
  IQuestionnaires,
  IQuestionsResponseArray,
  IBimResponseArray,
  ICertResponseArray,
  ICatalogResponse,
  ICatalogsItem,
  IModalBIMItem,
  IBIMModalResponse,
  IModalBIMGroups,
  IModelGroups,
};
