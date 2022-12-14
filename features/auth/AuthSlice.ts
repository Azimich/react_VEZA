import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppState } from "store/store";
import { IAuthState } from "./Auth.d";

const initialState: IAuthState = {
  identify: false,
};

export const authSlice = createSlice({
  name: "AuthState",
  initialState: initialState,
  reducers: {
    setDataAuth: (_state, action: PayloadAction<IAuthState>) => {
      return { ..._state, ...action.payload };
    },
  },
});

export const { setDataAuth } = authSlice.actions;

export const getAuth = (state: AppState) => state.AuthState;

export default authSlice;
