import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import { colors } from "../../styles/colors";
import { addToCart, fetchProducts } from "../../redux/actions/actions";
import { bindActionCreators } from "redux";
import ProductCard from "../reusable/ProductCard";

function HomeScreen(props) {
  const [isLoading, setLoading] = useState(false);

  const data = props.fetchProducts().payload;

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => <ProductCard item={item}/>}
        />
      )}
    </View>
  );
}

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
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchProducts }, dispatch);
};
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
