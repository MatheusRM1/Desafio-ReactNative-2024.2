import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts , Poppins_400Regular , Poppins_700Bold } from "@expo-google-fonts/poppins";
import Texto from './src/components/Texto';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fonteCarregada] = useFonts({
    "PoppinsRegular": Poppins_400Regular,
    "PoppinsBold": Poppins_700Bold,
  });
  
  if(!fonteCarregada) {
    return <AppLoading/>
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>   
      <Texto style={styles.texto}>App</Texto>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 100,
    fontWeight: 'normal',
  },
});
