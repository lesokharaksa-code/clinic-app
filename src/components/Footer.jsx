import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Phone, Mail, Lock } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0F172A', color: '#94A3B8', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", paddingTop: '48px', paddingBottom: '24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '40px', marginBottom: '40px' }}>
        
        {/* Brand Column */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FFFFFF', fontWeight: '800', fontSize: '1.25rem', marginBottom: '16px' }}>
            <Heart size={24} color="#2A9D8F" fill="#2A9D8F" />
            <span>Caring Hands</span>
          </div>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
            Providing high-quality, patient-centered clinical care and family medicine services across Phnom Penh.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: '700', marginBottom: '16px' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
            <li><Link to="/" style={{ color: '#94A3B8', textDecoration: 'none' }}>Home</Link></li>
            <li><Link to="/services" style={{ color: '#94A3B8', textDecoration: 'none' }}>Medical Services</Link></li>
            <li><Link to="/doctors" style={{ color: '#94A3B8', textDecoration: 'none' }}>Our Physicians</Link></li>
            <li><Link to="/booking" style={{ color: '#94A3B8', textDecoration: 'none' }}>Book Appointment</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: '700', marginBottom: '16px' }}>Contact Clinic</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><MapPin size={16} color="#2A9D8F" /> Monivong Blvd, Phnom Penh</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Phone size={16} color="#2A9D8F" /> +855 23 888 999</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Mail size={16} color="#2A9D8F" /> info@caringhands.com</div>
          </div>
        </div>

      </div>

      {/* Subdued Bottom Copyright Bar */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px 24px 0 24px', borderTop: '1px solid #1E293B', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px', fontSize: '0.8rem' }}>
        <div>
          © {new Date().getFullYear()} Caring Hands Clinic. All rights reserved.
        </div>

        {/* Subtle Staff Portal Link */}
        <Link 
          to="/login" 
          style={{ 
            color: '#64748B', 
            textDecoration: 'none', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '6px',
            transition: 'color 0.2s' 
          }}
          onMouseOver={(e) => e.currentTarget.style.color = '#2A9D8F'}
          onMouseOut={(e) => e.currentTarget.style.color = '#64748B'}
        >
          <Lock size={12} /> Staff Portal Access
        </Link>
      </div>
    </footer>
  );
}