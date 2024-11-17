import React from "react";
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
  return (
    <SafeAreaView style={estilo.container}>
      <Text style={estilo.titulo}>Gerencimento das Músicas</Text>
      <TouchableOpacity style={estilo.botaoCriar}>
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
                <TouchableOpacity style={estilo.botao}>
                  <Icon name="eye" size={20} color="#007BFF" />
                </TouchableOpacity>
                <TouchableOpacity style={estilo.botao}>
                  <Icon name="edit" size={20} color="#FFC107" />
                </TouchableOpacity>
                <TouchableOpacity style={estilo.botao}>
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
    backgroundColor: "#0A071E",
  },
  table: {
    width: "100%",
    borderWidth: 2,
    borderColor: "#3422FF",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCell: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#3422FF",
    color: "#fff",
  },
  header: {
    backgroundColor: "#f4f4f4",
    fontWeight: "bold",
    color: "#000",
  },
  titulo: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    paddingBottom: 20,
  },
  buttonRow: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
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
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    borderColor: "#fff",
    marginVertical: 20,
    borderWidth: 0.3,
  },
  textoBotao: {
    color: "#FFF",
    fontSize: 12,
    textAlign: "center",
  },
});