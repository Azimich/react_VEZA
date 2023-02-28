import { IImages, IResponse } from "../../../types/response";

interface IEquipmentResponse extends Omit<IResponse, "response"> {
  response: IEquipmentItem;
}

interface IEquipmentItem {
  images: IImages[];
  product: boolean;
  advantages: string[];
  blocks: IBlockItem[];
  details: IDetailsItem[];
  alias: string;
  seo: string;
  title: string;
}

interface IBlockItem {
  title: string;
  documentCategoryEnum: number;
  status: number;
  documents: IDocuments[];
}

interface IDocuments {
  status: number;
  title: string;
  url: string;
}

interface IDetailsItem {
  description: string;
  shortDescription: string;
  subtitle: string;
}

export { IEquipmentItem, IEquipmentResponse, IBlockItem };
