import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Here you would typically handle the login or registration logic
    console.log(isLogin ? 'Logging in...' : 'Registering...', { username, password, email });
  };

  return (
    <ImageBackground
      source={require('./assets/background-image.jpg')}
      style={styles.background}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.overlay}>
            <Text style={styles.title}>EL CHOCONTANO</Text>
            <Text style={styles.subtitle}>
              {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Usuario"
              placeholderTextColor="#ccc"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              placeholderTextColor="#ccc"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            {!isLogin && (
              <TextInput
                style={styles.input}
                placeholder="Correo Electrónico"
                placeholderTextColor="#ccc"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            )}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>
                {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
              <Text style={styles.switchText}>
                {isLogin
                  ? '¿No tienes una cuenta? Regístrate'
                  : '¿Ya tienes una cuenta? Inicia sesión'}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: '#fff',
  },
  button: {
    backgroundColor: '#D4AF37',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  switchText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default App;