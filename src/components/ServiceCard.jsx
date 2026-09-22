import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ServiceCard({ title, icon: Icon, description, features, category }) {
  const navigate = useNavigate();

  return (
    <div 
      style={{ 
        backgroundColor: '#FFFFFF', 
        border: '1px solid #E2E8F0', 
        borderRadius: '16px', 
        padding: '24px', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between',
        boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
        transition: 'transform 0.2s, box-shadow 0.2s'
      }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div style={{ backgroundColor: '#E6F4F1', color: '#2A9D8F', padding: '12px', borderRadius: '12px' }}>
            {Icon && <Icon size={24} />}
          </div>
          <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#64748B', backgroundColor: '#F1F5F9', padding: '4px 10px', borderRadius: '12px', textTransform: 'uppercase' }}>
            {category}
          </span>
        </div>

        <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0F172A', marginBottom: '8px' }}>{title}</h3>
        <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '16px' }}>{description}</p>

        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {features.map((feat, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#334155' }}>
              <CheckCircle2 size={14} color="#2A9D8F" /> {feat}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => navigate('/booking')}
        style={{
          width: '100%',
          backgroundColor: '#F8FAFC',
          color: '#0F172A',
          border: '1px solid #CBD5E1',
          padding: '10px 16px',
          borderRadius: '8px',
          fontWeight: '700',
          fontSize: '0.875rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          transition: 'all 0.2s'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#2A9D8F';
          e.currentTarget.style.color = '#FFFFFF';
          e.currentTarget.style.borderColor = '#2A9D8F';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#F8FAFC';
          e.currentTarget.style.color = '#0F172A';
          e.currentTarget.style.borderColor = '#CBD5E1';
        }}
      >
        Book This Service <ArrowRight size={16} />
      </button>
    </div>
  );
}