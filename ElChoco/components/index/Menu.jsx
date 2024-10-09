import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const MenuItem = ({ title, price, description, image }) => (
  <View style={styles.menuItem}>
    <Image source={image} style={styles.menuImage} />
    <View style={styles.menuInfo}>
      <Text style={styles.menuTitle}>{title}</Text>
      <Text style={styles.menuDescription}>{description}</Text>
      <Text style={styles.menuPrice}>${price}</Text>
    </View>
  </View>
);

const Menu = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Descubre Nuestro Menú</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <MenuItem
          title="Cordero al Horno"
          price="22.000"
          description="Costillas de cordero al horno, pierna de cordero, o brazo de cordero tú decides."
          image={require('../../assets/menu-costillas.jpg')}
        />
        <MenuItem
          title="Cordero sudado"
          price="22.000"
          description="Pierna, espinazo o cola de cordero con un sabor indescriptible."
          image={require('../../assets/menu-cordero-sudado.jpg')}
        />
        <MenuItem
          title="Chanfaina de cordero"
          price="22.000"
          description="Para aquellos que les gusta las Producto tradicionales. Disfrutala"
          image={require('../../assets/menu-chanfaina.jpg')}
        />
        <MenuItem
          title="Costillas de cerdo al horno y sobrebarriga"
          price="28.000"
          description="Plato Mixto Famosas por su sabor crugiente, y su gran tamaño."
          image={require('../../assets/menu-mixto.jpg')}
        />
      </ScrollView>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Visitar Menú Completo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  menuItem: {
    width: 250,
    marginRight: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  menuImage: {
    width: '100%',
    height: 150,
  },
  menuInfo: {
    padding: 15,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  menuPrice: {
    fontSize: 16,
    color: '#c8a97e',
    fontWeight: 'bold',
  },
  menuDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#c8a97e',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Menu;