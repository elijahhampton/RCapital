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
        headerShown: false,
      }}
    >
        <BorrowStackNavigator.Screen name='Borrow' component={Borrow} />
    </BorrowStackNavigator.Navigator>
  );
}
