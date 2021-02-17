import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
} from "@react-navigation/stack";

import HomeScreen from './screens/home_screen/HomeScreen'
import { RootStackParamList } from "./screens/types/types";
import ScreenOne from "./screens/screen_one/ScreenOne";
import ScreenTwo from "./screens/screen_two/ScreenTwo";
import ScreenThree from "./screens/screen_three/ScreenThree";
import ScreenFour from "./screens/screen_four/ScreenFour";

const RootStack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="ScreenOne" component={ScreenOne} />
        <RootStack.Screen name="ScreenTwo" component={ScreenTwo} />
        <RootStack.Screen name='ScreenThree' component={ScreenThree} />
        <RootStack.Screen name='ScreenFour' component={ScreenFour} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

