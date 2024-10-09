import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const HomeSlider = () => {
  return (
    <ImageBackground
      source={require('../assets/bg_5.jpg')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Bienvenidos</Text>
        <Text style={styles.subtitle}>UN LUGAR DE TRADICIÓN Y MUCHO SABOR</Text>
        <Text style={styles.description}>
          Te invitamos a que disfrutes en familia, y/o junto con esa persona que mas amas, a compartir de una gran variedad de platos gigantes.
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default HomeSlider;