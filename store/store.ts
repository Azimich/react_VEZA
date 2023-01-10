import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import contactsSlice from "../features/contacts/ContactsSlice";
import factorySlice from "../features/factory/FactorySlice";
import menuSlice from "../store/slice/MenuSlice";
import authSlice from "../features/auth/AuthSlice";
import mapSlice from "components/map/MapSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      [contactsSlice.name]: contactsSlice.reducer,
      [factorySlice.name]: factorySlice.reducer,
      [menuSlice.name]: menuSlice.reducer,
      [mapSlice.name]: mapSlice.reducer,
      [authSlice.name]: authSlice.reducer,
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
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
