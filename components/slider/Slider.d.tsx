interface ISliderProps {
  items: ISlideItem[];
  dots?: boolean;
  theme?: "home" | "vacancy" | "homecategory";
  block_description?: boolean;
  title?: string;
  description?: string;
  url?: string;
  OnClick?: () => void;
  autoplay?: boolean;
}

interface ISlideImages {
  pc?: string;
  ipad?: string;
  mobile?: string;
}

interface ISlideItem {
  images: ISlideImages | string;
  typeSlider: "img" | "video";
  alt?: string;
  theme?: "home" | "vacancy" | "homecategory";
  block_description?: boolean;
  title?: string;
  description?: string;
  url?: string;
  OnClick?: (url: string) => void;
  url_banner?: string;
}

export type { ISliderProps, ISlideItem, ISlideImages };
