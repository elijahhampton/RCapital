import React, { ReactNode } from 'react';
import globalStyles from '../../styles';
import styles from './styles';
import { Title, Card, Chip, Text, Headline } from 'react-native-paper';
import { View } from 'react-native';
import ContainedButton from '../ContainedButton'

interface IValueAccentTextProps {
    children: any,
    size: string,
    color: string,
}

export default function ValueAccentText({children, size, color} : IValueAccentTextProps) {
    return (
        <Headline style={[ { color: color }, size == 'large' ? styles.textLarge : styles.textSmall]}>
            {children}
        </Headline>
    )
}

