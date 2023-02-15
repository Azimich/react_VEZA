import { IResponse } from "types/response";

interface IJob {
  city: string;
  country: string;
  description: string;
  district: string;
  districtFiasId: string;
  title: string;
  url: string;
  alias?: string;
  isDefaultCity?: boolean;
}

interface IVacancies {
  connect: string;
  city: string;
  cityAlias?: string;
  type: "plant" | "office";
  count: number;
}

interface IJobsResponseArray extends Omit<IResponse, "response"> {
  response?: IJob[];
}

interface IManagersResponseArray extends Omit<IResponse, "response"> {
  response: IManagers[];
}

interface IVacanciesResponseArray extends Omit<IResponse, "response"> {
  response: IVacancies[];
}

interface ICitiesResponseArray extends Omit<IResponse, "response"> {
  response: ICities[];
}

interface ICities {
  alias: string;
  city: string;
  address?: string;
  district: string;
  isDefaultOfficeCity?: boolean;
  isDefaultPlantCity?: boolean;
  districtFiasId?: string;
  latitude: string;
  longitude: string;
}

interface IManagers {
  description: string;
  enterpriseTitle: string;
  imageUrl: string;
  mail: string;
  phone: string;
  title: string;
  type: number;
}

export {
  ICitiesResponseArray,
  IJobsResponseArray,
  IJob,
  ICities,
  IVacanciesResponseArray,
  IVacancies,
  IManagers,
  IManagersResponseArray,
};
