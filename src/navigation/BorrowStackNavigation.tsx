import React, { ReactNode } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Invest from '../views/Invest'

import { getHeaderTitle } from '@react-navigation/elements';
import Header from '../components/Header';
import Borrow from '../views/Borrow';

const BorrowStackNavigator = createStackNavigator();

export default function BorrowStack() : ReactNode {
  return (
    <BorrowStackNavigator.Navigator
      initialRouteName='Borrow'
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
        <BorrowStackNavigator.Screen name='Borrow' component={Borrow} />
    </BorrowStackNavigator.Navigator>
  );
}
