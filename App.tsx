import React from 'react';
import {Navigators} from './src/navigators';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <Provider store={store}>
        <Navigators />
    </Provider>
  );
};
export default App;
