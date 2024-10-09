import React from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './components/Header';
import HomeSlider from './components/HomeSlider';
import Services from './components/Services';
import Menu from './components/Menu';
import ReservationForm from './components/ReservationForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView>
        <Header />
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