import React , {useState} from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useSelector } from 'react-redux';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCart , removeItem } from './../../redux/actions/actions';
function Cart(props) {
  const [isLoading, setLoading] = useState(false);
  const data = props.cart;
  console.log(data);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) =>  <Card>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: item.image,
            }}
          />
    
          <Text style={{ marginBottom: 10, marginTop: 20 }} h2>
            {item.title}
          </Text>
    
          <Text style={styles.price} h4>
            {item.price}
          </Text>
    
          <Text h6 style={styles.description}>
            {item.description}
          </Text>
    
          <Button type="clear" title="Add To Cart" onPress={addToCart(item)} 
          />
           <Button type="clear" title="Remove from Cart" onPress={removeItem(item)} 
          />
        </Card>}
        />
      )}
    </View>
  );
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addToCart , removeItem}, dispatch);
  };
  const mapStateToProps = (state) => {
    return {
      cart: state.CartReducer.cart,
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cart: {
    color: "white",
    fontSize: 14,
  },
});

