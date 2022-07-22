import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {SearchBar } from "./SearchBar"
import {Product} from './Product'
import {ProductContainer} from './ProductContainer'
export function HomeScreen() {
  return (
    <View>
      <SearchBar />
      <ProductContainer />
    </View>
  )
}

const styles = StyleSheet.create({
  
});
