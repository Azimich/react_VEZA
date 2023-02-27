import { IImages, IResponse } from "../../types/response";
import { ICategoriesResponseArray } from "features/equipment/Equipment";
import { IAboutUsResponse } from "features/home/about/AboutUs";

interface ISSRNews {
  newsData: INewsResponse;
}

interface ISSRHome {
  indexAboutUS: IAboutUsResponse;
  indexBanner: IBannerResponseArray;
  indexCategories: ICategoriesResponseArray;
  indexIndustries: IIndustriesResponse;
  newsData: INewsResponseArray;
}

interface INewsResponse extends Omit<IResponse, "response"> {
  response: INewsDataItem;
}

/*interface IBannerItem extends Omit<IResponse, "response"> {
  response: IBannerItem[];
}*/
interface IIndustriesResponse extends Omit<IResponse, "response"> {
  response: [];
}

interface INewsResponseArray extends Omit<IResponse, "response"> {
  response: INewsDataItem[];
}

interface IBannerResponseArray extends Omit<IResponse, "response"> {
  response: IBannerItem[];
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
    /*    images?: IImageModelItem;*/
    pageGalleryImages?: IImageModelItemArray;
    pageTopImage?: IImageModelItem;
  };
}

interface IBannerItem {
  title?: string;
  description?: string;
  alias?: string;
  seo?: string;
  imageTitle?: string;
  imageUrl?: string;
  slideNumber?: number;
  show_text?: boolean;
  images?: IImages;
  shortDescription?: string;
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
interface IImageModelItemArray {
  pc?: string[];
  ipad?: string[];
  mobile?: string[];
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
  ISSRHome,
  IBannerItem,
  INewsResponseArray,
  IBannerResponseArray,
  IIndustriesResponse,
};
