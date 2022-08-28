import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ToucahbleOpacity,
  Image,
  useWindowDimensions,
  ScrollView
} from 'react-native';
import { AuthInputs } from './AuthInputs';
import { Buttons } from './buttons';
export function SignInScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { height } = useWindowDimensions();
  const onSignInPressed = () => {
    alert('Sign in');
  };
  const onForgot = () => {
    alert('Reset Password');
  };
  const onFacebook = () => {
    alert('FB');
  };
  const onGoogle = () => {
    alert('Google');
  };
  const onApple = () => {
    alert('Apple');
  };
  const onSignUp = () => {
    alert('Sign up');
  };
  const onContinueWithoutSignIn = () => {
    alert('Stay Logged out');
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
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <AuthInputs
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <Buttons text="Sign In" onPress={onSignInPressed} />
        <Buttons text="Forgot Password?" onPress={onForgot} type="TERETIARY" />
        <Buttons
          bgColor="#E7EAF4"
          fgColor="#4765A9"
          text="Continue with Facebook"
          onPress={onFacebook}
        />
        <Buttons text="Continue with Google" onPress={onGoogle} bgColor='#FAE9EA' fgColor='#DD4D44'/>
        <Buttons text="Continue with Apple" onPress={onApple} bgColor='#e3e3e3' fgColor='#363636' />
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
