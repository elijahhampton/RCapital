import React, { ReactNode } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Invest from '../views/Invest'

import { getHeaderTitle } from '@react-navigation/elements';
import Header from '../components/Header';

const InvestStackNavigator = createStackNavigator();

export default function InvestStack() : ReactNode {
  return (
    <InvestStackNavigator.Navigator
      initialRouteName='Invest'
      screenOptions={{
        headerShown: false,
      }}
    >
        <InvestStackNavigator.Screen name='Invest' component={Invest} />
    </InvestStackNavigator.Navigator>
  );
}
