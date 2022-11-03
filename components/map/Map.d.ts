import React from "react";
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

interface IObjectItem {
  xpx?: number;
  ypx?: number;
  name?: string;
  alias?: string;
  production_area?: string;
  service_phone?: string;
  logistic_phone?: string;
  address?: string;
  block_title?: string;
  items?: ISlideItem[];
}

interface IObject {
  id?: number;
  alias?: string;
  connection?: string;
  type_object?: "commercial" | "social" | "industrial";
  factory?: IObjectItem;
  onClick?: (e, alias) => void;
}

export { IObject, IMapData, IObjectItem };
