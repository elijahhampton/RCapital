import React, { ReactNode } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Invest from '../views/Invest'

import { getHeaderTitle } from '@react-navigation/elements';
import Header from '../components/Header';
import Portfolio from '../views/Portfolio';

import moment from 'moment';

const PortfolioStackNavigator = createStackNavigator();

export default function PortfolioStack() : ReactNode {
  return (
    <PortfolioStackNavigator.Navigator
      initialRouteName='Portfolio'
      screenOptions={{
        headerShown: false
      }}
    >
        <PortfolioStackNavigator.Screen name='Portfolio' component={Portfolio} />
    </PortfolioStackNavigator.Navigator>
  );
}
