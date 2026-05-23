import { useNavigate, Link } from 'react-router-dom';
import { getCurrentPlayer, logout } from '../services/auth.js';
import { getTeamById } from '../data/teams.js';
import { winPercentage } from '../data/players.js';
import Header from '../components/Header.jsx';
import './Profile.css';

export default function Profile() {
  const player = getCurrentPlayer();
  const team = getTeamById(player.teamId);
  const navigate = useNavigate();
  const winPct = winPercentage(player);

  function handleLogout() {
    logout();
    navigate('/login');
  }

  return (
    <>
      <Header title="Profile" />
      <div className="profile-card">
        <div className="profile-avatar">{player.name.charAt(0)}</div>
        <h2>{player.name}</h2>
        <p className="profile-email">{player.email}</p>
        <div className="profile-team">
          <span className="team-dot" style={{ background: team?.color }} />
          <span>{team?.name}</span>
        </div>
        <p className="profile-division">{player.division}</p>
      </div>

      <div className="stat-grid">
        <div className="stat-box">
          <div className="value">{player.gamesPlayed}</div>
          <div className="label">Games</div>
        </div>
        <div className="stat-box">
          <div className="value">{winPct}%</div>
          <div className="label">Win %</div>
        </div>
      </div>

      <Link to="/stats" className="profile-menu-item card">
        <span>My stats</span>
        <span>→</span>
      </Link>

      <button type="button" className="btn btn-outline profile-logout" onClick={handleLogout}>
        Sign out
      </button>
    </>
  );
}
