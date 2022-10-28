interface IMapData {
  id: number;
  piece_svg: string;
  country: "russia" | "belarus" | "tadjikistan";
  alias: string;
  alt?: string;
}

interface IFactoryItem {
  xpx: number;
  ypx: number;
  name: string;
  alias?: string;
  production_area: string;
  service_phone: string;
  logistic_phone: string;
  address: string;
}
interface IFactory {
  id: number;
  alias: string;
  connection: string;
  factory: IFactoryItem[];
  onClick?: (e, alias) => void;
}

export { IFactory, IMapData, IFactoryItem };
