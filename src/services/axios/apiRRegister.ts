import axiosAuth from "./axiosAuth";

export const apiRRegister = {
	register: (params: IParamsRegister) => {
		const url = 'RRegister';
    return axiosAuth.post(url, params);
	}
}