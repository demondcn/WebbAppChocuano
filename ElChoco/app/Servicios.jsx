import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Navegador from '../components/Servicios/nave';
import Slider from '../components/Servicios/ServiciosSlider';
import Services from '../components/index/Services';
import Menu from '../components/index/Menu';
import MejoresClientes from '../components/index/BestSellingDishes';
import Testimonials from '../components/index/Testimonials';
import ServicesDescripcion from '../components/Servicios/ServiciosDescribtivo';
import Ubicacion from '../components/index/Ubicacion';
import ViewFinal from '../components/index/ViewFinal';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView>
        <Navegador />
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
