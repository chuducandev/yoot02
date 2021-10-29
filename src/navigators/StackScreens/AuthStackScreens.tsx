import React from 'react';
import {Login, Register} from '../../screens';
import {createStackNavigator} from '@react-navigation/stack';
// import {TransitionScreenOptions} from '../../constants';

const AuthtStack = createStackNavigator();

const AuthStackScreens = () => {
  return (
    <AuthtStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthtStack.Screen name="Login" component={Login} />
      <AuthtStack.Screen name="Register" component={Register} />
    </AuthtStack.Navigator>
  );
}

export default AuthStackScreens