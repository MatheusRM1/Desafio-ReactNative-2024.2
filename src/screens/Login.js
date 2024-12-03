import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import logo from '../../assets/logo/logo.png';
import { useNavigation } from "@react-navigation/native";



export default function Login() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={estilo.container1}>
        <Text style={estilo.textoLogin}>Login</Text>
        <View>
        <Image
        source={logo}
        style={estilo.imagem}
        />
        </View>
      <View style={estilo.container2}>
        <Text style={estilo.textoForm}>Email</Text>
          <TextInput
            style={estilo.input}
            placeholder="Digite seu email"
            keyboardType="email-address"
            placeholderTextColor={"#fff"}
          />
        <Text style={estilo.textoForm}>Senha</Text>
        <TextInput
          style={estilo.input}
          placeholder="Digite sua senha"
          secureTextEntry
          placeholderTextColor={"#fff"}
        />
        <TouchableOpacity style={estilo.botao} onPress={() => navigation.navigate('Home')}>
            <Text style={estilo.textoBotao}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#151316",
  },
  textoLogin: {
    fontSize: 40,
    color: "#EFEFEF",
    fontFamily: "PoppinsBold"
  },
  container2: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textoForm: {
    fontSize: 14,
    color: "#A4A4A4",
    paddingVertical: 15,
    fontFamily: "PoppinsRegular"
  },
  input:{
    backgroundColor: "#3e3e3e",
    width: "75%",
    height: 45,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 0.3,
    color: "#fff",
  },
  botao:{
    width: "75%",
    height: 50,
    fontSize: 20,
    fontFamily: "PoppinsRegular",
    paddingVertical: 10,
    backgroundColor: "#9C3FE4",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 40,
    borderRadius: 15
  },
  textoBotao:{
    fontSize: 15,
    color: "#fff",
    fontFamily: "PoppinsBold"
  },
  imagem:{
    width: 200,
    height: 200,
    resizeMode: 'contain',
  }
});
