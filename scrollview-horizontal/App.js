import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

import Title from "./components/Title";

export default function App() {
  return (
    <View style={styles.container}>
      <Title title="Anúncios"></Title>
      <ScrollView horizontal>
            <View style={styles.viewScroll}>
              <Image style={styles.image} source={require("./assets/product.png")} />
              <Text>dddjsjnjddhbhsabhasbdhbçççççççççççççççççççççççççççççççççççççççççççççççççççççkkkkkkkkkkkkksahdhs</Text>
            </View>
            <View style={styles.viewScroll}>
              <Image style={styles.image} source={require("./assets/product.png")} />
              <Text>dddjsjnjddhbhsabhasbdhbçççççççççççççççççççççççççççççççççççççççççççççççççççççkkkkkkkkkkkkksahdhs</Text>
            </View>
            <View style={styles.viewScroll}>
              <Image style={styles.image} source={require("./assets/product.png")} />
              <Text>dddjsjnjddhbhsabhasbdhbçççççççççççççççççççççççççççççççççççççççççççççççççççççkkkkkkkkkkkkksahdhs</Text>
            </View>
            <View style={styles.viewScroll}>
              <Image style={styles.image} source={require("./assets/product.png")} />
              <Text>dddjsjnjddhbhsabhasbdhbçççççççççççççççççççççççççççççççççççççççççççççççççççççkkkkkkkkkkkkksahdhs</Text>
            </View>
            <View style={styles.viewScroll}>
              <Image style={styles.image} source={require("./assets/product.png")} />
              <Text>dddjsjnjddhbhsabhasbdhbçççççççççççççççççççççççççççççççççççççççççççççççççççççkkkkkkkkkkkkksahdhs</Text>
            </View>
            <View style={styles.viewScroll}>
              <Image style={styles.image} source={require("./assets/product.png")} />
              <Text>dddjsjnjddhbhsabhasbdhbçççççççççççççççççççççççççççççççççççççççççççççççççççççkkkkkkkkkkkkksahdhs</Text>
            </View>
            <View style={styles.viewScroll}>
              <Image style={styles.image} source={require("./assets/product.png")} />
              <Text>dddjsjnjddhbhsabhasbdhbçççççççççççççççççççççççççççççççççççççççççççççççççççççkkkkkkkkkkkkksahdhs</Text>
            </View>
      </ScrollView>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  viewScroll: {
    maxHeight: "35%",
    width: "3%",
    alignItems: "center",
    marginLeft: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
  },

  image: {
    height: 150,
    width: 130,
  },
});
