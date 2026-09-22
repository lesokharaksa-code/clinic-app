import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import Service from './pages/Service';
import Doctors from './pages/Doctors';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Login from './pages/Login';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function MainLayout() {
  const location = useLocation();
  const isAuthOrAdmin = location.pathname === '/login' || location.pathname.startsWith('/admin');

  return (
    <>
      {!isAuthOrAdmin && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } 
        />
      </Routes>
      {!isAuthOrAdmin && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <BrowserRouter>
          <MainLayout />
        </BrowserRouter>
      </ToastProvider>
    </AuthProvider>
  );
}