interface IParamsLogin {
  username: string;
  password: string | number;
}
interface IParamsRegister {
  email: string;
  password: string;
  retypePassword: string;
  fullname: string;
  phone: string;
  companyName: string;
  companyAddress: string;
  companyProvinceId: number;
  companyDistrictId: number;
  taxCode: string;
}
interface IParamsForgetPassword {
  email: string;
}
interface IParamsGetProvinceSelection {
  ishasrecruitment?: number;
  iswithall?: number;
}
interface IParamsGetDistrictSelection {
  provinceid: string | number,
}