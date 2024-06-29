import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AppointmentHistory = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://serverside-zyo1.onrender.com/appointments', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setAppointments(response.data);
      } catch (error) {
        alert('Error fetching appointments');
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div>
      <h2>Appointment History</h2>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.id}>{new Date(appointment.date).toLocaleString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentHistory;