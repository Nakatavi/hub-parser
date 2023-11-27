import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        // Retrieve isAuthenticated value from localStorage or set it to false
        return JSON.parse(localStorage.getItem('isAuthenticated')) || false;
      });

      useEffect(() => {
        // Save isAuthenticated to localStorage whenever it changes
        localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
      }, [isAuthenticated]);
    
      const login = () => {
        setIsAuthenticated(true);
      };
    
      const logout = () => {
        setIsAuthenticated(false);
      };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
