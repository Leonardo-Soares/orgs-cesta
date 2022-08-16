import React from "react";
import { Image, StyleSheet, View, FlatList } from "react-native";
import  Texto from '../../../components/Texto';

export default function Item({ item: { nome, id, imagem } }) {
  
  return <View key={id} style={estilos.item}>
    <Image source={imagem} style={estilos.imagem}/>
    <Texto style={estilos.nome}>{ nome }</Texto>
  </View>  

}

const estilos = StyleSheet.create ({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  imagem: {
    width: 46,
    height: 46,
    borderRadius: 8,
  },
  nome: {
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 12,
    color: "#464646",
  },

});