interface INewsData {
  newsData: INewDataItem[];
}
interface INewDataItem {
  id: number;
  title: string;
  desc_small: string;
  desc_full: string;
  alias: string;
  count_view: number;
  image_category: string;
  image_full_news: string;
  images_list_news: INewsImg[];
}

interface INewsImg {
  image: string;
}

export { INewsData, INewDataItem };
