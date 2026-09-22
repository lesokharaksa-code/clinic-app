import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { 
  CheckCircle, 
  XCircle, 
  Trash2, 
  LogOut, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  AlertCircle,
  Users,
  Search,
  Sparkles
} from 'lucide-react';

const mockAppointments = [
  {
    id: 1700000001,
    patientName: 'Sophea Chan',
    phone: '+855 12 345 678',
    doctor: 'Dr. Sarah Jenkins',
    date: '2026-08-28',
    time: '09:00 AM',
    notes: 'Routine annual physical exam',
    status: 'Pending'
  },
  {
    id: 1700000002,
    patientName: 'Vanna Sok',
    phone: '+855 98 765 432',
    doctor: 'Dr. Robert Chen',
    date: '2026-08-29',
    time: '11:30 AM',
    notes: 'Follow-up regarding blood pressure results',
    status: 'Approved'
  },
  {
    id: 1700000003,
    patientName: 'Dara Heng',
    phone: '+855 77 112 233',
    doctor: 'Dr. Emily Watson',
    date: '2026-08-30',
    time: '02:15 PM',
    notes: 'Child immunization consultation',
    status: 'Pending'
  },
  {
    id: 1700000004,
    patientName: 'Borey Kem',
    phone: '+855 15 998 877',
    doctor: 'Dr. Sarah Jenkins',
    date: '2026-08-31',
    time: '04:00 PM',
    notes: 'Cardiology screening and ECG test',
    status: 'Rejected'
  }
];

export default function Admin() {
  const { user, logout } = useAuth();
  const { addToast } = useToast();
  const [appointments, setAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(data);
  }, []);

  const handleStatusChange = (id, newStatus) => {
    const updated = appointments.map((apt) => 
      apt.id === id ? { ...apt, status: newStatus } : apt
    );
    setAppointments(updated);
    localStorage.setItem('appointments', JSON.stringify(updated));
    addToast(`Appointment status updated to ${newStatus}`, 'success');
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this appointment entry?')) {
      const updated = appointments.filter((apt) => apt.id !== id);
      setAppointments(updated);
      localStorage.setItem('appointments', JSON.stringify(updated));
      addToast('Appointment removed from record', 'error');
    }
  };

  const handleSeedData = () => {
    setAppointments(mockAppointments);
    localStorage.setItem('appointments', JSON.stringify(mockAppointments));
    addToast('Demo appointments restored successfully!', 'success');
  };

  // Option 2: Smart Dual-Mode Matching Logic
  const filteredAppointments = appointments.filter((apt) => {
    const query = searchTerm.toLowerCase().trim();
    const cleanQuery = query.replace(/[^0-9]/g, '');

    const patientName = (apt.patientName || '').toLowerCase();
    const doctorName = (apt.doctor || '').toLowerCase();

    // Standard digit cleanup (e.g., "+855 12 345 678" -> "85512345678")
    let rawPhone = (apt.phone || '').replace(/[^0-9]/g, '');

    // Convert +855 to local 0 prefix (e.g., 85512345678 -> 012345678) for local prefix checks
    const localPhone = rawPhone.startsWith('855') ? '0' + rawPhone.slice(3) : rawPhone;

    const matchesName = patientName.includes(query);
    const matchesDoctor = doctorName.includes(query);

    // Phone matches IF cleanQuery exists AND matches the START or END (ignoring random middle digits)
    const matchesPhone = cleanQuery !== '' && (
      localPhone.startsWith(cleanQuery) || 
      rawPhone.startsWith(cleanQuery) || 
      rawPhone.endsWith(cleanQuery)
    );

    const matchesSearch = matchesName || matchesDoctor || matchesPhone;
    const matchesStatus = statusFilter === 'All' || apt.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const total = appointments.length;
  const pending = appointments.filter((a) => a.status === 'Pending').length;
  const approved = appointments.filter((a) => a.status === 'Approved').length;

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", backgroundColor: '#F8FAFC', minHeight: '100vh', padding: '32px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', backgroundColor: '#FFFFFF', padding: '20px 24px', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
          <div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0F172A', margin: '0 0 4px 0' }}>Clinic Management Portal</h1>
            <p style={{ color: '#64748B', fontSize: '0.875rem', margin: 0 }}>Logged in as: <strong>{user?.email}</strong></p>
          </div>
          
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={handleSeedData}
              style={{ backgroundColor: '#E6F4F1', color: '#2A9D8F', border: '1px solid #2A9D8F', padding: '8px 14px', borderRadius: '8px', fontWeight: '700', fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <Sparkles size={14} /> Seed Demo Data
            </button>
            <button
              onClick={logout}
              style={{ backgroundColor: '#F1F5F9', color: '#0F172A', border: '1px solid #CBD5E1', padding: '8px 16px', borderRadius: '8px', fontWeight: '700', fontSize: '0.875rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>

        {/* Metrics Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '32px' }}>
          <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', padding: '20px', borderRadius: '12px' }}>
            <span style={{ color: '#64748B', fontSize: '0.85rem', fontWeight: '700' }}>TOTAL REQUESTS</span>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#0F172A', margin: '8px 0 0 0' }}>{total}</h2>
          </div>
          <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', padding: '20px', borderRadius: '12px' }}>
            <span style={{ color: '#D97706', fontSize: '0.85rem', fontWeight: '700' }}>PENDING ACTION</span>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#D97706', margin: '8px 0 0 0' }}>{pending}</h2>
          </div>
          <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', padding: '20px', borderRadius: '12px' }}>
            <span style={{ color: '#2A9D8F', fontSize: '0.85rem', fontWeight: '700' }}>APPROVED</span>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#2A9D8F', margin: '8px 0 0 0' }}>{approved}</h2>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid #E2E8F0', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Users size={20} color="#2A9D8F" />
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#0F172A', margin: 0 }}>Appointment Requests</h3>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', flex: '1', justifyContent: 'flex-end', maxWidth: '500px' }}>
              <div style={{ position: 'relative', flex: '1', minWidth: '200px' }}>
                <Search size={16} color="#64748B" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="text"
                  placeholder="Search patient, phone, doctor..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ width: '100%', padding: '8px 12px 8px 36px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.875rem', outline: 'none', boxSizing: 'border-box' }}
                />
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.875rem', backgroundColor: '#FFFFFF', color: '#0F172A', outline: 'none', cursor: 'pointer' }}
              >
                <option value="All">All Statuses</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>

          {/* Table Area */}
          {filteredAppointments.length === 0 ? (
            <div style={{ padding: '48px', textAlign: 'center', color: '#64748B' }}>
              <AlertCircle size={32} style={{ marginBottom: '12px', color: '#94A3B8' }} />
              <p style={{ margin: '0 0 16px 0', fontWeight: '600' }}>No matching appointment records found.</p>
              <button
                onClick={handleSeedData}
                style={{ backgroundColor: '#2A9D8F', color: '#FFF', border: 'none', padding: '8px 16px', borderRadius: '8px', fontWeight: '700', cursor: 'pointer', fontSize: '0.85rem' }}
              >
                Load Sample Data
              </button>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0', color: '#475569' }}>
                    <th style={{ padding: '14px 20px', fontWeight: '700' }}>Patient Info</th>
                    <th style={{ padding: '14px 20px', fontWeight: '700' }}>Doctor & Schedule</th>
                    <th style={{ padding: '14px 20px', fontWeight: '700' }}>Reason</th>
                    <th style={{ padding: '14px 20px', fontWeight: '700' }}>Status</th>
                    <th style={{ padding: '14px 20px', fontWeight: '700', textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAppointments.map((apt) => (
                    <tr key={apt.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                      <td style={{ padding: '16px 20px' }}>
                        <div style={{ fontWeight: '700', color: '#0F172A', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <User size={14} color="#64748B" /> {apt.patientName}
                        </div>
                        <div style={{ color: '#64748B', fontSize: '0.8rem', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Phone size={12} color="#64748B" /> {apt.phone}
                        </div>
                      </td>

                      <td style={{ padding: '16px 20px' }}>
                        <div style={{ fontWeight: '700', color: '#2A9D8F' }}>{apt.doctor}</div>
                        <div style={{ color: '#64748B', fontSize: '0.8rem', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span><Calendar size={12} /> {apt.date}</span>
                          <span><Clock size={12} /> {apt.time}</span>
                        </div>
                      </td>

                      <td style={{ padding: '16px 20px', color: '#475569', maxWidth: '200px' }}>
                        {apt.notes ? apt.notes : <span style={{ color: '#94A3B8' }}>None provided</span>}
                      </td>

                      <td style={{ padding: '16px 20px' }}>
                        <span style={{ 
                          backgroundColor: apt.status === 'Approved' ? '#E6F4F1' : apt.status === 'Rejected' ? '#FEE2E2' : '#FEF3C7',
                          color: apt.status === 'Approved' ? '#2A9D8F' : apt.status === 'Rejected' ? '#991B1B' : '#D97706',
                          padding: '4px 10px',
                          borderRadius: '12px',
                          fontSize: '0.75rem',
                          fontWeight: '700'
                        }}>
                          {apt.status}
                        </span>
                      </td>

                      <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                          {apt.status !== 'Approved' && (
                            <button
                              onClick={() => handleStatusChange(apt.id, 'Approved')}
                              title="Approve"
                              style={{ backgroundColor: '#E6F4F1', color: '#2A9D8F', border: 'none', padding: '6px', borderRadius: '6px', cursor: 'pointer' }}
                            >
                              <CheckCircle size={16} />
                            </button>
                          )}
                          {apt.status !== 'Rejected' && (
                            <button
                              onClick={() => handleStatusChange(apt.id, 'Rejected')}
                              title="Reject"
                              style={{ backgroundColor: '#FEF2F2', color: '#EF4444', border: 'none', padding: '6px', borderRadius: '6px', cursor: 'pointer' }}
                            >
                              <XCircle size={16} />
                            </button>
                          )}
                          <button
                            onClick={() => handleDelete(apt.id)}
                            title="Delete"
                            style={{ backgroundColor: '#F1F5F9', color: '#64748B', border: 'none', padding: '6px', borderRadius: '6px', cursor: 'pointer' }}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}