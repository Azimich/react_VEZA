import ISlideImages from "../../components/slider/Slider.d";

interface INewsData {
  newsData: INewDataItem[];
}
interface INewDataItem {
  id: number;
  news_name: string;
  short_description: string;
  description_first: string;
  description_second: string;
  videoURL?: string;
  numbersample?: number;
  title?: string;
  keyword?: IKeyWord[];
  status?: boolean;
  statistics?: number;
  access?: boolean;
  items: ISlideImages[];
  alias: string;

  image_category: string;
  image_full_news: string;
}

// interface INewsImg {
//   id?: number;
//   images?: ISlideImages | string;
//   typeSlider: "img" | "video" | "text";
// }

// interface ISlideImages {
//   pc?: string;
//   ipad?: string;
//   mobile?: string;
// }

interface IKeyWord {
  paragraph: string;
}

export { INewsData, INewDataItem, IKeyWord };
