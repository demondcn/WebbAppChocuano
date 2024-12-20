import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Navegador from '../components/index/nave';
import Slider from '../components/Servicios/ServiciosSlider';
import Services from '../components/index/Services';
import ServicesDescripcion from '../components/Servicios/ServiciosDescribtivo';
import ViewFinal from '../components/index/ViewFinal';
export default function ServicesScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView>
        <Navegador navigation={navigation} />
        <Slider />
        <Services />
        <ServicesDescripcion />
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
