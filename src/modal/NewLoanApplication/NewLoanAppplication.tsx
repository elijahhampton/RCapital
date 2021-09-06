import React, { useState } from 'react';
import { View, ScrollView, Modal, Platform, Text, Button, SafeAreaView } from 'react-native';
import styles from './style';
import globalStyles from '../../styles';
import { WHITE } from '../../constants';
import { Caption, Headline, Paragraph, Title, Button as PaperButton } from 'react-native-paper';
import TextInput from '../../components/TextInput';
import { Dropdown } from 'react-native-material-dropdown';
import ContainedButton from '../../components/ContainedButton';
import DateTimePicker from '@react-native-community/datetimepicker';

interface INewLoanApplicationProps {
 isVisible: boolean,
 onClose: any,
 onRequestClose: any
}

const data = [{
    value: 'Banana',
  }, {
    value: 'Mango',
  }, {
    value: 'Pear',
  }];




export default function NewLoanApplication({ isVisible, onClose, onRequestClose } : INewLoanApplicationProps) {
    const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

    
    return (
        <Modal visible={false} animationType='slide' animated onClose={onClose} onRequestClose={onRequestClose}>
            <SafeAreaView style={[globalStyles.fullScreen, globalStyles.paddedView, { backgroundColor: WHITE }]}>
            <ScrollView contentContainerStyle={globalStyles.paddedView}>
                <View style={{marginVertical: 20}}>
                <Headline style={{color: 'black'}}>
                    Complete a new auto loan application
                </Headline>
                <Paragraph style={{color: '#999'}}>
                    Your personal information will never be stored by RCapital or a third party.
                </Paragraph>
                </View>

            
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

<View style={{marginVertical: 20}}>
        <Caption style={{color: '#999999'}}>
            Select your date of birth
        </Caption>
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display='calendar'
          onChange={onChange}
        />
      )
      }

<Dropdown
        label='Select your annual income'
        data={data}
      />

      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
      <PaperButton mode='text' onPress={onClose}>
                Cancel
                </PaperButton>

      <ContainedButton onPress={() => {}}>
                    Submit Application
                </ContainedButton>

    </View>


                </ScrollView>
            </SafeAreaView>
        </Modal>
    )
}