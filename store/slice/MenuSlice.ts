import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppState, AppThunk } from "store/store";
import { HYDRATE } from "next-redux-wrapper";
import {
  IMenuSlice,
  IMenuState,
} from "components/common/header/headerNav/Header.d";

const initialState: IMenuState = {
  HasError: 0,
  ErrorMessage: "",
  Response: [],
};

export const menuSlice = createSlice({
  name: "menuState",
  initialState: initialState,
  reducers: {
    setData: (_state, action: PayloadAction<{ menuState?: IMenuState }>) => {
      return action.payload.menuState;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action: PayloadAction<{ menuState: IMenuState }>) => {
      return {
        ...action.payload.menuState,
      };
    },
  },
});

export const fetchMenu =
  (dispatchData: { menuState: IMenuState }): AppThunk =>
  async (dispatch) => {
    dispatch(menuSlice.actions.setData(dispatchData));
  };

/*export const {} =
    factorySlice.actions;*/

export const getMenu = (state: AppState) => state.menuState.Response;

export default menuSlice;
