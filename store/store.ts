import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { createWrapper } from "next-redux-wrapper";
import contactsSlice from "../features/contacts/ContactsSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      [contactsSlice.name]: contactsSlice.reducer,
    },
    devTools: true,
  });

// eslint-disable-next-line no-undef
export type AppStore = ReturnType<typeof makeStore>;
// eslint-disable-next-line no-undef
export type AppState = ReturnType<AppStore["getState"]>;
// eslint-disable-next-line no-undef
export type AppDispatch = AppStore["dispatch"];

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  // eslint-disable-next-line no-undef
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
