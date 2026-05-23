import { getCurrentPlayer } from '../services/auth.js';
import { winPercentage } from '../data/players.js';
import Header from '../components/Header.jsx';

export default function Stats() {
  const player = getCurrentPlayer();
  const winPct = winPercentage(player);

  return (
    <>
      <Header title="My Stats" showBack />
      <p className="page-subtitle">{player.name}</p>

      <div className="stat-grid">
        <div className="stat-box">
          <div className="value">{player.gamesPlayed}</div>
          <div className="label">Matches played</div>
        </div>
        <div className="stat-box">
          <div className="value">{winPct}%</div>
          <div className="label">Win %</div>
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

      <div className="card">
        <div className="card-title">Sets</div>
        <div className="card-value">
          {player.setsWon} won · {player.setsLost} lost
        </div>
        <p style={{ fontSize: '0.75rem', color: 'var(--lp-text-muted)', marginTop: '0.35rem' }}>
          Detailed set tracking coming with live scoring
        </p>
      </div>

      <div className="card">
        <div className="card-title">MVP points</div>
        <div className="card-value">{player.mvpPoints} pts</div>
        <p style={{ fontSize: '0.75rem', color: 'var(--lp-text-muted)', marginTop: '0.35rem' }}>
          MVP leaderboard coming soon
        </p>
      </div>
    </>
  );
}
