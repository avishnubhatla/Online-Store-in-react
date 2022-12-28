import * as React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from "./components/HomeScreen/HomeScreen";
import { Cart } from "./components/Cart/Cart";
import { Profile } from "./components/Profile/Profile";
import {SignIn} from './components/Authentication/SignIn'
import {SignUp} from './components/Authentication/SignUp'
import {ConfirmEmail} from './components/Authentication/Confirm'
import {ResetPassword} from './components/Authentication/ResetPassword'
import {NewPassword} from './components/Authentication/NewPassword'
const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
function Home() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}
export default function App() {
  return (
    <View style={styles.layout}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SignIn" component={SignIn}/>
          <Stack.Screen name="SignUp" component={SignUp}/>
          <Stack.Screen name="Confirm" component={ConfirmEmail}/>
          <Stack.Screen name="ResetPassword" component={ResetPassword}/>
          <Stack.Screen name="NewPassword" component={NewPassword}/>
          <Stack.Screen name="Main" component={Home}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1, 
  }
});
