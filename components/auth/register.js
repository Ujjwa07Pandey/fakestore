import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  
} from "react-native";
import { colors } from "./../../styles/colors";
import { Formik } from "formik";
import * as yup from "yup";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateEmail, updatePassword, signup } from '../../redux/actions/actions';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const signUpValidationSchema = yup.object().shape({
    fullName: yup
      .string()
      .matches(/(\w.+\s).+/, 'Enter at least 2 names')
      .required('Full name is required'),
    phoneNumber: yup
      .string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Phone number is required'),
    email: yup
      .string()
      .email("Please enter valid email")
      .required('Email is required'),
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
      .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
      .matches(/\d/, "Password must have a number")
      .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .required('Confirm password is required'),
  })
function RegisterScreen(props) {
  return (
     
    <View style={styles.container}>
      <Formik
        validationSchema={signUpValidationSchema}
        initialValues={{
          fullName: "",
          email: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values , actions) => {
          props.signup(values.email , values.password , values.fullName , values.phoneNumber);
          props.navigation.navigate('Home');
          
          // Firebase.auth()
          // .createUserWithEmailAndPassword( values.email , values.password)
          // .then(() => console.log('User Created'))
          // .catch(error => console.log(error))
  
          actions.resetForm();
            }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <View style={styles.inputView}>
              <TextInput
                name="fullName"
                placeholder="Full Name"
                style={styles.textInput}
                onChangeText={handleChange("fullName")}
                onBlur={handleBlur("fullName")}
                value={values.fullName}
                
              />
              {errors.fullName && (
                <Text style={{ fontSize: 15, color: "red" }}>
                  {errors.fullName}
                </Text>
              )}
            </View>
            <View style={styles.inputView}>
              <TextInput
                name="phoneNumber"
                placeholder="Phone Number"
                style={styles.textInput}
                onChangeText={handleChange("phoneNumber")}
                onBlur={handleBlur("phoneNumber")}
                value={values.phoneNumber}
                keyboardType="numeric"
              />
              {errors.phoneNumber && (
                <Text style={{ fontSize: 15, color: "red" }}>
                  {errors.phoneNumber}
                </Text>
              )}
            </View>
            <View style={styles.inputView}>
              <TextInput
                name="email"
                placeholder="Email Address"
                style={styles.textInput}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />
              {errors.email && (
                <Text style={{ fontSize: 15, color: "red" }}>
                  {errors.email}
                </Text>
              )}
            </View>
            <View style={styles.inputView}>
              <TextInput
                name="password"
                placeholder="Password"
                style={styles.textInput}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry
              />
              {errors.password && (
                <Text style={{ fontSize: 15, color: "red" }}>
                  {errors.password}
                </Text>
              )}
            </View>
            <View style={styles.inputView}>
              <TextInput
                name="confirmPassword"
                placeholder="Confirm Password"
                style={styles.textInput}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                secureTextEntry
              />
              {errors.confirmPassword && (
                <Text style={{ fontSize: 15, color: "red" }}>
                  {errors.confirmPassword}
                </Text>
              )}
            </View>
           
            <TouchableOpacity onPress={handleSubmit}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Register</Text>
              </View>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
    
  );
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateEmail, updatePassword, signup }, dispatch)
}

const mapStateToProps = state => {
  return {
      user: state.user
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: colors.skyblue,
  },
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "70%",
    height: 60,
    marginBottom: 20,
    alignItems: "flex-start",
  },

  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontSize: 20,
  },
  errorText: {
    fontSize: 20,
    color: "red",
  },

  button: {
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 50,
    backgroundColor: colors.midnightBlue,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 20,
    textAlign: "center",
    letterSpacing: 3,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
});
