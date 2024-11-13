import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Navegador from '../components/index/nave';
import Slider from '../components/menu/MenúSlider';
import MenuCompra from '../components/menu/menuCompra'
import ViewFinal from '../components/index/ViewFinal';
export default function MenuScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView>
        <Navegador navigation={navigation} />
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
