import React, {useEffect, useState} from 'react';
import {
  View, 
  StyleSheet, 
  Alert,
  SafeAreaView,
  StatusBar,
  Button,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {Input} from '../../components';
import {useNavigation} from '@react-navigation/core';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {
  doGetDistrictSelectionSystem,
  doGetProvinceSelectionSystem,
  doRegister,
} from '../../redux/asyncActions';
import {unwrapResult} from '@reduxjs/toolkit';
import { Picker } from '@react-native-picker/picker';

type FormValues = {
  email: string;
  password: string;
  retypePassword: string;
  fullname: string;
  phone: string;
  companyName: string;
  companyAddress: string;
  companyDistrictId: number;
  companyProvinceId: number;
  taxCode: string;
  // check: boolean;
};
export const Register = () => {
  const {
    handleSubmit,
    formState: {errors},
    watch,
    setValue,
    getValues,
    control,
  } = useForm<FormValues>();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const listProvince = useAppSelector(state => state.system.listProvincesSystem);
  const filteredListProvince = listProvince.filter(item => item.id !== 0);
  const listDistrictsSystem = useAppSelector(state => state.system.listDistrictsSystem);

  const companyProvinceId = watch('companyProvinceId')

  useEffect(() => {
    dispatch(doGetProvinceSelectionSystem({}));
  }, []);

  useEffect(() => {
    dispatch(doGetDistrictSelectionSystem({provinceid: companyProvinceId || 0}),);
  }, [companyProvinceId]);

  const onSubmit = (data: FormValues) => {
    console.log(data)
    // return
    dispatch(doRegister(data))
      .then(unwrapResult)
      .then((res: {result: number; content: any; message: string}) => {
        if (!res.result) {
          Alert.alert(res.message);
          return;
        }
        Alert.alert('Doanh nghiệp đã đăng ký thành công YOOT JOB sẽ liên lạc với quý doanh nghiệp trong thời gian sớm nhất');
      })
      .catch((err: any) => {
        Alert.alert(JSON.stringify(err));
      });
  };


  return (
		<SafeAreaView style={{backgroundColor: '#ffffff'}}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#ffffff"
      />
      <View style={styles.container}>
        <Controller
          name="email"
          rules={{
            required: {value: true, message: 'Vui lòng nhập email'},
          }}
          defaultValue=""
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="Email đăng nhập"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              error={errors.email && errors.email.message}
            />
          )}
        />
        <Controller
          name="password"
          rules={{
            required: {value: true, message: 'Vui lòng nhập mật khẩu'},
          }}
          defaultValue=""
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="Mật khẩu"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              secureTextEntry={true}
              error={errors.password && errors.password.message}
            />
          )}
        />
        <Controller
          name="retypePassword"
          rules={{
            required: {
              value: true,
              message: 'Vui lòng nhập lại mật khẩu',
            },
          }}
          defaultValue=""
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="Nhập lại mật khẩu"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              secureTextEntry={true}
              error={errors.retypePassword && errors.retypePassword.message}
            />
          )}
        />
        <Controller
          name="fullname"
          rules={{
            required: {value: true, message: 'Vui lòng nhập họ tên'},
          }}
          defaultValue=""
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="Họ và tên"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              error={errors.fullname && errors.fullname.message}
            />
          )}
        />
        <Controller
          name="phone"
          rules={{
            required: {
              value: true,
              message: 'Vui lòng nhập số điện thoại',
            },
          }}
          defaultValue=""
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="Số điện thoại"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              error={errors.phone && errors.phone.message}
            />
          )}
        />
        <Controller
          name="companyName"
          rules={{
            required: {
              value: true,
              message: 'Vui lòng nhập tên công ty',
            },
          }}
          defaultValue=""
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="Tên công ty"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              error={errors.companyName && errors.companyName.message}
            />
          )}
        />
        <Controller
          name="taxCode"
          rules={{
            required: {
              value: true,
              message: 'Vui lòng nhập mã số thuế',
            },
          }}
          defaultValue=""
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="Mã số thuế"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              error={errors.taxCode && errors.taxCode.message}
            />
          )}
        />
        <Controller
          name="companyAddress"
          rules={{
            required: {
              value: true,
              message: 'Vui lòng nhập điạ chỉ công ty',
            },
          }}
          defaultValue=""
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="Địa chỉ"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              error={errors.companyAddress && errors.companyAddress.message}
            />
          )}
        />
        <Controller
          control={control}
          name="companyProvinceId"
          rules={{
            required: {
              value: true,
              message: 'Vui lòng chọn tỉnh thành',
            },
          }}
          render={({field}) => (
            <Picker
              selectedValue={getValues('companyProvinceId')}
              onValueChange={value => setValue('companyProvinceId', value)}
            >
              {filteredListProvince.map(item => (
                <Picker.Item label={item.title} value={item.id}/>
              ))}
            </Picker>
          )}
        />
        <Controller
          control={control}
          name="companyDistrictId"
          render={({field}) => (
            <Picker
              selectedValue={getValues('companyDistrictId')}
              onValueChange={value => setValue('companyDistrictId', value)}
            >
              {listDistrictsSystem.map(item => (
                <Picker.Item label={item.title} value={item.id}/>
              ))}
            </Picker>
          )}
        />
        <Button
          onPress={handleSubmit(onSubmit)}
					title="Đăng ký"
				/>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 5}}>
          <Text>Tôi đã có tài khoản.</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login' as never, {} as never)}>
            <Text> Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
		</SafeAreaView>
  );
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#ffffff',
		width: '100%',
		height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 50,
	},
})