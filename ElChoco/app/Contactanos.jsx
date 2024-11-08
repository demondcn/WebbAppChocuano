import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Navegador from '../components/index/nave';
import HomeSlider from '../components/Contact/HomeSlider';
import ViewFinal from '../components/index/ViewFinal';
import Ubicacion from '../components/index/Ubicacion';
import FormContactMensaje from '../components/Contact/ContactForm'
export default function HistoriaScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView>
        <Navegador navigation={navigation} />
        <HomeSlider />
        <FormContactMensaje/>
        <Ubicacion />
        <ViewFinal />
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
