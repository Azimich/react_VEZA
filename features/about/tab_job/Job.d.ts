import { IResponse } from "../../../types/response";

interface IMockJob {
  id: number;
  url_hh: string;
  address: string;
  title: string;
  desc: string;
}
interface IResponseArray extends Omit<IResponse, "response"> {
  response: ICities[];
}

interface ICities {
  alias: string;
  city: string;
  district: string;
}

export { IMockJob, IResponseArray };
