import "react-native-gesture-handler";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Props } from "../types/types";

function ScreenFour({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style = {{ margin: 20 }}>This is Screen Number Two. You can add any contents.</Text>
        <Button
          title="Go to HomeScreen"
          onPress={() => navigation.popToTop()}
        />
    </View>
  );
}

export default ScreenFour