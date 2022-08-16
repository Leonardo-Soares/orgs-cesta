import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Detalhes from './Components/Detalhes';
import Item from './Components/Item';
import Topo from './Components/Topo';
import Texto from '../../components/Texto';

export default function Cesta({ topo, detalhes, itens }) {
  return <>
      <FlatList 
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => {
          return <>
            <Topo  {...topo}/>  
            <View style={estilos.containerCesta}>
              <Detalhes {...detalhes}/>
              <Texto style={estilos.titulo}>{ itens.titulo }</Texto>
            </View>
          </>
        }}
      />
  </>
}

const estilos = StyleSheet.create({
  titulo: {
    color: "#464646",
    marginTop: 24,
    marginBottom: 4,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  containerCesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});