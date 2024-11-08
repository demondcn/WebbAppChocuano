import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import * as Font from 'expo-font';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
const Testimonial = ({ name, comment, avatar, backgroundColor }) => (
    <View style={[styles.testimonialItem, { backgroundColor }]}>
        <Image source={avatar} style={styles.avatar} />
        <View style={styles.testimonialContent}>
            <Text style={styles.comment}>{comment}</Text>
            <Text style={styles.name}>{name}</Text>
        </View>
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
                <Text style={styles.headerSmall}>Descubre</Text>
                <Text style={styles.headerLarge}>NUESTRA HISTORIA</Text>
            </View>
            <Image
                source={require('../../assets/about-2.jpg')}
                style={styles.collage}
            />
            <Text style={styles.subheader}>
            </Text>
            <Text style={styles.subheader}>
                El Restaurante 'El Chocontano' es un punto de referencia en la comunidad local, conocido por su ambiente acogedor y su cocina tradicional. Fundado en 1975 por la familia Guevara Rincón, el restaurante ha sido un pilar en la vida social y gastronómica de la zona durante casi cinco décadas.
            </Text>
            <Text style={styles.subheader}>
                Fundación y Primeros Años (1975 - 1995)
            </Text>
            <Text style={styles.subheader}>
                1975: Fundación del Restaurante
            </Text>
            <Text style={styles.subheader}>
                Fundadores: Rosa Tulia Rincón de Guevara y Mariano Guevara Robayo.
            </Text>
            <Text style={styles.subheader}>
                Ubicación: Cra 14 # 74 c 17 Sur – Santa Librada – Bogotá D.C.
            </Text>
            <Text style={styles.subheader}>
                Concepto: Inspirado en las recetas tradicionales de la abuela, el restaurante abrió sus puertas con un menú centrado en platos especiales, en su mayoría preparados con cordero.
            </Text>
            <Text style={styles.subheader}>
                Decoración: Inicialmente, el restaurante operaba en el primer piso, con una cocina que usaba carbón. Después de 30 años, se trasladó al segundo piso, con una decoración rústica que evocaba la calidez del hogar familiar, con muebles de madera.
            </Text>
            <Text style={styles.subheader}>
                Compromiso con la Sostenibilidad y Reapertura (1999 - 2006)
            </Text>
            <Text style={styles.subheader}>
                1999: Compromiso con la Sostenibilidad
            </Text>
            <Text style={styles.subheader}>
                Se introdujeron prácticas sostenibles, como el uso de ingredientes locales y orgánicos, apoyando a los productores de la región y fomentando un enfoque más ecológico en su operativa.
            </Text>
            <Text style={styles.subheader}>
                2006: Reapertura y Nuevas Iniciativas
            </Text>
            <Text style={styles.subheader}>
                Se lanzó una serie de platos especiales, que fueron muy bien recibidos por los clientes, otorgándole mayor firmeza y popularidad al restaurante.
            </Text>
            <Text style={styles.subheader}>
                Adaptación a los Cambios Tecnológicos y la Pandemia (2020 - 2023)
            </Text>
            <Text style={styles.subheader}>
                2020: Adaptación a la Pandemia
            </Text>
            <Text style={styles.subheader}>
                En respuesta a la pandemia de COVID-19, el restaurante implementó medidas de seguridad adicionales, como el servicio a domicilio y la opción de comida para llevar. A pesar de los desafíos, casi estuvo a punto de cerrar, pero las medidas tomadas lo mantuvieron en funcionamiento.
            </Text>
            <Text style={styles.subheader}>
                También se mejoró la ventilación y se aplicaron protocolos de distanciamiento social para garantizar la seguridad de los clientes y del personal.
            </Text>
            <Text style={styles.subheader}>
                2022: Adopción de Tecnología
            </Text>
            <Text style={styles.subheader}>
                Se implementaron sistemas de pedidos para llevar a través de una plataforma web, adaptándose a las nuevas demandas tecnológicas y mejorando la comodidad para los clientes.
            </Text>
            <Text style={styles.subheader}>
                2023: Innovación Continua
            </Text>
            <Text style={styles.subheader}>
                Se reforzó la adopción tecnológica, con un enfoque en mejorar la experiencia del cliente mediante soluciones tecnológicas, facilitando la gestión de pedidos.
            </Text>
            <Text style={styles.subheader}>
                Presente y Futuro (2024 y más allá)
            </Text>
            <Text style={styles.subheader}>
                2024: Planes para el Futuro
            </Text>
            <Text style={styles.subheader}>
                Se está planeando la introducción de una WEBAPP que permita gestionar las opciones para pedidos y compras, incluyendo un menú de temporada.
            </Text>

            <View style={styles.statsContainer}>
                <StatItemMaterial icon="food-turkey" value="13" label="Cantidad de platos" />
                <StatItem icon="award" value="7" label="Número de premios" />
                <StatItem icon="users" value="10.567" label="Clientes felices" />
                <StatItemMaterial icon="chef-hat" value="27" label="Personal" />
            </View>
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
