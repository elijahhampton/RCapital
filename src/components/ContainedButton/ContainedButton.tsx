import React from 'react';
import { Button } from 'react-native-paper';
import { WHITE } from '../../constants';
import styles from './styles';

interface IProps {
    onPress: any,
    children: any
}

export default function ContainedButton({ onPress, children } : IProps ) {
    return (
        <Button style={styles.button} mode='contained' onPress={onPress}>
            {children}
        </Button>
    )
}
