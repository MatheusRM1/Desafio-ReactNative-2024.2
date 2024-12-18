import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import musica4 from "../../assets/musicas/musica4.png";

export default function Cards(props) {
  const navigation = useNavigation();
  return (
    <View >
      <TouchableOpacity style={estilo.card} onPress={() => navigation.navigate("Viz")}>
        <Image source={props.imagem} style={estilo.imagem} />
        <View style={estilo.textoCard}>
          <Text style={estilo.Titulo}>{props.titulo}</Text>
          <Text style={estilo.Autor}>{props.autor}</Text>
          <Text style={estilo.Tempo}>{props.tempo}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const estilo = StyleSheet.create({
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  card: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  textoCard: {
    alignSelf: "center",
    paddingHorizontal: 10,
  },
  Titulo: {
    fontSize: 15,
    color: "#F2F2F2",
    fontFamily: "PoppinsRegular",
  },
  Autor: {
    fontSize: 12,
    color: "#DEDEDE",
    fontWeight: "regular",
    paddingVertical: 6,
    fontFamily: "PoppinsRegular",
  },
  Tempo: {
    fontSize: 10,
    color: "#A4A4A4",
    fontWeight: "regular",
    fontFamily: "PoppinsRegular",
  },
});
