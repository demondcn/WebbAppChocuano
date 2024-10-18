import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Navegador from '../components/menu/nave';
import Slider from '../components/menu/MenúSlider';
import Services from '../components/index/Services';
import Menu from '../components/index/Menu';
import MejoresClientes from '../components/index/BestSellingDishes';
import Testimonials from '../components/index/Testimonials';
import MenuCompra from '../components/menu/menúCompra'
import Ubicacion from '../components/index/Ubicacion';
import ViewFinal from '../components/index/ViewFinal';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView>
        <Navegador />
        <Slider />
        <MenuCompra />
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
