import { IObjects, IResponse } from "../../types/response";

interface IDecisionData {
  shortDescription?: string;
  description?: string;
  industryId: number;
  title: string;
  alias: string;
  imageUrl: string;
}

interface IDecisionResponse extends Omit<IResponse, "response"> {
  response: IDecisionData;
}
interface IObjectResponse extends Omit<IResponse, "response"> {
  response: IObjects[];
}

interface IDecisionObjectResponse {
  decision: IDecisionResponse;
  objects: IObjectResponse;
}

interface IDecisionResponseArray extends Omit<IResponse, "response"> {
  response: IDecisionData[];
}

interface ISSRDecisionArray {
  decision: IDecisionResponseArray;
}

interface ISSRDecision {
  data: IDecisionObjectResponse;
}

interface IOwnObjects {
  image: string;
  titleObject: string;
  titleDeliveryObject?: string;
  address: string;
  slide_position: number;
  deliveryProducts?: IDeliveryProducts[];
}

export {
  IDecisionData,
  IOwnObjects,
  IDecisionResponseArray,
  IDecisionResponse,
  ISSRDecisionArray,
  ISSRDecision,
  IDecisionResponseObject,
};
