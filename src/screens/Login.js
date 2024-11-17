import React from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import Texto from "../components/Texto";
import logo from '../../assets/logo.png';

export default function Login() {
  return (
    <SafeAreaView style={estilo.container1}>
        <Texto style={estilo.textoLogin}>Login</Texto>
        <View>
        <Image
        source={logo}
        style={estilo.imagem}
        />
        </View>
      <View style={estilo.container2}>
        <Texto style={estilo.textoForm}>Email</Texto>
          <TextInput
            style={estilo.input}
            placeholder="Digite seu email"
            keyboardType="email-address"
            placeholderTextColor={"#fff"}
          />
        <Texto style={estilo.textoForm}>Senha</Texto>
        <TextInput
          style={estilo.input}
          placeholder="Digite sua senha"
          secureTextEntry
          placeholderTextColor={"#fff"}
        />
        <Pressable style={estilo.botao}>
            <Texto style={estilo.textoBotao}>Entrar</Texto>
        </Pressable>
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
  },
  container2: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textoForm: {
    fontSize: 14,
    color: "#A4A4A4",
    paddingVertical: 15
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
    paddingVertical: 10,
    backgroundColor: "#9C3FE4",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 40,
    borderRadius: 15
  },
  textoBotao:{
    fontSize: 15,
    color: "#fff"
  },
  imagem:{
    width: 200,
    height: 200,
    resizeMode: 'contain',
  }
});
