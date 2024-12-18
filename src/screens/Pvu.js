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
            Your blades are sharpened with precision Flashing your favorite
            point of view I know you're waiting in the distance Just like you
            always do Just like you always do Already pulling me in Already
            under my skin And I know exactly how this ends I let you cut me
            open, just to watch me bleed Gave up who I am for who you wanted me
            to be Don't know why I'm hoping for what I won't receive Falling for
            the promise of the emptiness machine Going around like a revolver
            It's been decided how we lose 'Cause there's a fire under the altar
            I keep on lying to I keep on lying to Already pulling me in Already
            under my skin And I know exactly how this ends I let you cut me
            open, just to watch me bleed Gave up who I am for who you wanted me
            to be Don't know why I'm hoping for what I won't receive Falling for
            the promise of the emptiness machine I only wanted to be part of
            something I only wanted to be part of, part of I only wanted to be
            part of something I only wanted to be part of, part of I only wanted
            to be part of something I only wanted to be part I let you cut me
            open, just to watch me bleed Gave up who I am for who you wanted me
            to be Don't know why I'm hoping, so fucking naive Falling for the
            promise of the emptiness machine The emptiness machine (I only
            wanted to be part of something) The emptiness machine (I only wanted
            to be part of) The emptiness machine
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
    objectFit: "cover",
    borderRadius: 50,
    marginBottom: 30,
    marginTop: 5
  },
});
