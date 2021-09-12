import React from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import globalStyles, { appbarTheme } from '../../styles';
import { Appbar, Caption, Card, Divider, Headline, Subheading, Title } from 'react-native-paper';

export default function Notifications({ navigation }) {
    return (
        <View style={globalStyles.fullScreen}>
            <Appbar.Header theme={appbarTheme}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Title>
                    Notifications
                </Title>
            </Appbar.Header>
            <View style={styles.root}>
                <Card style={styles.card}>
                    <Subheading style={{color: '#999'}}>
                        Application, funds, pools and earnings
                    </Subheading>
                    <Divider />
                    <ScrollView>
                    <Caption style={{color: '#999'}}>
                            You don't have any notifications at this time.
                        </Caption>
                    </ScrollView>
                   
                </Card>
            </View>
        </View>
    )
}