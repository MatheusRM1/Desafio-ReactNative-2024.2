import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Musica1 from "../../assets/musicas/musica1.png";

export default function VisualizacaoIndividual() {
  return (
    <View style={estilo.container}>
      <Image source={Musica1} style={estilo.Image} />
      <Text style={estilo.informacao}>Musica1 - 2:50</Text>
      <Text style={estilo.informacao}>Autor</Text>
      <View style={estilo.bloco}>
        <Text style={estilo.letra}>
          A nossa fortaleza vence qualquer ciúme Então por gentileza meu bebê
          Deita com a luz acesa, põe aquele perfume Que hoje a sobremesa é você
          Se o negócio é brigar, discutir relação Sobe de patamar, muda o seu
          coração Eu não vou aceitar sua provocação É melhor evitar pelo sim
          pelo não Só pra me enganar bota o feijão no fogo e Para de ferver Tira
          esse brilho genioso do olhar Que eu cheguei tarde, mas o coro vai
          comer.
        </Text>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0A071E",
  },
  text:
});
