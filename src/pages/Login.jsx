import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { login, isAuthenticated } from '../services/auth.js';
import { players } from '../data/players.js';
import { LogoFull } from '../components/Logo.jsx';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  if (isAuthenticated()) {
    return <Navigate to="/home" replace />;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    const result = login(email);
    if (result.ok) {
      navigate('/home');
    } else {
      setError(result.error);
    }
  }

  return (
    <div className="login-page">
      <div className="login-brand">
        <LogoFull />
        <p className="login-tagline">Player app — fixtures, live scores & standings</p>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />
        {error && <p className="login-error">{error}</p>}
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>

      <div className="login-demo">
        <p className="login-demo-title">Demo accounts</p>
        <ul>
          {players.slice(0, 4).map((p) => (
            <li key={p.id}>
              <button type="button" onClick={() => setEmail(p.email)}>
                {p.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
