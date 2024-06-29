import React, { useState } from 'react';
import axios from 'axios';

const Booking = () => {
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('https://serverside-zyo1.onrender.com/appointments', { date }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Appointment booked successfully!');
    } catch (error) {
      alert('Error booking appointment');
    }
  };

  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
      <h2 className='heading'>Book Appointment</h2>
      <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} />
      <button type="submit" className='buttonhead'>Book</button>

    </form>
    </div>
  );
};

export default Booking;












