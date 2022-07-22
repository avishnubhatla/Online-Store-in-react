import React from 'react';
import useState from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {SearchBar } from "./SearchBar"
import {Product} from './Product'
import {ProductContainer} from './ProductContainer'
import leatherball from "../../assets/assets/leatherball.jpeg";
import cricketball from "../../assets/assets/cricketball.jpg";
import kookaburrabat from "../../assets/assets/kookaburrabat.jpg";
import sscricketstumps from "../../assets/assets/sscricketstumps.jpeg";
import bowlingmachine from "../../assets/assets/bowlingmachine.webp";
import ropeball from "../../assets/assets/ropeball.webp";
import cricketshoes from "../../assets/assets/cricketshoes.jpg";
import cricketmat from "../../assets/assets/cricketmat.webp";
import cricketkit from "../../assets/assets/cricketkit.jpg";
import crickethelmet from "../../assets/assets/crickethelmet.jpg";
export function HomeScreen() {
  const [products, newProducts]=useState([
    {img: leatherball, name: "White Ball", price: "$7"},
    {img: cricketball, name: "Red Ball", price: "$7"},
    {img: kookaburrabat, name: 'Kookaburra Bat', price: "$100"},
    {img: sscricketstumps, name: "Cricket Stumps", price: "$70"},
    {img: bowlingmachine, name: "Bowling Machine", price: "$600"},
    {img: ropeball, name: "Rope Ball", price: "$15"},
    {img: cricketshoes, name: "Cricket Shoes", price: "$80"},
    {img: cricketmat, name: "Cricket Pitch", price: "$300"},
    {img: cricketkit, name: "Cricket Kit", price: "$250"},
    {img: crickethelmet, name: "Cricket Helmet", price: "$40"}])
  return (
    <View>
      <SearchBar />
    </View>
  )
}

const styles = StyleSheet.create({
  
});
