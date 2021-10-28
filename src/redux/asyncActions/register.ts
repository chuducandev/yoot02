import {apiRRegister} from './../../services/axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const doRegister = createAsyncThunk(
  'auth@/postRegister',
  async (params: IParamsRegister) => {
    const result = await apiRRegister.register(params);
    return result.data;
  },
);