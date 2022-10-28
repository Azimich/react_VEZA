import { ReactNode } from "react";

interface IMapData {
  id: number;
  piece_svg: string;
  alias: string;
  alt?: string;
  factory?: IFactory[];
}

interface IFactory {
  xpx: number;
  ypx: number;
  name: string;
  production_area: string;
  service_phone: string;
  logistic_phone: string;
  address: string;
}

export { IFactory, IMapData };
