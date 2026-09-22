import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav style={{ backgroundColor: '#2A9D8F', padding: '16px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#FFFFFF', textDecoration: 'none', fontWeight: '800', fontSize: '1.25rem' }}>
        <Heart size={24} fill="#FFFFFF" />
        <span>Caring Hands Clinic</span>
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <Link to="/" style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem' }}>Home</Link>
        <Link to="/services" style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem' }}>Services</Link>
        <Link to="/doctors" style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem' }}>Doctors</Link>
        <Link to="/contact" style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem' }}>Contact</Link>
        
        <button 
          onClick={() => navigate('/booking')}
          style={{ backgroundColor: '#FFFFFF', color: '#2A9D8F', border: 'none', padding: '8px 18px', borderRadius: '8px', fontWeight: '700', fontSize: '0.9rem', cursor: 'pointer' }}
        >
          Book Now
        </button>
      </div>
    </nav>
  );
}