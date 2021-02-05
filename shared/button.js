import React from 'react';
import { StyleSheet , TouchableOpacity , Text  , View } from 'react-native';

export const FlatButton = ({text , onPress}) => {
    return(
        <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
           <Text style={styles.buttonText}>{text}</Text>
        </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
     button:{
            borderRadius: 30,
            paddingVertical: 14,
            paddingHorizontal: 10,
            backgroundColor: '#fff',
            shadowColor:'#000',
            shadowOpacity:0.5,
            marginBottom:20
    },
     buttonText:{
            color: '#000',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            fontSize: 20,
            textAlign: 'center',
            letterSpacing:3

             
    }
});