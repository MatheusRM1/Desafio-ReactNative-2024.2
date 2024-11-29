import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import logo from "../../assets/logo.png";
import perfil from "../../assets/perfil.jpg";
import musica1 from "../../assets/musica1.png";
import musica2 from "../../assets/musica2.png";
import musica3 from "../../assets/musica3.png";
import musica4 from "../../assets/musica4.png";
import musica5 from "../../assets/musica5.png";
import musica6 from "../../assets/musica6.png";
import Texto from "../components/Texto";

export default function LandingPage() {
  return (
    <ScrollView>
      <SafeAreaView style={estilo.container}>
        <View style={estilo.perfil}>
          <Image source={perfil} style={estilo.imagemP} />
          <Texto style={estilo.textoPefil}>Usuario</Texto>
        </View>

        <View style={estilo.hero}>
          <Texto style={estilo.textoHero}>
            Bem-vindo ao MelodyMate, onde a música ganha vida! 🎶✨{'\n'}

            Explore milhões de faixas, crie suas playlists personalizadas{'\n'}
            e desfrute de uma experiência auditiva sem igual.
            </Texto>
            <Image source={logo} style={estilo.imagemlLogo}/>
        </View>
        <View style={estilo.coluna}>
          <Texto style={estilo.textoRecente}>Tocadas Recentemente</Texto>
          <View style={estilo.carrosel}>
            <View style={estilo.cardCarrosel}>
              <Image source={musica1} style={estilo.imagem} />
              <Texto style={estilo.textoCarrosel}>The triangule</Texto>
            </View>
            <View style={estilo.cardCarrosel}>
              <Image source={musica2} style={estilo.imagem} />
              <Texto style={estilo.textoCarrosel}t>Dune of Visa</Texto>
            </View>
            <View style={estilo.cardCarrosel}>
              <Image source={musica3} style={estilo.imagem} />
              <Texto style={estilo.textoCarrosel}>Riskiall</Texto>
            </View>
          </View>
        </View>
        <View style={estilo.sessaoRecomendado}>
          <Texto style={estilo.textoRecente}>Recomendadas para você</Texto>
          <View style={estilo.card}>
            <Image source={musica4} style={estilo.imagem} />
            <View style={estilo.textoCard}>
              <Texto style={estilo.Titulo}>Take Care of you</Texto>
              <Texto style={estilo.Autor}>Admina Thembi</Texto>
              <Texto style={estilo.Tempo}>3:14</Texto>
            </View>
          </View>
          <View style={estilo.card}>
            <Image source={musica5} style={estilo.imagem} />
            <View style={estilo.textoCard}>
              <Texto style={estilo.Titulo}>The stranger inside you</Texto>
              <Texto style={estilo.Autor}>Jeane Lebras</Texto>
              <Texto style={estilo.Tempo}>4:08</Texto>
            </View>
          </View>
          <View style={estilo.card}>
            <Image source={musica6} style={estilo.imagem} />
            <View style={estilo.textoCard}>
              <Texto style={estilo.Titulo}>Edwall of beauty mind</Texto>
              <Texto style={estilo.Autor}>Jacob Givson</Texto>
              <Texto style={estilo.Tempo}>2:43</Texto>
            </View>
          </View>
          <View style={estilo.card}>
            <Image source={musica6} style={estilo.imagem} />
            <View style={estilo.textoCard}>
              <Texto style={estilo.Titulo}>Edwall of beauty mind</Texto>
              <Texto style={estilo.Autor}>Jacob Givson</Texto>
              <Texto style={estilo.Tempo}>2:43</Texto>
            </View>
          </View>
          <View style={estilo.card}>
            <Image source={musica6} style={estilo.imagem} />
            <View style={estilo.textoCard}>
              <Texto style={estilo.Titulo}>Edwall of beauty mind</Texto>
              <Texto style={estilo.Autor}>Jacob Givson</Texto>
              <Texto style={estilo.Tempo}>2:43</Texto>
            </View>
          </View>
          <View style={estilo.card}>
            <Image source={musica6} style={estilo.imagem} />
            <View style={estilo.textoCard}>
              <Texto style={estilo.Titulo}>Edwall of beauty mind</Texto>
              <Texto style={estilo.Autor}>Jacob Givson</Texto>
              <Texto style={estilo.Tempo}>2:43</Texto>
            </View>
          </View>
          <View style={estilo.card}>
            <Image source={musica6} style={estilo.imagem} />
            <View style={estilo.textoCard}>
              <Texto style={estilo.Titulo}>Edwall of beauty mind</Texto>
              <Texto style={estilo.Autor}>Jacob Givson</Texto>
              <Texto style={estilo.Tempo}>2:43</Texto>
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
  hero:{
    alignItems: "center",
  },
  textoHero:{
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  imagemlLogo:{
    width: 200,
    height: 150,
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
  textoCarrosel:{
    color: "#A4A4A4",
    fontSize: 11,
    fontWeight: "regular",
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
    fontWeight: "normal",
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
    paddingVertical: 6
  },
  Tempo: {
    fontSize: 10,
    color: "#A4A4A4",
    fontWeight: "regular",
  },
});
