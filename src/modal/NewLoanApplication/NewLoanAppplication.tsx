import React from 'react';
import { View, Modal } from 'react-native';
import styles from './style';
import globalStyles from '../../styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WHITE } from '../../constants';
import { Headline, Paragraph, Title } from 'react-native-paper';
import TextInput from '../../components/TextInput';

interface INewLoanApplicationProps {
 isVisible: boolean,
 onClose: any,
 onRequestClose: any
}


export default function NewLoanApplication({ isVisible, onClose, onRequestClose } : INewLoanApplicationProps) {
    return (
        <Modal visible={isVisible} animationType='slide' animated onClose={onClose} onRequestClose={onRequestClose}>
            <SafeAreaView style={[globalStyles.fullScreen, globalStyles.paddedView, { backgroundColor: WHITE }]}>
                <View>
                <Headline style={{color: 'black'}}>
                    Complete a new auto loan application
                </Headline>
                <Paragraph style={{color: '#999'}}>
                    Your personal information will never be stored by RCapital or a third party.
                </Paragraph>
                </View>

                <View>
                    <TextInput 
                    id='firstName'
                    mode='outlined'
                    label='First Name' 
                    placeholder='Ex. John Doe' 
                    errorText='Please enter a valid first name.'
                    required
                    onInputChange={() => {}}
                     />

<TextInput 
                    id='middleName'
                    mode='outlined'
                    label='Middle Name' 
                    placeholder='Ex. John Doe' 
                    errorText='Please enter a valid middle name.'
                    required
                    onInputChange={() => {}}
                     />

<TextInput 
                    id='lastName'
                    mode='outlined'
                    label='Last Name' 
                    placeholder='Ex. John Doe' 
                    errorText='Please enter a valid last name.'
                    required
                    onInputChange={() => {}}
                     />

<TextInput 
                    id='homeAddress'
                    mode='outlined'
                    label='Home Address' 
                    placeholder='Ex. 1305 Tradition Circle' 
                    errorText='Please enter a valid home address.'
                    required
                    onInputChange={() => {}}
                     />
                </View>
            </SafeAreaView>
        </Modal>
    )
}