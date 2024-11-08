import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import * as Font from 'expo-font';
const MenuItem = ({ name, description, price, image }) => (
    <View style={styles.menuItem}>
        <Image source={image} style={styles.dishImage} />
        <Text style={styles.dishName}>{name}</Text>
        <Text style={styles.dishDescription}>{description}</Text>
        <Text style={styles.dishPrice}>{price}</Text>
    </View>
);

export default function BestSellingDishes() {
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
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Descubre</Text>
            <Text style={styles.subtitle}>LOS PLATOS MÁS VENDIDOS</Text>
            <Text style={styles.description}>
                Famosos por su sabor con un estilo tradicional que te harán sentir en casa.
            </Text>
            <MenuItem
                name="CORDERO AL HORNO"
                description="Costillas de cordero, Pierna de cordero, Brazo de cordero"
                price="$34.000"
                image={require('../../assets/menu-costillas.jpg')}
            />
            <MenuItem
                name="CHANFAINA"
                description="Para aquellos que les gustan los productos tradicionales. Ven y disfrútala."
                price="$34.000"
                image={require('../../assets/menu-chanfaina.jpg')}
            />
            <MenuItem
                name="COSTILLAS DE CERDO"
                description="Famoso por su sabor crujiente ya que son hechas al horno, esto les da un toque extra"
                price="$34.000"
                image={require('../../assets/menu-costillas-de-cerdo.jpg')}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        padding: 16,
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
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 24,
    },
    menuItem: {
        marginBottom: 24,
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
    },
    dishPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#D4AF37',
    },
});
