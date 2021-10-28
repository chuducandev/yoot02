import { createSlice } from '@reduxjs/toolkit'

type TInitialState = {
	isLoggedIn: boolean,
	token: string,
}

const initialState: TInitialState = {
	isLoggedIn: false,
	token: '',
}

const authSlice = createSlice({
	name: '@auth',
	initialState,
	reducers: {
		doLoginSystem: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload;
    },
    doLogoutSystem: (state) => {
      state.isLoggedIn = false;
    },
    doCheckLogin(state, actions) {
      state.token = actions.payload;
    },
  },
});

export const { doLoginSystem, doLogoutSystem, doCheckLogin } = authSlice.actions;
export default authSlice.reducer;