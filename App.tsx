import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

function HomeScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <View style ={styles.btnStyle}>
        <Button
          title="Go to Screen One"
          onPress={() => navigation.navigate("ScreenOne")}
        />
      </View>
      <View>
        <Button
          title="Go to Screen Two"
          onPress={() => navigation.navigate("ScreenTwo")}
        />
      </View>
    </View>
  );
}

function ScreenOne() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Screen One</Text>
    </View>
  );
}

function ScreenTwo() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Screen Two</Text>
    </View>
  );
}

function ScreenThree() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Screen Three</Text>
    </View>
  );
}

function ScreenFour() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Screen Four</Text>
    </View>
  );
}

type RootStackParamList = {
  Home: undefined;
  ScreenOne: undefined;
  ScreenTwo: undefined;
  ScreenThree: undefined;
  ScreenFour: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type ScreenOneRouteProp = RouteProp<RootStackParamList, "ScreenOne">;
type ScreenOneNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ScreenOne"
>;

type Props = {
  route: ScreenOneRouteProp;
  navigation: ScreenOneNavigationProp;
};

const RootStack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="ScreenOne" component={ScreenOne} />
        <RootStack.Screen name="ScreenTwo" component={ScreenTwo} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  btnStyle: {
    padding: 15,
  },
});
