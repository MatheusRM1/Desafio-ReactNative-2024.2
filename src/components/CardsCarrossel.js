import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import musica1 from "../../assets/musicas/musica1.png";

export default function CardsCarrossel(props) {
  return (
    <View>
      <View style={estilo.cardCarrosel}>
        <Image source={musica1} style={estilo.imagem} />
        <Text style={estilo.textoCarrosel}>{props.titulo}</Text>
      </View>
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
    fontFamily: "PoppinsRegular"
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
});
