import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppState, AppThunk } from "store/store";
import { HYDRATE } from "next-redux-wrapper";
import { IMenuSlice } from "components/common/header/headerNav/Header.d";

const initialState: IMenuSlice = {
  menuState: {
    HasError: 0,
    ErrorMessage: "",
    Response: [],
  },
};

export const menuSlice = createSlice({
  name: "menuState",
  initialState: initialState,
  reducers: {
    setData: (_state, action: PayloadAction<IMenuSlice>) => {
      return action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action: PayloadAction<IMenuSlice>) => {
      return {
        ...state,
        ...action.payload.menuState,
      };
    },
  },
});

export const fetchMenu =
  (dispatchData: IMenuSlice): AppThunk =>
  async (dispatch) => {
    dispatch(menuSlice.actions.setData(dispatchData));
  };

/*export const {} =
    factorySlice.actions;*/

export const getMenu = (state: AppState) => state.menuState?.menuState;

export default menuSlice;
