import { useNavigate } from 'react-router-dom';
import { LogoMark } from './Logo.jsx';
import './Header.css';

export default function Header({ title, showBack = false }) {
  const navigate = useNavigate();

  return (
    <header className="app-header">
      {showBack ? (
        <button type="button" className="header-back" onClick={() => navigate(-1)} aria-label="Go back">
          ←
        </button>
      ) : (
        <div className="header-logo">
          <LogoMark />
        </div>
      )}
      <h1 className="header-title">{title}</h1>
      <div className="header-spacer" />
    </header>
  );
}
