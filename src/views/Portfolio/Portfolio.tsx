import React, { ReactNode, useState } from 'react';
import { Dimensions, SafeAreaView, View, Image } from 'react-native';
import { Button, Title, Text, Headline, TextInput, Provider, Menu } from 'react-native-paper';
import globalStyles from '../../styles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/core';
import TextDialog from '../../components/TextDialog/TextDialog';
import { SECONDARY_COLOR } from '../../constants';

export default function Portfolio({ navigation }) : ReactNode {
    const [stakeDialogIsVisible, setStakeDialogIsVisible] = useState(false);

    const onDismissStakeDialog = () => {
        setStakeDialogIsVisible(false);
    }

    const onCancelSetStakeDialog = () => {
        onDismissStakeDialog();
    }

    const onAcceptStakeDialog = () => {
        onDismissStakeDialog();
    }

    const onCalculateDailyReward = () => {
        setStakeDialogIsVisible(true)
    }

    const onSellStake = () => {
        navigation.navigate('SellStake')
    }

    return (
        <SafeAreaView style={[globalStyles.fullScreen]}>
                <View style={[{marginVertical: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}, globalStyles.paddedView,]}>
                    <MaterialIcon name='menu' size={22} color='white' onPress={() => navigation.openDrawer()} />

                    <MaterialIcon name='notifications' size={22} color='white' onPress={() => navigation.navigate('Notifications')} />
                </View>
                <View style={{marginVertical: 15, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
                    <View style={{flexDirection: 'column', alignItems: 'center'}}>
                        
                        <Title>
                            Portfolio Balance
                        </Title>
                        <Text style={{color: SECONDARY_COLOR}}>
                            $371.88
                        </Text>
                    </View>

                    <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require('../../assets/images/algorand_logo.png')} style={{width: 40, height: 40}} />
                            <Text>
                                178.29/298
                            </Text>
                        </View>

                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../assets/images/algorand_logo.png')} style={{width: 40, height: 40}} />
                            <Text>
                                1420
                            </Text>
                        </View>
                    </View>
                </View>
                
                <View style={[{ flex: 1, justifyContent: 'center', alignItems: 'center'}, globalStyles.paddedView]}>
                    <View style={{flex: 1, justifyContent: 'space-evenly'}}>
                        <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
                            <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'center'}}>
                            <Headline>
                                Propose stake
                            </Headline>
                            </View>

                            <View style={{flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}}>
                            <Image source={require('../../assets/images/algorand_logo.png')} style={{width: 60, height: 60}} />
                            <TextInput placeholderTextColor='white' placeholder='110' style={{color: 'white', width: 50,  backgroundColor: 'transparent'}} />
                            </View>
     
                        </View>

                        <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
                        <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'center'}}>
                            <Headline>
                                Pool term
                            </Headline>
                            </View>

                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <TextInput placeholderTextColor='white' placeholder='84mo' style={{color: 'white', width: 70,  backgroundColor: 'transparent'}} />
                            </View>
                            </View>

                        <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
                        <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'center'}}>
                            <Headline>
                               Reward tier
                            </Headline>
                            </View>

                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <TextInput placeholderTextColor='white' placeholder='5x' style={{color: 'white', width: 50,  backgroundColor: 'transparent'}} />
                            </View>
                        </View>

                        <Button mode='contained' onPress={onCalculateDailyReward}>
                        Calculate Daily Reward
                    </Button>

                    <Button mode='outlined' labelStyle={{color: '#999'}} onPress={onSellStake}>
                        Sell Stake
                    </Button>
                    </View>
                </View>

                <TextDialog 
                    isVisible={stakeDialogIsVisible}
                    content='Your daily reward will be 10 ALGO if you stake 100 ALGO.  Would you like to proceed?'
                    acceptTitle='Stake'
                    onAccept={onAcceptStakeDialog}
                    onCancel={onCancelSetStakeDialog}
                    onDismiss={onDismissStakeDialog}
                />
        </SafeAreaView>
    )
}