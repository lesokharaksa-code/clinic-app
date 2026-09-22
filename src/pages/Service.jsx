import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { Stethoscope, Heart, Baby, Activity, ShieldCheck, Microchip } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    title: 'General Consultation',
    category: 'Primary Care',
    icon: Stethoscope,
    description: 'Comprehensive health checkups, preventive screenings, and routine medical advice for all family members.',
    features: ['Blood Pressure Check', 'Full Physical Exam', 'Prescription Management']
  },
  {
    id: 2,
    title: 'Cardiology Support',
    category: 'Specialist Care',
    icon: Heart,
    description: 'Diagnostic ECG scans and cardiovascular health evaluations to maintain long-term heart wellness.',
    features: ['ECG Diagnostics', 'Cholesterol Screening', 'Heart Risk Assessment']
  },
  {
    id: 3,
    title: 'Pediatric Care',
    category: 'Family Health',
    icon: Baby,
    description: 'Dedicated healthcare services tailored specifically for infants, children, and young adolescents.',
    features: ['Child Immunization', 'Growth Tracking', 'Seasonal Allergy Care']
  },
  {
    id: 4,
    title: 'Routine Health Diagnostics',
    category: 'Laboratory',
    icon: Activity,
    description: 'Fast, accurate clinical laboratory tests for routine monitoring and disease prevention.',
    features: ['Complete Blood Count', 'Diabetes Screening', 'Urinalysis Tests']
  },
  {
    id: 5,
    title: 'Preventive Wellness Plans',
    category: 'Wellness',
    icon: ShieldCheck,
    description: 'Customized wellness programs designed to help patients build healthy lifestyle habits.',
    features: ['Nutritional Guidance', 'Lifestyle Coaching', 'Annual Health Audits']
  },
  {
    id: 6,
    title: 'Advanced Medical Imaging',
    category: 'Diagnostics',
    icon: Microchip,
    description: 'Modern non-invasive diagnostic imaging support for quick and accurate medical evaluations.',
    features: ['Ultrasound Imaging', 'X-Ray Diagnostics', 'Digital Health Records']
  }
];

export default function Service() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", backgroundColor: '#F8FAFC', minHeight: '100vh', padding: '48px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ backgroundColor: '#E6F4F1', color: '#2A9D8F', padding: '4px 12px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase' }}>
            Clinical Excellence
          </span>
          <h1 style={{ fontSize: '2.25rem', fontWeight: '800', color: '#0F172A', marginTop: '8px', marginBottom: '8px' }}>
            Our Medical Services
          </h1>
          <p style={{ color: '#64748B', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
            Explore our specialized clinical care services designed to support you and your family at every stage of life.
          </p>
        </div>

        {/* Services Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {servicesData.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

      </div>
    </div>
  );
}