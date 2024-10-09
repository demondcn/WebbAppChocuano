import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const nave = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>EL Chocontano</Text>
      <Text style={styles.subtitle}>Restaurante</Text>
      <Text style={styles.subtitle}>Desde 1975</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
  },
});

export default nave;