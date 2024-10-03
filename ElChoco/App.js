import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>Elección Temporal S.A.S.</Text>
        </View>
        <View style={styles.contactInfo}>
          <Text style={styles.contactText}>
            (601) 9156059
          </Text>
          <Text style={styles.contactText}>
            Carrera 27C # 70 - 12 - Bogotá D.C.
          </Text>
        </View>
      </View>

      <ScrollView horizontal style={styles.nav}>
        {['Home', 'Nosotros', 'Nuestras Ventajas', 'Servicios', 'Servicios en Línea', 'Noticias', 'Contáctenos', 'PQRS'].map((item, index) => (
          <TouchableOpacity key={index} style={styles.navItem}>
            <Text style={styles.navText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Gestionamos su capital más valioso:</Text>
        <Text style={styles.heroSubtitle}>El Talento Humano</Text>
      </View>

      <View style={styles.services}>
        {[
          { title: 'Selección y Evaluación de Personal' },
          { title: 'Administración y Outsourcing de Nómina' },
          { title: 'Salud Ocupacional' },
          { title: 'Visitas Domiciliarias' },
        ].map((service, index) => (
          <View key={index} style={styles.serviceItem}>
            <Text style={styles.serviceText}>{service.title}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  logo: {
    padding: 10,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#26a69a',
  },
  contactInfo: {
    alignItems: 'flex-end',
  },
  contactText: {
    fontSize: 12,
    marginBottom: 5,
  },
  nav: {
    backgroundColor: '#26a69a',
  },
  navItem: {
    padding: 15,
  },
  navText: {
    color: '#fff',
    fontSize: 14,
  },
  hero: {
    backgroundColor: 'rgba(38, 166, 154, 0.8)',
    padding: 20,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  services: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 20,
  },
  serviceItem: {
    width: '45%',
    backgroundColor: '#26a69a',
    padding: 20,
    margin: 5,
    alignItems: 'center',
    borderRadius: 10,
  },
  serviceText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  },
});