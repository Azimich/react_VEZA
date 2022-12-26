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

interface IJobsResponseArray extends Omit<IResponse, "response"> {
  response: IJob[];
}

interface ICitiesResponseArray extends Omit<IResponse, "response"> {
  response: ICities[];
}

interface ICities {
  alias: string;
  city: string;
  district: string;
}

export { ICitiesResponseArray, IJobsResponseArray, IJob };
