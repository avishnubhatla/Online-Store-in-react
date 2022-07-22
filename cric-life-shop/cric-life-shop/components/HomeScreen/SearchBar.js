import * as React from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';

export function SearchBar() {
  return (
    <View style={styles.layout}>
      <TextInput style={styles.searchBar} placeholder="Search CricLife Store"/>
    </View>
  )
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: "#7ae0ff",
    justifyContent: "center",
    alignItems: "center",
  },
  searchBar: {
    borderWidth: 1,
    width: "80%",
    height: "40%",
    borderRadius: "10%",
    backgroundColor: "white",
    marginTop: 15,
    padding: 5,
  },
});


