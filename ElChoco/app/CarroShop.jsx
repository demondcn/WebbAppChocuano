import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Navegador from '../components/index/nave';
import HomeSlider from '../components/Historia/HomeSlider';
import Testimonials from '../components/Historia/HistoriaTestimonials';
import ViewFinal from '../components/index/ViewFinal';
export default function HistoriaScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView>
        <Navegador navigation={navigation} />
        <HomeSlider />
        <Testimonials />
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
