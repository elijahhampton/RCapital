import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { Subheading, Headline, Chip } from 'react-native-paper';
import styles from './styles';

import globalStyles from '../../styles';

import {
    Tabs,
    TabScreen,
    useTabIndex,
    useTabNavigation,
  } from 'react-native-paper-tabs';

interface IPoolOverviewProps {
    poolTitle: string,
    percentFinanced: number
}

export default function PoolOverview({ poolTitle, percentFinanced } : IPoolOverviewProps ) {
    return (
        <SafeAreaView style={globalStyles.fullScreen}>
            <View style={[styles.header]}>
            <View>
                <Text style={styles.headerLabel}>
                High Risk Pool
                </Text>
                <Text style={styles.subLabel}>
                20% Financed
                </Text>
            </View>


            <Chip>
               6.5% APR
            </Chip>
       </View>
       <Tabs
        style={styles.tabs}
        // defaultIndex={0} // default = 0
          uppercase={false}
        // showTextLabel={false} // true/false | default=false (KEEP PROVIDING LABEL WE USE IT AS KEY INTERNALLY + SCREEN READERS)
        // iconPosition // leading, top | default=leading
        // dark={false} // works the same as AppBar in react-native-paper
        // theme={} // works the same as AppBar in react-native-paper
        // mode="scrollable" // fixed, scrollable | default=fixed
        // onChangeIndex={(newIndex) => {}} // react on index change
        // showLeadingSpace={true} //  (default=true) show leading space in scrollable tabs inside the header
      >
        <TabScreen label="Overview">
           <View />
        </TabScreen>
        <TabScreen label="Sell">
          <View />
        </TabScreen>
      </Tabs>
        </SafeAreaView>
    )
}