import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Services = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nuestros Servicios</Text>
      <View style={styles.service}>
        <Text style={styles.serviceTitle}>Facil de ordenar</Text>
        <Text style={styles.serviceDescription}>
          Compra como quieras, por nuestra pagina, chatea con nosotros por whatsapp, o Llamanos al fijo.
        </Text>
      </View>
      <View style={styles.service}>
        <Text style={styles.serviceTitle}>Entrega Rapida</Text>
        <Text style={styles.serviceDescription}>
          Nuestros domiciliarios parecen aves al volante, no dudes en contactarnos por cualquier medio.
        </Text>
      </View>
      <View style={styles.service}>
        <Text style={styles.serviceTitle}>Comida de calidad</Text>
        <Text style={styles.serviceDescription}>
          Cada Porción viene adicionada para aquellas personas que les gusta comer de verdad verdad.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  service: {
    marginBottom: 20,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  serviceDescription: {
    fontSize: 14,
  },
});

export default Services;