import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import * as Font from 'expo-font';
import { useAuth } from '../../App/AuthenticationContext';
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import { db, auth } from '../../firebase-config';

const MenuItem = ({ id, name, description, price, image, handleAddToCart }) => (
    <View style={styles.menuItem}>
        <Image source={image} style={styles.dishImage} />
        <Text style={styles.dishName}>{name}</Text>
        <Text style={styles.dishDescription}>{description}</Text>
        <Text style={styles.dishPrice}>{price}</Text>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.dishBoton} onPress={() => handleAddToCart(id, name, price)}>
                <Text style={styles.botonText}>Añadir al carro</Text>
            </TouchableOpacity>
        </View>
    </View>
);
export default function Menu() {
    const [isFontLoaded, setIsFontLoaded] = useState(false);
    const { isLogged } = useAuth();
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = async (id, name, price) => {
        if (!isLogged) {
            Alert.alert("No estás autenticado", "Por favor, inicia sesión para agregar items al carrito.");
        } else {
            // Validar que el ID no sea undefined ni vacío
            if (!id || id === undefined) {
                Alert.alert("Error", "El ID del producto no es válido.");
                return;
            }

            const existingItemIndex = cartItems.findIndex(item => item.id === id);

            let updatedCart;
            if (existingItemIndex !== -1) {
                updatedCart = [...cartItems];
                updatedCart[existingItemIndex].quantity += 1;
                setCartItems(updatedCart);
                Alert.alert("Cantidad actualizada", `${name} ahora tiene ${updatedCart[existingItemIndex].quantity} en tu carrito.`);
            } else {
                const newItem = {
                    id: id,
                    name: name,
                    price: price,
                    quantity: 1,
                };
                updatedCart = [...cartItems, newItem];
                setCartItems(updatedCart);
                Alert.alert("Item añadido", `${name} ha sido añadido a tu carrito.`);
            }

            // Filtrar valores undefined o no válidos en el carrito antes de guardarlo
            const validCartItems = updatedCart.filter(item => item && item.id && item.name && item.price);

            // Asegurarse de que validCartItems no esté vacío
            if (validCartItems.length > 0) {
                // Guardar el carrito en Firestore solo si es válido
                const user = auth.currentUser;
                if (user) {
                    const userRef = doc(db, 'users', user.uid);
                    try {
                        await updateDoc(userRef, {
                            cartItems: validCartItems
                        });
                    } catch (error) {
                        console.error("Error al actualizar Firestore:", error);
                    }
                }
            } else {
                console.warn("No se puede guardar un carrito vacío o con valores no válidos.");
                console.log("cartItems antes de actualizar Firestore:", updatedCart);
            }
        }
    };



    useEffect(() => {
        const loadFonts = async () => {
            await Font.loadAsync({
                'GreatVibes-Regular': require('../../assets/fonts/GreatVibes-Regular.ttf'), // Asegúrate de ajustar la ruta a donde esté tu archivo de fuente
            });
            setIsFontLoaded(true);
        };

        loadFonts();
    }, []);

    if (!isFontLoaded) {
        return null; // O un componente de carga si prefieres
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.Descubre}>Descubre</Text>
                <Text style={styles.title}>NUESTRO MENÚ</Text>
                <Text style={styles.subtitle}>
                    Disfruta de nuestros
                    sensacionales platos,
                    escoge el que mas te
                    guste. Ten cuidado te
                    puedes enamorar.
                </Text>
            </View>
            {/* Carrusel de elementos del menú */}
            <ScrollView style={styles.container}>
                <MenuItem
                    id={1}
                    name="Sopa De Mute"
                    description="Ingredientes: Menudo, papa, mute y cilantro."
                    price={34000}
                    image={require('../../assets/bg_7.jpg')}
                    handleAddToCart={handleAddToCart}
                />
                <MenuItem
                    id={2}
                    name="Cordero Al Horno"
                    description="Acompañado de arroz, papa salada y ensalada."
                    price={34000}
                    image={require('../../assets/bg_6.jpg')}
                    handleAddToCart={handleAddToCart}
                />
                <MenuItem
                    id={3}
                    name="Chanfaina"
                    description="Acompañado de papa salada, arroz y ensalada."
                    price={34000}
                    image={require('../../assets/menu-chanfaina.jpg')}
                    handleAddToCart={handleAddToCart}
                />
                <MenuItem
                    id={4}
                    name="Cordero Sudado"
                    description="Acompañado de papa salada, arroz y ensalada."
                    price={34000}
                    image={require('../../assets/menu-cordero-sudado.jpg')}
                    handleAddToCart={handleAddToCart}
                />
                <MenuItem
                    id={5}
                    name="Sobrebarriga Al Horno"
                    description="Acompañado de papa salada, arroz y ensalada."
                    price={34000}
                    image={require('../../assets/menu-sobrebarriga.jpg')}
                    handleAddToCart={handleAddToCart}
                />
                <MenuItem
                    id={6}
                    name="Costillas De Cerdo"
                    description=" Acompañado de papa salada, arroz y ensalada"
                    price={34000}
                    image={require('../../assets/menu-costillas-de-cerdo.jpg')}
                    handleAddToCart={handleAddToCart}
                />
                <MenuItem
                    id={7}
                    name="Lengua En Salsa"
                    description=" Acompañado de papa salada, arroz y ensalada"
                    price={34000}
                    image={require('../../assets/menu-lengua-en-salsa.jpg')}
                    handleAddToCart={handleAddToCart}
                />
                <MenuItem
                    id={8}
                    name="Huesos De Cerdo"
                    description=" Acompañado de papa salada, arroz y ensalada"
                    price={34000}
                    image={require('../../assets/menu-lengua-en-salsa.jpg')}
                    handleAddToCart={handleAddToCart}
                />
                <MenuItem
                    id={9}
                    name="Pechuga A la Plancha"
                    description=" Acompañado de papa francesa, arroz y ensalada"
                    price={34000}
                    image={require('../../assets/menu-pechuga.jpg')}
                    handleAddToCart={handleAddToCart}
                />
                <MenuItem
                    id={10}
                    name="Churrasco"
                    description=" Acompañado de papa francesa, arroz y ensalada"
                    price={34000}
                    image={require('../../assets/menu-churrasco.jpg')}
                    handleAddToCart={handleAddToCart}
                />

            </ScrollView>
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 20,
    },
    menuItem: {
        padding: 16,
        backgroundColor: '#1E1E1E',  // Fondo oscuro para resaltar elementos
        borderRadius: 8,
        marginBottom: 16,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        alignItems: 'center',
    },
    Descubre: {
        color: '#C49B63',
        fontSize: 24,
        fontStyle: 'static',
        fontFamily: 'GreatVibes-Regular',
        marginBottom: 10,
    },
    dishImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        marginBottom: 8,
    },
    dishName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 4,
    },
    dishDescription: {
        fontSize: 14,
        color: '#FFFFFF',
        marginBottom: 4,
        textAlign: 'center',
    },
    dishPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#D4AF37',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dishBoton: {
        backgroundColor: '#C49B63',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginRight: 10,
        alignItems: 'center',
    },
    botonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});


