import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationProvider } from './App/NavigationContext'; // Asegúrate de la ruta correcta
import { AuthProvider } from './App/AuthenticationContext';
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
import Contactos from './App/Contactanos'
import CarroShop from './App/CarroShop'
import Login from './App/Login'
const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Menu"
              component={Menú}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Servicios"
              component={Servicios}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Historia"
              component={Historia}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Contactos"
              component={Contactos}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginRegister"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Carrito"
              component={CarroShop}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NavigationProvider>
    </AuthProvider>
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
