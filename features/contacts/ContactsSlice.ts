import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppState } from "store/store";
import { IContactsSlice } from "./tab_sales_office/Contacts";

const initialState: IContactsSlice = {
  managers: {
    response: [],
    hasError: false,
    errorMessage: "",
    customErrorCode: 0,
    systemErrorMessage: "",
  },
};

export const contactsSlice = createSlice({
  name: "contactsState",
  initialState: initialState,
  reducers: {
    setManagers: (state, action: PayloadAction<IContactsSlice>) => {
      return {
        ...state,
        managers: action.payload.managers,
      };
    },
  },
});

export const { setManagers } = contactsSlice.actions;

export const getManagers = (state: AppState) => state.contactsState.managers;

export default contactsSlice;
