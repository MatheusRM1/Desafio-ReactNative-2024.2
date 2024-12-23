import React from "react";
import {
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import animacao from "../../assets/Animation.json";
import LottieView from "lottie-react-native";

export default function Contato() {
  return (
    <SafeAreaView style={estilo.container}>
      <ScrollView>
        <View>
          <Text style={estilo.titulo}>Fale Conosco</Text>
          <Text style={estilo.empresa}>
            Bem-vindo ao MelodyMate! Sabemos o quão importante é ter acesso
            fácil e organizado às suas músicas favoritas. Por isso, criamos uma
            plataforma intuitiva para você guardar e gerenciar suas músicas de
            forma prática e segura. Queremos ouvir sua opinião, responder suas
            dúvidas e estar à disposição para qualquer sugestão que você tenha!
          </Text>
        </View>
        <View style={estilo.icons}>
          <View style={estilo.iconsContainer}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("https://www.instagram.com/melodymate")
              }
            >
              <Icon name="instagram" size={40} color="#E1306C" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("https://www.facebook.com/melodymate")
              }
            >
              <Icon name="facebook" size={40} color="#3b5998" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://wa.me/5532991066934")}
            >
              <Icon name="whatsapp" size={40} color="#25D366" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL("mailto:support@melodymate.com")}
            >
              <Icon name="envelope" size={40} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={estilo.containerFinal}>
          <Text style={estilo.final}>
            Estamos aqui para garantir que suas músicas estejam sempre
            organizadas e ao seu alcance. Obrigado por confiar no MelodyMate
            para guardar suas memórias musicais!
          </Text>
          <LottieView source={animacao} autoPlay loop style={estilo.logo} />
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
    backgroundColor: "#0A071E",
  },
  titulo: {
    color: "#fff",
    fontSize: 25,
    paddingVertical: 20,
    fontFamily: "PoppinsBold",
  },
  empresa: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "PoppinsRegular",
    paddingHorizontal: 5,
  },
  final: {
    color: "#fff",
    fontSize: 18,
    paddingHorizontal: 5,
    paddingVertical: 20,
    textAlign: "center",
    fontFamily: "PoppinsRegular",
  },
  icons:{
    alignItems: "center"
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    paddingVertical: 20,
  },
  containerFinal: {
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 150,
  },
});
