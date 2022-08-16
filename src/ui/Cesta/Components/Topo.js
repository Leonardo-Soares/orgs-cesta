import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import Texto from '../../../components/Texto';

const width = Dimensions.get('screen').width;

export default function Topo({ titulo, imageCesta }) {

  return <>
    <Image source={imageCesta} style={estilos.topo}/>
    <Texto style={estilos.titulo}>{ titulo }</Texto>
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
});
