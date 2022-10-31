interface ISliderProps {
  items: ISlideItem[];
  dots?: boolean;
  navigations?: boolean;
  theme?:
    | "home"
    | "industries"
    | "homecategory"
    | "pageProduct"
    | "factorySlider";
  size?: "large" | "medium" | "small" | "max" | "context";
  themeButton?: "banner" | "news" | "industries";
  url?: string;
  color?: "white" | "green" | "link";
  OnClick?: (url: string) => void;
  autoplay?: boolean;
  loop?: boolean;
  slidesPerView?: number;
  spaceBetween?: number;
  navigation?: boolean;
  code?: string;
  effectSlide?:
    | "slide"
    | "fade"
    | "cube"
    | "coverflow"
    | "flip"
    | "creative"
    | "cards";
}

interface ISlideImages {
  pc?: string;
  ipad?: string;
  mobile?: string;
}

interface ISlideItem {
  id?: number;
  images?: ISlideImages | string;
  typeSlider: "img" | "video" | "text";
  color?: "white" | "green" | "link";
  alt?: string;
  code?: string;
  theme?:
    | "home"
    | "industries"
    | "homecategory"
    | "pageProduct"
    | "factorySlider";
  themeButton?: "banner" | "news" | "industries";
  size?: "large" | "medium" | "small" | "max" | "context";
  block_description?: boolean;
  title?: string;
  description?: string;
  url?: string;
  OnClick?: (url: string) => void;
  url_banner?: string;
}

export type { ISliderProps, ISlideItem, ISlideImages };
