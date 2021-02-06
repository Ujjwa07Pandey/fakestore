import React from "react";
import {Image , Text , View , TouchableOpacity} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screens/homeScreen';
import LoginScreen from './../auth/login';
import AuthScreen from './../screens/authScreen';
import { colors } from './../../styles/colors';
import RegisterScreen from './../auth/register';
import Cart from '../reusable/Cart';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Checkout from './../screens/checkout';
import Firebase from '../../config/firebase';
const Stack = createStackNavigator();

const AppNavigator = ({ navigation }) => (
  <Stack.Navigator
    initialRouteName="Auth"
   
  >
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={({ navigation }) => ({
      headerTitle:'Products',
      headerLeft: () => <Image source={require('../../shared/online-shopping.png')} />,
      headerRight:() => <View style={{ display:'flex' , flexDirection:'row'}}>
      <TouchableOpacity style={{marginHorizontal: 20}} onPress={() => {navigation.navigate('Cart')}}><View  ><Ionicons name="cart" size={30} color="#fff" /></View></TouchableOpacity>
         <TouchableOpacity style={{marginHorizontal: 20}} onPress={() => {Firebase.auth().signOut();navigation.navigate('Auth')}}><View><Feather name="power" size={30} color="#fff" /></View></TouchableOpacity></View> ,
      headerStyle: {
        backgroundColor: colors.midnightBlue,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
        
      },
      headerTintColor: '#ffffff',
      })}
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
      options={({ navigation }) => ({
      headerTitle:'Cart',
      headerLeft: () => <Image source={require('../../shared/online-shopping.png')} />,
      headerRight:() => <TouchableOpacity style={{marginHorizontal: 20}} onPress={() => {navigation.navigate('Home')}}><View ><Ionicons name="arrow-back" size={30} color="#fff" /></View></TouchableOpacity>,
      headerStyle: {
        backgroundColor: colors.midnightBlue,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
        
      },
      headerTintColor: '#ffffff',
      })}
    />
     <Stack.Screen
      name="Checkout"
      component={Checkout}
      options={({ navigation }) => ({
      headerTitle:'Checkout',
      headerLeft: () => <Image source={require('../../shared/online-shopping.png')} />,
      headerRight:() => <TouchableOpacity style={{marginHorizontal: 20}} onPress={() => {navigation.navigate('Cart')}}><View ><Ionicons name="arrow-back" size={30} color="#fff" /></View></TouchableOpacity>,
      headerStyle: {
        backgroundColor: colors.midnightBlue,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
        
      },
      headerTintColor: '#ffffff',
      })}
    />
   
   
    
   
  </Stack.Navigator>
)
export default AppNavigator;