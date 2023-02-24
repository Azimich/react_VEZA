import { IResponse } from "types/response";

interface IMenuData {
  menuId?: number;
  title?: string;
  alias?: string;
  orderPosition?: number;
  onlyAdmin?: boolean;
}

interface IMenuState extends Omit<IResponse, "response"> {
  response: IMenuData[];
}

interface IMenuSlice {
  menuState: IMenuState;
}

export type { IMenuData, IMenuState, IMenuSlice };
