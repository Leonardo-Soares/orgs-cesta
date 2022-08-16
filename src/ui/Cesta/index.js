import React from 'react';
import { StyleSheet, View } from 'react-native';

import Detalhes from './Components/Detalhes';
import Topo from './Components/Topo';

export default function Cesta({ topo, detalhes }) {
  return <>
    <Topo  {...topo}/>

    <View style={estilos.containerCesta}>
      <Detalhes {...detalhes}/>
    </View>
  </>
}

const estilos = StyleSheet.create({
  containerCesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});