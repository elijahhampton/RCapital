import  React, { useEffect } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Headline, Subheading } from 'react-native-paper';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';


import moment from 'moment';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

interface IProps {
    title: string,
    headerLabel?: string
    controls?: Array<IconSource>,
    controlsOnPress?: Array<any>
}

export default function Header({ title, headerLabel, controls, controlsOnPress } : IProps) {
    useEffect(() => {
        if (controls && controlsOnPress && controls.length != controlsOnPress.length) {
            throw new Error('Each IconSource in controls must have a corresponding function in controlsOnpress.')
        }
    }, [])

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