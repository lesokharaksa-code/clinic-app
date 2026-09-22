import React, { useState } from 'react';
import { useToast } from '../context/ToastContext';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const { addToast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Simple validation checks
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a message or inquiry';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      addToast('Please fix the errors in the form before submitting.', 'error');
      return;
    }

    setIsSubmitting(true);

    // Simulate API network request delay
    setTimeout(() => {
      setIsSubmitting(false);
      addToast('Thank you! Your message has been sent successfully.', 'success');
      
      // Reset Form State
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
      });
      setErrors({});
    }, 600);
  };

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", backgroundColor: '#F8FAFC', minHeight: '100vh', padding: '48px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ backgroundColor: '#E6F4F1', color: '#2A9D8F', padding: '4px 12px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase' }}>
            We're Here For You
          </span>
          <h1 style={{ fontSize: '2.25rem', fontWeight: '800', color: '#0F172A', marginTop: '12px', marginBottom: '8px' }}>
            Get in Touch with Caring Hands
          </h1>
          <p style={{ color: '#64748B', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
            Have questions about our medical services, doctors, or appointment scheduling? Send us a message below.
          </p>
        </div>

        {/* Main Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          
          {/* Left Side: Contact Information Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <div style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '16px', border: '1px solid #E2E8F0', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ backgroundColor: '#E6F4F1', padding: '12px', borderRadius: '12px', color: '#2A9D8F' }}>
                <MapPin size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#0F172A', margin: '0 0 4px 0' }}>Clinic Location</h3>
                <p style={{ color: '#64748B', fontSize: '0.9rem', margin: 0, lineHeight: '1.5' }}>
                  #123 Healthcare Blvd, Preah Monivong Blvd,<br />Phnom Penh, Cambodia
                </p>
              </div>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '16px', border: '1px solid #E2E8F0', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ backgroundColor: '#E6F4F1', padding: '12px', borderRadius: '12px', color: '#2A9D8F' }}>
                <Phone size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#0F172A', margin: '0 0 4px 0' }}>Phone & Emergency</h3>
                <p style={{ color: '#64748B', fontSize: '0.9rem', margin: '0 0 4px 0' }}>
                  Hotline: <strong>+855 23 999 888</strong>
                </p>
                <p style={{ color: '#64748B', fontSize: '0.9rem', margin: 0 }}>
                  Reception: <strong>+855 12 345 678</strong>
                </p>
              </div>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '16px', border: '1px solid #E2E8F0', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ backgroundColor: '#E6F4F1', padding: '12px', borderRadius: '12px', color: '#2A9D8F' }}>
                <Clock size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#0F172A', margin: '0 0 4px 0' }}>Working Hours</h3>
                <p style={{ color: '#64748B', fontSize: '0.9rem', margin: '0 0 4px 0' }}>
                  Monday – Friday: 8:00 AM – 5:00 PM
                </p>
                <p style={{ color: '#E11D48', fontSize: '0.85rem', fontWeight: '600', margin: 0 }}>
                  Saturday – Sunday: Closed (Emergency line active)
                </p>
              </div>
            </div>

          </div>

          {/* Right Side: Interactive Form */}
          <div style={{ backgroundColor: '#FFFFFF', padding: '32px', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 16px rgba(0,0,0,0.02)' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#0F172A', marginBottom: '20px' }}>
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              
              {/* Full Name */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sophea Chan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: errors.name ? '1px solid #EF4444' : '1px solid #CBD5E1',
                    fontSize: '0.9rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
                {errors.name && (
                  <span style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '600' }}>
                    <AlertCircle size={12} /> {errors.name}
                  </span>
                )}
              </div>

              {/* Email & Phone Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: errors.email ? '1px solid #EF4444' : '1px solid #CBD5E1',
                      fontSize: '0.9rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                  {errors.email && (
                    <span style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '600' }}>
                      <AlertCircle size={12} /> {errors.email}
                    </span>
                  )}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="012 345 678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.9rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              {/* Subject Dropdown */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                  Subject
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    fontSize: '0.9rem',
                    outline: 'none',
                    backgroundColor: '#FFFFFF',
                    color: '#0F172A',
                    boxSizing: 'border-box',
                    cursor: 'pointer'
                  }}
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Appointment Help">Appointment Help</option>
                  <option value="Doctor Availability">Doctor Availability</option>
                  <option value="Feedback & Support">Feedback & Support</option>
                </select>
              </div>

              {/* Message Textarea */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                  Your Message *
                </label>
                <textarea
                  rows={4}
                  placeholder="How can we assist you today?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: errors.message ? '1px solid #EF4444' : '1px solid #CBD5E1',
                    fontSize: '0.9rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                    resize: 'vertical'
                  }}
                />
                {errors.message && (
                  <span style={{ color: '#EF4444', fontSize: '0.78rem', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '600' }}>
                    <AlertCircle size={12} /> {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  backgroundColor: isSubmitting ? '#94A3B8' : '#2A9D8F',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '12px 20px',
                  borderRadius: '8px',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'background-color 0.2s',
                  marginTop: '8px'
                }}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={16} /> Send Inquiry
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
}