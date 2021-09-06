import React, { ReactNode, useState, useEffect, useReducer } from 'react';
import { View } from 'react-native';
import { Text, TextInput as Input } from 'react-native-paper';
import styles from './style'
import globalStyles from '../../styles';

interface ITextInputProps {
    mode: string,
    label: string,
    errorText: string,
    required: boolean,
    min?: number,
    max?: number,
    minLength?: number,
    maxLength?: number,
    initialValue?: string,
    initiallyValid?: boolean,
    onInputChange: any,
    id: string | number,
    email?: boolean,
    placeholder: string,
}

const INPUT_CHANGE = 'INPUT_CHANGE';
const INPUT_BLUR = 'INPUT_BLUR';

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid
      };
    case INPUT_BLUR:
      return {
        ...state,
        touched: true
      };
    default:
      return state;
  }
};

export default function TextInput({ 
    mode, 
    initialValue, 
    initiallyValid, 
    onInputChange, 
    id,
    required,
    email,
    min,
    max,
    maxLength,
    minLength,
    label,
    placeholder,
    errorText
  } : ITextInputProps) {

    const [inputState, dispatch] = useReducer(inputReducer, {
        value: initialValue ? initialValue : '',
        isValid: initiallyValid,
        touched: false
      });

    
      useEffect(() => {
        if (inputState.touched) {
          onInputChange(id, inputState.value, inputState.isValid);
        }
      }, [inputState, onInputChange, id]);
    
      const textChangeHandler = (text : string) => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isValid = true;
        if (required && text.trim().length === 0) {
          isValid = false;
        }
        if (email && !emailRegex.test(text.toLowerCase())) {
          isValid = false;
        }
        if (min != null && +text < min) {
          isValid = false;
        }
        if (max != null && +text > max) {
          isValid = false;
        }
        if (minLength != null && text.length < minLength) {
          isValid = false;
        }
        dispatch({ type: INPUT_CHANGE, value: text, isValid: isValid });
      };
    
      const lostFocusHandler = () => {
        dispatch({ type: INPUT_BLUR });
      };

    return (
        <View style={styles.formControl}>
             <View style={styles.formControl}>
      <Text style={styles.label}>{label}</Text>
      <Input
      theme={{colors: { text: 'black'}}}
      label={label}
      id={id}
        mode={mode}
        style={styles.input}
        placeholder={placeholder}
        value={inputState.value}
        onChangeText={textChangeHandler}
        onBlur={lostFocusHandler}
      />
      {!inputState.isValid && inputState.touched && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errorText}</Text>
        </View>
      )}
    </View>
        </View>
    )
}