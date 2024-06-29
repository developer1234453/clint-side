import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://serverside-zyo1.onrender.com/signin', { username, password });
      localStorage.setItem('token', response.data.token);
      history.push('/booking');
    } catch (error) {
      alert('Error logging in');
    }
  };

  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Sign In</button>
    </form>
    </div>
  );
};

export default SignIn;