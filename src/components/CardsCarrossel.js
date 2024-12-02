import React from "react";
import { Image, StyleSheet, View } from "react-native";
import musica1 from "../../assets/musicas/musica1.png";
import Texto from "./Texto";

export default function CardsCarrossel(props) {
  return (
    <View>
      <View style={estilo.cardCarrosel}>
        <Image source={musica1} style={estilo.imagem} />
        <Texto style={estilo.textoCarrosel}>{props.titulo}</Texto>
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
    fontWeight: "regular",
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
});
