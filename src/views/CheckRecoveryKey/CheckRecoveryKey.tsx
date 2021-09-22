import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';
import globalStyles, { appbarTheme } from '../../styles';
import { Appbar, Caption, Title } from 'react-native-paper';

const NUM_KEY_PHRASES = [0,1,2,3,4,5,6,7,8,9,10,11]

interface ICheckRecoveryKeyProps {
    navigation: any
}

export default function CheckRecoveryKey({ navigation } : ICheckRecoveryKeyProps) {
    return (
        <View style={globalStyles.fullScreen}>
            <Appbar.Header theme={appbarTheme}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Title>
                    Check Recovery Key
                </Title>
            </Appbar.Header>
            <Caption>
                Please enter in the 12 key phrases you were given when you created your wallet.
            </Caption>
            <View style={[globalStyles.fullScreen, styles.recoveryInputs]}>
            {
                NUM_KEY_PHRASES.map(input => {
                    return <TextInput placeholder={input.toString()} style={styles.textInput} />
                })
            }
            </View>
        </View>
    )
}