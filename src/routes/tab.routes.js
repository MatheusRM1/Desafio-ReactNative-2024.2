import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons'

import LandingPage from "../screens/LandingPage";
import Contato from "../screens/Contato";
import Gerenciamento from "../screens/Gerencimento";
import Login from "../screens/Login";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="landingPage" component={LandingPage} />
      <Tab.Screen name="contato" component={Contato} />
      <Tab.Screen name="gerenciamento" component={Gerenciamento} />
      <Tab.Screen name="login" component={Login} />
    </Tab.Navigator>
  );
}
