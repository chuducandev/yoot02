import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { useAppSelector } from '../../redux/store';
import MainTabScreens from './MainTabScreens';
import AuthStackScreens from '../StackScreens/AuthStackScreens';

const Stack = createStackNavigator();

const TabScreens = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
	
	useEffect(() => {
		console.log('In TabScreens')
	}, [])

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {isLoggedIn ? (
        <Stack.Screen component={MainTabScreens} name="MainTabsScreens" />
      ) : (
        <Stack.Screen component={AuthStackScreens} name="AuthStackScreens" />
      )}
    </Stack.Navigator>
  );
}

export default TabScreens