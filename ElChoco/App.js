import React from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Navegador from './components/index/nave';
import HomeSlider from './components/index/HomeSlider';
import Services from './components/index/Services';
import Menu from './components/index/Menu';
import ReservationForm from './components/index/ReservationForm';
import Footer from './components/index/Footer';

export default function App() {
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