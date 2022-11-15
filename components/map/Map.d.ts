import React, { ReactNode } from "react";
import { ISlideItem } from "../slider/Slider.d";

interface IMapData {
  id: number;
  piece_svg: string;
  country: "russia" | "belarus" | "uzbek";
  alias: string;
  alt?: string;
  className?: string;
  currentClass?: string;
  onMouseEnter?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

interface IMapProps {
  sideBar?: ReactNode;
  formOutPut?: ReactNode;
}

interface IObjectItem {
  xpx?: number;
  ypx?: number;
  name?: string;
  alias?: string;
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

export { IObject, IMapData, IObjectItem, IMapProps };
