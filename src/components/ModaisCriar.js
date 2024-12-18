import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ModalCriar() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={estilo.container1}>
      <ScrollView>
        <Text style={estilo.textoLogin}>Criação</Text>
        <View style={estilo.container2}>
          <Text style={estilo.textoForm}>Nome</Text>
          <TextInput
            style={estilo.input}
            placeholder="Digite o nome de sua Música"
            placeholderTextColor={"#fff"}
          />
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "column", marginHorizontal: 10 }}>
              <Text style={estilo.textoForm}>Autor</Text>
              <TextInput
                style={estilo.inputMenores}
                placeholder="Digite o Autor"
                secureTextEntry
                placeholderTextColor={"#fff"}
              />
            </View>
            <View style={{ flexDirection: "column", marginHorizontal: 10 }}>
              <Text style={estilo.textoForm}>Tempo</Text>
              <TextInput
                style={estilo.inputMenores}
                placeholder="Digite o tempo"
                placeholderTextColor={"#fff"}
              />
            </View>
          </View>
          <Text style={estilo.textoForm}>Letra da Música</Text>
          <TextInput
            style={estilo.inputLetra}
            placeholder="Digite a Letra da música"
            multiline
            placeholderTextColor={"#fff"}
          />
          <View style={estilo.containerBotao}>
            <TouchableOpacity
              style={estilo.botao}
              onPress={() => navigation.navigate("HomeScreen")}
            >
              <Text style={estilo.textoBotao}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={estilo.botao}
              onPress={() => navigation.navigate("HomeScreen")}
            >
              <Text style={estilo.textoBotao}>Criar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#151316",
  },
  textoLogin: {
    fontSize: 40,
    color: "#EFEFEF",
    textAlign: "center",
    fontFamily: "PoppinsBold",
    marginTop: 100,
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
    fontFamily: "PoppinsRegular",
  },
  input: {
    backgroundColor: "#3e3e3e",
    width: "90%",
    height: 45,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 0.3,
    color: "#fff",
  },
  inputMenores: {
    backgroundColor: "#3e3e3e",
    width: 150,
    height: 45,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 0.3,
    color: "#fff",
  },
  inputLetra: {
    backgroundColor: "#3e3e3e",
    width: "90%",
    height: 100,
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 0.3,
    color: "#fff",
  },
  containerBotao: {
    flexDirection: "row",
    gap: 30,
  },
  botao: {
    width: "30%",
    height: 50,
    fontSize: 20,
    fontFamily: "PoppinsRegular",
    paddingVertical: 10,
    backgroundColor: "#9C3FE4",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 40,
    borderRadius: 15,
  },
  textoBotao: {
    fontSize: 15,
    color: "#fff",
    fontFamily: "PoppinsBold",
  },
  imagem: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});
