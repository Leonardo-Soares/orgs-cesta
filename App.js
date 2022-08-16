import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import Cesta from './src/ui/Cesta';
import portugues from './src/langs/Portugues';

export default function App() {
  const [fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MonstserratBold": Montserrat_700Bold,
  });

  // Exibi aplicação depois que é realizado todos os imports estiver carregada
  if (!fontCarregada) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{ flex: 1}}>
      <StatusBar />
      <Cesta {...portugues}/>
    </SafeAreaView>
  );
}

