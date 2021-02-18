import "react-native-gesture-handler";
import React from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { Props } from "../types/types";

function ScreenThree({ navigation }: Props) {
  return (
    <View style={styles.containter}>
      <Image 
        style = {styles.image}
        source = {require('../screen_three/laphat.jpg')}/>
      <Text style = {{ fontSize: 18, margin: 20 }}>This is the most popular Myanmar food. To make the dish, the sour, slightly bitter leaves are mixed by hand with shredded cabbage, sliced tomatoes, nuts and peas. The dish can be a snack, an appetizer or, coupled with a plate of rice.</Text>
        <Button
          title="How to make this food"
          onPress={() => navigation.navigate("ScreenFour")}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  containter: {
    flex: 1, 
    alignItems: "center",  
  },
  image: {
    borderRadius: 10,
    width: '100%',
    height: '45%'
  }
})

export default ScreenThree