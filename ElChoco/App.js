import React from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Navegador from './components/index/Nave';
import HomeSlider from './components/index/HomeSlider';
import Services from './components/index/Services';
import Menu from './components/index/Menu';
import ReservationForm from './components/index/ReservationForm';
import Footer from './components/index/Footer';

export default function App({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView>
        <Navegador />
        <HomeSlider />
        <Services />
        <Menu />
        <ReservationForm />
        <Footer />
        <Button
          title="Ir a Ejemplo 1"
          onPress={() => navigation.navigate('Ejemplo1')}  {/* Navegar a Ejemplo1 */}
        />
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