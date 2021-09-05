import * as React from 'react';
import { View, Text } from 'react-native';
import { Headline } from 'react-native-paper';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

interface IProps {
    title: string
}

export default function Header({ title } : IProps) {
    return (
       <View style={styles.header}>
            <Headline>
                {title}
            </Headline>

           <View>
               
           </View>
       </View>
    )
}