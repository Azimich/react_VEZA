import { IResponse } from "../../types/response";

interface ISSRNews {
  newsData: INewsResponse;
}

interface ISSRHomeNews {
  newsData: INewsResponseArray;
  indexBanner: IBannerResponseArray;
}

interface INewsResponse extends Omit<IResponse, "response"> {
  response: INewsDataItem;
}

interface INewsResponseArray extends Omit<IResponse, "response"> {
  response: INewsDataItem[];
}

interface IBannerResponseArray extends Omit<IResponse, "response"> {
  response: IBannerItem[];
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
  imageModel: {
    vertical?: IImageModelItem;
    horizontal?: IImageModelItem;
    images?: IImageModelItem;
  };
}

interface IBannerItem {
  title: string;
  description: string;
  alias: string;
  seo: string;
  imageTitle: string;
  imageUrl: string;
  slideNumber: number;
  showText: boolean;
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
