import { ISlideItem } from "../../../components/slider/Slider.d";

interface IReferencesImages {
  image?: string;
  id?: number;
  title?: string;
  type_code?: "commercial" | "industrial" | "social";
  onClick?: (e) => void;
  items?: ISlideItem[];
}

export { IReferencesImages };
