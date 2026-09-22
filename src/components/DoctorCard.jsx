import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, GraduationCap } from 'lucide-react';

export default function DoctorCard({ doc }) {
  const navigate = useNavigate();

  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #E2E8F0',
        borderRadius: '16px',
        padding: '24px',
        backgroundColor: '#FFFFFF',
        boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
        justify: 'space-between'
      }}
    >
      <div>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', alignItems: 'center' }}>
          <img 
            src={doc.image} 
            alt={doc.name} 
            style={{ 
              width: '110px', 
              height: '140px', 
              objectFit: 'cover', 
              borderRadius: '12px',
              border: '1px solid #CBD5E1',
              flexShrink: 0
            }}
          />
          <div>
            <span style={{ backgroundColor: '#F1F5F9', color: '#334155', fontSize: '0.75rem', fontWeight: '700', padding: '3px 8px', borderRadius: '4px' }}>
              {doc.experience}
            </span>
            <h2 style={{ fontSize: '1.4rem', fontWeight: '800', margin: '6px 0 2px 0', color: '#0F172A' }}>
              {doc.name}
            </h2>
            <p style={{ color: '#2A9D8F', fontWeight: '700', fontSize: '0.9rem', margin: '0 0 8px 0' }}>
              {doc.role}
            </p>
            <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
              🗣 Languages: <strong>{doc.languages.join(', ')}</strong>
            </div>
          </div>
        </div>

        <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: '1.6', margin: '0 0 20px 0' }}>
          {doc.bio}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid #F1F5F9', paddingTop: '14px', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#475569' }}>
            <GraduationCap size={16} color="#2A9D8F" />
            <strong>Qualifications:</strong> {doc.qualifications}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#475569' }}>
            <Clock size={16} color="#2A9D8F" />
            <strong>Schedule:</strong> {doc.availability}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '20px' }}>
          {doc.specialties.map((spec, i) => (
            <span key={i} style={{ backgroundColor: '#E6F4F1', color: '#2A9D8F', fontSize: '0.75rem', fontWeight: '700', padding: '4px 10px', borderRadius: '20px' }}>
              {spec}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={() => navigate('/booking', { state: { selectedDoctor: doc.name } })}
        style={{
          backgroundColor: '#2A9D8F',
          color: '#FFF',
          border: 'none',
          padding: '12px',
          borderRadius: '8px',
          fontWeight: '700',
          fontSize: '0.9rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          width: '100%',
          transition: 'background 0.2s'
        }}
        onMouseOver={(e) => e.currentTarget.style.background = '#238377'}
        onMouseOut={(e) => e.currentTarget.style.background = '#2A9D8F'}
      >
        <Calendar size={16} /> Book Appointment with {doc.name}
      </button>
    </div>
  );
}