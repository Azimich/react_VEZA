import IPageData from "components/pagination/Pagination.d";

interface IHomeData {
  home: {
    newsItem: IHomeResponse;
  };
}

interface INewsData {
  news: {
    newsItem: IHomeResponse;
  };
}

interface IHomeResponse {
  ErrorMessage: number;
  HasError: boolean;
  Page: IPageData;
  Response: INewDataItem[];
}

interface INewDataItem {
  Access?: number;
  Alias: string;
  Created?: string;
  FirstDescription?: string;
  Images?: {};
  Keywords?: IKeyWord[];
  NewsId: number;
  NewsName?: string;
  PatternNumber?: number;
  SecondDescription?: string;
  Seo?: string;
  SeoKeywords?: string;
  ShortDescription?: string;
  Statistics?: {
    NewsStatisticsId?: number;
    StatisticsType?: number;
    StatisticsTotal?: number;
    LastUpdated?: string;
    NewsId?: number;
  };
  Status?: string;
  Title?: string;
  VideoUrl?: string;
  ImageModel?: { Horizontal?: IImageModelItem; Vertical?: IImageModelItem };
}

interface IImageModelItem {
  Pc?: string;
  Ipad?: string;
  Mobile?: string;
}

interface IKeyWord {
  KeyWordsId: number;
  Keywords: string;
  NewsId: number;
  Url: string;
}

export { IHomeData, INewDataItem, IKeyWord, IHomeResponse, INewsData };
