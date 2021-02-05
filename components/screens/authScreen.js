import React from 'react'
import {View , Text , TouchableOpacity , StyleSheet , Image} from 'react-native';
import {FlatButton} from '../../shared/button';
import { colors } from './../../styles/colors';


export default function AuthScreen  ({navigation}) {
  
    return (
        <View style={styles.container}>
    <View style={styles.logo}>
     
    <Image
    source={require('../../shared/online-shopping.png')}/>
       <View>
            <Text style={styles.logoText}>
                fakeStore
            </Text>
        </View>
    
    </View>
      
         <FlatButton text="Login" onPress={() => navigation.navigate('Login')}  />
         
         <FlatButton text="Register" onPress={() => navigation.navigate('Register')}/>
        </View>
    );
}

const styles  = StyleSheet.create({

    container:{
        flex:1,
        justifyContent: 'center',
        paddingHorizontal:50,
        backgroundColor: colors.blue,
    },
  
    logo:{
        display:'flex',
        flexDirection:'row',
        marginBottom:100,
        alignItems:'center',
        justifyContent:'center'
    },
    logoText:{
        fontSize:30,
        color:'#333',
        fontWeight:'800'
        
    },
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