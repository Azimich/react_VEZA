import { IResponse } from "types/response";
import { IObjectItem } from "components/map/Map";

interface IInteraction {
  address: string;
  email: string;
  id: number;
  logistic_tel: string[];
  secretary_tel: string[];
  service_tel: string[];
  title: string;
  object: IObjectItem;
}

interface IInterationDirector {
  title: string;
  description: string;
  imageUrl: string;
  mail: string;
  phone: string;
  orderPosition: 1;
}

interface IInteractionResponseOffices extends Omit<IResponse, "response"> {
  response: IInteraction[];
}
interface IInteractionResponseDirector extends Omit<IResponse, "response"> {
  response: IInterationDirector[];
}
export {
  IInteraction,
  IInterationDirector,
  IInteractionResponseDirector,
  IInteractionResponseOffices,
};
