import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

export default function Services() {
  return (
    <View style={styles.container}>
      <FeatureItem
        icon={<FontAwesome6 name="clipboard-list" size={24} color="#000000" />}
        title="FÁCIL DE ORDENAR"
        description="Compra como quieras, puedes elegir por acordar el pedido por WhatsApp o por pasarelas de pago."
      />
      <FeatureItem
        icon={<FontAwesome6 name="truck-fast" size={24} color="#000000" />}
        title="ENTREGA RÁPIDA"
        description="Contamos con domiciliarios excelentes en su labor, son como aves al volante."
      />
      <FeatureItem
        icon={<FontAwesome6 name="bowl-food" size={24} color="#000000" />}
        title="COMIDA DE CALIDAD"
        description="Cada porción viene acondicionada para aquellas personas que les gusta comer arto."
      />
    </View>
  );
}

function FeatureItem({ icon, title, description }) {
  return (
    <View style={styles.featureItem}>
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C49B63',
    padding: 20,
  },
  featureItem: {
    alignItems: 'center',
    marginBottom: 30,
  },
  iconContainer: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
  },
});