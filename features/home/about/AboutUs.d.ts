import { IResponse } from "../../../types/response";
import { ISlideImages } from "components/slider/Slider.d";

interface IAboutUsResponse extends Omit<IResponse, "response"> {
  response: IAboutUsData;
}

interface IAboutUsData {
  title: string;
  description: string;
  seo: string;
  specialistCounters: ISpecialistCounters[];
  employeeDtos: IEmployeeDtos[];
}

interface ISpecialistCounters {
  specialistName: string;
  specialistCount: number;
}

interface IEmployeeDtos {
  title: string;
  description: string;
  images: ISlideImages;
}

export { IAboutUsResponse, IAboutUsData };
