import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppState } from "../../store/store";
import { IContactsSlice } from "./tab_sales_office/Contacts";

const initialState: IContactsSlice = {
  selectedOfficeSalesCity: {},
  optionsOfficeSalesCity: [],
};

export const contactsSlice = createSlice({
  name: "contactsState",
  initialState: initialState,
  reducers: {
    setSelectedOfficeSalesCity: (
      state,
      action: PayloadAction<IContactsSlice>
    ) => {
      return {
        ...state,
        selectedOfficeSalesCity: action.payload.selectedOfficeSalesCity,
      };
    },
    setOptionsOfficeSalesCity: (
      state,
      action: PayloadAction<IContactsSlice>
    ) => {
      return {
        ...state,
        optionsOfficeSalesCity: action.payload.optionsOfficeSalesCity,
      };
    },
  },
});

export const { setSelectedOfficeSalesCity, setOptionsOfficeSalesCity } =
  contactsSlice.actions;

export const getSelectedOfficeSalesCity = (state: AppState) =>
  state.contactsState.selectedOfficeSalesCity;
export const getOptionsOfficeSalesCity = (state: AppState) =>
  state.contactsState.optionsOfficeSalesCity;

export default contactsSlice;
