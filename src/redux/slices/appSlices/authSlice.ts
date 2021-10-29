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
      console.log('Token:', action.payload)
    },
    doLogoutSystem: (state) => {
      state.isLoggedIn = false;
      state.token = '';
      console.log('Logging out')
    },
    doCheckLogin(state, actions) {
      state.token = actions.payload;
    },
  },
});

export const { doLoginSystem, doLogoutSystem, doCheckLogin } = authSlice.actions;
export default authSlice.reducer;