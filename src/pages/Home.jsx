import { Link } from 'react-router-dom';
import { getCurrentPlayer } from '../services/auth.js';
import { getTeamById } from '../data/teams.js';
import { getNextFixtureForTeam } from '../data/fixtures.js';
import { winPercentage } from '../data/players.js';
import FixtureCard from '../components/FixtureCard.jsx';
import Header from '../components/Header.jsx';
import './Home.css';

export default function Home() {
  const player = getCurrentPlayer();
  const team = getTeamById(player.teamId);
  const nextFixture = getNextFixtureForTeam(player.teamId);
  const winPct = winPercentage(player);

  return (
    <>
      <Header title="Home" />
      <section className="home-welcome">
        <p className="welcome-label">Welcome back</p>
        <h2 className="welcome-name">{player.name}</h2>
        <div className="welcome-team">
          <span className="team-dot" style={{ background: team?.color }} />
          <span>{team?.name}</span>
          <span className="welcome-divider">·</span>
          <span>{player.division}</span>
        </div>
      </section>

      {nextFixture && (
        <section className="home-section">
          <h3 className="section-heading">Next fixture</h3>
          <FixtureCard fixture={nextFixture} highlight />
        </section>
      )}

      <div className="stat-grid">
        <div className="stat-box">
          <div className="value">{player.gamesPlayed}</div>
          <div className="label">Games played</div>
        </div>
        <div className="stat-box">
          <div className="value">{winPct}%</div>
          <div className="label">Win rate</div>
        </div>
        <div className="stat-box">
          <div className="value" style={{ color: 'var(--lp-win)' }}>{player.wins}</div>
          <div className="label">Wins</div>
        </div>
        <div className="stat-box">
          <div className="value" style={{ color: 'var(--lp-loss)' }}>{player.losses}</div>
          <div className="label">Losses</div>
        </div>
      </div>

      <nav className="quick-actions" aria-label="Quick links">
        <Link to="/fixtures" className="quick-action">
          <span className="icon">📅</span>
          My Fixtures
        </Link>
        <Link to="/live" className="quick-action">
          <span className="icon">🔴</span>
          Live Scores
        </Link>
        <Link to="/standings" className="quick-action">
          <span className="icon">🏆</span>
          Standings
        </Link>
        <Link to="/streams" className="quick-action">
          <span className="icon">📺</span>
          Watch Streams
        </Link>
      </nav>

      <Link to="/stats" className="home-stats-link card">
        <span className="card-title">Personal stats</span>
        <span className="card-value">View full stats →</span>
      </Link>
    </>
  );
}
