import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 

import Navegador from './components/index/nave';
import HomeSlider from './components/index/HomeSlider';
import Services from './components/index/Services';
import Menu from './components/index/Menu';
import ReservationForm from './components/index/ReservationForm';
import Footer from './components/index/Footer';
import Ejemplo1 from './App/ejemplo1'; // Asegúrate de que este import sea correcto

const Stack = createStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"> 
        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="Ejemplo1" component={Ejemplo1} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
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
          onPress={() => navigation.navigate('Ejemplo1')} 
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
