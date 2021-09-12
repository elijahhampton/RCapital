import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { List, Appbar, Title, Switch, Button } from 'react-native-paper';
import styles, { appbarTheme, listItemTheme } from './styles';
import globalStyles from '../../styles';
import { PRIMARY_COLOR, SECONDARY_COLOR, WHITE } from '../../constants';

const generateWalletSettings = (address : string) => {
    const WALLET_SETTINGS = [
        {
            title: 'Wallet',
            description: address,
            onPress: () => {}
        },
        {
            title: 'Check Recovery Key',
            description: '',
            onPress: () => {}
        },
        {
            title: 'Reset Password',
            description: '',
            onPress: () => {}
        },
    ]

    return WALLET_SETTINGS.map(settings =>  
        <List.Item
        title={settings.title}
        description={settings.description}
        titleStyle={styles.titleStyle}
        descriptionStyle={styles.descriptionStyle}
        theme={listItemTheme}
        right={props => <List.Icon {...props} icon='chevron-right' color={WHITE} />}
      />
      )
}

export default function Settings({ navigation }) {
    const address = '8475...2342'
    return (
        <View style={[globalStyles.fullScreen]}>
            <Appbar.Header theme={appbarTheme}>
                <Appbar.Action icon='menu' onPress={() => navigation.openDrawer()} />
                <Title>
                    Settings
                </Title>
  </Appbar.Header>
  <View style={styles.root}>
            <List.Section style={styles.section}>
            <List.Subheader>Wallet</List.Subheader>
            {generateWalletSettings(address)}
            </List.Section>
           




            <List.Section style={styles.section}>
            <List.Subheader>Application</List.Subheader>
           <List.Item
    title='Notifications'
    description="Toggle notifications"
    titleStyle={styles.titleStyle}
    descriptionStyle={styles.descriptionStyle}
    theme={listItemTheme}
    right={props => <Switch {...props} color={SECONDARY_COLOR} value={true} />}
  />
           </List.Section>






           <List.Section style={styles.section}>
           <List.Subheader>RCapital</List.Subheader>
           <List.Item
    title="Privacy Policy"
    description="Read our privacy policy"
    titleStyle={styles.titleStyle}
    descriptionStyle={styles.descriptionStyle}
    theme={listItemTheme}
    right={props => <List.Icon {...props} icon='chevron-right' color={WHITE} />}
  />

<List.Item
    title="Terms of service"
    description="Read our terms of service"
    titleStyle={styles.titleStyle}
    descriptionStyle={styles.descriptionStyle}
    theme={listItemTheme}
    right={props => <List.Icon {...props} icon='chevron-right' color={WHITE} />}
  />

<List.Item
    title="White Paper"
    description="Read our white paper"
    titleStyle={styles.titleStyle}
    descriptionStyle={styles.descriptionStyle}
    theme={listItemTheme}
    right={props => <List.Icon {...props} icon='chevron-right' color={WHITE} />}
  />
           </List.Section>
  


           <Button>
                  LOGOUT
              </Button>
              </View>
              
        </View>
        
    )
}