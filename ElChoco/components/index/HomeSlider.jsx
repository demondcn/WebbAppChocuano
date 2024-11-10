import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Linking, Animated } from 'react-native';
import * as Font from 'expo-font'; // Importanos la fuente Great Vibes
import * as SplashScreen from 'expo-splash-screen'; // Importa expo-splash-screen
import { Feather, FontAwesome } from '@expo/vector-icons';
const { width } = Dimensions.get('window');
import { useAuth } from '../../App/AuthenticationContext'; // Asegúrate de la ruta correcta
const images = [
  { uri: require('../../assets/bg_5.jpg') },
  { uri: require('../../assets/bg_6.jpg') },
  { uri: require('../../assets/bg_7.jpg') },
];
const titles = [
  "UN LUGAR DE TRADICIÓN Y MUCHO SABOR",
  "ASOMBROSOS PLATOS & GRAN AMBIENTE FAMILIAR",
  "Quedate en casa \n nosotros te lo llevamos",
];

const descriptions = [
  "Te invitamos a disfrutar en familia o junto a esa persona que más amas, compartiendo una gran variedad de platos gigantes.",
  "Contamos con una gran variedad de platos gigantes, medianos y pequeños para toda la familia, todos preparados con mucho amor.",
  "Atendidos por sus propietarios, estamos dispuestos a complacer todos sus antojos. Somos pioneros y líderes en nuestra sección de platos derivados del cordero.",
];
export default function WelcomeCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFontLoaded, setIsFontLoaded] = useState(false); // Estado para la carga de fuente
  const scrollViewRef = useRef(null);
  const opacity = useRef(new Animated.Value(1)).current;
  const { isLogged } = useAuth();
  useEffect(() => {
    // Función para cargar fuentes
    const loadFonts = async () => {
      await SplashScreen.preventAutoHideAsync(); // Prevenir que la pantalla de carga se oculte
      await Font.loadAsync({
        'GreatVibes-Regular': require('../../assets/fonts/GreatVibes-Regular.ttf'), // Ruta a tu fuente
      });
      setIsFontLoaded(true);
      await SplashScreen.hideAsync(); // Oculta la pantalla de carga
    };

    loadFonts(); // Llama a la función para cargar fuentes

    const interval = setInterval(() => {
      // Desvanecer la imagen actual
      Animated.timing(opacity, {
        toValue: 0, // Cambiar a opacidad 0
        duration: 500, // Duración del desvanecimiento
        useNativeDriver: true,
      }).start(() => {
        // Cambiar el índice activo después de desvanecer
        if (activeIndex === images.length - 1) {
          setActiveIndex(0);
          scrollViewRef.current.scrollTo({ x: 0, animated: false });
        } else {
          setActiveIndex(activeIndex + 1);
          scrollViewRef.current.scrollTo({ x: width * (activeIndex + 1), animated: false });
        }

        // Volver a mostrar la imagen
        Animated.timing(opacity, {
          toValue: 1, // Cambiar de nuevo a opacidad 1
          duration: 500, // Duración del desvanecimiento
          useNativeDriver: true,
        }).start();
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const index = Math.round(contentOffset.x / width);
    setActiveIndex(index);
  };

  const handleWhatsApp = () => {
    Linking.openURL('whatsapp://send?phone=+573133368670');
  };

  const handleCall = () => {
    Linking.openURL('tel:+573133368670');
  };

  const handleLocation = () => {
    Linking.openURL('https://maps.app.goo.gl/AVEHzZutnQ2TvgLJ9');
  };
  const handleVisitMenu = () => {
    console.log('Estado de isLogged:', isLogged);
    // Aquí puedes realizar otras acciones basadas en el estado de isLogged
  };
  if (!isFontLoaded) {
    return null; // No muestres nada hasta que las fuentes estén cargadas
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.carouselContainer}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {images.map((image, index) => (
            <View key={index} style={styles.slide}>
              <Animated.Image
                source={image.uri}
                style={[styles.image, { opacity }]} // Aplicar opacidad animada
              />
              <View style={styles.overlay}>
                <Text style={styles.welcomeText}>Bienvenidos</Text>
                <Text style={styles.titleText}>{titles[activeIndex]}</Text>
                <Text style={styles.descriptionText}>{descriptions[activeIndex]}</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.menuButton} onPress={handleVisitMenu}>
                    <Text style={styles.menuButtonText}>Visitar menú</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.contactButton}>
                    <Text style={styles.contactButtonText}>Escribenos</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
        <View style={styles.pagination}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[styles.paginationDot, index === activeIndex ? styles.paginationDotActive : null]}
            />
          ))}
        </View>
      </View>
      <View style={styles.contactInfoContainer}>
        <TouchableOpacity style={styles.contactItem} onPress={handleWhatsApp}>
          <FontAwesome name="whatsapp" size={24} color="#C49B63" />
          <View style={styles.contactTextContainer}>
            <Text style={styles.contactNumber}>+57 313 336 8670</Text>
            <Text style={styles.contactDescription}>Escribenos y te atenderemos sin compromiso.</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactItem} onPress={handleCall}>
          <Feather name="phone-call" size={24} color="#C49B63" />
          <View style={styles.contactTextContainer}>
            <Text style={styles.contactNumber}>+57 313 336 8670</Text>
            <Text style={styles.contactDescription}>Llamanos elijelo que quieras.</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactItem} onPress={handleLocation}>
          <Feather name="map-pin" size={24} color="#C49B63" />
          <View style={styles.contactTextContainer}>
            <Text style={styles.contactNumber}>Cra 14 # 74 C Sur 17</Text>
            <Text style={styles.contactDescription}>Frente al banco caja social de santa librada.</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  carouselContainer: {
    height: 400,
  },
  slide: {
    width,
    height: 400,
  },
  image: {
    width: '100%',
    height: '150%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    color: '#C49B63',
    fontSize: 24,
    fontStyle: 'static',
    fontFamily: 'GreatVibes-Regular',
    marginBottom: 10,
  },
  titleText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  descriptionText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  menuButton: {
    backgroundColor: '#C49B63',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 30,
    borderWidth: 1,
    borderColor: 'white',
  },
  menuButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  contactButton: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: 20,
    borderColor: 'white',
  },
  contactButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 5,
  },
  paginationDotActive: {
    backgroundColor: '#C49B63',
    width: 20,
  },
  contactInfoContainer: {
    padding: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  contactTextContainer: {
    marginLeft: 15,
  },
  contactNumber: {
    color: '#ffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactDescription: {
    color: 'white',
    fontSize: 14,
  },
});
