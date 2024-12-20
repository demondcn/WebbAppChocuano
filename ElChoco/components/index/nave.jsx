import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { NavigationContext } from '../../App/NavigationContext';
import { doc, getDoc } from 'firebase/firestore';
import { db, auth } from '../../firebase-config';
export default function Nave({ navigation }) {
  const { activeMenuItem, setActiveMenuItem } = useContext(NavigationContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartModalVisible, setCartModalVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  // Función para obtener el carrito de Firestore
  const fetchCartItems = async (userId) => {
    try {
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        setCartItems(userData.cartItems || []); // Asegúrate de que el carrito esté inicializado
        console.log("Carrito del usuario:", userData.cartItems);
      } else {
        console.log("No se encontró el documento del usuario.");
      }
    } catch (error) {
      console.error("Error al obtener el carrito:", error);
    }
  };
    // Obtener el carrito al inicio
    useEffect(() => {
      const user = auth.currentUser;
      if (user) {
        fetchCartItems(user.uid); // Obtener el carrito si hay un usuario autenticado
      }
    }, []); // Solo se ejecuta una vez cuando el componente se monta
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleCartModal = () => setCartModalVisible(!cartModalVisible);

  const handleMenuPress = (item) => {
    if (item !== activeMenuItem) {
      setActiveMenuItem(item);
      setMenuOpen(false);
      if (item === 'INICIO') navigation.navigate('Home');
      if (item === 'MENÚ') navigation.navigate('Menu');
      if (item === 'SERVICIOS') navigation.navigate('Servicios');
      if (item === 'HISTORIA') navigation.navigate('Historia');
      if (item === 'CONTACTANOS') navigation.navigate('Contactos');
      if (item === 'LOGIN') navigation.navigate('LoginRegister');
    }
  };

  const CartPreview = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={cartModalVisible}
      onRequestClose={toggleCartModal}
    >
      <TouchableOpacity 
        style={styles.modalOverlay} 
        activeOpacity={1} 
        onPress={toggleCartModal}
      >
        <View style={styles.cartPreviewContainer}>
          <View style={styles.cartHeader}>
            <Text style={styles.cartTitle}>Carrito de Compras</Text>
            <TouchableOpacity onPress={toggleCartModal}>
              <Feather name="x" size={24} color="#FFF" />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.cartItemsList}>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <View key={item.id} style={styles.cartItem}>
                  <View style={styles.cartItemInfo}>
                    <Text style={styles.cartItemName}>{item.name}</Text>
                    <Text style={styles.cartItemQuantity}>Cantidad: {item.quantity}</Text>
                  </View>
                  <Text style={styles.cartItemPrice}>
                    ${(item.price * item.quantity).toLocaleString()}
                  </Text>
                </View>
              ))
            ) : (
              <Text style={styles.emptyCartText}>El carrito está vacío.</Text>
            )}
          </ScrollView>

          <View style={styles.cartFooter}>
            <Text style={styles.totalText}>Total: ${totalPrice.toLocaleString()}</Text>
            <TouchableOpacity 
              style={styles.checkoutButton}
              onPress={() => {
                setActiveMenuItem('CARRITO');
                toggleCartModal();
                navigation.navigate('Carrito');
              }}
            >
              <Text style={styles.checkoutButtonText}>Proceder a pagar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );

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
        <View style={styles.headerRight}>
          <TouchableOpacity 
            style={styles.cartButton} 
            onPress={toggleCartModal}
          >
             <Feather 
              name="shopping-cart" 
              size={24} 
              color={activeMenuItem === 'CARRITO' ? '#C49B63' : '#FFF'} 
            />
            {cartCount > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>{cartCount}</Text>
              </View>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
            <Feather name="menu" size={30} color="#FFF" />
            <Text style={styles.menuButtonText}>MENU</Text>
          </TouchableOpacity>
        </View>
      </View>

      {menuOpen && (
        <View style={styles.menu}>
          {['INICIO', 'MENÚ', 'SERVICIOS', 'HISTORIA', 'CONTACTANOS', 'LOGIN'].map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.menuItem}
              onPress={() => handleMenuPress(item)}
              disabled={item === activeMenuItem}
            >
              <Text style={[
                styles.menuItemText,
                item === activeMenuItem && styles.activeMenuItemText
              ]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <CartPreview />
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
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
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
    fontWeight: 'bold',
  },
  cartButton: {
    position: 'relative',
    padding: 8,
  },
  cartBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#C49B63',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
  },
  cartPreviewContainer: {
    backgroundColor: '#000',
    marginTop: 60,
    marginHorizontal: 20,
    borderRadius: 8,
    maxHeight: '80%',
    borderWidth: 1,
    borderColor: '#C49B63',
  },
  cartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#C49B63',
  },
  cartTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartItemsList: {
    padding: 15,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(196, 155, 99, 0.2)',
  },
  cartItemInfo: {
    flex: 1,
  },
  cartItemName: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: 4,
  },
  cartItemQuantity: {
    color: '#C49B63',
    fontSize: 14,
  },
  cartItemPrice: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartFooter: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#C49B63',
  },
  totalText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: '#C49B63',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});