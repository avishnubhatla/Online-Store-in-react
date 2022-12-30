import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ToucahbleOpacity,
  Image,
  useWindowDimensions,
  TextInput,
  ScrollView
} from 'react-native';
import { AuthInputs } from './AuthInputs';
import { Buttons } from './buttons';
import { useNavigation } from '@react-navigation/native';
import {SocialSignIn} from './SocialSignin';
import{useForm, Controller} from 'react-hook-form';
export function SignIn() {

  const { height } = useWindowDimensions();
  const navigator=useNavigation()
  const {control, handleSubmit, formState:{errors}} = useForm();
  
  const onSignIn = () => {
    navigator.navigate('Main')
  };
  const onForgot = () => {

    navigator.navigate('ResetPassword')
  };
  
  const onSignUp = () => {
    navigator.navigate('SignUp')
  };
  const onContinueWithoutSignIn = () => {
    navigator.navigate('Main')
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          style={[styles.logo, { height: height * 0.3 }]}
          source={{
            uri: 'https://cdn.discordapp.com/attachments/983539166488977472/1003006843746009169/unknown.png',
          }}
          resizeMode="contain"
        />
        
        <AuthInputs
          name="username"
          placeholder="Username"
          control={control}
          rules={{required:'Username is required'}}
        />
        <AuthInputs
          name="Password"
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{required:'Password is required', minLength: {value: 3, message: "Password must be a minimum of 3 charecters long"}}}
        />
        



        <TextInput placeholder={"password"}/>

        <Buttons text="Sign In" onPress={handleSubmit(onSignIn)} />
        <Buttons text="Forgot Password?" onPress={onForgot} type="TERETIARY" />
        <SocialSignIn />
        <Buttons text="Don't have an account? Create one" onPress={onSignUp} type="TERETIARY" />
        <Buttons text="Continue without signing in" onPress={onContinueWithoutSignIn} type="TERETIARY" />
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
  logo: {
    width: '70%',
    maxHeight: 200,
    maxWidth: 300,
  },
});
