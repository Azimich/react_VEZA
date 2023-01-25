import { IPage } from "../../../types/response";
import { IObjectItem } from "components/map/Map";

interface Interaction {
  address: string;
  email: string;
  id: number;
  logistic_tel: string[];
  secretary_tel: string[];
  service_tel: string[];
  title: string;
  object: IObjectItem;
}

interface IInteractionResponse {
  response: {
    offices: {
      page: IPage;
      errorMessage: "" | null;
      systemErrorMessage: string | null;
      hasError: boolean;
      response?: Interaction[];
    };
    plants: Interaction[];
  };
}

export { Interaction, IInteractionResponse };
