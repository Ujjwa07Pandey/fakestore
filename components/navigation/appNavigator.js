import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screens/homeScreen';
import LoginScreen from './../auth/login';
import AuthScreen from './../screens/authScreen';
import { colors } from './../../styles/colors';
import RegisterScreen from './../auth/register';
const Stack = createStackNavigator();

export const AppNavigator = ({ navigation }) => (
  <Stack.Navigator
    initialRouteName="Home"
   
  >
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
      headerTitle:'Products',
      headerStyle: {
        backgroundColor: colors.midnightBlue,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
        
      },
      headerTintColor: '#ffffff',
      }}
    />
     <Stack.Screen
      name="Auth"
      component={AuthScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{
      title:'Login',
      headerStyle: {
        backgroundColor: colors.skyblue,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },}}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{
      title:'Register',
      headerStyle: {
        backgroundColor: colors.skyblue,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },}}
    />
   
   
    
   
  </Stack.Navigator>
);
