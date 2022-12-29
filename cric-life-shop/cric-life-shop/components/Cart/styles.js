import React,{useState} from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView, Button,Image, TouchableOpacity, Pressable, SafeAreaView, TextInput, Alert } from 'react-native';

export const styles = StyleSheet.create({
  layout:{
    flex:5,
  },
  cartText: {
    justifyContent: 'flex-start',
    marginTop: 80,
    fontWeight: 'bold',
    fontSize: 50,
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
  listTextBold:{
    justifyContent: 'flex-start',
    marginTop: 25,
    alignSelf: "center",
    fontSize: 20,
    textAlign:'left',
    color: "black",
    fontWeight:"bold"
  },
  listText:{
    justifyContent: 'flex-start',
    marginTop: 25,
    alignSelf: "center",
    fontSize: 20,
    textAlign:'left',
    color: "black"
  },
  buttonContainer:{
    flex:1,
    justifyContent: 'flex-end',
    marginBottom: 30,
    horizontalMargin: 20,
    height: 30,  
    backgroundColor: '#092FB8',
    alignItems: 'center',
    button: {position: 'absolute', bottom:0},    
  },
  buttonText:{
    justifyContent: 'center',
    color: '#fff',
    fontSize: 18,
  }
 
});
