import { IResponse } from "../../types/response";

interface IAuthResponse extends Omit<IResponse, "response"> {
  response: IAuthItem;
}

interface IAuthState {
  identify: boolean; //для определения был запрос на сервер или нет
  data?: IAuthResponse;
}

interface IAuthItem {
  dateOfBirth: string;
  educationalPoints: number;
  email: string;
  name: string;
  organizationAddress: string;
  organizationINN: number;
  organizationName: string;
  password: string;
  patronymic: string;
  phones: string;
  position: string;
  role: number;
  status: number;
  surname: string;
}

export { IAuthState, IAuthResponse };
