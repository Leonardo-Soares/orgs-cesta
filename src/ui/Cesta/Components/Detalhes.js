import React from "react";
import { View, Image, StyleSheet } from "react-native";
import ButtonOpacity from "../../../components/ButtonOpacity";

import Texto from "../../../components/Texto";


export default function Detalhes({ nomeCesta, nomeFazenda, logoFazenda, descricao, preco, botaoComprar }) {
  return <>
    <Texto style={estilos.nomeCesta}>{ nomeCesta }</Texto>
    <View style={estilos.containerFazenda}>
      <Image source={logoFazenda} style={estilos.imagemFazenda}/>
      <Texto style={estilos.nomeFazenda}>{ nomeFazenda }</Texto>
    </View>
    <Texto style={estilos.descricao}>{ descricao }</Texto>
    <Texto style={estilos.preco}>{ preco }</Texto>

    <ButtonOpacity botaoComprar={botaoComprar} />

  </>
}

const estilos = StyleSheet.create({
  nomeCesta: {
    color: "#464646",
    fontSize: 26,
    fontWeight: "bold",
    lineHeight: 40,
  },
  containerFazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  imagemFazenda: {
    width: 32,
    height: 32,
    marginEnd: 8,
    borderRadius: 8,
  },
  nomeFazenda: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
  },
  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 40,
    marginTop: 8,
  },
});