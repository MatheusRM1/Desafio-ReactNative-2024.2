import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Musica1 from "../../assets/musicas/musica1.png";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function VisualizacaoIndividual() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={estilo.container}>
        <View style={estilo.icon}>
          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
            <AntDesign name="arrowleft" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <Image source={Musica1} style={estilo.Image} />
        <View style={estilo.textos}>
          <Text style={estilo.informacaoT}>Musica1</Text>
          <Text style={estilo.informacao}>Autor - 2:50</Text>
        </View>
        <View style={estilo.bloco}>
          <Text style={estilo.letra}>
            A nossa fortaleza vence qualquer ciúme Então por gentileza meu bebê
            Deita com a luz acesa, põe aquele perfume Que hoje a sobremesa é
            você Se o negócio é brigar, discutir relação Sobe de patamar, muda o
            seu coração Eu não vou aceitar sua provocação É melhor evitar pelo
            sim pelo não Só pra me enganar bota o feijão no fogo e Para de
            ferver Tira esse brilho genioso do olhar Que eu cheguei tarde, mas o
            coro vai comer.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0A071E",
  },
  icon: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "flex-start",
    alignSelf: "flex-start",
    paddingTop: 30,
    paddingLeft: 30,
  },
  informacaoT: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    fontFamily: "PoppinsRegular",
  },
  informacao: {
    color: "#8E8E8E",
    fontSize: 18,
    marginTop: 10,
    marginBottom: 30,
    textAlign: "center",
    fontFamily: "PoppinsRegular",
  },
  bloco: {
    backgroundColor: "#6156E2",
    borderRadius: 10,
    padding: 20,
    opacity: 50,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  letra: {
    color: "#fff",
    textAlign: "left",
    fontFamily: "PoppinsLight",
  },
  Image: {
    width: "80%",
    height: 300,
    borderRadius: 50,
    marginBottom: 30,
    marginTop: 20,
  },
});
