import * as React from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function SearchBar() {
  return (
    <LinearGradient colors={['#FF0000', '#CC0033', "#990066", "#660099", "#3300CC", "#0000FF"]} style={styles.layout} start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}}>
      <TextInput style={styles.searchBar} placeholder="Search CricLife Store"/>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBar: {
    borderWidth: 2,
    width: "80%",
    height: "35%",
    borderRadius: "10%",
    backgroundColor: "white",
    padding: 5,
    marginTop: 15,
  },
});


