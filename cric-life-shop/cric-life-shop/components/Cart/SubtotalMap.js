import React,{useState} from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView, Button,Image, TouchableOpacity, Pressable, SafeAreaView, TextInput, Alert } from 'react-native';
import {styles} from './styles'
//props.productList
//props.setter
export function SubtotalMap(props){
  const removeItem = (index) => {
    let stuff = [...props.productList];
    let stuffThing = stuff[index];
    stuffThing.numOf=stuffThing.numOf-1;
    stuffThing.tPrice = "$"+(stuffThing.price.slice(1)*stuffThing.numOf)
    stuff[index]=stuffThing;
    if(stuffThing.numOf===0){
      props.setter([
                ...props.productList.slice(0, index),
                ...props.productList.slice(index + 1)
      ]);
    }
    else{
      props.setter(stuff);
    }
  }
  const removeAll = (index) => {
      props.setter([
                ...props.productList.slice(0, index),
                ...props.productList.slice(index + 1)
      ]);
  }
  
  const addItem = (index) => {
    let stuff = [...props.productList];
    let stuffThing = stuff[index];
    stuffThing.numOf=stuffThing.numOf+1;
    stuffThing.tPrice = "$"+(stuffThing.price.slice(1)*stuffThing.numOf)
    stuff[index]=stuffThing;
    props.setter(stuff);
  }
 
  let sum = 0;

  return(
    <View>
        <Text style={styles.medium}>
          Subtotal:
        </Text>
 
        {props.productList.map((product) => {
            sum+=parseInt(product.tPrice.slice(1))
            return (
              <View style={{flexDirection:"row"}}> 
                  <Text style={styles.listTextBold}>{product.name}, </Text>
                  <Text style={styles.listText}>{product.numOf}, </Text>
                  <Text style={styles.listText}>{product.tPrice}</Text>
              </View>
            );
          })}
        <Text style={styles.medium}>
          Subtotal = ${sum}
        </Text>
  </View>
  );
}
