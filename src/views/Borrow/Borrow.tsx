import React, { ReactNode, useState } from 'react';
import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import globalStyles, { appbarTheme } from '../../styles';
import { Card, Headline, Subheading, Title, Button, Paragraph, FAB, Appbar } from 'react-native-paper';
import { SECONDARY_COLOR, WHITE } from '../../constants';

  import {
    Tabs,
    TabScreen,
    useTabIndex,
    useTabNavigation,
  } from 'react-native-paper-tabs';
import Header from '../../components/Header';
import NewLoanApplication from '../../modal/NewLoanApplication';

export default function Borrow({ navigation }) : ReactNode {
    const [newLoanApplicationIsVisible, setNewLoanApplicationIsVisible] = useState(false);

    return (
        <>
                <Appbar.Header theme={appbarTheme}>
                <Appbar.Action icon='menu' onPress={() => navigation.openDrawer()} />
                <Title>
                    Borrow
                </Title>
  </Appbar.Header>
        <View style={globalStyles.fullScreen}>

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
        <TabScreen label="Active Loans">
           <View />
        </TabScreen>
        <TabScreen label="Past Loans">
          <View />
        </TabScreen>
      </Tabs>
      <FAB
    style={styles.fab}
    label='New Application'
    icon="plus"
    onPress={() => setNewLoanApplicationIsVisible(true)}
  />
      </View>
      <NewLoanApplication isVisible={newLoanApplicationIsVisible} onClose={() => setNewLoanApplicationIsVisible(false)} onRequestClose={() => setNewLoanApplicationIsVisible(false)} />
      </>
    )
}