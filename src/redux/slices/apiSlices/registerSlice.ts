import {doRegister} from './../../asyncActions';
import {createSlice} from '@reduxjs/toolkit';

type TInitialState = {
  isLoading: boolean;
  err: any;
};

const initialState: TInitialState = {
  isLoading: false,
  err: {},
};

export const registerSlice = createSlice({
  name: 'register@',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(doRegister.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(doRegister.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(doRegister.rejected, (state, action) => {
      state.isLoading = false;
      state.err = action.error;
    });
  },
});

export default registerSlice.reducer;
