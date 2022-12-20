import { IPage } from "../../../types/response";

interface Interaction {
  address: string;
  email: string;
  id: number;
  logistic_tel: string[];
  secretary_tel: string[];
  service_tel: string[];
  title: string;
}

interface IInteractionResponse {
  offices: {
    page: IPage;
    errorMessage: "" | null;
    systemErrorMessage: string | null;
    hasError: boolean;
    response: Interaction[];
  };
  plants: {
    errorMessage: "" | null;
    systemErrorMessage: "" | null;
    hasError: boolean;
    response: Interaction[];
    customErrorCode: number | null;
  };
}

export { Interaction, IInteractionResponse };
