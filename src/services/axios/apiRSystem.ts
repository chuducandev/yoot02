import {objToQuery} from './../../helpers/';
import axiosAuth from './axiosAuth';

const basicUrl = 'RSystem/';

export const apiRSystem = {
  getProvinceSelection: (params: IParamsGetProvinceSelection) => {
    const url = basicUrl + 'GetProvinceSelection';
    return axiosAuth.get(url + objToQuery(params));
  },
  getDistrictSelection: (params: IParamsGetDistrictSelection) => {
    const url = basicUrl + 'GetDistrictSelection';
    return axiosAuth.get(url + objToQuery(params));
  },
};
