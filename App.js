import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import components from "./src/screens/components";
import componentsScreen from "./src/screens/components";
import ListScreen from "./src/screens/ListScreen";
import imageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";
import App from "./src/screens/bg";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: componentsScreen,
    List: ListScreen,
    Image: imageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Text: TextScreen,
    Box: BoxScreen,
    //Brb: App,
    Bg: App,
  },
  {
    initialRouteName: "Bg",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
