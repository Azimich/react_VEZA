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

interface ICategoriesResponseArray extends Omit<IResponse, "response"> {
  response: ICategoriesItem[];
}

interface ICategoriesItem extends IBannerItem {
  alias: string;
  aliasPath?: string;
  images?: IImages[] | IImages;
  level: number;
  parentAlias?: string;
  seo?: string;
  back?: boolean;
  title?: string;
  equipment?: ICategoriesItem[];
  subCategories?: ICategoriesItem[];
  product?: boolean;
  onChange?: (alias: string) => void;
}

export { ICatalogEquipmentData, ICategoriesItem, ICategoriesResponseArray };
