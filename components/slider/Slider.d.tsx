interface ISliderProps {
  items: ISlideItem[],
  style?: "home" | "vacancy",
  block_description?: boolean,
  title?: string,
  description?: string,
  url?: string,
  OnClick?: () => void
}

interface ISlideImages {
  pc?: string,
  ipad?: string,
  mobile?: string
}

interface ISlideItem {
  images: ISlideImages|string,
  typeSlider: "img" | "video",
  alt?: string,
  style?: "home" | "vacancy",
  block_description?: boolean,
  title?: string,
  description?: string,
  url?: string,
  OnClick?: (url: string) => void,
}


export type { ISliderProps, ISlideItem,ISlideImages };
