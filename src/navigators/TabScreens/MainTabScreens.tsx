import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Empty from '../../screens/EmptyScreen';

const Tab = createBottomTabNavigator();

const MainTabScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Tab1"
        component={Empty}
      />
      <Tab.Screen
        name="Tab2"
        component={Empty}
      />
      <Tab.Screen
        name="Tab3"
        component={Empty}
      />
      <Tab.Screen
        name="Tab4"
        component={Empty}
      />
    </Tab.Navigator>
  );
}

export default MainTabScreens