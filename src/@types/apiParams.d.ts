interface IParamsLogin {
  username: string;
  password: string | number;
}
interface IParamsRegister {
  email: string;
  password: string;
  retypepassword: string;
  fullname: string;
  phone: string;
  companyname: string;
  companyaddress: string;
  companyprovinceid: number;
  companydistrictid: number;
  taxcode: string;
}
interface IParamsForgetPassword {
  email: string;
}