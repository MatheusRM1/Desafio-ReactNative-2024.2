import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./tab.routes";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Home from "../screens/LandingPage";
import NavBar from "../components/Header";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <TabRoutes/>
    </NavigationContainer>
  );
}
