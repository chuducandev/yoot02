import {apiRSystem} from '../../services/axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const doGetProvinceSelectionSystem = createAsyncThunk(
  'system@get/GetProvinceSelection',
  async (params: IParamsGetProvinceSelection) => {
    const result = await apiRSystem.getProvinceSelection(params);
    return result.data;
  },
);

export const doGetDistrictSelectionSystem = createAsyncThunk(
  'system@get/GetDistrictSelection',
  async (params: IParamsGetDistrictSelection) => {
    const result = await apiRSystem.getDistrictSelection(params);
    return result.data;
  },
);
