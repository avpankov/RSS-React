import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "interfaces";

interface IState {
  search: string;
  productList: IProduct[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: IState = {
  search: '',
  productList: [],
  isLoading: false,
  isError: false,
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setProductList: (state, action: PayloadAction<IProduct[]>) => {
      state.productList = action.payload
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setIsError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload
    }
  }
})

export const {setSearch, setProductList, setIsLoading, setIsError} = searchSlice.actions;
export default searchSlice.reducer;
