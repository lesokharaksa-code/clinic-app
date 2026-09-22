import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Stethoscope, 
  ShieldCheck, 
  Clock, 
  Users, 
  ArrowRight, 
  Heart, 
  Activity, 
  Building2 
} from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  const servicesSummary = [
    {
      title: "General Consultation",
      desc: "Comprehensive health evaluations, routine check-ups, and long-term preventive care planning for adults.",
      icon: <Stethoscope size={24} color="#2A9D8F" />
    },
    {
      title: "Pediatric Care",
      desc: "Gentle and specialized healthcare services for infants, children, and adolescents, including developmental tracking.",
      icon: <Heart size={24} color="#2A9D8F" />
    },
    {
      title: "Laboratory Diagnostics",
      desc: "On-site blood tests, screenings, and diagnostic panels delivered with accurate and timely results.",
      icon: <Activity size={24} color="#2A9D8F" />
    }
  ];

  const highlights = [
    {
      title: "Experienced Doctors",
      desc: "Board-certified general practitioners and specialists dedicated to patient safety.",
      icon: <Users size={20} color="#2A9D8F" />
    },
    {
      title: "Modern Facility",
      desc: "Clean, equipped, and comfortable environment designed for swift care delivery.",
      icon: <Building2 size={20} color="#2A9D8F" />
    },
    {
      title: "Convenient Hours",
      desc: "Open Monday through Saturday with online appointment scheduling available.",
      icon: <Clock size={20} color="#2A9D8F" />
    },
    {
      title: "Patient-Centered",
      desc: "Clear communication in Khmer, English, and French tailored to family needs.",
      icon: <ShieldCheck size={20} color="#2A9D8F" />
    }
  ];

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", color: '#0F172A', backgroundColor: '#FFFFFF' }}>
      
      {/* Hero Section */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '48px', alignItems: 'center' }}>
        <div>
          <span style={{ 
            backgroundColor: '#E6F4F1', 
            color: '#2A9D8F', 
            padding: '6px 14px', 
            borderRadius: '20px', 
            fontSize: '0.8rem', 
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.03em'
          }}>
            Trusted Primary Healthcare
          </span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '800', margin: '16px 0', lineHeight: '1.25', color: '#0F172A' }}>
            Compassionate & Professional Care For Your Whole Family
          </h1>
          <p style={{ color: '#64748B', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '32px' }}>
            Providing high-quality general medicine, pediatrics, dental care, and lab diagnostics in a modern, patient-first facility in Phnom Penh.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => navigate('/booking')}
              style={{
                backgroundColor: '#2A9D8F',
                color: '#FFFFFF',
                border: 'none',
                padding: '14px 28px',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'background 0.2s'
              }}
              onMouseOver={(e) => e.target.style.background = '#238377'}
              onMouseOut={(e) => e.target.style.background = '#2A9D8F'}
            >
              <Calendar size={18} /> Schedule Appointment
            </button>
            <button 
              onClick={() => navigate('/services')}
              style={{
                backgroundColor: '#FFFFFF',
                color: '#0F172A',
                border: '1px solid #CBD5E1',
                padding: '14px 24px',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              View Services <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Hero Banner Graphic */}
        <div style={{ position: 'relative' }}>
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
            alt="Clinic Facility" 
            style={{ 
              width: '100%', 
              borderRadius: '20px', 
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
              objectFit: 'cover',
              maxHeight: '420px'
            }}
          />
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', padding: '48px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          {highlights.map((item, index) => (
            <div key={index} style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
              <div style={{ backgroundColor: '#E6F4F1', width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '700', margin: '0 0 8px 0', color: '#0F172A' }}>{item.title}</h3>
              <p style={{ color: '#64748B', fontSize: '0.875rem', lineHeight: '1.5', margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ backgroundColor: '#E6F4F1', color: '#2A9D8F', padding: '6px 14px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase' }}>
            Medical Offerings
          </span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginTop: '12px', marginBottom: '12px' }}>
            Comprehensive Health Services
          </h2>
          <p style={{ color: '#64748B', fontSize: '1rem', maxWidth: '580px', margin: '0 auto' }}>
            Our medical staff is equipped to deliver general and specialized consultations to ensure your ongoing health.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {servicesSummary.map((service, index) => (
            <div 
              key={index} 
              style={{ 
                border: '1px solid #E2E8F0', 
                borderRadius: '16px', 
                padding: '32px', 
                backgroundColor: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ backgroundColor: '#E6F4F1', width: '48px', height: '48px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px', color: '#0F172A' }}>
                  {service.title}
                </h3>
                <p style={{ color: '#64748B', fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '24px' }}>
                  {service.desc}
                </p>
              </div>
              <button 
                onClick={() => navigate('/services')}
                style={{ 
                  backgroundColor: 'transparent', 
                  color: '#2A9D8F', 
                  border: 'none', 
                  fontWeight: '700', 
                  fontSize: '0.9rem', 
                  padding: 0, 
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                Learn More <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}