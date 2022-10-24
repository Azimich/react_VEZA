interface ISliderProps {
  items: ISlideItem[];
  dots?: boolean;
  theme?: "home" | "industries" | "homecategory" | "pageProduct";
  size?: "large" | "medium" | "small" | "max" | "context";
  themeButton?: "banner" | "news" | "industries";
  url?: string;
  color?: "white" | "green" | "link";
  OnClick?: () => void;
  autoplay?: boolean;
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
  images: ISlideImages | string;
  typeSlider: "img" | "video";
  color?: "white" | "green" | "link";
  alt?: string;
  theme?: "home" | "industries" | "homecategory" | "pageProduct";
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