import axiosAuth from './axiosAuth';

export const apiRLogin = {
  login: (params: IParamsLogin) => {
    const url = 'RLogin/Login';
    return axiosAuth.post(url, params);
  },
  forgetPassword: (params: IParamsForgetPassword) => {
    const url = 'RLogin/ForgetPassword';
    return axiosAuth.post(url, params);
  },
};
