import React, { ReactNode } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import globalStyles from '../../styles';
import { Card, Headline, Subheading, Title } from 'react-native-paper';
import { SECONDARY_COLOR, WHITE } from '../../constants';
import { ScrollView } from 'react-native-gesture-handler';
import ValueAccentText from '../../components/ValueAccentText';

export default function Portfolio() : ReactNode {
    return (
        <SafeAreaView style={[styles.root, globalStyles.paddedView]}>
            <ScrollView>

<Card style={[styles.portfolioCard, globalStyles.displayCard, { padding: 0}]}>
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[SECONDARY_COLOR, WHITE]} style={styles.linearGradient}>
        <View style={styles.portfolioCardLeft}>
            <Subheading>
                STAKED FUNDS
            </Subheading>
            <ValueAccentText size='large' color='#FFF'>
                50.2384 ALGO
            </ValueAccentText>
        </View>

        <View style={styles.portfolioCardRight}>
        <Subheading>
                Profit
            </Subheading>
            <Text>
                +2.3%
            </Text>
            <Text>
            2.34 RCAP
            </Text>
        </View>
    </LinearGradient>
</Card>

<View style={styles.visualizeContainer}>
    <Title>
        Visualize
    </Title>

    <Card style={[styles.algorandGraphCard, globalStyles.displayCard, { height: 50}]}>
        <Text>
            Hello
        </Text>
    </Card>
</View>
</ScrollView>
        </SafeAreaView>
    )
}