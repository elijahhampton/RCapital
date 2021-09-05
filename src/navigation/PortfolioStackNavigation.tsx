import React, { ReactNode } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Invest from '../views/Invest'

import { getHeaderTitle } from '@react-navigation/elements';
import Header from '../components/Header';
import Portfolio from '../views/Portfolio';

const PortfolioStackNavigator = createStackNavigator();

export default function PortfolioStack() : ReactNode {
  return (
    <PortfolioStackNavigator.Navigator
      initialRouteName='Portfolio'
      screenOptions={{
        headerShown: true,
        header: ({ navigation, route, options, back }) => {
          const title = getHeaderTitle(options, route.name);
        
          return (
            <Header title={title} />
          )
        },
        headerStyle: {
          height: 80,
          minHeight: 80
        }
      }}
    >
        <PortfolioStackNavigator.Screen name='Portfolio' component={Portfolio} />
    </PortfolioStackNavigator.Navigator>
  );
}
