import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ToucahbleOpacity,
} from 'react-native';
import {Controller} from 'react-hook-form';

export const AuthInputs = ({control, name, rules = {},placeholder, secureTextEntry }) => {
  return (
    <Controller 
      control={control}
      name={name}
      rules= {{rules}}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View style={[styles.container, {borderColor: error ? 'red' : '#e8e8e8'}]}>
            <TextInput 
              value={value} 
              onChangeText= {onChange} 
              onBlur = {onBlur} 
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error &&(
            <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message || 'Error'}</Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '140%',
    height: 40,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 6,
    marginVertical: 6,
    paddingVertical: 9,
  },
  input: {
    paddingVertical:3,
    color:'gray',
    
  },
});
