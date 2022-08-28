import * as React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from "./components/HomeScreen/HomeScreen";
import { Cart } from "./components/Cart/Cart";
import { Profile } from "./components/Profile/Profile";
import {SignInScreen} from './components/Authentication/SigninScreen'
import {SignUpScreen} from './components/Authentication/SignupScreen'
const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <View style={styles.layout}>
      <SignInScreen/>
      <SignUpScreen/>
      <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1, 
  }
});
