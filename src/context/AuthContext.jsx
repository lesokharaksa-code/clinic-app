import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('clinic_user')) || null;
    } catch {
      return null;
    }
  });

  const login = (email, password) => {
    // Accepts any password as long as email matches and password isn't empty
    if (email.trim().toLowerCase() === 'adminstaff@email.com' && password.trim() !== '') {
      const userData = { email: email.trim(), role: 'admin' };
      setUser(userData);
      localStorage.setItem('clinic_user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('clinic_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);