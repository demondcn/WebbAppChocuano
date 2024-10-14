import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Feather, FontAwesome } from '@expo/vector-icons';

export default function LocationContact() {
  const handleSocialMediaPress = (url) => {
    Linking.openURL(url);
  };

  const handleWhatsApp = () => {
    Linking.openURL('whatsapp://send?phone=+573133368670');
  };

  const handleCall = () => {
    Linking.openURL('tel:+573133368670');
  };

  const handleLocation = () => {
    Linking.openURL('https://maps.app.goo.gl/AVEHzZutnQ2TvgLJ9');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Descubre</Text>
      <Text style={styles.subtitle}>NUESTRA UBICACIÓN</Text>

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 4.514986879326891,
            longitude: -74.11649498248194,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={{ latitude: 4.514986879326891, longitude: -74.11649498248194 }}
            title="El Chocontano"
            description="Piqueteadero y Restaurante"
          />
        </MapView>
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={() => handleSocialMediaPress('https://www.instagram.com/elchocontano/')}>
          <Feather name="instagram" size={60} color="#C49B63" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSocialMediaPress('https://www.facebook.com/elchocontano/')}>
          <Feather name="facebook" size={60} color="#C49B63" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleWhatsApp}>
          <FontAwesome name="whatsapp" size={60} color="#C49B63" />
        </TouchableOpacity>
      </View>

      <View style={styles.contactInfoContainer}>
        <TouchableOpacity style={styles.contactItem} onPress={handleWhatsApp}>
          <FontAwesome name="whatsapp" size={24} color="#C49B63" />
          <View style={styles.contactTextContainer}>
            <Text style={styles.contactNumber}>+57 313 336 8670</Text>
            <Text style={styles.contactDescription}>Escribenos y te atenderemos sin compromiso.</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactItem} onPress={handleCall}>
          <Feather name="phone-call" size={24} color="#C49B63" />
          <View style={styles.contactTextContainer}>
            <Text style={styles.contactNumber}>+57 313 336 8670</Text>
            <Text style={styles.contactDescription}>Llamanos elijelo que quieras.</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactItem} onPress={handleLocation}>
          <Feather name="map-pin" size={24} color="#C49B63" />
          <View style={styles.contactTextContainer}>
            <Text style={styles.contactNumber}>Cra 14 # 74 C Sur 17</Text>
            <Text style={styles.contactDescription}>Frente al banco caja social de santa librada.</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.copyright}>
        Copyright ©2024 Todos los derechos reservados, esta plantilla fue desarrollada por @GrupoAlfaCreativos.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D4AF37',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  mapContainer: {
    height: 200,
    marginBottom: 20,
  },
  map: {
    flex: 1,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  contactTextContainer: {
    marginLeft: 15,
  },
  contactText: {
    color: '#D4AF37',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactSubtext: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  copyright: {
    color: '#FFFFFF',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
  },
  contactInfoContainer: {
    padding: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  contactTextContainer: {
    marginLeft: 15,
  },
  contactNumber: {
    color: '#ffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactDescription: {
    color: 'white',
    fontSize: 14,
  },
});
