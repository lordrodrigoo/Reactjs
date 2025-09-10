import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../reducer/userSlice';
import logo from '../logo.svg';
import { Footer } from './Footer';

export default function Login() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username.trim() !== '') {
      dispatch(login(username));
      setUsername(''); // Clean input
    } else {
      alert('Digite seu nome para logar');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '60px' }}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: '8px', fontSize: '16px', marginRight: '10px' }}
      />
      <button
        onClick={handleLogin}
        style={{ padding: '8px 16px', fontSize: '16px' }}
      >
        Login
      </button>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Footer />
    </div>
  );
}