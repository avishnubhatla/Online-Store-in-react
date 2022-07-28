import React,{useState} from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView, Button,Image } from 'react-native';

export function Cart(props) {
  let sum=0;
  for(let i;i<products.length();i++){
    sum+=products[index].cost
  }
  return (
    <View>
      <ScrollView>
        <Text style={styles.cartText}>
          Your Cart
        </Text>
        
        <FlatList
          // pass in a props object like data and put it here, then render it
          data={props.cart}
          renderItem={({item}) => <Text style={styles.listText}>{item.key}</Text>}
        />

        <Text style={styles.medium}>
          Subtotal:
        </Text>
        
        <FlatList
          // pass in a props object like data and put it here, then render it
          data={sum}
          renderItem={({item}) => <Text style={styles.listText}>{item.key}</Text>}
        />

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  cartText: {
    justifyContent: 'flex-start',
    marginTop: 50,
    fontWeight: 'bold',
    fontSize: 70,
    textAlign:'center',
    color: "black"
  },
  medium:{
    justifyContent: 'flex-start',
    marginTop: 15,
    fontSize: 30,
    textAlign:'center',
    color: "black",
    fontWeight: "bold"
  },
  listText:{
    justifyContent: 'flex-start',
    marginTop: 25,
    fontSize: 30,
    textAlign:'left',
    color: "black"
  }
});
