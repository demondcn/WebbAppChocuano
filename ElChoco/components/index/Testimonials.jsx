import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

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
            <Image
                source={require('../../assets/about-1.jpg')}
                style={styles.collage}
            />
            <Image
                source={require('../../assets/about-2.jpg')}
                style={styles.collage}
            />
            <Image
                source={require('../../assets/about-4.jpg')}
                style={styles.collage}
            />
            <Image
                source={require('../../assets/about-3.jpg')}
                style={styles.collage}
            />
            <View style={styles.headerContainer}>
                <Text style={styles.headerSmall}>Testimonios</Text>
                <Text style={styles.headerLarge}>COMENTARIOS CLIENTES</Text>
            </View>
            <Text style={styles.subheader}>
                Déjanos tu comentario, donde prefieras en Google, en nuestras redes sociales o por AQUÍ en nuestra web. Nos encanta tener en cuenta tus opiniones, muchas gracias.
            </Text>
            <ScrollView style={styles.testimonialsList}>
                {testimonials.map((testimonial, index) => (
                    <Testimonial
                        key={index}
                        name={testimonial.name}
                        comment={testimonial.comment}
                        avatar={testimonial.avatar}
                        backgroundColor={colors[index % colors.length]} // Alterna los colores
                    />
                ))}
            </ScrollView>
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
