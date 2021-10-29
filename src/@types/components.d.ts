interface IStylesMarginPadding {
  margin?: string | number;
  padding?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  paddingHorizontal?: string | number;
  paddingVertical?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
  marginTop?: string | number;
  marginHorizontal?: string | number;
  marginVertical?: string | number;
  borderWidth?: number;
}
interface IInput extends IStylesMarginPadding {
  onChangeText?: any;
  onBlur?: any;
  value?: any;
  error?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
}