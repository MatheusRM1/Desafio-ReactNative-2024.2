import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Texto from "./Texto";
import logo from "../../assets/logo/logo.png";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function NavBar() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={estilo.container}>
      <View style={estilo.perfil}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image source={logo} style={estilo.imagemLogo} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <View style={estilo.button}>
            <Texto style={estilo.textoPefil}>Logout</Texto>
            <Feather name="log-out" color="white" size={20} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  container: {
    top: 0,
    height: 80,
    paddingHorizontal: "10",
    backgroundColor: "#0A071E",
    shadowColor: "#6156E2",
    shadowOpacity: 0.5,
    shadowRadius: 100,
    elevation: 100,
  },
  imagemLogo: {
    width: 100,
    height: 100,
  },
  perfil: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imagemP: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  textoPefil: {
    fontSize: 20,
    color: "#fff",
    alignSelf: "center",
    textDecorationLine: "underline",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    gap: 4,
  },
});
