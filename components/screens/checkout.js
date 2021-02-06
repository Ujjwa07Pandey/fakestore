import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    FlatList,
    ActivityIndicator,
    Image,
  } from "react-native";
import { AntDesign } from '@expo/vector-icons';
export default function Checkout({route}) {
    return (
        <View style={styles.container}>
           <AntDesign name="checkcircleo" size={200} color="black" />
           <Text style={{marginTop:20 , fontSize:28}}>Total: {route.params.paramKey}</Text>
           <Text style={{marginTop:20 , fontSize:28}}>Thank You for Shopping With Us</Text>
           <Text style={{marginTop:5 , fontSize:24 , textAlign:'center'}}>Visit More to Checkout More Exciting Products</Text>
        </View>
    )
}

const styles =  StyleSheet.create({
   container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
       textAlign:'center'
   }
});
