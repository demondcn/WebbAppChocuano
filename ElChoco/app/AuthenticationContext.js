import React, { createContext, useState, useContext } from 'react';

// Crea el contexto de autenticación
export const AuthContext = createContext();

// Componente proveedor para el contexto de autenticación
export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false); // Establece el estado de autenticación

  const login = () => setIsLogged(true); // Función para cambiar el estado de autenticación
  const logout = () => setIsLogged(false); // Función para cerrar sesión

  return (
    <AuthContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook para usar el contexto de autenticación
export const useAuth = () => useContext(AuthContext);
