import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function ContactForm() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>CONTACTANOS</Text>
        
        {/* Contact Information */}
        <View style={styles.contactInfo}>
          <View style={styles.infoItem}>
            <Feather name="map-pin" size={20} color="#C49B63" />
            <View>
              <Text style={styles.infoText}>Cra 14 # 74 c sur 17</Text>
              <Text style={[styles.infoText, styles.highlightText]}>Banco caja social de santa librada</Text>
            </View>
          </View>
          
          <View style={styles.infoItem}>
            <Feather name="phone" size={20} color="#C49B63" />
            <View>
              <Text style={styles.infoText}>Teléfono fijo: +57 313 336 8670</Text>
              <Text style={styles.infoText}>WhatsApp: +57 313 336 8670</Text>
            </View>
          </View>
          
          <View style={styles.infoItem}>
            <Feather name="mail" size={20} color="#C49B63" />
            <Text style={styles.infoText}>Email: elchocontano@gmail.com</Text>
          </View>
        </View>

        {/* Contact Form */}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nombres"
            placeholderTextColor="#999"
          />
          <TextInput
            style={styles.input}
            placeholder="Correo"
            placeholderTextColor="#999"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Asunto"
            placeholderTextColor="#999"
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Mensaje"
            placeholderTextColor="#999"
            multiline
            numberOfLines={4}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Enviar mensaje</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  card: {
    backgroundColor: '#000000',
    padding: 20,
    margin: 10,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  contactInfo: {
    marginBottom: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  infoText: {
    color: '#FFFFFF',
    marginLeft: 10,
  },
  highlightText: {
    color: '#C49B63',
  },
  form: {
    width: '100%',
  },
  input: {
    backgroundColor: 'transparent',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderRadius: 4,
    color: '#FFFFFF',
    padding: 10,
    marginBottom: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#C49B63',
    padding: 15,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
    fontWeight: 'bold',
  },
});