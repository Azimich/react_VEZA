import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppState } from "store/store";
import { IAuthState } from "./Auth.d";

const initialState: IAuthState = {
  identify: false,
  customErrorCode: 0,
  errorMessage: "",
  hasError: false,
  response: [],
};

export const authSlice = createSlice({
  name: "AuthState",
  initialState: initialState,
  reducers: {
    setDataAuth: (_state, action: PayloadAction<IAuthState>) => {
      return action.payload;
    },
  },
});

export const { setDataAuth } = authSlice.actions;

export const getAuth = (state: AppState) => state.factoryState.factoryState;

export default authSlice;
