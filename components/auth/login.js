import React, {useState} from 'react'
import {View , Text , StyleSheet , TextInput , TouchableOpacity} from 'react-native';
import { colors } from './../../styles/colors';
import { Formik } from 'formik';
import * as yup from 'yup';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateEmail, updatePassword, login } from '../../redux/actions/actions';
import Firebase from '../../config/firebase';
const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})
function LoginScreen(props) {
//   Firebase.auth().onAuthStateChanged(user => {
//     if (user) {
//         props.getUser(user.uid)
//         if (this.props.user != null) {
//            console.log('User Logged In');
//         }
//     }
// })
    return (
        <View style={styles.container}>
        <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={(values , actions) => {
            props.login(values.email , values.password , props.navigation);
           
        // Firebase.auth()
        // .signInWithEmailAndPassword(values.email, values.password)
        // .then(() => console.log('User Logged In'))
        // .catch(error => console.log(error))

        actions.resetForm();
          }}
          >
            {({  handleChange,
     handleBlur,
     handleSubmit,
     values,
     errors,
     isValid,}) => (
              <>
              <View style={styles.inputView}>
                <TextInput
                  name="email"
                  placeholder="Email Address"
                  style={styles.textInput}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                {errors.email &&
         <Text style={{ fontSize: 15, color: 'red' }}>{errors.email}</Text>
       }
       </View>
       <View style={styles.inputView}>
                <TextInput
                  name="password"
                  placeholder="Password"
                  style={styles.textInput}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                 {errors.password &&
         <Text style={{ fontSize: 15, color: 'red' }}>{errors.password}</Text>
       }
       </View>
       <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
                 <TouchableOpacity onPress={handleSubmit}>
        <View style={styles.button}>
           <Text style={styles.buttonText}>Login</Text>
        </View>
        </TouchableOpacity>
              </>
            )}
          </Formik>
      </View>
    )
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateEmail, updatePassword, login }, dispatch)
}

const mapStateToProps = state => {
  return {
      user: state.user
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);

const styles = StyleSheet.create({

    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      textAlign:'center',
      backgroundColor: colors.skyblue
    },
    inputView: {
      backgroundColor: "#fff",
      borderRadius: 10,
      width: "70%",
      height: 70,
      marginBottom: 20,
      alignItems: "center",
    },
  
    textInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
      fontSize:20,
    },
    errorText:{
      fontSize: 20,
      color: 'red',
    },
   
    button:{
      borderRadius: 30,
      paddingVertical: 14,
      paddingHorizontal: 50,
      backgroundColor: colors.midnightBlue,
      shadowColor:'#000',
      shadowOpacity:0.5,
      marginBottom:20
    },
    buttonText:{
      color: '#fff',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: 20,
      textAlign: 'center',
      letterSpacing:3

    },
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },

});
