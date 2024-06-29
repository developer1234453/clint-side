import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://serverside-zyo1.onrender.com/signup', { username, password });
      alert('User registered successfully!');
    } catch (error) {
      alert('Error registering user');
    }
  };

  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Sign Up</button>
    </form>
    </div>
  );
};

export default SignUp;