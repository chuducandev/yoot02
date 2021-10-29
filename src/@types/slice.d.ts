interface ISliceLogin {
  result: number;
  message: string;
  content: {
    user: IResUser;
    token: string;
  };
}
interface ISliceForgetPassword {
  result: number;
  message: string;
  content: {};
}
interface IResGetProvinceSelectionSystem {
  message: string;
  result: number;
  content: {
    provinces: Array<{id: number; title: string}>;
  };
}
interface IResGetDistrictSelectionSystem {
  message: string;
  result: number;
  content: {
    districts: Array<{id: number; title: string}>;
  };
}