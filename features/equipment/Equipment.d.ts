import { ISlideItem } from "components/slider/Slider.d";
import { IImages, IResponse } from "types/response";
import { IBannerItem } from "features/news/News";

interface ICatalogEquipmentData {
  title: string;
  id: number;
  parent_id?: number;
  alias?: string;
  img?: string;
  back?: boolean;
  childrenData?: ICatalogEquipmentData[];
  onClick?: (e: ICatalogEquipmentData[], level: number, id: number) => void;
  level?: number;
}

interface ICatalogData {
  typo_size_id?: number;
  title?: string;
  imgSlider?: ISlideItem[];
  image?: string;
  id: number;
  cat_id: number;
  alias: string;
}

interface ICategoriesResponseArray extends Omit<IResponse, "response"> {
  response: ICategoriesItem[];
}

interface ICategoriesItem extends IBannerItem {
  alias: string;
  images?: IImages;
  level: number;
  parentAlias?: string;
  seo?: string;
  back?: boolean;
  title?: string;
  subCategories?: ICategoriesItem[];
}

export {
  ICatalogEquipmentData,
  ICategoriesItem,
  ICatalogData,
  ICategoriesResponseArray,
};
