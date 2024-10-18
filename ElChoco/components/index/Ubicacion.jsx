import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Font from 'expo-font';

export default function LocationContact() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
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
    color: '#D4AF37',
    textAlign: 'center',
    fontStyle: 'static',
    fontFamily: 'GreatVibes-Regular',
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
