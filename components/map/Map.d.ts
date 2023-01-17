import React, { ReactNode } from "react";
import { ISlideItem } from "../slider/Slider.d";
import { IResponse } from "../../types/response";

interface IMapData {
  id?: number;
  piece_svg: string;
  city?: string;
  country: "russia" | "belarus" | "kazah" | "uzbek";
  alias: string;
  cityAddressAlias?: string;
  districtFiasId?: string;
  district?: string;
  alt?: string;
  className?: string;
  currentClass?: string;
  onMouseEnter?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

interface IMapState extends Omit<IResponse, "response"> {
  response: IMapData[];
}

interface IMapSlice {
  mapState: IMapState;
}

interface IMapProps {
  sideBar?: ReactNode;
  formOutPut?: ReactNode;
}

interface IResponsePlants {
  offices?: IObject[];
  plants?: IObject[];
}

interface IObject {
  id?: number;
  alias?: string;
  connect?: string;
  onClick?: (alias: IObject) => void;
  object?: IObjectItem;
}

interface IObjectItem {
  xpx?: number;
  ypx?: number;
  name?: string;
  production_area?: string;
  fio?: string;
  email?: string;
  service_phone?: string;
  logistic_phone?: string;
  address?: string;
  block_title?: string;
  items?: ISlideItem[];
}

interface IObject {
  id?: number;
  alias?: string;
  count?: number;
  connection?: string;
  type_object?:
    | "commercial"
    | "social"
    | "industrial"
    | "factory"
    | "office_sales";
  object?: IObjectItem;
  icon?: ReactNode;
  onClick?: (e, alias) => void;
}

export {
  IObject,
  IMapData,
  IObjectItem,
  IMapProps,
  IMapState,
  IMapSlice,
  IResponsePlants,
};
