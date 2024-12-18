import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import musica1 from "../../assets/musicas/musica1.png";

export default function CardsCarrossel(props) {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Viz")}>
        <View style={estilo.cardCarrosel}>
          <Image source={musica1} style={estilo.imagem} />
          <Text style={estilo.textoCarrosel}>{props.titulo}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const estilo = StyleSheet.create({
  cardCarrosel: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 30,
    paddingHorizontal: 15,
  },
  textoCarrosel: {
    color: "#A4A4A4",
    fontSize: 11,
    fontFamily: "PoppinsRegular",
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
});
