import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const data = [
  { id: "1", nome: "Music1", autor: "John Doe", tempo: "2:30" },
  { id: "2", nome: "Music2", autor: "Jane Smith", tempo: "2:30" },
  { id: "3", nome: "Music3", autor: "Sam Brown", tempo: "2:30" },
];

export default function App() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={estilo.container}>
      <Text style={estilo.titulo}>Gerencimento das Músicas</Text>
      <TouchableOpacity style={estilo.botaoCriar} onPress={() => navigation.navigate("ModalCriar")}>
        <Text style={estilo.textoBotao}>Criar</Text>
      </TouchableOpacity>
      <View style={estilo.table}>
        <View style={estilo.tableRow}>
          <Text style={[estilo.tableCell, estilo.header]}>Música</Text>
          <Text style={[estilo.tableCell, estilo.header]}>Autor</Text>
          <Text style={[estilo.tableCell, estilo.header]}>Tempo</Text>
          <Text style={[estilo.tableCell, estilo.header]}>Ações</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={estilo.tableRow}>
              <Text style={estilo.tableCell}>{item.nome}</Text>
              <Text style={estilo.tableCell}>{item.autor}</Text>
              <Text style={estilo.tableCell}>{item.tempo}</Text>
              <View style={[estilo.tableRow, estilo.buttonRow]}>
                <TouchableOpacity style={estilo.botao} onPress={() => navigation.navigate("Viz")}>
                  <Icon name="eye" size={20} color="#007BFF" />
                </TouchableOpacity>
                <TouchableOpacity style={estilo.botao} onPress={() => navigation.navigate("ModalEdição")}>
                  <Icon name="edit" size={20} color="#FFC107" />
                </TouchableOpacity>
                <TouchableOpacity style={estilo.botao} onPress={() => navigation.navigate("ModalExclusão")}>
                  <Icon name="trash" size={20} color="#DC3545" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
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
  table: {
    width: "100%",
    borderWidth: 0.4,
    borderColor: "#3422FF",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCell: {
    flex: 1,
    padding: 12,
    borderWidth: 0.4,
    borderColor: "#3422FF",
    color: "#fff",
    fontFamily: "PoppinsRegular"
  },
  header: {
    fontFamily: "PoppinsRegular",
    color: "#fff",
  },
  titulo: {
    fontSize: 24,
    color: "#fff",
    fontFamily: "PoppinsBold",
    paddingBottom: 20,
  },
  buttonRow: {
    flex: 1,
    gap: 4,
    padding: 12,
    borderWidth: 0.4,
    borderColor: "#3422FF",
    color: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  botao: {
    alignSelf: "center",
  },
  botaoCriar: {
    backgroundColor: "#6156E2",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    borderColor: "#fff",
    marginVertical: 20,
    borderWidth: 0.5,
  },
  textoBotao: {
    color: "#FFF",
    fontSize: 18,
    fontFamily: "PoppinsBold",
    textAlign: "center"
  },
});
