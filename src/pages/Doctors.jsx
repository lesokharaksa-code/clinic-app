import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, Stethoscope, Clock, CalendarCheck } from 'lucide-react';

const doctorsList = [
  {
    id: 1,
    name: 'Dr. Sarah Jenkins',
    title: 'Senior General Physician',
    department: 'General Practice',
    experience: '13+ Years Experience',
    qualification: 'MD, MBBS (Monash University)',
    schedule: 'Mon - Fri (08:00 AM - 04:00 PM)',
    specialties: ['Routine Checkups', 'Preventive Care', 'Chronic Disease Mgmt']
  },
  {
    id: 2,
    name: 'Dr. Robert Chen',
    title: 'Consultant Cardiologist',
    department: 'Cardiology',
    experience: '15+ Years Experience',
    qualification: 'MD, FACC (Harvard Medical)',
    schedule: 'Mon - Thu (09:00 AM - 03:00 PM)',
    specialties: ['ECG Evaluation', 'Hypertension', 'Heart Screening']
  },
  {
    id: 3,
    name: 'Dr. Emily Watson',
    title: 'Lead Pediatric Specialist',
    department: 'Pediatrics',
    experience: '10+ Years Experience',
    qualification: 'MD, DCH (University of Sydney)',
    schedule: 'Tue - Sat (08:30 AM - 04:30 PM)',
    specialties: ['Child Immunization', 'Growth Tracking', 'Pediatric Care']
  }
];

export default function Doctors() {
  const navigate = useNavigate();

  const handleBookDoctor = (doctorName) => {
    navigate('/booking', { state: { doctorName } });
  };

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", backgroundColor: '#F8FAFC', minHeight: '100vh', padding: '48px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ backgroundColor: '#E6F4F1', color: '#2A9D8F', padding: '4px 12px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase' }}>
            Medical Team
          </span>
          <h1 style={{ fontSize: '2.25rem', fontWeight: '800', color: '#0F172A', marginTop: '8px', marginBottom: '8px' }}>
            Our Medical Specialists
          </h1>
          <p style={{ color: '#64748B', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
            Consult with experienced, board-certified healthcare professionals dedicated to your well-being.
          </p>
        </div>

        {/* Doctor Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', alignItems: 'stretch' }}>
          {doctorsList.map((doc) => (
            <div
              key={doc.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
            >
              {/* Content Wrapper */}
              <div>
                {/* Header Badge Row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', gap: '8px' }}>
                  <div style={{ backgroundColor: '#E6F4F1', padding: '6px 12px', borderRadius: '10px', color: '#2A9D8F', display: 'inline-flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' }}>
                    <Stethoscope size={18} style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.85rem', fontWeight: '700' }}>{doc.department}</span>
                  </div>
                  <span style={{ color: '#64748B', fontSize: '0.78rem', fontWeight: '600', backgroundColor: '#F1F5F9', padding: '4px 10px', borderRadius: '12px', whiteSpace: 'nowrap' }}>
                    {doc.experience}
                  </span>
                </div>

                {/* Doctor Name & Title */}
                <h2 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#0F172A', margin: '0 0 4px 0' }}>
                  {doc.name}
                </h2>
                <p style={{ color: '#2A9D8F', fontWeight: '700', fontSize: '0.9rem', margin: '0 0 16px 0' }}>
                  {doc.title}
                </p>

                {/* Information List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px', borderTop: '1px solid #F1F5F9', paddingTop: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#475569', fontSize: '0.85rem' }}>
                    <Award size={16} color="#64748B" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Qualification:</strong> {doc.qualification}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#475569', fontSize: '0.85rem' }}>
                    <Clock size={16} color="#64748B" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Schedule:</strong> {doc.schedule}</span>
                  </div>
                </div>

                {/* Specialties Tags */}
                <div style={{ marginBottom: '24px' }}>
                  <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Specializations
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {doc.specialties.map((spec, i) => (
                      <span
                        key={i}
                        style={{
                          backgroundColor: '#F8FAFC',
                          color: '#334155',
                          border: '1px solid #E2E8F0',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '0.8rem',
                          fontWeight: '600'
                        }}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button - Always Anchored to Bottom */}
              <button
                onClick={() => handleBookDoctor(doc.name)}
                style={{
                  width: '100%',
                  backgroundColor: '#2A9D8F',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '12px',
                  borderRadius: '10px',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'background-color 0.15s'
                }}
              >
                <CalendarCheck size={16} /> Schedule Consultation
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}