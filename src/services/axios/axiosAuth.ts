import axios, {AxiosError, AxiosResponse} from 'axios';
import {TOKEN_LOGIN, URL_YOOT_JOB} from '@env';

const baseURL = URL_YOOT_JOB;
const axiosAuth = axios.create({
  baseURL: baseURL + 'api/',
});

axiosAuth.interceptors.response.use(
  (res: AxiosResponse<{content: any; message: string; result: number}>) => {
    return res;
  },
  (err: AxiosError) => {
    throw err;
  },
);

axiosAuth.interceptors.request.use(
  async config => {
    return {
			...config,
			headers: {
				'content-type': 'application/json',
				Authorization: TOKEN_LOGIN,
			},
		}
  },
  error => Promise.reject(error),
);

export default axiosAuth;
