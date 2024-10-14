import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const MenuItem = ({ title, image }) => (
  <View style={styles.menuItem}>
    <Image source={image} style={styles.menuImage} />
    <Text style={styles.menuTitle}>{title}</Text>
  </View>
);

const StatItem = ({ icon, value, label }) => (
  <View style={styles.statItem}>
    <Feather name={icon} size={60} color="#000" />
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const StatItemMaterial = ({ icon, value, label }) => (
  <View style={styles.statItem}>
    <MaterialCommunityIcons name={icon} size={60} color="#000" />
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const Menu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>NUESTRO MENÚ</Text>
        <Text style={styles.subtitle}>
          Te ofrecemos deliciosa comida con los más exquisitos sabores que te dejarán
          sin palabras. Nuestros platos están hechos para descubrirlos
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Escribenos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.outlineButton]}>
            <Text style={[styles.buttonText, styles.outlineButtonText]}>Visitar menú</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Carrusel de elementos del menú */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <MenuItem
          title="Sopa de Cordero"
          image={require('../../assets/menu-sopa.jpg')}
        />
        <MenuItem
          title="Cordero al Horno"
          image={require('../../assets/menu-cordero-asado.jpg')}
        />
        <MenuItem
          title="Plato Mixto"
          image={require('../../assets/menu-mixto.jpg')}
        />
        <MenuItem
          title="Rellena"
          image={require('../../assets/menu-rellena.jpg')}
        />
      </ScrollView>

      {/* Estadísticas */}
      <View style={styles.statsContainer}>
        <StatItemMaterial icon="food-turkey" value="13" label="Cantidad de platos" />
        <StatItem icon="award" value="7" label="Número de premios" />
        <StatItem icon="users" value="10.567" label="Clientes felices" />
        <StatItemMaterial icon="chef-hat" value="27" label="Personal" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#C49B63',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#C49B63',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#C49B63',
  },
  outlineButtonText: {
    color: '#C49B63',
  },
  menuItem: {
    marginRight: 10, // Espaciado entre los elementos del carrusel
    alignItems: 'center',
  },
  menuImage: {
    width: 150, // Ajusta el ancho según tus necesidades
    height: 150, // Ajusta la altura según tus necesidades
    borderRadius: 10, // Esquinas redondeadas
    resizeMode: 'cover',
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: '#C49B63',
    padding: 20,
  },
  statItem: {
    alignItems: 'center',
    width: '48%',
    marginBottom: 20,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
  },
  statLabel: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
});

export default Menu;
