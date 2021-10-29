import React, {useEffect, useState} from 'react';
import {
  View,
  StatusBar,
	Button,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  EAsyncStorageKey,
} from '../constants';
import {useAppDispatch} from '../redux/store';
import { doLogoutSystem } from '../redux/slices';


const Empty = () => {
  const dispatch = useAppDispatch();

  function handleLogout() {
    AsyncStorage.removeItem(EAsyncStorageKey.accessToken)
      .then(() => {
        dispatch(doLogoutSystem());
      })
  }

  return (
		<SafeAreaView style={{backgroundColor: '#ffffff'}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#ffffff"
      />
      <View>
        <Button
          onPress={() => handleLogout()}
					title="Đăng xuất"
				/>
      </View>
		</SafeAreaView>
  );
};

export default Empty