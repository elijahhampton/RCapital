import * as React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Headline, Subheading } from 'react-native-paper';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';


import moment from 'moment';

interface IProps {
    title: string,
    headerLabel?: string
}

export default function Header({ title, headerLabel } : IProps) {
    return (
       <SafeAreaView style={[styles.header]}>
           <View>
           <Subheading style={styles.headerLabel}>
               {headerLabel}
               </Subheading>
            <Headline>
                {title}
            </Headline>
           </View>


           <View>
               
           </View>
       </SafeAreaView>
    )
}