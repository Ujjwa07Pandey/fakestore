import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Button } from "react-native-elements";

export default function ProductCard({ item, addToCart }) {
  return (
    <Card>
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

      <Button type="clear" title="Add To Cart" onPress={() => addToCart(item)} />
    </Card>
  );
}

const styles = StyleSheet.create({
  name: {
    color: "#5a647d",

    fontWeight: "bold",

    fontSize: 30,
  },

  price: {
    fontWeight: "bold",

    marginBottom: 10,
  },

  description: {
    fontSize: 10,

    color: "#c1c4cd",
  },
});
