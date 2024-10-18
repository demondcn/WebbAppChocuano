import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Nave({ navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('MENÚ');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuPress = (item) => {
    setActiveMenuItem(item);
    setMenuOpen(false);
    if (item === 'MENÚ') {
      navigation.navigate('Menu');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/naveImage.jpg')}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
          <Feather name="menu" size={30} color="#FFF" />
          <Text style={styles.menuButtonText}>MENU</Text>
        </TouchableOpacity>
      </View>

      {menuOpen && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuPress('INICIO')}>
            <Text style={[styles.menuItemText, activeMenuItem === 'INICIO' && styles.activeMenuItemText]}>
              INICIO
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuPress('MENÚ')}>
            <Text style={[styles.menuItemText, activeMenuItem === 'MENÚ' && styles.activeMenuItemText]}>
              MENÚ
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuPress('SERVICIOS')}>
            <Text style={[styles.menuItemText, activeMenuItem === 'SERVICIOS' && styles.activeMenuItemText]}>
              SERVICIOS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuPress('HISTORIA')}>
            <Text style={[styles.menuItemText, activeMenuItem === 'HISTORIA' && styles.activeMenuItemText]}>
              HISTORIA
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuPress('CONTACTANOS')}>
            <Text style={[styles.menuItemText, activeMenuItem === 'CONTACTANOS' && styles.activeMenuItemText]}>
              CONTACTANOS
            </Text>
          </TouchableOpacity>

          {/* Cart Item */}
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.cartContainer}>
              <Feather name="shopping-cart" size={24} color="#D4AF37" />
              <Text style={styles.cartCount}>0</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoImage: {
    width: 200,
    height: 50,
  },
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  menuButtonText: {
    color: '#FFF',
    fontSize: 16,
    marginLeft: 8,
  },
  menu: {
    padding: 10,
  },
  menuItem: {
    paddingVertical: 10,
  },
  menuItemText: {
    color: '#fff',
    fontSize: 18,
  },
  activeMenuItemText: {
    color: '#C49B63',
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  cartCount: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 5,
  },
});
