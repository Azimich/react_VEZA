import { ISlideImages } from "components/slider/Slider.d";

interface INewsProps {
  id: number;
  countView: number;
  description: string;
  url: string;
  images: ISlideImages;
}

export { INewsProps };
