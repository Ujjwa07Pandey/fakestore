import React , {useState} from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
  FlatList,
  ActivityIndicator,
  Image,
  Button
} from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCart , removeItem } from './../../redux/actions/actions';

import CartCard from './CartCard';
import { colors } from "../../styles/colors";
function Cart(props) {
  const [isLoading, setLoading] = useState(false);
  const data = props.cart;
  var total = props.total;
  if(props.cart.length == 0){
    total = 0;
  }
  
  return (
    <View style={styles.container}>
     
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
         
          <Button title="Continue" onPress={() => props.navigation.navigate('Checkout', {
              paramKey: total ,
            })}/>
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) =>  <CartCard item={item} addToCart={() => {props.addToCart(item)}} removeItem={() =>{props.removeItem(item)} }/>}
        />
        </View>
      )}
      
    </View>
  );
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addToCart ,  removeItem }, dispatch);
};
  const mapStateToProps = (state) => {
    return {
      cart: state.CartReducer.cart,
      total:state.CartReducer.total
      
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 50,
    backgroundColor: colors.skyblue,
  },
  body: {
    flex: 1,
    justifyContent: "center",
  },
});

