import React from 'react';
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';

import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
  return <>
    <Image source={topo} style={estilos.topo}/>
    <Text style={estilos.titulo}>Detalhes da cesta</Text>

    <View style={estilos.containerCesta}>
      <Text style={estilos.nomeCesta}>Cesta de verduras</Text>
      <View style={estilos.containerFazenda}>
       <Image source={logo} style={estilos.imagemFazenda}/>
        <Text style={estilos.nomeFazenda}>3 Marias</Text>
      </View>
      <Text style={estilos.descricao}>Uma cesta de produtos selecionados direto da fazenda para sua cozinha</Text>
      <Text style={estilos.preco}>R$: 40,00</Text>

    </View>
  </>
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: 578 / 768 * width,
    position: "relative",
  },
  titulo: {
    padding: 16,
    fontSize: 20,
    color: "#fff",
    width: "100%",
    lineHeight: 24,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    textTransform: "capitalize",
  },
  containerCesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
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
    fontSize: 24,
  },
  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 40,
    marginTop: 8,
  },
});