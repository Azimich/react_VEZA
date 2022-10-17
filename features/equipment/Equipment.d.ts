interface ICatalogEquipmentData {
  title: string;
  id: number;
  parent_id: number;
  alias?: string;
  img?: string;
  onClick?: (e: any) => void;
}
interface ICatalogData {
  title: string;
  img: string;
  id: number;
}

export { ICatalogEquipmentData, ICatalogData };
