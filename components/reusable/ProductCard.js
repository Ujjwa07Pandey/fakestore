import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity , Card } from "react-native";

export default function ProductCard({ item }) {
  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.image}>
           <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <Text>{item.title}</Text>
      </View>
    
      <View style={styles.card}>
      
     
        
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
    },
    card:{
        alignItems:'center',
        textAlign:'center',
        width:'90%',
        height:300,
        backgroundColor:'#fff',
        marginVertical:20,
        borderColor:'#ccc',
        borderRadius:8,
        elevation:1,
        shadowOpacity:1,
        shadowColor:'#ccc'
    },
    image:{
        height:200
    }

});
