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
import Musica1 from "../../assets/musicas/black.jpg";
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
          <Text style={estilo.informacaoT}>Black Sheep</Text>
          <Text style={estilo.informacao}>Metric - 4:55</Text>
        </View>
        <View style={estilo.bloco}>
          <Text style={estilo.letra}>
            {`Hello again, friend of a friend, I knew you when
Our common goal was waiting for the world to end
Now that the truth is just a rule that you can bend
You crack the whip, shape-shift and trick the past again

I'll send you my love on a wire
Lift you up, every time, everyone, ooh, pulls away, ooh
From you

Got balls of steel, got an automobile, for a minimum wage
Got real estate, I'm buying it all up in outer space
Now that the truth is just a rule that you can bend
You crack the whip, shape-shift and trick the past again

I'll send you my love on a wire
Lift you up, every time, everyone, ooh, pulls away, ooh

It's a mechanical bull, the number one
You'll take a ride from anyone
Everyone wants a ride, pulls away, ooh, from you`}
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
    marginTop: 5,
  },
});
