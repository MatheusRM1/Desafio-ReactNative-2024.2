import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import logo from "../../assets/logo/logo.png";

import musica1 from "../../assets/musicas/musica1.png";
import musica2 from "../../assets/musicas/musica2.png";
import musica3 from "../../assets/musicas/musica3.png";
import musica4 from "../../assets/musicas/musica4.png";
import musica5 from "../../assets/musicas/musica5.png";
import musica6 from "../../assets/musicas/musica6.png";
import Texto from "../components/Texto";
import CardsCarrossel from "../components/CardsCarrossel";
import Cards from "../components/Cards";

export default function LandingPage() {
  return (
    <SafeAreaView style={estilo.container}>
      <ScrollView contentContainerStyle={{overflow: "visible"}}>
        
        <View style={estilo.hero}>
          <Texto style={estilo.textoHero}>
            Bem-vindo ao MelodyMate, onde a música ganha vida! 🎶✨{"\n"}
            Explore milhões de faixas, crie suas playlists personalizadas e
            desfrute de uma experiência auditiva sem igual.
          </Texto>
          <Image source={logo} style={estilo.imagemLogo} />
        </View>
        <View style={estilo.coluna}>
          <Texto style={estilo.textoRecente}>Tocadas Recentemente</Texto>
          <ScrollView
            horizontal
            contentContainerStyle={estilo.carrosel}
          >
            <CardsCarrossel titulo="The Triangule"/>
            <CardsCarrossel titulo="The T"/>
            <CardsCarrossel titulo="Sunflower"/>
            <CardsCarrossel titulo="Sunflower"/>
            <CardsCarrossel titulo="Sunflower"/>
            <CardsCarrossel titulo="Sunflower"/>

          </ScrollView>
        </View>
        <View style={estilo.sessaoRecomendado}>
          <Texto style={estilo.textoRecente}>Recomendadas para você</Texto>
          <Cards titulo="Musica" autor="Matheus" tempo="2:30" imagem={musica5}/>
          <Cards titulo="Musica" autor="Matheus" tempo="2:30" imagem={musica4}/>
          <Cards titulo="Musica" autor="Matheus" tempo="2:30" imagem={musica4}/>
          <Cards titulo="Musica" autor="Matheus" tempo="2:30" imagem={musica4}/>
          <Cards titulo="Musica" autor="Matheus" tempo="2:30" imagem={musica4}/>
          <Cards titulo="Musica" autor="Matheus" tempo="2:30" imagem={musica4}/>
          <Cards titulo="Musica" autor="Matheus" tempo="2:30" imagem={musica4}/>
          <Cards titulo="Musica" autor="Matheus" tempo="2:30" imagem={musica4}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    overflow: "visible",
    backgroundColor: "#0A071E",
  },
  hero: {
    alignItems: "center",
  },
  textoHero: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  imagemLogo: {
    width: 200,
    height: 150,
  },
  coluna: {
    flexDirection: "column",
  },
  carrosel: {
    flexDirection: "row",
    zIndex: 10,
  },
  cardCarrosel: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 30,
    paddingHorizontal: 10,
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
  textoRecente: {
    fontSize: 20,
    alignSelf: "flex-start",
    color: "#F2F2F2",
    paddingHorizontal: 20,
    marginBottom: 20,
    fontWeight: "normal",
  },

  sessaoRecomendado: {
    alignSelf: "flex-start",
  },
  
});
