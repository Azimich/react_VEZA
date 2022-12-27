import { IResponse } from "../../../types/response";

interface IJob {
  city: string;
  country: string;
  description: string;
  district: string;
  title: string;
  url: string;
  alias?: string;
  isDefaultCity?: boolean;
}

interface IVacancies {
  connect: string;
  city: string;
  type: "plant" | "office";
  count: 3;
}

interface IJobsResponseArray extends Omit<IResponse, "response"> {
  response: IJob[];
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
  district: string;
}

export {
  ICitiesResponseArray,
  IJobsResponseArray,
  IJob,
  IVacanciesResponseArray,
  IVacancies,
};
