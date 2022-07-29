import React,{useState} from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView, Button,Image, TouchableOpacity, Pressable, SafeAreaView, TextInput, Alert } from 'react-native';
 
export function Cart(props) {
  const [products, newProducts]=useState([
    { uri: "https://m.media-amazon.com/images/I/51IwaYzGLCL._AC_SX679_.jpg", name: "White Ball", price: "$7", numOf: 1, tPrice: "$7"},
    {uri:'https://images.squarespace-cdn.com/content/v1/5fd20db1750b345d8b151572/1607681222132-OIU32C99X3V195ZDG5AE/Red+Premier+Side.jpg?format=750w', name: "Red Ball", price: "$7", numOf: 1, tPrice: "$7"},
    {uri: 'https://m.media-amazon.com/images/I/81bxuZCpdpL._AC_SY879_.jpg', name: 'Kookaburra Bat', price: "$100", numOf: 1, tPrice: "$7"},
    {uri: 'https://bestcricketstore.com/wp-content/uploads/2022/01/e3e916c8-b859-46b3-b197-2c9c7d7c1f69.jpeg', name: "Cricket Stumps", price: "$70", numOf: 1, tPrice: "$70"},
    {uri: 'https://cdn.shopify.com/s/files/1/0020/7477/1565/products/first-pitch-bowler-pro-2-wheel-cricket-bowling-machine-16140464029805_1024x1024.jpg?v=1612371229', name: "Bowling Machine", price: "$600", numOf: 1, tPrice: "$600"},
    {uri: 'https://i.ebayimg.com/images/g/9SQAAOSwvGRh4CAH/s-l500.jpg', name: "Rope Ball", price: "$15", numOf: 1, tPrice: "$15"},
    {uri: 'https://cdn.shopify.com/s/files/1/0614/7149/0275/products/dsc-neon_750x.jpg?v=1651675829', name: "Cricket Shoes", price: "$80", numOf: 1, tPrice: "$80"},
    {uri: 'https://m.media-amazon.com/images/I/916LckrjstS._AC_SX679_.jpg', name: "Cricket Pitch", price: "$300", numOf: 1, tPrice: "$300"},
    {uri: 'https://m.media-amazon.com/images/I/51GJDjJGHLL._AC_.jpg', name: "Cricket Kit", price: "$250", numOf: 1, tPrice: "$250"},
    {uri: 'https://m.media-amazon.com/images/I/51mI2UYeHGL._AC_SX466_.jpg', name: "Cricket Helmet", price: "$40", numOf: 1, tPrice: "$40"}])
  
  const removeItem = (index) => {
    let stuff = [...products];
    let stuffThing = stuff[index];
    stuffThing.numOf=stuffThing.numOf-1;
    stuffThing.tPrice = "$"+(stuffThing.price.slice(1)*stuffThing.numOf)
    stuff[index]=stuffThing;
    if(stuffThing.numOf===0){
      newProducts([
                ...products.slice(0, index),
                ...products.slice(index + 1)
      ]);
    }
    else{
      newProducts(stuff);
    }
  }
  const removeAll = (index) => {
      newProducts([
                ...products.slice(0, index),
                ...products.slice(index + 1)
      ]);
  }
  
  const addItem = (index) => {
    let stuff = [...products];
    let stuffThing = stuff[index];
    stuffThing.numOf=stuffThing.numOf+1;
    stuffThing.tPrice = "$"+(stuffThing.price.slice(1)*stuffThing.numOf)
    stuff[index]=stuffThing;
    newProducts(stuff);
  }
 
  const createTwoButtonAlert = () =>{
    Alert.alert(
      "Clear Cart",
      "Are you sure you want to empty your cart",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK", onPress: () => newProducts([])}
      ]
      
    );
  }
  let sum = 0;
  return (
    <View style = {styles.layout, styles.textContainer}>
      <ScrollView nestedScrollEnabled={true}>
        <Text style={styles.cartText}>
          Your Cart
        </Text>
 
        {products.map((product) => {
            return (
              <View style={{flexDirection:"row"}}> 
                <Image source={{uri: product.uri}} style={{width:150, height:140}}/>
                <View >
                  <Text style={styles.listTextBold}>{product.name} </Text>
                  <Text style={styles.listText}>{product.tPrice}</Text>
                  
                  <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={()=>addItem(products.indexOf(product))}>
                      <Text style={styles.buttonText}>
                        +
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonContainer} onPress={()=>removeItem(products.indexOf(product))}>
                      <Text style={styles.buttonText}>
                        -
                      </Text>
                    </TouchableOpacity> 
                  </View>
 
                  <TouchableOpacity style={styles.buttonContainer} onPress={()=>removeAll(products.indexOf(product))}>
                    <Text style={styles.buttonText}>
                      Delete
                    </Text>
                  </TouchableOpacity>
 
                </View>
                <TextInput value={product.numOf.toString()} style={{borderWidth:1, width:30, height:30}} editable={false}/>
              </View>
            );
          })}
 
        <TouchableOpacity style={styles.buttonContainer} onPress={()=>createTwoButtonAlert()}>
          <Text style={styles.buttonText}>
            Clear Cart
          </Text>
        </TouchableOpacity> 
 
        <Text style={styles.medium}>
          Subtotal:
        </Text>
 
        {products.map((product) => {
            sum+=parseInt(product.price.slice(1))
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
 
        <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress}>
          <Text style={styles.buttonText}>
            Buy
          </Text>
        </TouchableOpacity> 
 
      </ScrollView>
    </View>
  )
}
 
const styles = StyleSheet.create({
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
 
 
//<Image source={{uri: "https://m.media-amazon.com/images/I/51IwaYzGLCL._AC_SX679_.jpg"}}/>
 
// Extra junk we got rid of and will probably break the code lol 
//        1.
//        <FlatList
//          // pass in a props object like data and put it here, then render it
//          data={props.cart}
//          renderItem={({item}) => <Text style={styles.listText}>{item.key}</Text>}
//        />
//        2.
//          <FlatList
//            // pass in a props object like data and put it here, then render it
//            data={{key:'ball         $$'}}
//            renderItem={({item}) => <Text style={styles.listText}>{item.key}</Text>}
//          />
//
 
//                  <Text style={styles.listText}>${(product.price.slice(1))*(num)}</Text>
 
 
 
 
 
 
 

