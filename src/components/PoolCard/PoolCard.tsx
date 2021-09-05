import React, { ReactNode } from 'react';
import globalStyles from '../../styles';
import styles from './styles';
import { Title, Card, Chip } from 'react-native-paper';
import { View, Text } from 'react-native';
import ContainedButton from '../ContainedButton'

interface IPoolCardProps {
    poolName: string,
    numLoans: number,
    percentFinanced: number,
    percentApr: number
}

export default function PoolCard({poolName, numLoans, percentFinanced, percentApr} : IPoolCardProps) {
    return (
        <Card style={[globalStyles.displayCard, styles.poolCard]}>
        <View style={styles.poolCardTopView}>
            <View> 
                <Title style={styles.poolTitle}>
                    {poolName}
                </Title>
                <Text>
                    {numLoans} Loans
                </Text>
                <Text style={styles.percentFinanced}>
                    {percentFinanced}% Financed
                </Text>
            </View>

            <Chip style={styles.chip}>{percentApr}% APR</Chip>
        </View>

        <ContainedButton onPress={() => {}}>
            See Overview
        </ContainedButton>
    </Card>
    )
}

