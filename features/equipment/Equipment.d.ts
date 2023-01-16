import { ISlideItem } from "components/slider/Slider.d";
import { IResponse } from "types/response";

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
  response: IBannerItem[];
}

interface ICategoriesItem {
  title: string;
  alias: string;
  seo?: null;
  imageTitle?: string;
  imageUrl?: string;
}

export { ICatalogEquipmentData, ICatalogData, ICategoriesResponseArray };
