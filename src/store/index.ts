import { configureStore } from "@reduxjs/toolkit";
import { dummyJSONApi } from "./dummyJSON/dummyJSOM.api";
import searchReducer from './slices/searchSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [dummyJSONApi.reducerPath]: dummyJSONApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(dummyJSONApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
