import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts , Poppins_400Regular , Poppins_700Bold } from "@expo-google-fonts/poppins";
import Texto from './src/components/Texto';
import AppLoading from 'expo-app-loading';
import Routes from './src/routes';

export default function App() {
  const [fonteCarregada] = useFonts({
    "PoppinsRegular": Poppins_400Regular,
    "PoppinsBold": Poppins_700Bold,
  });
  
  if(!fonteCarregada) {
    return null;
  }

  return (
    <Routes />
  );
}