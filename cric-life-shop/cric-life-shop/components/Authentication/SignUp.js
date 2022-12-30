import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ToucahbleOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { AuthInputs } from './AuthInputs';
import { Buttons } from './buttons';
import {SocialSignIn} from './SocialSignin';

import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';



export function SignUp() {
  const{control, handleSubmit, watch} = useForm();
  const FirstPassword = watch('password');
  const navigator= useNavigation();
  
  const onRegister = () => {

    navigator.navigate('Confirm');
  };
  const onSignIn = () => {
 
    navigator.navigate('SignIn')
  };
  const onContinueWithoutSignIn = () => {

    navigator.navigate('Main')
  };
  const onPrivacyPressed = () => {
    alert('privacy policy');
  };
  const onTermsPressed = () => {
    alert('ters of use');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create Account</Text>
        <AuthInputs
          name="username"
          control={control}
          placeholder="Username"
          rules= {{required: 'Please input a Username', minLength: {value:3, message: "Username must be at least 3 charecters long"}}}
        />
        
        <AuthInputs 
          name="email" 
          control={control}
          placeholder="Email" 
        />

        <AuthInputs
          name="password" 
          control={control}
          placeholder="Password" 
        />
        
        <AuthInputs
          name ="Confirm Password"
          control={control}
          placeholder=" Confirm Password" 
          rules={{validate: value=> value== FirstPassword || 'passwords do not match',}}
        />

        <Text style={styles.text}>
          By Registering, you agree to our{' '}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>{' '}
          and{' '}
          <Text onPress={onTermsPressed} style={styles.link}>
            Terms of Use
          </Text>
        </Text>
        <Buttons text="Register" onPress={handleSubmit(onRegister)} />
        <SocialSignIn/>
        <Buttons
          text="Already have an account? Sign in"
          onPress={onSignIn}
          type="TERETIARY"
        />
        <Buttons
          text="Continue without Account"
          onPress={onContinueWithoutSignIn}
          type="TERETIARY"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 80,
    backgroundColor: '#F9FBFC',
  },

  title: {
    fontSize: 35,
    width: '150%',
    fontWeight: 'bold',
    color: '#FF0000',
    margin: 10,
    textAlign: 'center',
  },
  text: {},
  link: {},
});
