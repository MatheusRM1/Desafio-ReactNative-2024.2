import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts , Poppins_400Regular , Poppins_700Bold } from "@expo-google-fonts/poppins";
import AppLoading from 'expo-app-loading';
import Routes from './src/routes';

export default function App() {
  const [fonteCarregada] = useFonts({
    "PoppinsLight": require('./assets/fonts/Poppins-Light.ttf'),
    "PoppinsRegular": require('./assets/fonts/Poppins-Regular.ttf'),
    "PoppinsMedium": require('./assets/fonts/Poppins-Medium.ttf'),
    "PoppinsSemiBold": require('./assets/fonts/Poppins-SemiBold.ttf'),
    "PoppinsBold": require('./assets/fonts/Poppins-Bold.ttf'),
  });
  
  if(!fonteCarregada) {
    return null;
  }

  return (
    <Routes />
  );
}