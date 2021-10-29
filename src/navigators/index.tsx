import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useAppDispatch, useAppSelector} from '../redux/store';
import {doCheckLogin, doLogoutSystem} from '../redux/slices';

import TabScreens from './TabScreens';
import { EAsyncStorageKey } from '../constants';

const MainStack = createStackNavigator();

export const Navigators = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    // check login
    AsyncStorage.getItem(EAsyncStorageKey.accessToken).then(res => {
      dispatch(doCheckLogin(res))
      if (!res && isLoggedIn) dispatch(doLogoutSystem());
    });
    
    console.log('In Navigators')
  }, []);

  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen component={TabScreens} name="TabScreens" />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};