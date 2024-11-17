import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import perfil from "../../assets/perfil.jpg";
import musica1 from "../../assets/musica1.png";
import musica2 from "../../assets/musica2.png";
import musica3 from "../../assets/musica3.png";
import musica4 from "../../assets/musica4.png";
import musica5 from "../../assets/musica5.png";
import musica6 from "../../assets/musica6.png";

export default function LandingPage() {
  return (
    <ScrollView>
      <SafeAreaView style={estilo.container}>
        <View style={estilo.perfil}>
          <Image source={perfil} style={estilo.imagemP} />
          <Text style={estilo.textoPefil}>Usuario</Text>
        </View>

        <View style={estilo.coluna}>
          <Text style={estilo.textoRecente}>Tocadas Recentemente</Text>
          <View style={estilo.carrosel}>
            <View style={estilo.cardCarrosel}>
              <Image source={musica1} style={estilo.imagem} />
              <Text>The triangule</Text>
            </View>
            <View style={estilo.cardCarrosel}>
              <Image source={musica2} style={estilo.imagem} />
              <Text>Dune of Visa</Text>
            </View>
            <View style={estilo.cardCarrosel}>
              <Image source={musica3} style={estilo.imagem} />
              <Text>Riskiall</Text>
            </View>
          </View>
        </View>
        <View style={estilo.sessaoRecomendado}>
          <Text style={estilo.textoRecente}>Recomendadas para você</Text>
          <View style={estilo.card}>
            <Image source={musica4} style={estilo.imagem} />
            <View style={estilo.textoCard}>
              <Text style={estilo.Titulo}>Take Care of you</Text>
              <Text style={estilo.Autor}>Admina Thembi</Text>
              <Text style={estilo.Tempo}>3:14</Text>
            </View>
          </View>
          <View style={estilo.card}>
            <Image source={musica5} style={estilo.imagem} />
            <View style={estilo.textoCard}>
              <Text style={estilo.Titulo}>The stranger inside you</Text>
              <Text style={estilo.Autor}>Jeane Lebras</Text>
              <Text style={estilo.Tempo}>4:08</Text>
            </View>
          </View>
          <View style={estilo.card}>
            <Image source={musica6} style={estilo.imagem} />
            <View style={estilo.textoCard}>
              <Text style={estilo.Titulo}>Edwall of beauty mind</Text>
              <Text style={estilo.Autor}>Jacob Givson</Text>
              <Text style={estilo.Tempo}>2:43</Text>
            </View>
          </View>
          <View style={estilo.card}>
            <Image source={musica6} style={estilo.imagem} />
            <View style={estilo.textoCard}>
              <Text style={estilo.Titulo}>Edwall of beauty mind</Text>
              <Text style={estilo.Autor}>Jacob Givson</Text>
              <Text style={estilo.Tempo}>2:43</Text>
            </View>
          </View>
          <View style={estilo.card}>
            <Image source={musica6} style={estilo.imagem} />
            <View style={estilo.textoCard}>
              <Text style={estilo.Titulo}>Edwall of beauty mind</Text>
              <Text style={estilo.Autor}>Jacob Givson</Text>
              <Text style={estilo.Tempo}>2:43</Text>
            </View>
          </View>
          <View style={estilo.card}>
            <Image source={musica6} style={estilo.imagem} />
            <View style={estilo.textoCard}>
              <Text style={estilo.Titulo}>Edwall of beauty mind</Text>
              <Text style={estilo.Autor}>Jacob Givson</Text>
              <Text style={estilo.Tempo}>2:43</Text>
            </View>
          </View>
          <View style={estilo.card}>
            <Image source={musica6} style={estilo.imagem} />
            <View style={estilo.textoCard}>
              <Text style={estilo.Titulo}>Edwall of beauty mind</Text>
              <Text style={estilo.Autor}>Jacob Givson</Text>
              <Text style={estilo.Tempo}>2:43</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
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
  perfil: {
    flexDirection: "row",
    top: 0,
    left: 0,
  },
  imagemP: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  textoPefil: {
    fontSize: 10,
    color: "#fff",
    paddingHorizontal: 10,
    alignSelf: "center",
  },
  coluna: {
    flexDirection: "column",
  },
  carrosel: {
    flexDirection: "row",
  },
  cardCarrosel: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  textoRecente: {
    fontSize: 20,
    alignSelf: "flex-start",
    color: "#F2F2F2",
    paddingHorizontal: 5,
    marginBottom: 20,
    fontWeight: "bold",
  },
  card: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  sessaoRecomendado: {
    paddingHorizontal: 5,
    alignSelf: "flex-start",
  },
  textoCard: {
    alignSelf: "center",
    paddingHorizontal: 10,
  },
  Titulo: {
    fontSize: 15,
    color: "#F2F2F2",
  },
  Autor: {
    fontSize: 12,
    color: "#DEDEDE",
    fontWeight: "regular",
  },
  Tempo: {
    fontSize: 10,
    color: "#DEDEDE",
    fontWeight: "regular",
  },
});
