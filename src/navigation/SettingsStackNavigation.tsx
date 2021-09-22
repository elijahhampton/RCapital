import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../views/Settings';
import CheckRecoveryKey from '../views/CheckRecoveryKey';

const SettingsStackNavigator = createStackNavigator();

export default function SettingsStack() {
  return (
    <SettingsStackNavigator.Navigator 
    initialRouteName='Settings'
    screenOptions={{
      headerShown: false
    }}>
      <SettingsStackNavigator.Screen name='Settings' component={Settings} />
      <SettingsStackNavigator.Screen name='CheckRecoveryKey' component={CheckRecoveryKey} />
    </SettingsStackNavigator.Navigator>
  );
}
