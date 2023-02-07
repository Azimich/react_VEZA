interface ISliderProps {
  id?: number;
  items: ISlideItem[];
  speed?: number;
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
  OnClick?: (code: string) => void;
  activePage?: string;
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
  breakpoints?: {};
  centeredSlides?: boolean;
}

interface ISlideImages {
  pc?: string;
  ipad?: string;
  mobile?: string;
  wide?: string;
}

interface ISlideItem {
  id?: number;
  link_slider: boolean;
  images?: ISlideImages | string;
  typeSlider: "img" | "video" | "text";
  color?: "white" | "green" | "link";
  alt?: string;
  code?: string;
  activePage?: string;
  activePageDefault?: boolean;
  show_text?: boolean;
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
  OnClick?: (code: string) => void;
  url_banner?: string;
}

export type { ISliderProps, ISlideItem, ISlideImages };
