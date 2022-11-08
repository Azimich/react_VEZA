import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppState, AppThunk } from "store/store";
import { IFactoryState } from "features/factory/Factory";
import { HYDRATE } from "next-redux-wrapper";

const initialState: IFactoryState = {
  factoryState: [],
};

export const factorySlice = createSlice({
  name: "factoryState",
  initialState: initialState,
  reducers: {
    setData: (_state, action: PayloadAction<IFactoryState>) => {
      return action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action: PayloadAction<IFactoryState>) => {
      return {
        ...state,
        ...action.payload.factoryState,
      };
    },
  },
});

export const fetchDataFactory =
  (dispatchData: IFactoryState): AppThunk =>
  async (dispatch) => {
    dispatch(factorySlice.actions.setData(dispatchData));
  };

/*export const {} =
    factorySlice.actions;*/

export const getFactory = (state: AppState) => state.factoryState.factoryState;

export default factorySlice;
