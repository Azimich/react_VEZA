import { IResponse } from "../../../types/response";

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
  imageUrl: string;
}

export { IAboutUsResponse, IAboutUsData };
