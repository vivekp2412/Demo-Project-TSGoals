import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import cartReducer from "src/store/features/cart";

const environment = import.meta.env;

//store configuration
export const store = configureStore({
  reducer: {
    cart: cartReducer,
   
  },
  devTools: environment.VITE_APP_MODE === "development", // Redux DevTools in development mode
});

// defining the types for the root and Dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
