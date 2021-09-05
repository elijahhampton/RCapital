/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { ReactNode } from 'react';

import {
  SafeAreaView,
  Text,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { Provider as ReduxProvider } from 'react-redux'; 
import { Provider as PaperProvider } from 'react-native-paper';

import BottomTabBar from './src/navigation/BottomTabBar';
import store from './src/redux/store';
import theme from './src/theme';

const App: () => ReactNode = () => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={theme}>
      <NavigationContainer>
        <BottomTabBar />
      </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
};

export default App;
