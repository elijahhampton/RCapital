import { 
    createDrawerNavigator,  
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import React from 'react';
import Invest from '../views/Invest';
import Settings from '../views/Settings';
import BorrowStack from './BorrowStackNavigation';
import PortfolioStack from './PortfolioStackNavigation';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  }

export default function DrawerNavigator() {
    return (
    <Drawer.Navigator 
    initialRouteName='Portfolio'
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    screenOptions={{
        headerShown: false
    }}>
        <Drawer.Screen name='Portfolio' component={Invest} />
        <Drawer.Screen name='Invest' component={PortfolioStack} />
        <Drawer.Screen name='Borrow' component={BorrowStack} />
        <Drawer.Screen name='Settings' component={Settings} />
    </Drawer.Navigator>
    )
}