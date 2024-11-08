import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
const MenuItem = ({ name, description, price, image }) => (
    <View style={styles.menuItem}>
        <Image source={image} style={styles.dishImage} />
        <Text style={styles.dishName}>{name}</Text>
        <Text style={styles.dishDescription}>{description}</Text>
        <Text style={styles.dishPrice}>{price}</Text>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.dishBoton} onPress={() => handleAddToCart(name)}>
                <Text style={styles.botonText}>Añadir al carro</Text>
            </TouchableOpacity>
        </View>
    </View>
);
export default function Menu() {
    const [isFontLoaded, setIsFontLoaded] = useState(false);
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
                    name="Sopa De Mute"
                    description="Ingredientes: Menudo, papa, mute y cilantro."
                    price="$34.000"
                    image={require('../../assets/bg_7.jpg')}
                />
                <MenuItem
                    name="Cordero Al Horno"
                    description="Acompañado de arroz, papa salada y ensalada."
                    price="$34.000"
                    image={require('../../assets/bg_6.jpg')}
                />
                <MenuItem
                    name="Chanfaina"
                    description="Acompañado de papa salada, arroz y ensalada."
                    price="$34.000"
                    image={require('../../assets/menu-chanfaina.jpg')}
                />
                <MenuItem
                    name="Cordero Sudado"
                    description="Acompañado de papa salada, arroz y ensalada."
                    price="$34.000"
                    image={require('../../assets/menu-cordero-sudado.jpg')}
                />
                <MenuItem
                    name="Sobrebarriga Al Horno"
                    description="Acompañado de papa salada, arroz y ensalada."
                    price="$34.000"
                    image={require('../../assets/menu-sobrebarriga.jpg')}
                />
                <MenuItem
                    name="Costillas De Cerdo"
                    description=" Acompañado de papa salada, arroz y ensalada"
                    price="$34.000"
                    image={require('../../assets/menu-costillas-de-cerdo.jpg')}
                />
                <MenuItem
                    name="Lengua En Salsa"
                    description=" Acompañado de papa salada, arroz y ensalada"
                    price="$34.000"
                    image={require('../../assets/menu-lengua-en-salsa.jpg')}
                />
                <MenuItem
                    name="Huesos De Cerdo"
                    description=" Acompañado de papa salada, arroz y ensalada"
                    price="$34.000"
                    image={require('../../assets/menu-lengua-en-salsa.jpg')}
                />
                <MenuItem
                    name="Pechuga A la Plancha"
                    description=" Acompañado de papa francesa, arroz y ensalada"
                    price="$34.000"
                    image={require('../../assets/menu-pechuga.jpg')}
                />
                <MenuItem
                    name="Churrasco"
                    description=" Acompañado de papa francesa, arroz y ensalada"
                    price="$34.000"
                    image={require('../../assets/menu-churrasco.jpg')}
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


