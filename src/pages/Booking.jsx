import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useToast } from '../context/ToastContext';
import { Calendar, Clock, User, Phone, FileText, AlertCircle, CheckCircle } from 'lucide-react';

const availableDoctors = [
  'Dr. Sarah Jenkins (General Physician)',
  'Dr. Robert Chen (Cardiologist)',
  'Dr. Emily Watson (Pediatrician)'
];

const timeSlots = [
  '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
];

export default function Booking() {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToast } = useToast();

  // Get Today's Date in YYYY-MM-DD
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    doctor: location.state?.doctorName || availableDoctors[0],
    date: todayStr,
    time: timeSlots[0],
    notes: ''
  });

  const [dateError, setDateError] = useState('');
  const [existingBookings, setExistingBookings] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('appointments')) || [];
    setExistingBookings(saved);
  }, []);

  // Validate Selected Date (No Past Dates & No Weekends)
  const handleDateChange = (e) => {
    const selectedDateStr = e.target.value;
    setFormData((prev) => ({ ...prev, date: selectedDateStr }));

    if (!selectedDateStr) return;

    const selectedDate = new Date(selectedDateStr + 'T00:00:00');
    const dayOfWeek = selectedDate.getDay(); // 0 = Sunday, 6 = Saturday

    if (selectedDateStr < todayStr) {
      setDateError('Cannot select a date in the past.');
    } else if (dayOfWeek === 0 || dayOfWeek === 6) {
      setDateError('Our clinic is closed on weekends (Sat/Sun). Please choose a weekday.');
    } else {
      setDateError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (dateError) {
      addToast(dateError, 'error');
      return;
    }

    // Check for Time Slot Collision with Same Doctor
    const isSlotTaken = existingBookings.some((apt) => 
      apt.doctor === formData.doctor &&
      apt.date === formData.date &&
      apt.time === formData.time &&
      apt.status !== 'Rejected'
    );

    if (isSlotTaken) {
      addToast(`${formData.doctor} is already booked for ${formData.time} on this date. Please pick another time or doctor.`, 'error');
      return;
    }

    const newAppointment = {
      id: Date.now(),
      ...formData,
      status: 'Pending'
    };

    const updated = [newAppointment, ...existingBookings];
    localStorage.setItem('appointments', JSON.stringify(updated));

    addToast('Appointment requested successfully!', 'success');
    navigate('/admin');
  };

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", backgroundColor: '#F8FAFC', minHeight: '100vh', padding: '48px 24px' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', backgroundColor: '#FFFFFF', padding: '36px', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{ backgroundColor: '#E6F4F1', color: '#2A9D8F', padding: '4px 12px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase' }}>
            Seamless Care
          </span>
          <h1 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#0F172A', marginTop: '8px', marginBottom: '8px' }}>
            Book an Appointment
          </h1>
          <p style={{ color: '#64748B', fontSize: '0.9rem', margin: 0 }}>
            Fill out the details below to schedule your consultation with our specialists.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Patient Name */}
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
              Full Name *
            </label>
            <div style={{ position: 'relative' }}>
              <User size={18} color="#64748B" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                required
                placeholder="e.g. Sophea Chan"
                value={formData.patientName}
                onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                style={{ width: '100%', padding: '10px 12px 10px 40px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
              Phone Number *
            </label>
            <div style={{ position: 'relative' }}>
              <Phone size={18} color="#64748B" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="tel"
                required
                placeholder="012 345 678"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{ width: '100%', padding: '10px 12px 10px 40px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
          </div>

          {/* Doctor Selection */}
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
              Select Doctor *
            </label>
            <select
              value={formData.doctor}
              onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem', outline: 'none', backgroundColor: '#FFF', color: '#0F172A', cursor: 'pointer' }}
            >
              {availableDoctors.map((doc, idx) => (
                <option key={idx} value={doc}>{doc}</option>
              ))}
            </select>
          </div>

          {/* Date Picker & Error Warning */}
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
              Appointment Date (Weekdays Only) *
            </label>
            <div style={{ position: 'relative' }}>
              <Calendar size={18} color="#64748B" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="date"
                min={todayStr}
                required
                value={formData.date}
                onChange={handleDateChange}
                style={{ width: '100%', padding: '10px 12px 10px 40px', borderRadius: '8px', border: dateError ? '1px solid #EF4444' : '1px solid #CBD5E1', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
            {dateError && (
              <div style={{ color: '#DC2626', fontSize: '0.8rem', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '600' }}>
                <AlertCircle size={14} /> {dateError}
              </div>
            )}
          </div>

          {/* Time Slot Selector */}
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
              Preferred Time Slot *
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
              {timeSlots.map((slot) => {
                const isSelected = formData.time === slot;
                return (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setFormData({ ...formData, time: slot })}
                    style={{
                      padding: '8px 4px',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      border: isSelected ? '2px solid #2A9D8F' : '1px solid #CBD5E1',
                      backgroundColor: isSelected ? '#E6F4F1' : '#FFFFFF',
                      color: isSelected ? '#2A9D8F' : '#334155',
                      cursor: 'pointer',
                      transition: 'all 0.15s'
                    }}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Reason / Notes */}
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
              Symptoms or Reason for Visit
            </label>
            <div style={{ position: 'relative' }}>
              <FileText size={18} color="#64748B" style={{ position: 'absolute', left: '12px', top: '14px' }} />
              <textarea
                rows={3}
                placeholder="Briefly describe your symptoms..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                style={{ width: '100%', padding: '10px 12px 10px 40px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box', resize: 'vertical' }}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!!dateError}
            style={{
              backgroundColor: dateError ? '#94A3B8' : '#2A9D8F',
              color: '#FFFFFF',
              border: 'none',
              padding: '12px',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '0.95rem',
              cursor: dateError ? 'not-allowed' : 'pointer',
              marginTop: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'background-color 0.2s'
            }}
          >
            <CheckCircle size={18} /> Confirm Appointment Booking
          </button>

        </form>
      </div>
    </div>
  );
}