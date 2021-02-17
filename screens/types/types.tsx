import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Home: undefined;
  ScreenOne: undefined;
  ScreenTwo: undefined;
  ScreenThree: undefined;
  ScreenFour: undefined;
};

type ScreenOneRouteProp = RouteProp<RootStackParamList, "ScreenOne">;
type ScreenOneNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ScreenOne"
>;

type Props = {
  route: ScreenOneRouteProp;
  navigation: ScreenOneNavigationProp;
};

export { RootStackParamList, Props }