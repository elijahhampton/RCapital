import React, { ReactNode } from 'react';
import { SafeAreaView, Text, View, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import globalStyles from '../../styles';
import { Button, Caption, Card, Chip, Headline, Subheading, Title } from 'react-native-paper';
import { SECONDARY_COLOR, WHITE } from '../../constants';
import { ScrollView } from 'react-native-gesture-handler';
import ContainedButton from '../../components/ContainedButton';
import PoolCard from '../../components/PoolCard';
import ValueAccentText from '../../components/ValueAccentText';
import OutlinedButton from '../../components/OutlinedButton';
import Header from '../../components/Header';

export default function Invest() : ReactNode {
    return (
        <View style={styles.root}>
            <Header title='Invest' />
            <View style={[globalStyles.paddedView, styles.accountBalanceView]}>
                
            <Subheading>
                Account Balance
            </Subheading>
            <ValueAccentText size='small' color='white'>
                1,394.50 ALGO
            </ValueAccentText>
            </View>

            <View>
                <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false} 
                style={[styles.poolsScrollView]}
                snapToAlignment='center'
                pagingEnabled
                snapToInterval={Dimensions.get('window').width - 40}
                shouldRasterizeIOS
                centerContent
                decelerationRate={0}
                >
                <PoolCard 
                poolName='High Risk Pool'
                numLoans={16}
                percentFinanced={20}
                percentApr={6.5}
                 />

<PoolCard 
                poolName='High Risk Pool'
                numLoans={16}
                percentFinanced={20}
                percentApr={6.5}
                 />

<PoolCard 
                poolName='High Risk Pool'
                numLoans={16}
                percentFinanced={20}
                percentApr={6.5}
                 />
                </ScrollView>
            </View>

            <View style={globalStyles.paddedView}>
            <Card style={[globalStyles.displayCard, styles.buyAlgorandCard]}>
                <View>
                <ValueAccentText size='large' color='black' >
                    30.20 Algorand
                </ValueAccentText>
                    <Caption style={{color: '#999999'}}>
                        Your Balance
                    </Caption>
                    </View>

                <OutlinedButton onPress={() => {}}>
                    Buy Algorand
                </OutlinedButton>
            </Card>
            </View>

            
        </View>
    )
}