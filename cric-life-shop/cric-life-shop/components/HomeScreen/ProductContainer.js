import * as React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

export function ProductContainer() {
  return (
    <View style={styles.layout}>
      <ScrollView>
        <Text style={styles.welcomeText}>Start Your Cricketing Journey With CricLife!</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  layout: {
    flex: 5,
    alignItems: "center",
  },
  welcomeText: {
    margin: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
});



