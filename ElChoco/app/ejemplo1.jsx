import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Ejemplo1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Bienvenido a Ejemplo 1!</Text>
      <Button
        title="Volver al Home"
        onPress={() => navigation.goBack()} // Navega de vuelta a la pantalla anterior
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});