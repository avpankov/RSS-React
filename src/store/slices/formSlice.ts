import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IMyProduct } from 'interfaces';

interface IState {
  myProductList: IMyProduct[];
}

const initialState: IState = {
  myProductList: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setMyProductList: (state, action: PayloadAction<IMyProduct[]>) => {
      state.myProductList = action.payload;
    },
  },
});

export const { setMyProductList } = formSlice.actions;
export default formSlice.reducer;
