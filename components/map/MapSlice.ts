import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppState, AppThunk } from "store/store";
import { HYDRATE } from "next-redux-wrapper";

import { IMapSlice, IMapState } from "components/map/Map";

const initialState: IMapState = {
  customErrorCode: 0,
  systemErrorMessage: "",
  hasError: false,
  errorMessage: "",
  response: [],
};

export const mapSlice = createSlice({
  name: "mapState",
  initialState: initialState,
  reducers: {
    setData: (_state, action: PayloadAction<IMapSlice>) => {
      return action.payload.mapState;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action: PayloadAction<IMapSlice>) => {
      return {
        ...state,
        ...action.payload.mapState,
      };
    },
  },
});

export const fetchMap =
  (dispatchData: IMapSlice): AppThunk =>
  async (dispatch) => {
    dispatch(mapSlice.actions.setData(dispatchData));
  };

/*export const {} =
    factorySlice.actions;*/

export const getMap = (state: AppState) => state.mapState;

export default mapSlice;
