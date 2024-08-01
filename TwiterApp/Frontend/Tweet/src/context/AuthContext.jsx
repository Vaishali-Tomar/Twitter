import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, register, logout, getCurrentUser } from '../services/authService';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const response = await login(email, password);
      setUser(response.data.user);
      navigate('/');
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleRegister = async (email, password, name) => {
    try {
      const response = await register(email, password, name);
      setUser(response.data.user);
      navigate('/');
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  const handleLogout = () => {
    logout();
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleRegister, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
