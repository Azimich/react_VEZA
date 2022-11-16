interface IMenuData {
  MenuId?: number;
  Title?: string;
  Alias?: string;
  OrderPosition?: number;
}

interface IMenuState {
  HasError?: number;
  ErrorMessage?: string;
  Response?: IMenuData[];
}

interface IMenuSlice {
  menuState: IMenuState;
}

export type { IMenuData, IMenuState, IMenuSlice };
