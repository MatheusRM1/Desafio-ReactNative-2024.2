import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons'

import LandingPage from "../screens/LandingPage";
import Contato from "../screens/Contato";
import Gerenciamento from "../screens/Gerencimento";
import CustomTabBar from "../components/CustomTabBar";
import NavBar from "../components/Header";
import Login from "../screens/Login";
import Modal from "../components/ModaisCriar";


const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{
      header: (props) => <NavBar />,
      tabBarHideOnKeyboard: true,
      tabBarShowLabel: false,
      tabBarActiveTintColor: "#121212",
      tabBarStyle:{
        borderTopWidth: 0,
        backgroundColor: "#fff"
      }
      }}
      tabBar={ (props) => <CustomTabBar {...props}/>}
      >
      <Tab.Screen name="Home" component={LandingPage} options={{
        tabBarIcon: "home"
      }}/>
      <Tab.Screen name="Contato" component={Contato} options={{
        tabBarIcon: "contacts"
      }}/>
      <Tab.Screen name="Gerenciamento" component={Gerenciamento} options={{
        tabBarIcon: "folder"
      }}/>
      <Tab.Screen name="Login" component={Login} options={{headerShown: 'false'}}/>
      <Tab.Screen name="Modal" component={Modal} options={{headerShown: 'false'}}/>
    </Tab.Navigator>
  );
}
