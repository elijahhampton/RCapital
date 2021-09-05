import React from 'react';
import { Button } from 'react-native-paper';
import { WHITE } from '../../constants';
import styles from './styles';

interface IProps {
    onPress: any,
    children: any
}

export default function OutlinedButton({ onPress, children } : IProps ) {
    return (
        <Button style={styles.button} mode='outlined' onPress={onPress}>
            {children}
        </Button>
    )
}
