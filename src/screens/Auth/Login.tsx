import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Alert,
  StatusBar,
	Button,
	SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';

import {Controller, useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {unwrapResult} from '@reduxjs/toolkit';

import {Input} from '../../components';
import {
  EAsyncStorageKey,
} from '../../constants';
import {doLogin} from '../../redux/asyncActions';
import {useAppDispatch} from '../../redux/store';
import {doLoginSystem} from '../../redux/slices';

type TFormData = {
  username: string;
  password: string;
};

export const Login = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const onSubmit = (data: TFormData) => {
    dispatch(doLogin(data))
      .then(unwrapResult)
      .then((res: ISliceLogin) => {
        if (!res.result) {
          Alert.alert(res.message);
          return;
        }
        const token = res.content.token;
        AsyncStorage.setItem(EAsyncStorageKey.accessToken, token)
          .then(() => {
            dispatch(doLoginSystem(token));
          })
          .catch(e => Alert.alert(JSON.stringify(e)));
      })
      .catch(err => {
        Alert.alert('Đã có lỗi hệ thống xảy ra!');
      });
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<TFormData>();

	useEffect(() => {
		console.log('In Login')
	}, [])


  return (
		<SafeAreaView style={{backgroundColor: '#ffffff'}}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#ffffff"
      />
      <View style={styles.container}>
        <Controller
          name="username"
          rules={{
            required: {
              value: true,
              message: 'Vui lòng nhập tên đăng nhập',
            },
          }}
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="Email"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              error={errors.username && errors.username.message}
            />
          )}
        />
          <Controller
            name="password"
            rules={{
              required: {
                value: true,
                message: 'Vui lòng nhập mật khẩu',
              },
              minLength: {
                value: 6,
                message: 'Mật khẩu ít nhất 8 kí tự',
              },
            }}
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
							<Input
								secureTextEntry={true}
								placeholder="Mật khẩu"
								onChangeText={onChange}
								value={value}
								onBlur={onBlur}
								error={errors.password && errors.password.message}
							/>
            )}
          />
        <Button
          onPress={handleSubmit(onSubmit)}
					title="Đăng nhập"
				/>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 5}}>
          <Text>Tôi chưa có tài khoản.</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register' as never, {} as never)}>
            <Text> Đăng ký</Text>
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