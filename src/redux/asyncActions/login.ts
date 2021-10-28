import {apiRLogin} from './../../services/axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const doLogin = createAsyncThunk(
  'auth@/postLogin',
  async (params: IParamsLogin) => {
    const result = await apiRLogin.login(params);
    return result.data;
  },
);

export const doForgetPassword = createAsyncThunk(
  'auth@/postForgetPassword',
  async (params: IParamsForgetPassword) => {
    const result = await apiRLogin.forgetPassword(params);
    return result.data;
  },
);
