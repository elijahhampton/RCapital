import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TypedNavigator } from '@react-navigation/core';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import InvestStack from './InvestStackNavigation';
import PortfolioStack from './PortfolioStackNavigation';
import BorrowStack from './BorrowStackNavigation';
import { BACKGROUND_COLOR } from '../constants';

const BottomTabBarNavigator = createBottomTabNavigator();

export default function BottomTabBar() {
    return (
        <BottomTabBarNavigator.Navigator 
            initialRouteName='InvestStack'
            screenOptions={({ route }) => ({
              tabBarStyle: {
                backgroundColor: BACKGROUND_COLOR
              },
              
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName : string = '';
  
              if (route.name === 'InvestStack') {
                focused ? iconName = 'attach-money' : iconName = 'attach-money';
              } else if (route.name === 'PortfolioStack') {
                focused ? iconName = 'trending-up' : iconName = 'trending-up';
              } else if (route.name === 'BorrowStack') {
                focused ? iconName = 'file-copy' : iconName = 'file-copy';
              }
  
              // You can return any component that you like here!
              return <MaterialIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#999',
          })}
          >
                        <BottomTabBarNavigator.Screen name='PortfolioStack' component={PortfolioStack} />
            <BottomTabBarNavigator.Screen name='InvestStack' component={InvestStack} />
            <BottomTabBarNavigator.Screen name='BorrowStack' component={BorrowStack} />
        </BottomTabBarNavigator.Navigator>
    );
  }