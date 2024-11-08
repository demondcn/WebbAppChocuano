import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import * as Font from 'expo-font';
const Testimonial = ({ name, comment, avatar, backgroundColor }) => (
    <View style={[styles.testimonialItem, { backgroundColor }]}>
        <Image source={avatar} style={styles.avatar} />
        <View style={styles.testimonialContent}>
            <Text style={styles.comment}>{comment}</Text>
            <Text style={styles.name}>{name}</Text>
        </View>
    </View>
);

export default function Testimonials() {
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
    const testimonials = [
        {
            name: "FABIO LEONARDO CIFUENTES VILLALOBOS",
            comment: "Carne de cordero garantizada, la atención buena en general y precios cómodos.",
            avatar: require('../../assets/fabioExample.jpg'),
        },
        {
            name: "NICOLÁS SÁNCHEZ",
            comment: "Buenos productos tuvieron mucho más de lo que esperaba.",
            avatar: require('../../assets/nicolasExample.jpg'),
        },
        {
            name: "LADY VIVIANA GUTIÉRREZ SANABRIA",
            comment: "Es un restaurante de tradición, ofrecen platos deliciosos, uno de los más típicos es la chanfaina.",
            avatar: require('../../assets/Ladyexample.jpg'),
        },
        {
            name: "GUSTAVO ADOLFO GÓMEZ ARIZA",
            comment: "La comida es muy rica el sitio no tan agradable pero no feo, es un restaurante muy tradicional.",
            avatar: require('../../assets/gustaboexample.jpg'),
        },
        {
            name: "MARTHA MORENO",
            comment: "Uno de los mejores Restaurantes de esta localidad, platos son típicamente exquisitos. Lo recomiendo a ojo cerrado no se van a arrepentir.",
            avatar: require('../../assets/marthaexample.jpg'),
        },
    ];

    const colors = ['#C49B63', '#9E7E50']; // Define los dos colores alternos

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerLarge}>ALQUILER DEL SALÓN PARA TODO TIPO DE EVENTOS</Text>
            </View>
            <Text style={styles.subheader}>
                Te ayudamos a organizar toda clase de reuniones especiales. Con la comida que prefieras.
            </Text>
            <Image
                source={require('../../assets/blog-fiestas-familiares.jpg')}
                style={styles.collage}
            />
            <Image
                source={require('../../assets/blog-karaoque.jpg')}
                style={styles.collage}
            />
            <Image
                source={require('../../assets/blog-50años2.jpg')}
                style={styles.collage}
            />
            <Image
                source={require('../../assets/blog-boda.jpg')}
                style={styles.collage}
            />
            <View style={styles.headerContainer}>
                <Text style={styles.headerLarge}>DE LUNES A VIERNES</Text>
                <Text style={styles.headerLarge}>ALMUERZO</Text>
                <Text style={styles.headerLarge}>CORRIENTE</Text>
            </View>
            <Text style={styles.subheader}>
                Solo entre semana te ofrecemos gran variedad de ingredientes, cada día hay nuevos ingredientes.
            </Text>
            <Image
                source={require('../../assets/service.jpg')}
                style={styles.collage}
            />
            <Image
                source={require('../../assets/service2.jpg')}
                style={styles.collage}
            />
            <View style={styles.headerContainer}>
                <Text style={styles.headerLarge}>EN LA TARDES</Text>
                <Text style={styles.headerLarge}>AREPAS CLASUDAS</Text>
            </View>
            <Text style={styles.subheader}>
                Después de las 4:00pm ven y disfruta de arepas rellenas de lo que desees. Con todos los ingredientes sabe mejor. Y con una Coca-Cola bien fría, mejor dicho ni se diga.
            </Text>
            <Image
                source={require('../../assets/menu-arepas-rellenas4.jpg')}
                style={styles.collage}
            />
            <Image
                source={require('../../assets/menu-arepas-rellenas3.jpg')}
                style={styles.collage}
            />
            <Image
                source={require('../../assets/menu-arepas-rellenas.jpg')}
                style={styles.collage}
            />
            <Image
                source={require('../../assets/menu-arepas-rellenas2.jpg')}
                style={styles.collage}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    collage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    headerContainer: {
        padding: 20,
        backgroundColor: '#000000',
    },
    headerSmall: {
        fontSize: 18,
        color: '#D4AF37',
        textAlign: 'center',
        fontStyle: 'static',
        fontFamily: 'GreatVibes-Regular',
    },
    headerLarge: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    subheader: {
        fontSize: 14,
        color: '#FFFFFF',
        textAlign: 'center',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    testimonialsList: {
        flex: 1,
        backgroundColor: '#C49B63',
    },
    testimonialItem: {
        flexDirection: 'row',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#C49B63',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    testimonialContent: {
        flex: 1,
    },
    comment: {
        fontSize: 14,
        color: '#000000',
        marginBottom: 5,
    },
    name: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000000',
    },
});
