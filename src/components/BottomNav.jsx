import { NavLink } from 'react-router-dom';
import './BottomNav.css';

const tabs = [
  { to: '/home', label: 'Home', icon: '🏠' },
  { to: '/fixtures', label: 'Fixtures', icon: '📅' },
  { to: '/live', label: 'Live', icon: '🔴' },
  { to: '/standings', label: 'Table', icon: '🏆' },
  { to: '/profile', label: 'Profile', icon: '👤' },
];

export default function BottomNav({ dark = false }) {
  return (
    <nav className={`bottom-nav${dark ? ' bottom-nav--dark' : ''}`} aria-label="Main navigation">
      {tabs.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          className={({ isActive }) => `bottom-nav-item${isActive ? ' active' : ''}`}
        >
          <span className="nav-icon" aria-hidden="true">{tab.icon}</span>
          <span className="nav-label">{tab.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
