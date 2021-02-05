// import { LogBox } from 'react-native';
// import _ from 'lodash';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);
import React , {useState} from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './redux/reducers/reducers';
import {AppNavigator}  from './components/navigation/appNavigator';
import { NavigationContainer } from '@react-navigation/native';
const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(rootReducer, middleware);

// LogBox.ignoreWarnings(['Setting a timer']);
// const _console = _.clone(console);
// console.warn = message => {
//   if (message.indexOf('Setting a timer') <= -1) {
//     _console.warn(message);
//   }
// };
export default function App() {

  return(
    
   
    <Provider store={store}>
    <NavigationContainer>
    <AppNavigator/>
   </NavigationContainer>
   </Provider>
    
   
       );
}


