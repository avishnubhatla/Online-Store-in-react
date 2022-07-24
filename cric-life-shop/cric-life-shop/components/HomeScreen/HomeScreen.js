import React, {useState} from 'react';

import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import {SearchBar } from "./SearchBar"
import {Product} from './Product'
import {ProductContainer} from './ProductContainer'

export function HomeScreen() {
  const [products, newProducts]=useState([
    { uri: "https://m.media-amazon.com/images/I/51IwaYzGLCL._AC_SX679_.jpg", name: "White Ball", price: "$7"},
    {uri:'https://images.squarespace-cdn.com/content/v1/5fd20db1750b345d8b151572/1607681222132-OIU32C99X3V195ZDG5AE/Red+Premier+Side.jpg?format=750w', name: "Red Ball", price: "$7"},
    {uri: 'https://m.media-amazon.com/images/I/81bxuZCpdpL._AC_SY879_.jpg', name: 'Kookaburra Bat', price: "$100"},
    {uri: 'https://bestcricketstore.com/wp-content/uploads/2022/01/e3e916c8-b859-46b3-b197-2c9c7d7c1f69.jpeg', name: "Cricket Stumps", price: "$70"},
    {uri: 'https://cdn.shopify.com/s/files/1/0020/7477/1565/products/first-pitch-bowler-pro-2-wheel-cricket-bowling-machine-16140464029805_1024x1024.jpg?v=1612371229', name: "Bowling Machine", price: "$600"},
    {uri: 'https://i.ebayimg.com/images/g/9SQAAOSwvGRh4CAH/s-l500.jpg', name: "Rope Ball", price: "$15"},
    {uri: 'https://cdn.shopify.com/s/files/1/0614/7149/0275/products/dsc-neon_750x.jpg?v=1651675829', name: "Cricket Shoes", price: "$80"},
    {uri: 'https://m.media-amazon.com/images/I/916LckrjstS._AC_SX679_.jpg', name: "Cricket Pitch", price: "$300"},
    {uri: 'https://m.media-amazon.com/images/I/51GJDjJGHLL._AC_.jpg', name: "Cricket Kit", price: "$250"},
    {uri: 'https://m.media-amazon.com/images/I/51mI2UYeHGL._AC_SX466_.jpg', name: "Cricket Helmet", price: "$40"}])
  return (
    <View style={styles.layout}>
      <SearchBar />
      <ProductContainer />      
    </View>
  )
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
});


