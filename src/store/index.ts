import { configureStore } from "@reduxjs/toolkit";
import { dummyJSONApi } from "./dummyJSON/dummyJSOM.api";

export const store = configureStore({
  reducer: {
    [dummyJSONApi.reducerPath]: dummyJSONApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(dummyJSONApi.middleware)
})
