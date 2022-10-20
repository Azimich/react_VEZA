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
  title?: string;
  img?: string;
  id: number;
  cat_id: number;
  url: string;
}

export { ICatalogEquipmentData, ICatalogData };
