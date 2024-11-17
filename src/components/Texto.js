import React from "react";
import { StyleSheet , Text } from "react-native";
import { useFonts , Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";

export default function Texto({children, style}){
    let estilo = estilos.texto;

    if(style?.fontWeight === 'bold'){
        estilo = estilos.textoNegrito;
    }
    return <Text style={[style, estilo]}>{children}</Text>
}

const estilos = StyleSheet.create({
    texto:{
        fontFamily: "Poppins_400Regular",
        fontWeight: "normal",
        color: "#fff",
    },
    textoNegrito:{
        fontFamily: "Poppins_700Bold",
        fontWeight: 'normal',
        color: "#fff",
    }
})