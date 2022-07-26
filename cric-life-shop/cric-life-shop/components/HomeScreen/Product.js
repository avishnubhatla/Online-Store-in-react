import React from 'react';
import { Text, View, StyleSheet, Pressable, Image } from 'react-native';

export function Product(props) {
  return (
    <View style={styles.product}>
      <Image source={{uri: props.src}} style={styles.image}/>
      <View style={styles.textContainer}>
        <Text style={styles.productNameText}>{props.productName}</Text>
        <Text>{props.price}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  product: {
    width: "100%",
    height: 150,
    flexDirection: "row",
    margin: 10,
  },
  image: {
    flex: 1,
    objectFit: "fill"
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  productNameText: {
    fontSize: 25,
    fontWeight: "bold",
  },
});


