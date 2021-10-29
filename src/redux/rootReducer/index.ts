import { PayloadAction } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import login from '../slices/apiSlices/loginSlice'
import register from '../slices/apiSlices/registerSlice'
import auth from '../slices/appSlices/authSlice'
import system from '../slices/apiSlices/systemSlice'

const appReducer = combineReducers({
	login,
	register,
	auth,
  system,
});

export const rootReducer = (state: any, action: PayloadAction) => {
  if (action.type === 'auth@/doLogoutSystem') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};