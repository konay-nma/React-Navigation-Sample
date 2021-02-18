import "react-native-gesture-handler";
import React from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { Props } from "../types/types";

function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.containter}>
      <Image style = {styles.image}
        source = {require('../home_screen/foods.jpg')} />
      <Text style = {styles.text}>Welcome to the Myanmar Traditional Food Application. In this application, we represent the all kinds of food in Myanmar, Traditional Food, Street Foods, Famous Snacks, etc.</Text>
        <Button
          title="Go to Next"
          onPress={() => navigation.navigate("ScreenOne")}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    margin: 20
  },
  image: {
    borderRadius: 10,
    width: '100%',
    height: '35%'
  }
})

export default HomeScreen