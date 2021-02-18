import "react-native-gesture-handler";
import React from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { Props } from "../types/types";

function ScreenFour({ navigation }: Props) {
  return (
    <View style={styles.containter}>
      <Text style = {styles.text}>How To Make This Food?</Text>
      <Image 
        style = {styles.image}
        source = {require('../screen_four/thoke.jpg')} />
        <Text style = {styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur, elit nec vehicula pellentesque, metus nunc sagittis velit, at faucibus purus dui at risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus semper tincidunt pharetra. Aliquam imperdiet imperdiet quam ac egestas. Cras eu sem ut metus vulputate faucibus. Vivamus imperdiet pharetra nibh, in consectetur tellus rutrum ac. Curabitur quis sem magna.</Text>
        <Button
          title="Go to HomeScreen"
          onPress={() => navigation.popToTop()}
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
    fontStyle: 'italic',
    fontSize: 18,
    margin:5
  },
  image: {
    borderRadius: 10,
    width: '100%',
    height: '50%',
    marginBottom: 10,
  }
})

export default ScreenFour