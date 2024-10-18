import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navegador from './components/index/nave';
import HomeSlider from './components/index/HomeSlider';
import Services from './components/index/Services';
import Menu from './components/index/Menu';
import MejoresClientes from './components/index/BestSellingDishes';
import Testimonials from './components/index/Testimonials';
import Ubicacion from './components/index/Ubicacion';
import ViewFinal from './components/index/ViewFinal';
import Menú from './App/Menú';
import Servicios from './App/Servicios';
import Historia from './App/Historía';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Menu"
          component={Menú}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Servicios"
          component={Servicios}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Historia"
          component={Historia}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView>
        <Navegador navigation={navigation} />
        <HomeSlider />
        <Services />
        <Menu />
        <MejoresClientes />
        <Testimonials />
        <Ubicacion />
        <ViewFinal />
        {/* <Button title="Ir a Ejemplo 1" onPress={() => navigation.navigate('Ejemplo1')} /> */}
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
