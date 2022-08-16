import React from "react";
import { StyleSheet, TouchableOpacity } from 'react-native';
import Texto from "./Texto";

export default function ButtonOpacity({ botaoComprar }) {
  return <>
    <TouchableOpacity style={estilos.botaoComprar} onPress={() => {}}>
      <Texto style={estilos.textoBotaoComprar}>{ botaoComprar }</Texto>
    </TouchableOpacity>
  </>
}


const estilos = StyleSheet.create({
  botaoComprar: {
    padding: 16,
    marginTop: 16,
    borderRadius: 8,
    backgroundColor: "#2A9F85",
  },
  textoBotaoComprar: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    textTransform: "uppercase",
  }, 
});