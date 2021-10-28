import {doForgetPassword, doLogin} from './../../asyncActions';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type TInitialState = {
  isLoading: boolean;
  err: any;
  message: string;
};

const initialState: TInitialState = {
  isLoading: false,
  err: {},
  message: '',
};

export const loginSlice = createSlice({
  name: 'login@',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(doLogin.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(doLogin.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(doLogin.rejected, (state, action) => {
      state.isLoading = false;
			state.err = action.error;
    });
    builder.addCase(doForgetPassword.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(doForgetPassword.fulfilled, (state, action: PayloadAction<ISliceForgetPassword>) => {
        state.isLoading = false;
        state.message = action.payload.message;
      },
    );
    builder.addCase(doForgetPassword.rejected, (state, action) => {
      state.isLoading = false; 
			state.err = action.error;
    });
  },
});

export default loginSlice.reducer;
