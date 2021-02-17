import "react-native-gesture-handler";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Props } from "../types/types";

function HomeScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style = {{ margin: 20 }}>This is Home Screen</Text>
        <Button
          title="Go to Screen One"
          onPress={() => navigation.navigate("ScreenOne")}
        />
    </View>
  );
}

export default HomeScreen