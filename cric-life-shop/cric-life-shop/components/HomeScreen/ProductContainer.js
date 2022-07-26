import * as React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { Product } from "./Product"

export function ProductContainer() {
  return (
    <View style={styles.layout}>
      <ScrollView>
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Start Your Cricketing Journey With CricLife!</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  layout: {
    flex: 5,
  },
  welcomeText: {
    margin: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
  textContainer: {
    alignItems: "center",

  },
});



