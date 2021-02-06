import React from "react";
import {Image , Text , View , TouchableOpacity} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screens/homeScreen';
import LoginScreen from './../auth/login';
import AuthScreen from './../screens/authScreen';
import { colors } from './../../styles/colors';
import RegisterScreen from './../auth/register';
import Cart from '../reusable/Cart';

const Stack = createStackNavigator();

const AppNavigator = ({ navigation }) => (
  <Stack.Navigator
    initialRouteName="Home"
   
  >
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
      headerTitle:'Products',
      headerLeft: () => <Image source={require('../../shared/online-shopping.png')} />,
      headerRight:() => <TouchableOpacity onPress={() => {navigation.navigate('Cart')}}><View ><Text >Cart</Text></View></TouchableOpacity>,
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
    <Stack.Screen
      name="Cart"
      component={Cart}
      options={{
      headerTitle:'Cart',
      headerLeft: () => <Image source={require('../../shared/online-shopping.png')} />,
     
      headerStyle: {
        backgroundColor: colors.midnightBlue,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
        
      },
      headerTintColor: '#ffffff',
      }}
    />
   
   
    
   
  </Stack.Navigator>
)
export default AppNavigator;