import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./tab.routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import ModalEdição from "../components/ModaisEdição";
import ModalCriar from "../components/ModaisCriar";
import ModalRemover from "../components/ModalExcluir";
import VisualizacaoIndividual from "../screens/Pvu";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="HomeScreen" component={TabRoutes}/>
        <Stack.Screen name="ModalCriar" component={ModalCriar} />
        <Stack.Screen name="ModalEdição" component={ModalEdição} />
        <Stack.Screen name="ModalExclusão" component={ModalRemover} />
        <Stack.Screen name="Viz" component={VisualizacaoIndividual} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
