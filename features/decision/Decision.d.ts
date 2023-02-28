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
interface IObjectResponseArray extends Omit<IResponse, "response"> {
  response: IObjects[];
}

interface IDecisionObjectResponse {
  decision: IDecisionResponse;
  objects: IObjectResponseArray;
  equipment: IEquipmentResponseArray;
}

interface IDecisionResponseArray extends Omit<IResponse, "response"> {
  response: IDecisionData[];
}

interface IEquipmentResponseArray extends Omit<IResponse, "response"> {
  response: IEquipment[];
}
interface ISSRDecisionArray {
  decision: IDecisionResponseArray;
}

interface ISSRDecision {
  data: IDecisionObjectResponse;
}

interface IEquipment {
  alias: string;
  imageUrl: string;
  title: string;
  aliasOtr: string;
}

export {
  IDecisionData,
  IEquipment,
  IDecisionResponseArray,
  IDecisionResponse,
  ISSRDecisionArray,
  ISSRDecision,
  IDecisionObjectResponse,
};
