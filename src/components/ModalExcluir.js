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
import Feather from '@expo/vector-icons/Feather';

export default function ModalRemover() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={estilo.container1}>
        <Text style={estilo.textoAviso}>Deseja mesmo Remover?</Text>
        <Feather name="alert-circle" size={42} color="#FF0000"/>
        <View style={estilo.container2}>
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
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#151316",
    justifyContent: "center",
    alignItems: "center",
  },
  textoAviso: {
    fontSize: 40,
    color: "#EFEFEF",
    textAlign: "center",
    fontFamily: "PoppinsBold",
  },
  container2: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
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
});
