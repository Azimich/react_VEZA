import { IResponse } from "../../types/response";

interface ISSRNews {
  newsData: INewsResponse;
}

interface ISSRHomeNews {
  newsData: INewsResponseArray;
}

interface INewsResponse extends Omit<IResponse, "response"> {
  response: INewsDataItem;
}
interface INewsResponseArray extends Omit<IResponse, "response"> {
  response: INewsDataItem[];
}

interface INewsDataItem {
  newsId: number;
  newsName: string;
  shortDescription: string;
  firstDescription: string;
  secondDescription: string;
  title: string;
  seoKeywords: string;
  seo: string;
  videoUrl: string;
  patternNumber: number;
  alias: string;
  keywords: IKeyWord[];
  statistics: IStatics;
  imageModel: { vertical: IImageModelItem; horizontal: IImageModelItem };
}

interface IStatics {
  newsStatisticsId: number;
  statisticsType: number;
  statisticsTotal: number;
  lastUpdated: string;
  newsId: number;
}

interface IImageModelItem {
  pc?: string;
  ipad?: string;
  mobile?: string;
}

interface IKeyWord {
  keyWordsId: number;
  keywords: string;
  newsId: number;
  url: string;
}

export {
  INewsDataItem,
  INewsResponse,
  ISSRNews,
  ISSRHomeNews,
  INewsResponseArray,
};
